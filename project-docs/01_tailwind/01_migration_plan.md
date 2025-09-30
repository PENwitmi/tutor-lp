# Tailwind CSS 移行計画書

## 現状分析サマリー

### 数値データ
- **使用中のCSSクラス**: 72個
- **インラインスタイル**: 32箇所
- **最頻出クラス**: font-bold (19回), text-primary (18回), focus-point-icon (15回)
- **現在のCSS合計**: 約48KB
- **目標CSS削減率**: 70%以上

## 移行戦略

### 基本方針
1. **使用頻度の高いクラスから移行**（効果最大化）
2. **セマンティックな構造を維持**（hero, card等のコンポーネント名）
3. **段階的テスト**（セクション単位で確認）
4. **カスタムコンポーネントの定義**（Tailwind @applyディレクティブ活用）

## Phase 1: 環境構築（Day 1）

### 1.1 初期セットアップ
```bash
# package.json作成
npm init -y

# Tailwind関連パッケージインストール
npm install -D tailwindcss postcss autoprefixer

# Tailwind設定ファイル生成
npx tailwindcss init -p
```

### 1.2 設定ファイル構成
```javascript
// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        // 既存のCSS変数をマッピング
        'primary': '#3b82f6',
        'primary-50': '#eff6ff',
        'primary-600': '#2563eb',
        'primary-700': '#1d4ed8',
        'accent': '#ef4444',
        'accent-600': '#dc2626',
        'accent-700': '#b91c1c',
      },
      fontFamily: {
        'sans': ['Noto Sans JP', 'sans-serif'],
      },
      spacing: {
        // カスタムスペーシング
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'gradient-x': 'gradient-x 3s ease infinite',
        'float': 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
```

### 1.3 CSSエントリーポイント作成
```css
/* src/input.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* カスタムコンポーネント定義 */
@layer components {
  /* 既存の重要なコンポーネントを維持 */
}
```

## Phase 2: クラスマッピング作成（Day 2）

### 2.1 高頻度クラスのマッピング（優先度: 最高）

| 現在のクラス | 使用回数 | Tailwindマッピング |
|------------|---------|------------------|
| font-bold | 19 | font-bold |
| text-primary | 18 | text-primary (カスタム) または text-blue-500 |
| focus-point-icon | 15 | カスタムコンポーネント化 |
| focus-point | 15 | カスタムコンポーネント化 |
| mb-2 | 10 | mb-2 |
| container | 9 | container mx-auto px-4 |
| text-secondary | 8 | text-gray-600 |
| mb-8 | 8 | mb-8 |
| mb-6 | 7 | mb-6 |
| text-center | 6 | text-center |
| section | 6 | カスタムコンポーネント化 |
| flex | 6 | flex |
| card | 6 | カスタムコンポーネント化 |

### 2.2 コンポーネント系クラスのマッピング（優先度: 高）

#### ヒーローセクション
```css
/* 現在 */
.hero → @apply relative min-h-screen bg-gradient-to-br from-blue-600 to-purple-600
.hero-content → @apply relative z-10 py-20
.hero-title → @apply text-5xl md:text-7xl font-black mb-6
.hero-subtitle → @apply text-xl md:text-2xl text-white/90
```

#### カード系
```css
/* 現在 */
.card → @apply bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow
.card-emphasis → @apply bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200
```

#### ボタン系
```css
/* 現在 */
.btn → @apply px-6 py-3 rounded-lg font-semibold transition-all
.btn-cta → @apply bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700
```

### 2.3 インラインスタイルの分類

#### 頻出パターン（クラス化候補）
1. **番号バッジ** (3箇所)
   ```html
   style="background: var(--primary); color: white; width: 48px; height: 48px; border-radius: 50%; ..."
   → class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center"
   ```

2. **セクション見出し** (3箇所)
   ```html
   style="font-size: var(--font-size-2xl); color: var(--text-primary); margin-bottom: var(--spacing-6);"
   → class="text-2xl text-primary mb-6"
   ```

3. **テキスト調整** (複数)
   ```html
   style="font-size: var(--font-size-xl);"
   → class="text-xl"
   ```

## Phase 3: セクション別移行計画（Day 3-5）

### 移行順序（リスク最小化のため）

#### Day 3: 基礎セクション
1. **フッター** (最もシンプル)
   - クラス数: 2
   - リスク: 低
   - テスト: 簡単

2. **追伸セクション**
   - クラス数: 5
   - リスク: 低
   - テスト: 簡単

#### Day 4: 中核セクション
3. **問題共感セクション**
   - クラス数: 8
   - リスク: 中
   - テスト: レスポンシブ確認

4. **実績セクション**
   - クラス数: 10
   - リスク: 中
   - テスト: グリッドレイアウト

#### Day 5: 複雑セクション
5. **独自メソッドセクション**
   - クラス数: 15
   - リスク: 高
   - テスト: 複雑なレイアウト

6. **ヒーローセクション**
   - クラス数: 12
   - リスク: 高
   - テスト: アニメーション、グラデーション

### 3.1 セクション別詳細タスク

#### フッターセクション移行例
```html
<!-- 現在 -->
<footer class="footer">
  <div class="container">
    <div class="footer-content">

<!-- Tailwind移行後 -->
<footer class="bg-gray-900 text-white py-8">
  <div class="container mx-auto px-4">
    <div class="text-center">
```

## Phase 4: カスタムコンポーネント定義（Day 4-5）

### 4.1 @apply を使用したコンポーネント
```css
/* src/components.css */
@layer components {
  /* フォーカスポイント */
  .focus-point {
    @apply flex items-start gap-3 mb-4;
  }
  
  .focus-point-icon {
    @apply text-primary flex-shrink-0;
  }
  
  /* メソッドカード */
  .method-card {
    @apply p-6 rounded-lg border-2;
  }
  
  .method-card.negative {
    @apply bg-red-50 border-red-200;
  }
  
  .method-card.positive {
    @apply bg-green-50 border-green-200;
  }
}
```

### 4.2 複雑なコンポーネント（JavaScript必要な場合）
```javascript
// 将来的なインタラクティブ要素用
// components/StepCard.js
// components/TestimonialCarousel.js
```

## Phase 5: 最適化とクリーンアップ（Day 6）

### 5.1 PurgeCSSの設定
```javascript
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? {
      '@fullhuman/postcss-purgecss': {
        content: ['./index.html'],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
      }
    } : {})
  }
}
```

### 5.2 未使用CSSの削除
- 現在のCSS: 48KB
- 目標: 10-15KB
- 削減方法: PurgeCSS自動実行

## Phase 6: テストと検証（Day 6-7）

### 6.1 テストチェックリスト
- [ ] モバイルレスポンシブ (320px, 375px, 768px)
- [ ] デスクトップ表示 (1024px, 1440px, 1920px)
- [ ] グラデーション表現の維持
- [ ] アニメーション動作
- [ ] ホバー効果
- [ ] フォント表示
- [ ] 画像最適化
- [ ] パフォーマンス測定

### 6.2 ブラウザ互換性
- Chrome (最新)
- Safari (最新)
- Firefox (最新)
- Edge (最新)
- iOS Safari
- Android Chrome

## 実装スケジュール

| Day | タスク | 成果物 |
|-----|--------|---------|
| 1 | 環境構築 | package.json, tailwind.config.js |
| 2 | マッピング作成 | クラス対応表完成 |
| 3 | 基礎セクション移行 | フッター、追伸完了 |
| 4 | 中核セクション移行 | 問題共感、実績完了 |
| 5 | 複雑セクション移行 | メソッド、ヒーロー完了 |
| 6 | 最適化 | CSS削減70%達成 |
| 7 | テスト・調整 | 全デバイス対応確認 |

## リスク管理

### 想定リスクと対策

1. **グラデーション表現の劣化**
   - 対策: カスタムユーティリティクラス定義
   - フォールバック: 一部カスタムCSSを残す

2. **レスポンシブ崩れ**
   - 対策: セクション単位でのテスト
   - フォールバック: 問題箇所のみ旧CSS維持

3. **パフォーマンス低下**
   - 対策: PurgeCSS徹底活用
   - フォールバック: Critical CSS抽出

## 成功指標

- [ ] CSS総量: 48KB → 15KB以下（70%削減）
- [ ] Lighthouse Score: 90以上維持
- [ ] 開発速度: 新機能追加時間50%短縮
- [ ] コード可読性: 大幅向上
- [ ] デザイン一貫性: 完全維持

## 次のアクション

1. **承認待ち**: この計画書のレビューと承認
2. **準備**: 必要なツールとバックアップの準備
3. **開始**: Day 1の環境構築から着手

---

*作成日: 2025-09-07*
*バージョン: 1.0*
*このドキュメントはTailwind CSS移行の実行計画書です*