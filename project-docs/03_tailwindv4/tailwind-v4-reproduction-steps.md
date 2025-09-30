# Tailwind v4.1.13 問題再現手順書

## 問題: v4.1.13で最小構成でも64KB、修正後も43KB

## 完全再現可能な手順

### 1. クリーン環境での正常動作確認（4KB）
```bash
# 新規ディレクトリで実行
cd /tmp
rm -rf tw-test-clean
mkdir tw-test-clean
cd tw-test-clean

# パッケージ初期化とインストール
npm init -y
npm install tailwindcss@4.1.13 @tailwindcss/cli@4.1.13

# 最小ファイル作成
echo '@import "tailwindcss";' > test.css
echo '<div class="text-red-500">test</div>' > test.html

# ビルド実行
npx @tailwindcss/cli -i test.css -o output.css --minify

# サイズ確認
ls -lh output.css
# 期待結果: 4.0KB ✅
```

### 2. 問題プロジェクトでの再現（64KB）
```bash
# プロジェクトディレクトリ
cd '/Users/nishimototakashi/claude code/tutor-lp'

# 最小構成でビルド
echo '@import "tailwindcss";' > test-simple.css
npx @tailwindcss/cli -i test-simple.css -o test-simple-output.css --minify

# サイズ確認
ls -lh test-simple-output.css
# 結果: 64KB ❌（期待値の16倍）
```

### 3. 原因調査 - デバッグログ
```bash
# デバッグモードで実行
DEBUG=* npx @tailwindcss/cli -i test-simple.css -o debug-output.css --minify 2>&1 | grep "Source:"

# ログファイル確認
cat tailwindcss-*.log | grep "Source:" | head -5
# 結果:
# Source: PublicSourceEntry { base: "...", pattern: "**/*", negated: false }
# → プロジェクト全体をスキャンしている
```

### 4. 自動スキャンの証拠
```bash
# プロジェクト内にあるHTMLファイル
find . -name "*.html" -not -path "./node_modules/*" | head -10
# 結果:
# ./_backup/index_original.html
# ./_backup/20250908_old_versions/index.html
# ./_backup/20250908_old_versions/index_git_original.html
# ./_backup/index_old.html
# ./_backup/index_wrong_restore.html
# ./index.html
# → _backupディレクトリ内も全てスキャン対象
```

### 5. 解決策1: source(none)で自動スキャン無効化
```bash
# 自動スキャン無効化
echo '@import "tailwindcss" source(none);' > test-none.css
npx @tailwindcss/cli -i test-none.css -o test-none-output.css --minify
ls -lh test-none-output.css
# 結果: 3.9KB ✅（ベースCSSのみ）
```

### 6. 解決策2: 明示的にindex.htmlのみ指定
```bash
# index.htmlのみスキャン
cat > test-explicit.css << 'EOF'
@import "tailwindcss" source(none);
@source "index.html";
EOF

npx @tailwindcss/cli -i test-explicit.css -o test-explicit-output.css --minify
ls -lh test-explicit-output.css
# 結果: 43KB（64KB → 43KB、33%削減）
```

### 7. 最終的な修正適用
```bash
# src/input.css を修正
cat > src/input.css << 'EOF'
@import "tailwindcss" source(none);
@source "../index.html";
EOF

# ビルド実行
npx @tailwindcss/cli -i ./src/input.css -o ./dist/output.css --minify
ls -lh dist/output.css
# 結果: 43KB
```

## 検証: なぜ43KBなのか

### index.htmlの分析
```bash
# クラス使用数
grep -o 'class="[^"]*"' index.html | wc -l
# 結果: 373個のclass属性

# ユニーククラス数
grep -o 'class="[^"]*"' index.html | sed 's/class="//g' | sed 's/"//g' | tr ' ' '\n' | sort -u | wc -l
# 結果: 326個のユニーククラス

# 生成されたCSSの分析
grep -o '\-\-' dist/output.css | wc -l  # CSS変数: 1066個
grep -o '\.[a-z]' dist/output.css | wc -l  # クラスセレクタ: 358個
```

### サブディレクトリでの検証
```bash
# プロジェクト内の新規ディレクトリで確認
mkdir -p test-isolated
cd test-isolated

# 最小HTML
echo '<div class="text-red-500">test</div>' > minimal.html
echo '@import "tailwindcss";' > input.css
npx @tailwindcss/cli -i input.css -o output.css --minify
ls -lh output.css
# 結果: 4.0KB ✅（正常）

# index.htmlをコピー
cp ../index.html .
npx @tailwindcss/cli -i input.css -o output-with-index.css --minify
ls -lh output-with-index.css
# 結果: 43KB（index.htmlが原因）
```

## 根本原因

1. **Tailwind v4.1.13のデフォルト動作**
   - `**/*`パターンで現在のディレクトリ全体を自動スキャン
   - _backupディレクトリ等も含めて全HTMLファイルを検出

2. **index.htmlのサイズ**
   - 841行、326個のユニーククラス使用
   - v4.1.13は全てのクラスに対してCSSを生成（43KB）

## 解決策まとめ

| 方法 | 結果 | 推奨度 |
|---|---|---|
| そのまま | 64KB | ❌ |
| source(none) + index.html指定 | 43KB | ⚠️ |
| 不要ファイル削除 + source(none) | 43KB | ⚠️ |
| クラス数削減 | 未測定 | ✅ |

## 残る問題
- 同じindex.htmlでもv3.4.14では26KB
- v4.1.13では43KB（65%増加）
- v4のCSS変数生成方式が原因と推測