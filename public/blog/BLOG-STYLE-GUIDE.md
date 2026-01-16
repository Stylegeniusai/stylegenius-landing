# Wontsy Blog Style Guide

## Target Audience
- **Primary:** Women 18-35 interested in fashion/shopping
- **Behavior:** Browse on mobile (70%+), scan content, visual-first
- **Goal:** Find useful info, discover products, plan outfits

---

## Typography

### Font Sizes
| Element | Mobile | Desktop |
|---------|--------|---------|
| H1 (title) | 1.6rem (26px) | 2.25rem (36px) |
| H2 (sections) | 1.3rem (21px) | 1.5rem (24px) |
| H3 (subsections) | 1.1rem (18px) | 1.2rem (19px) |
| Body text | 1rem (16px) | 1rem (16px) |
| Captions/meta | 0.85rem (14px) | 0.85rem (14px) |

### Line Height
- Body text: **1.7** (comfortable reading)
- Headings: **1.3** (tighter for impact)
- Line length: **50-75 characters** (max-width: 700px for text)

### Fonts
- Primary: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- Keep it clean and readable - no decorative fonts in body

---

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Pink (primary) | `#FF70D9` | Links, highlights, accents |
| Blue (secondary) | `#6EC1E4` | Gradients, secondary accents |
| Purple (brand) | `#561269` | Headings, important text |
| Gray 700 | `#374151` | Body text |
| Gray 500 | `#6b7280` | Secondary text, captions |
| Gray 200 | `#e5e7eb` | Borders, dividers |
| Gray 50 | `#f9fafb` | Backgrounds, cards |

### Gradient
```css
background: linear-gradient(135deg, #FF70D9, #6EC1E4);
```

---

## Layout

### Content Width
- Max container: **800px**
- Text column: **700px** (optimal reading)
- Full-width images: **800px** (container width)

### Spacing
- Section margin: **40-50px**
- Paragraph margin: **18px**
- Between elements: **24px**

### Mobile First
- Single column always
- Touch targets: min **44px**
- Padding: **20px** on mobile, **50px** on desktop

---

## Images

### Dimensions
| Type | Size | Aspect Ratio |
|------|------|--------------|
| Hero/Featured | 1200 x 630px | 1.9:1 |
| In-post images | 800 x 500px | 16:10 |
| App screenshots | 800 x auto | Varies |
| Thumbnails | 400 x 250px | 16:10 |

### Frequency
- **1 image per 300 words** minimum
- Hero image at top
- Image after every 2-3 sections
- Break up long text blocks

### File Requirements
- Format: **WebP** preferred, PNG/JPG fallback
- Max file size: **150KB**
- Always include `alt` text
- Use `loading="lazy"` for below-fold images

### Placeholder Style
When image not available, show styled placeholder:
```html
<div class="image-placeholder">
  <span class="placeholder-icon">📸</span>
  <span class="placeholder-text">Screenshot: [description]</span>
</div>
```

---

## Content Structure

### Ideal Length
- **1500-2500 words** for SEO
- ~6-10 minute read time
- Break into **5-8 main sections**

### Heading Hierarchy
```
H1: Article Title (only one)
  H2: Main Section
    H3: Subsection
    H3: Subsection
  H2: Main Section
    H3: Subsection
```

### Required Elements
1. **Hero area** - Title, tag, meta, featured image
2. **Table of Contents** - For posts 1500+ words
3. **Introduction** - Hook + what they'll learn (2-3 paragraphs)
4. **Body sections** - H2 with supporting content
5. **Visual breaks** - Images, tables, highlight boxes
6. **CTA** - Soft sell, one per post
7. **FAQ section** - 3-5 questions (schema markup)
8. **Related posts** - 2 links to other articles

### Paragraph Style
- **2-3 sentences max** per paragraph
- Use bullet points for lists (3+ items)
- Bold **key phrases** for scanning
- One idea per paragraph

---

## Visual Components

### App/Product Cards
```
┌─────────────────────────────────┐
│  [Screenshot/Image]             │
│                                 │
│  AppName                        │
│  ★ 4.9/5 · website.com         │
│                                 │
│  Description paragraph...       │
│                                 │
│  [tag] [tag] [tag]             │
└─────────────────────────────────┘
```

### Comparison Tables
Use for 3+ items being compared:
```
┌──────────────┬─────────┬─────────┬─────────┐
│ Feature      │ App A   │ App B   │ Wontsy  │
├──────────────┼─────────┼─────────┼─────────┤
│ Universal    │ ✓       │ ✓       │ ✓       │
│ Outfit build │ ✗       │ ✗       │ ✓       │
│ Price alerts │ ✓       │ ✗       │ ✓       │
└──────────────┴─────────┴─────────┴─────────┘
```

### Highlight Boxes
For key takeaways or tips:
```css
/* Gradient left border, soft background */
background: linear-gradient(135deg, rgba(255,112,217,0.08), rgba(110,193,228,0.08));
border-left: 4px solid #FF70D9;
```

### Quick Summary Box
At top of article for scanners:
```
┌─────────────────────────────────┐
│  ⚡ Quick Answer               │
│                                 │
│  [2-3 sentence summary]         │
│                                 │
│  Best for fashion: Wontsy       │
│  Best for gifts: GiftList       │
│  Best for price: Chestr         │
└─────────────────────────────────┘
```

### CTA Button
```css
background: linear-gradient(135deg, #FF70D9, #6EC1E4);
color: white;
padding: 16px 32px;
border-radius: 50px;
font-weight: 600;
```

---

## Writing Style

### Tone
- Conversational, not corporate
- Helpful friend giving advice
- Honest about competitors
- No fake enthusiasm

### Do's
- ✓ "Here's what to consider..."
- ✓ "If you're looking for X, try..."
- ✓ "Full disclosure: this is us, but..."
- ✓ Use "you" and "your"
- ✓ Short sentences

### Don'ts
- ✗ "BEST APP EVER!"
- ✗ "We tested and ranked..."
- ✗ "Our #1 pick is..."
- ✗ Fake reviews/testimonials
- ✗ Walls of text

### Wontsy Positioning
Never say "best overall" - instead:
> "If you shop for fashion and want to plan outfits before buying, Wontsy is built for that."

Show features → let reader decide:
> "Here's what a good wishlist app should have: [list]. Wontsy does all of this, plus outfit building."

---

## SEO Requirements

### Meta Tags
```html
<title>Keyword-Rich Title | Wontsy</title>
<meta name="description" content="150-160 chars with keyword">
<meta name="keywords" content="primary, secondary, related">
<link rel="canonical" href="https://wontsy.com/blog/slug">
```

### Schema Markup
Every post needs:
1. **Article schema** - headline, author, dates
2. **FAQ schema** - for FAQ section
3. **HowTo schema** - if step-by-step content

### Internal Linking
- **2-5 internal links** per 1000 words
- Link to related blog posts
- Link to /signup for CTAs
- Descriptive anchor text (not "click here")

---

## File Naming

### Blog Posts
`/blog/[keyword-slug].html`
- Use hyphens, not underscores
- Keep under 60 characters
- Include primary keyword

### Images
`/blog/images/[post-slug]-[description].webp`
- Example: `best-wishlist-apps-moonsift-screenshot.webp`

---

## Checklist Before Publishing

- [ ] Title includes primary keyword
- [ ] Meta description 150-160 chars
- [ ] H1 → H2 → H3 hierarchy correct
- [ ] Table of contents (if 1500+ words)
- [ ] 1 image per 300 words
- [ ] All images have alt text
- [ ] All images under 150KB
- [ ] Internal links to 2+ other posts
- [ ] FAQ section with 3-5 questions
- [ ] Schema markup added
- [ ] Mobile preview looks good
- [ ] CTA button works
- [ ] Related posts section
- [ ] Canonical URL set
- [ ] Added to sitemap.xml

---

## Template File

See `/blog/blog-template.html` for starter HTML with all components.
