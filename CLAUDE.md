# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Math Tutor Landing Page (LP)** project - a static HTML website for promoting specialized math tutoring services targeting high school students struggling with mathematics.

**Core Value Proposition**: Teaching the fundamental concepts ("1,2") that schools skip, making complex math ("3-7") naturally understandable through a revolutionary teaching approach.

## Architecture & Structure

### Technology Stack
- **Frontend**: HTML + Tailwind CSS v4.1.13
- **Build Tool**: @tailwindcss/cli
- **CSS Size**: 43KB minified (v4 includes all theme variables)
- **Responsive**: Mobile-first design with Tailwind utilities

### Build System (Tailwind v4)
```
src/
└── input.css      # Tailwind configuration
                   # @import "tailwindcss" source(none);
                   # @source "../index.html";
dist/
└── output.css     # Generated CSS (43KB)
```

**Build Commands**:
- `npm run dev`: Watch mode for development
- `npm run build`: Production build with minification

**Important v4 Notes**:
- Uses `source(none)` to prevent auto-scanning entire project
- Only scans `index.html` for classes (326 unique classes)
- Generates ~1000 CSS variables (v4 default behavior)

### Design System

**Spacing Scale** (defined in variables.css):
- Base unit: 4px
- Scale: 2, 4, 8, 12, 16, 24, 32, 48, 64px
- Usage: `var(--spacing-[1-16])`

**Color System**:
- Primary: Blue (#3b82f6)
- Accent: Red (#ef4444)
- Success: Green (#10b981)
- Backgrounds: Gray scale
- Text: Primary/Secondary/Muted

**Typography**:
- Font: Noto Sans JP
- Sizes: sm, base, lg, xl, 2xl, 3xl, 4xl
- Weights: 400, 500, 700, 900

## Key Business Context

### Target Audience
- **Primary**: Parents of high school students struggling with math
- **Search Intent**: "数学 家庭教師" (math tutor)
- **Decision Stage**: Comparing multiple tutoring options

### Three Core Differentiators (Must Maintain)
1. **1-10 Theory**: Teaching fundamental "1,2" that schools skip
2. **Ultra-Frank Explanation**: Practical approach from pharmacy background vs theoretical math
3. **Gradual Management System**: Non-pushy, growth-based support

### Content Sections (Order is Strategic)
1. Hero → Problem hook with "Chart-style textbook" pain point
2. Problem Empathy → Validate struggles
3. Unique Method → Core differentiators explained
4. Learning Management → 168 hours/week support system
5. Results & Testimonials → Social proof
6. Instructor Profile → Authority building
7. CTA → Free trial conversion

## Development Commands

### Local Development
```bash
# Development with auto-rebuild on changes
npm run dev

# Open in browser
open index.html

# Or use any static server
python3 -m http.server 8000
# Then visit http://localhost:8000
```

### Production Build
```bash
# Build minified CSS
npm run build
# Output: dist/output.css (43KB)
```

## Common Tasks

### Adding New Styles
1. Use Tailwind utility classes directly in HTML
2. For responsive design: `md:` prefix for 768px+
3. Common patterns:
   - Spacing: `p-4`, `m-2`, `gap-4`
   - Colors: `text-blue-500`, `bg-gray-100`
   - Flexbox: `flex`, `items-center`, `justify-between`
4. After changes, run `npm run build` to regenerate CSS

### Modifying Content
1. Main content in `index.html`
2. Keep copy aligned with `/docs/lp-copywriting-detail.md`
3. Maintain emotional flow: Problem → Solution → Proof → Action

### Performance Optimization
- Images: Keep in `/assets/`, optimize before adding
- CSS: Already modular, avoid redundancy
- No JavaScript currently (intentional for simplicity)

## Critical Business Rules

### Must Preserve
1. **"1-10 Theory"** messaging - Core differentiator
2. **Non-pushy gradual system** - Key trust builder  
3. **Authority markers**: 大阪大学薬学部首席, 指導歴14年, 塾講師研修講師
4. **"革命が起こった"** testimonial - Powerful social proof

### Copy Guidelines
- Avoid excessive "絶対" (absolute) claims
- Balance expertise with approachability
- Use concrete numbers (偏差値40→65)
- Focus on "why" over "what"

## Documentation Structure

```
docs/
├── lp-structure-plan.md        # LP strategic blueprint
├── value-proposition-final.md  # Core value prop details
├── lp-copywriting-detail.md    # Copy guidelines & A/B test ideas
├── current-site-analysis.md    # Competitive analysis
└── spacing-system.md           # Design system documentation
```

Refer to these for strategic decisions - they contain the business logic and reasoning.

## Future Enhancements (Not Yet Implemented)

- Contact form integration (currently just visual)
- LINE integration for CTA buttons
- Analytics tracking (GA/GTM)
- A/B testing setup
- JavaScript interactions (smooth scroll, animations)
- SEO meta tags completion
- Form validation
- Testimonial carousel

## Testing Checklist

When making changes, verify:
1. Mobile responsiveness (320px - 768px)
2. Desktop layout (768px+)
3. All CTAs visible and clickable
4. Text hierarchy maintained
5. Color contrast adequate
6. No horizontal scroll on mobile
7. Loading performance (keep CSS under 50KB total)