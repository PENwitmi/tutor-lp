# スペーシングシステム設計書

## 1. 基本原則

### 1.1 ベースユニット
- **基本単位**: 4px (0.25rem)
- **グリッド**: 4px × n で構成

### 1.2 スペーシングスケール
```
--spacing-1: 4px   (0.25rem)  // 極小
--spacing-2: 8px   (0.5rem)   // 小
--spacing-3: 12px  (0.75rem)  // 小中
--spacing-4: 16px  (1rem)     // 中
--spacing-5: 20px  (1.25rem)  // 中大
--spacing-6: 24px  (1.5rem)   // 大
--spacing-8: 32px  (2rem)     // 特大
```

## 2. デバイス別ルール

### 2.1 デスクトップ (1025px以上)
| 要素 | padding | margin |
|-----|---------|--------|
| セクション | 縦: spacing-8 (32px) | - |
| コンテナ | 横: spacing-4 (16px) | - |
| カード | spacing-6 (24px) | 下: spacing-4 (16px) |
| ボタン | 縦: spacing-4 (16px) / 横: spacing-6 (24px) | - |
| リスト項目 | - | 下: spacing-4 (16px) |
| 見出し | - | 下: spacing-6 (24px) |

### 2.2 タブレット (768px - 1024px)
| 要素 | padding | margin |
|-----|---------|--------|
| セクション | 縦: spacing-6 (24px) | - |
| コンテナ | 横: spacing-3 (12px) | - |
| カード | spacing-4 (16px) | 下: spacing-3 (12px) |
| ボタン | 縦: spacing-3 (12px) / 横: spacing-4 (16px) | - |
| リスト項目 | - | 下: spacing-3 (12px) |
| 見出し | - | 下: spacing-4 (16px) |

### 2.3 モバイル (767px以下)
| 要素 | padding | margin |
|-----|---------|--------|
| セクション | 縦: spacing-4 (16px) | - |
| コンテナ | 横: spacing-2 (8px) | - |
| カード | spacing-3 (12px) | 下: spacing-2 (8px) |
| ボタン | 縦: spacing-2 (8px) / 横: spacing-3 (12px) | - |
| リスト項目 | - | 下: spacing-2 (8px) |
| 見出し | - | 下: spacing-3 (12px) |

## 3. コンポーネント別詳細

### 3.1 ヒーローセクション
```css
/* デスクトップ */
.hero-content {
    padding: var(--spacing-8);  /* 32px */
}

/* タブレット */
@media (max-width: 1024px) {
    .hero-content {
        padding: var(--spacing-6);  /* 24px */
    }
}

/* モバイル */
@media (max-width: 767px) {
    .hero-content {
        padding: var(--spacing-4);  /* 16px */
    }
}
```

### 3.2 カード
```css
/* デスクトップ */
.card {
    padding: var(--spacing-6);     /* 24px */
    margin-bottom: var(--spacing-4);  /* 16px */
}

/* タブレット */
@media (max-width: 1024px) {
    .card {
        padding: var(--spacing-4);     /* 16px */
        margin-bottom: var(--spacing-3);  /* 12px */
    }
}

/* モバイル */
@media (max-width: 767px) {
    .card {
        padding: var(--spacing-3);     /* 12px */
        margin-bottom: var(--spacing-2);  /* 8px */
    }
}
```

### 3.3 リスト
```css
/* デスクトップ */
.problem-list {
    padding: var(--spacing-6);  /* 24px */
}
.problem-item {
    margin-bottom: var(--spacing-4);  /* 16px */
    padding-left: var(--spacing-6);   /* 24px (アイコン用) */
}

/* タブレット */
@media (max-width: 1024px) {
    .problem-list {
        padding: var(--spacing-4);  /* 16px */
    }
    .problem-item {
        margin-bottom: var(--spacing-3);  /* 12px */
        padding-left: var(--spacing-4);   /* 16px */
    }
}

/* モバイル */
@media (max-width: 767px) {
    .problem-list {
        padding: var(--spacing-3);  /* 12px */
    }
    .problem-item {
        margin-bottom: var(--spacing-2);  /* 8px */
        padding-left: var(--spacing-3);   /* 12px */
    }
}
```

## 4. セクション間隔

### 4.1 基本セクション
```css
/* デスクトップ */
.section {
    padding-top: var(--spacing-8);     /* 32px */
    padding-bottom: var(--spacing-8);  /* 32px */
}

/* タブレット */
@media (max-width: 1024px) {
    .section {
        padding-top: var(--spacing-6);     /* 24px */
        padding-bottom: var(--spacing-6);  /* 24px */
    }
}

/* モバイル */
@media (max-width: 767px) {
    .section {
        padding-top: var(--spacing-4);     /* 16px */
        padding-bottom: var(--spacing-4);  /* 16px */
    }
}
```

## 5. テキスト要素の間隔

### 5.1 見出し
```css
/* デスクトップ */
h1, h2 { margin-bottom: var(--spacing-6); }  /* 24px */
h3, h4 { margin-bottom: var(--spacing-4); }  /* 16px */

/* タブレット */
@media (max-width: 1024px) {
    h1, h2 { margin-bottom: var(--spacing-4); }  /* 16px */
    h3, h4 { margin-bottom: var(--spacing-3); }  /* 12px */
}

/* モバイル */
@media (max-width: 767px) {
    h1, h2 { margin-bottom: var(--spacing-3); }  /* 12px */
    h3, h4 { margin-bottom: var(--spacing-2); }  /* 8px */
}
```

### 5.2 段落
```css
/* デスクトップ */
p { margin-bottom: var(--spacing-4); }  /* 16px */

/* タブレット */
@media (max-width: 1024px) {
    p { margin-bottom: var(--spacing-3); }  /* 12px */
}

/* モバイル */
@media (max-width: 767px) {
    p { margin-bottom: var(--spacing-2); }  /* 8px */
}
```

## 6. 特殊ケース

### 6.1 フォーカスポイント
```css
/* デスクトップ */
.focus-point {
    margin-bottom: var(--spacing-3);  /* 12px */
}

/* モバイル */
@media (max-width: 767px) {
    .focus-point {
        margin-bottom: var(--spacing-2);  /* 8px */
    }
}
```

### 6.2 CTAボタン
```css
/* デスクトップ */
.btn-cta {
    padding: var(--spacing-4) var(--spacing-6);  /* 16px 24px */
}

/* タブレット */
@media (max-width: 1024px) {
    .btn-cta {
        padding: var(--spacing-3) var(--spacing-4);  /* 12px 16px */
    }
}

/* モバイル */
@media (max-width: 767px) {
    .btn-cta {
        padding: var(--spacing-2) var(--spacing-3);  /* 8px 12px */
    }
}
```

## 7. 禁止事項

1. **インラインでのpadding/margin指定禁止**
2. **spacing-10以上（40px以上）のモバイル使用禁止**
3. **不規則な値の使用禁止**（15px, 18px等）
4. **デバイス間での逆転禁止**（モバイルの方が大きい等）

## 8. 実装チェックリスト

- [ ] 全セクションのpadding統一
- [ ] 全カードのpadding/margin統一
- [ ] 全リスト項目のmargin統一
- [ ] 全ボタンのpadding統一
- [ ] 全見出しのmargin統一
- [ ] 全段落のmargin統一
- [ ] レスポンシブ対応の確認
- [ ] インラインスタイルの削除