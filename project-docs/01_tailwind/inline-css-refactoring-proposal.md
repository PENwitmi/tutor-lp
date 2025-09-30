# インラインCSS リファクタリング提案書

## 現状分析

index.htmlに合計約40箇所のインラインスタイルが存在しています。これらを分析した結果、以下のパターンに分類できます。

## インラインスタイルの分類

### 1. 繰り返し使用されているパターン（優先度：高）

これらは即座にクラス化すべきです：

#### a) 番号付きバッジ（3箇所で同一）
```css
style="background: var(--primary); color: white; width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: var(--spacing-4); font-weight: var(--font-bold);"
```
**提案クラス名**: `.number-badge`

#### b) セクション見出し（3箇所で同一）
```css
style="font-size: var(--font-size-2xl); color: var(--text-primary); margin-bottom: var(--spacing-6);"
```
**提案クラス名**: `.section-heading-lg`

#### c) フォントサイズ調整（複数使用）
- `font-size: var(--font-size-xl);` (4箇所)
- `font-size: var(--font-size-lg);` (4箇所)

**提案**: 既存のユーティリティクラス `.text-xl`, `.text-lg` を活用

### 2. 背景・コンテナ系（中優先度）

#### a) グレー背景ボックス
```css
style="background: var(--bg-gray-50); padding: var(--spacing-6); border-radius: var(--radius-lg);"
```
**提案クラス名**: `.box-gray` または `.content-box`

#### b) コード表示ボックス
```css
style="font-family: monospace; background: white; padding: var(--spacing-3); border-radius: var(--radius); color: var(--accent);"
```
**提案クラス名**: `.code-display` または `.example-code`

### 3. テキスト色調整（低優先度）

- `style="color: var(--text-secondary);"` (2箇所)
- `style="color: rgba(255, 255, 255, 0.8);"` (2箇所)

**提案**: 既存の `.text-secondary`, 新規 `.text-white-80` クラス

### 4. 一度だけ使用（検討必要）

以下は使用頻度が低いため、ケースバイケースで判断：

- 強調色 `color: #fbbf24;` → `.text-yellow-400` クラス化
- CTAボタンサイズ調整 → `.btn-cta-large` バリエーション追加
- 装飾的な境界線 → `.text-bordered` クラス化

## 推奨実装プラン

### Phase 1: 即座に実装すべきクラス

```css
/* components.css に追加 */

/* 番号バッジ */
.number-badge {
    background: var(--primary);
    color: white;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: var(--spacing-4);
    font-weight: var(--font-bold);
}

/* セクション内の大見出し */
.section-heading-lg {
    font-size: var(--font-size-2xl);
    color: var(--text-primary);
    margin-bottom: var(--spacing-6);
}

/* グレー背景ボックス */
.content-box-gray {
    background: var(--bg-gray-50);
    padding: var(--spacing-6);
    border-radius: var(--radius-lg);
}

.content-box-gray.mb-6 {
    margin-bottom: var(--spacing-6);
}

/* コード表示 */
.code-display {
    font-family: monospace;
    background: white;
    padding: var(--spacing-3);
    border-radius: var(--radius);
}

.code-display-accent {
    color: var(--accent);
}

.code-display-primary {
    color: var(--primary);
}
```

### Phase 2: ユーティリティクラスの拡充

```css
/* style.css のユーティリティセクションに追加 */

/* 追加のテキスト色 */
.text-yellow-400 {
    color: #fbbf24;
}

/* 追加の行高 */
.leading-relaxed {
    line-height: var(--leading-relaxed);
}

/* ボタンサイズバリエーション */
.btn-cta-large {
    font-size: var(--font-size-xl);
    padding: var(--spacing-5) var(--spacing-12);
}

/* 装飾的な境界線 */
.text-bordered {
    padding: var(--spacing-2) 0;
    border-top: 3px solid var(--primary);
    border-bottom: 3px solid var(--primary);
}
```

## メリット

1. **保守性向上**: スタイルの一元管理が可能
2. **DRY原則**: 重複コードの削減（約30%のインラインスタイル削減見込み）
3. **読みやすさ**: HTMLの見通しが良くなる
4. **一貫性**: デザインシステムの強化
5. **パフォーマンス**: HTMLファイルサイズの削減（約2KB）

## 実装時の注意点

1. **段階的実装**: Phase 1から始めて、動作確認後にPhase 2へ
2. **命名規則**: BEM風またはユーティリティファーストの既存規則に従う
3. **詳細度**: 新規クラスの詳細度が既存スタイルを上書きしないよう注意
4. **レスポンシブ**: モバイル表示での動作確認必須

## 実装優先順位

1. **高**: 繰り返し使用されているスタイル（番号バッジ、見出し）
2. **中**: コンテナ・ボックス系のスタイル
3. **低**: 一度だけ使用されているスタイル

## 実装後の効果測定

- インラインスタイル使用箇所：40箇所 → 約15箇所（60%削減）
- HTMLファイルサイズ：約26KB → 約24KB
- CSSファイル増加：約1.5KB（許容範囲内）

---

*作成日: 2025-09-07*
*このドキュメントはインラインCSSのリファクタリング提案書です*