# CSS → Tailwind クラスマッピング表

## 完全マッピングリスト（72クラス）

### レイアウト・コンテナ系

| 現在のクラス | 使用回数 | Tailwindマッピング | 備考 |
|-------------|---------|-------------------|------|
| container | 9 | container mx-auto px-4 | レスポンシブ対応 |
| container-narrow | 3 | max-w-4xl mx-auto px-4 | 狭幅コンテナ |
| container-content | 2 | max-w-6xl mx-auto px-4 | コンテンツ幅 |
| section | 6 | py-16 md:py-20 | セクション余白 |
| section-gray | 4 | bg-gray-50 | 背景色付きセクション |
| flex | 6 | flex | そのまま使用 |
| grid | 1 | grid | そのまま使用 |
| grid-cols-2 | 1 | grid-cols-1 md:grid-cols-2 | モバイル対応 |
| gap-4 | 1 | gap-4 | そのまま使用 |

### テキスト・タイポグラフィ系

| 現在のクラス | 使用回数 | Tailwindマッピング | 備考 |
|-------------|---------|-------------------|------|
| font-bold | 19 | font-bold | そのまま使用 |
| font-black | 1 | font-black | そのまま使用 |
| text-center | 6 | text-center | そのまま使用 |
| text-primary | 18 | text-blue-500 | カスタム色も可 |
| text-secondary | 8 | text-gray-600 | |
| text-accent | 1 | text-red-500 | |
| section-title | 5 | text-3xl md:text-4xl font-bold text-center mb-8 | 複合クラス |
| section-subtitle | 2 | text-lg text-gray-600 text-center mb-12 | 複合クラス |

### スペーシング系

| 現在のクラス | 使用回数 | Tailwindマッピング | 備考 |
|-------------|---------|-------------------|------|
| mb-2 | 10 | mb-2 | そのまま使用 |
| mb-3 | 1 | mb-3 | そのまま使用 |
| mb-4 | 2 | mb-4 | そのまま使用 |
| mb-6 | 7 | mb-6 | そのまま使用 |
| mb-8 | 8 | mb-8 | そのまま使用 |
| mt-2 | 2 | mt-2 | そのまま使用 |
| mt-6 | 1 | mt-6 | そのまま使用 |
| mt-8 | 3 | mt-8 | そのまま使用 |

### ヒーローセクション専用

| 現在のクラス | 使用回数 | Tailwindマッピング | 備考 |
|-------------|---------|-------------------|------|
| hero | 1 | min-h-screen relative bg-gradient-to-br from-blue-600 to-purple-600 | |
| hero-content | 1 | relative z-10 py-20 text-white | |
| hero-badge | 1 | inline-flex items-center gap-2 text-sm bg-white/10 backdrop-blur px-4 py-2 rounded-full | |
| hero-title | 1 | text-4xl md:text-6xl lg:text-7xl font-black mb-6 | |
| hero-title-accent | 1 | カスタムコンポーネント | グラデーションテキスト |
| hero-subtitle | 1 | text-xl md:text-2xl text-white/90 mb-8 | |
| hero-points | 1 | space-y-4 mb-8 | |

### カード・コンポーネント系

| 現在のクラス | 使用回数 | Tailwindマッピング | 備考 |
|-------------|---------|-------------------|------|
| card | 6 | bg-white rounded-xl shadow-lg p-6 | |
| card-emphasis | 2 | bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 rounded-xl p-8 | |
| method-card | 2 | p-6 rounded-lg border-2 | 基本スタイル |
| method-card negative | 1 | bg-red-50 border-red-200 | |
| method-card positive | 1 | bg-green-50 border-green-200 | |
| step-card | 3 | bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow | |
| testimonial-card | 2 | bg-gray-50 p-6 rounded-lg italic | |
| achievement-card | 2 | text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-lg | |

### 特殊コンポーネント

| 現在のクラス | 使用回数 | Tailwindマッピング | 備考 |
|-------------|---------|-------------------|------|
| focus-point | 15 | flex items-start gap-3 mb-4 | |
| focus-point-icon | 15 | text-primary flex-shrink-0 | |
| problem-list | 1 | space-y-4 | |
| problem-item | 5 | bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-400 | |
| method-comparison | 1 | grid md:grid-cols-2 gap-6 | |
| method-icon | 2 | text-2xl mb-2 | |
| highlight-box | 4 | bg-yellow-50 border-2 border-yellow-300 rounded-lg p-6 | |
| highlight-icon | 1 | text-2xl mr-2 | |

### ボタン・バッジ系

| 現在のクラス | 使用回数 | Tailwindマッピング | 備考 |
|-------------|---------|-------------------|------|
| btn | 2 | px-6 py-3 rounded-lg font-semibold transition-all | |
| btn-cta | 2 | bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 px-8 py-4 text-lg | |
| badge | 2 | inline-block px-3 py-1 rounded-full text-sm font-medium | |
| badge-primary | 1 | bg-blue-100 text-blue-800 | |
| badge-accent | 1 | bg-red-100 text-red-800 | |
| step-badge | 3 | bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold | |

### 実績・成果系

| 現在のクラス | 使用回数 | Tailwindマッピング | 備考 |
|-------------|---------|-------------------|------|
| achievement-grid | 1 | grid md:grid-cols-2 gap-6 | |
| achievement-title | 2 | text-lg font-bold text-blue-600 mb-3 | |
| achievement-list | 2 | text-gray-700 leading-relaxed | |
| testimonial-container | 1 | bg-white rounded-xl p-8 | |
| testimonial-title | 1 | text-2xl font-bold text-center mb-6 | |

### その他のレイアウト

| 現在のクラス | 使用回数 | Tailwindマッピング | 備考 |
|-------------|---------|-------------------|------|
| step-container | 1 | space-y-6 md:space-y-0 md:grid md:grid-cols-3 md:gap-6 | |
| cta-section | 1 | bg-gradient-to-br from-blue-600 to-purple-600 text-white py-20 | |
| cta-content | 1 | max-w-4xl mx-auto px-4 text-center | |
| cta-title | 1 | text-3xl md:text-4xl font-bold mb-6 | |
| cta-description | 1 | text-xl text-white/90 mb-8 | |

### フッター

| 現在のクラス | 使用回数 | Tailwindマッピング | 備考 |
|-------------|---------|-------------------|------|
| footer | 1 | bg-gray-900 text-white py-8 | |
| footer-content | 1 | text-center text-sm | |

### アニメーション・効果

| 現在のクラス | 使用回数 | Tailwindマッピング | 備考 |
|-------------|---------|-------------------|------|
| fade-in | 1 | animate-[fadeIn_0.6s_ease-out] | カスタムアニメーション |
| pulse | 1 | animate-pulse | Tailwind標準 |
| gradient-text | 1 | bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent | |

### レスポンシブ制御

| 現在のクラス | 使用回数 | Tailwindマッピング | 備考 |
|-------------|---------|-------------------|------|
| br-mobile | 6 | inline md:hidden | モバイルのみ改行 |
| br-desktop | 2 | hidden md:inline | デスクトップのみ改行 |

### ユーティリティ

| 現在のクラス | 使用回数 | Tailwindマッピング | 備考 |
|-------------|---------|-------------------|------|
| inline-block | 1 | inline-block | そのまま使用 |

## インラインスタイルのマッピング（32箇所）

### 頻出パターン

#### 1. 番号バッジ（3箇所）
```html
<!-- 現在 -->
style="background: var(--primary); color: white; width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: var(--spacing-4); font-weight: var(--font-bold);"

<!-- Tailwind -->
class="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mr-4 font-bold"
```

#### 2. セクション見出しスタイル（3箇所）
```html
<!-- 現在 -->
style="font-size: var(--font-size-2xl); color: var(--text-primary); margin-bottom: var(--spacing-6);"

<!-- Tailwind -->
class="text-2xl text-blue-500 mb-6"
```

#### 3. グレー背景ボックス（2箇所）
```html
<!-- 現在 -->
style="background: var(--bg-gray-50); padding: var(--spacing-6); border-radius: var(--radius-lg);"

<!-- Tailwind -->
class="bg-gray-50 p-6 rounded-lg"
```

#### 4. コード表示ボックス（2箇所）
```html
<!-- 現在 -->
style="font-family: monospace; background: white; padding: var(--spacing-3); border-radius: var(--radius); color: var(--accent);"

<!-- Tailwind -->
class="font-mono bg-white p-3 rounded text-red-500"
```

#### 5. その他の単発スタイル
```html
<!-- テキスト色 -->
style="color: var(--text-secondary);" → class="text-gray-600"
style="color: rgba(255, 255, 255, 0.8);" → class="text-white/80"
style="color: #fbbf24;" → class="text-yellow-400"

<!-- フォントサイズ -->
style="font-size: var(--font-size-xl);" → class="text-xl"
style="font-size: var(--font-size-lg);" → class="text-lg"
style="font-size: var(--font-size-base);" → class="text-base"

<!-- 装飾 -->
style="border-top: 3px solid var(--primary); border-bottom: 3px solid var(--primary);" 
→ class="border-t-4 border-b-4 border-blue-500"
```

## カスタムコンポーネント定義

既存の複雑なスタイルを維持するため、以下は@applyで定義：

```css
@layer components {
  /* フォーカスポイント */
  .focus-point-custom {
    @apply flex items-start gap-3 mb-4;
  }
  
  /* メソッドカード */
  .method-card-custom {
    @apply p-6 rounded-lg border-2 transition-all hover:shadow-lg;
  }
  
  /* グラデーションテキスト */
  .gradient-text-custom {
    @apply bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent;
  }
  
  /* ヒーローバッジ */
  .hero-badge-custom {
    @apply inline-flex items-center gap-2 text-sm bg-white/10 backdrop-blur-md px-4 py-2 rounded-full;
  }
}
```

## 優先順位

### 移行優先度：高（使用頻度10回以上）
1. font-bold (19)
2. text-primary (18)
3. focus-point-icon (15)
4. focus-point (15)
5. mb-2 (10)

### 移行優先度：中（使用頻度5-9回）
6. container (9)
7. text-secondary (8)
8. mb-8 (8)
9. mb-6 (7)
10. text-center (6)
11. section (6)
12. flex (6)
13. card (6)
14. br-mobile (6)
15. section-title (5)
16. problem-item (5)

### 移行優先度：低（使用頻度1-4回）
残りの56クラス

---

*作成日: 2025-09-07*
*このドキュメントは実装時の参照用マッピング表です*