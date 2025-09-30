# Tailwind CSS 色使用分析レポート

## 1. 使用頻度別分類

### 高頻度使用（10回以上）
- text-blue-600: 33回
- text-gray-700: 22回  
- text-gray-600: 20回
- bg-blue-50: 15回
- bg-white: 13回
- text-white/90: 12回
- text-gray-900: 12回
- text-red-600: 10回
- text-white: 10回

### 中頻度使用（3-9回）
- bg-white/10: 9回
- text-yellow-300: 9回
- border-gray-100: 7回
- text-blue-500: 6回
- text-red-500: 6回
- text-green-600: 6回
- bg-white/70: 6回
- bg-white/20: 5回
- from-blue-600: 4回
- text-green-300: 4回
- bg-gray-50: 4回
- to-purple-600: 4回
- border-blue-100: 3回
- border-gray-200: 3回
- text-blue-900: 3回

### 低頻度使用（1-2回）  
#### 2回使用
- border-blue-500
- from-blue-50
- from-blue-400
- to-blue-50
- via-blue-500
- from-red-500
- to-red-600
- text-gray-800
- from-gray-50
- to-gray-50
- via-gray-300
- border-green-500
- bg-yellow-50
- text-orange-600
- to-purple-50
- to-purple-400
- bg-white/60
- bg-white/5
- text-white/80
- bg-black/10

#### 1回のみ使用（40種類）
青系: bg-blue-500, bg-blue-200/30, border-blue-700, border-blue-600, border-blue-200, from-blue-500/5, to-blue-400, via-blue-50/30, via-blue-50/20, via-blue-100/20
赤系: bg-red-50, bg-red-100, border-red-500, from-red-600, from-red-400, to-red-700, to-red-500
グレー系: bg-gray-900, from-gray-100/50, to-gray-100/50
緑系: bg-green-500, bg-green-50, bg-green-400, from-green-400, to-green-50/30
黄系: bg-yellow-400, border-yellow-300, border-yellow-200, from-yellow-50, via-yellow-50/30, via-yellow-50/20, via-yellow-400/30
橙系: bg-orange-400, text-orange-300, to-orange-50
紫系: bg-purple-500/20, bg-purple-500/10, bg-purple-500, border-purple-500, to-purple-500/5
白黒: bg-white/95, bg-white/80, text-white/70, text-white/60, border-white/20, border-white, text-transparent

## 2. 同系色での無駄な使い分け

### 青系テキスト
- text-blue-600: 33回（メイン）
- text-blue-500: 6回（600とほぼ同じ）
- text-blue-900: 3回（見出し用？）
→ 500と600は統一可能（視覚的差異なし）
//text-blueは500と600を、600に統一。900は維持

### グレー系テキスト  
- text-gray-700: 22回（本文）
- text-gray-600: 20回（600と700はほぼ同じ）
- text-gray-900: 12回（見出し）
- text-gray-800: 2回（700とほぼ同じ）
→ 600/700/800は統一可能（微妙な差）
//text-grayは600〜800を、700に統一。900は維持

### 赤系テキスト
- text-red-600: 10回（メイン）
- text-red-500: 6回（600とほぼ同じ）
→ 500と600は統一可能
//text-redは500,600を、600に統一

### 青系ボーダー
- border-blue-100: 3回
- border-blue-500: 2回
- border-blue-700: 1回
- border-blue-600: 1回
- border-blue-200: 1回
→ 100以外は500に統一可能
//border-blueは200〜700を、500に統一。100は維持

### 白の透明度
- bg-white/10: 9回
- bg-white/70: 6回
- bg-white/20: 5回
- bg-white/60: 2回（70と近い）
- bg-white/5: 2回（10と近い）
- bg-white/95: 1回（white/90と同じ）
- bg-white/80: 1回（70と近い）
→ 10/20/70の3種類に統一可能
//bg-white/5 → bg-white/10
//bg-white/60,80,95 → bg-white/70

## 3. 統一案

### 即座に統一可能（視覚的影響なし）
1. text-blue-500 → text-blue-600（6箇所）
2. text-gray-600 → text-gray-700（20箇所）
3. text-gray-800 → text-gray-700（2箇所）  
4. text-red-500 → text-red-600（6箇所）
5. border-blue-200/500/600/700 → border-blue-500（5箇所）
6. bg-white/5 → bg-white/10（2箇所）
7. bg-white/60 → bg-white/70（2箇所）
8. bg-white/80/95 → bg-white/90（2箇所）//70に変更した方が良い。

### グラデーション簡素化（via削除）
- via-blue-* （5箇所） → 削除して2色グラデーションに
- via-yellow-* （3箇所） → 削除
- via-gray-300 （2箇所） → 削除

### 装飾的な色の削除  
- bg-purple-500/10, bg-purple-500/20（装飾ぼかし） → 削除可能
- bg-blue-200/30（装飾） → 削除可能

## 4. 統一後の効果

### 削減される色数
- 青系: 21種類 → 12種類（-9）
- グレー系: 16種類 → 10種類（-6）
- 赤系: 11種類 → 7種類（-4）
- 白系: 17種類 → 10種類（-7）
- via系: 10種類 → 0種類（-10）
合計: 91種類 → 55種類（約40%削減）

### CSS削減効果
- 各色定義 約0.5-1KB
- 40種類削減 = 約20-40KB削減見込み
- 65KB → 40-45KB（30-40%削減）

