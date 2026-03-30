# StyleGenius Blog Style Guide

## Target Audience
- **Primary:** Women 15-30 interested in fashion, style, color analysis
- **Behavior:** Browse on mobile (70%+), scan content, visual-first
- **Goal:** Find useful style info, discover their colors/body type, get outfit ideas

---

## Typography

### Fonts
- **Headings (H1, H2):** `'Playfair Display', Georgia, serif` — editorial, luxurious
- **Body text:** System sans-serif (Tailwind default)
- Keep it clean and readable

### Font Sizes (Tailwind classes)
| Element | Classes |
|---------|---------|
| H1 (title) | `text-4xl md:text-5xl lg:text-6xl font-semibold` |
| H2 (sections) | `text-3xl font-semibold` |
| H3 (subsections) | `text-2xl font-semibold` |
| Body text | `text-lg text-gray-700 leading-relaxed` |
| Captions | `text-sm text-gray-500` |

---

## Color Palette

| Color | Usage |
|-------|-------|
| `text-gray-900` | Headings |
| `text-gray-700` | Body text |
| `text-gray-600` | Secondary text |
| `text-gray-400` | Nudge text, captions |
| `bg-gray-50` | Content boxes, highlights |
| `text-rose-400` | Nudge links to personal analysis |
| `border-gray-200` | Borders, dividers |
| `from-rose-50 to-pink-50` | CTA background gradient |
| `from-rose-300 via-purple-300 to-amber-200` | Quiz gradient border |

---

## Layout

### Content Width
- Max container: `max-w-3xl` (article content)
- Hero section: `max-w-4xl` (images)
- Full page: `max-w-6xl`

### Structure (TSX)
```
<Navigation />
<Hero Section> — title, subtitle, category link
<Hero Image> — 16:9 aspect ratio
<article>
  <Intro paragraphs>
  <Table of Contents>
  <Content sections with H2/H3>
  <Images between sections>
  <Mid-article AnalysisCTA>
  <More content sections>
  <Related articles grid>
  <FAQ section>
</article>
<FAQ Schema (JSON-LD)>
<AnalysisCTA>
<Footer />
```

---

## Required Elements (every blog post)

### 1. SEO Component
```tsx
<SEO
  title="Keyword-Rich Title (2026)"
  description="150-160 chars with keyword"
  keywords="primary, secondary, related"
  canonicalUrl="/post-slug"
  ogImage="/image-name.png"
  ogType="article"
  article={{
    publishedTime: "2026-XX-XX",
    modifiedTime: "2026-XX-XX",
    section: "Color Analysis",
    tags: ["tag1", "tag2"]
  }}
  breadcrumbs={[
    { name: "Home", url: "/" },
    { name: "Category", url: "/category" },
    { name: "Post Title", url: "/post-slug" }
  ]}
/>
```

### 2. Hero Section
- Category link (uppercase, tracking-wider)
- H1 with Playfair Display
- Subtitle paragraph
- Separate hero image section (16:9)

### 3. Table of Contents
- Gray box (`bg-gray-50 p-6 md:p-8`)
- Anchor links to each section
- Include quiz, FAQ in TOC

### 4. Interactive Quiz (where relevant)
- Gradient border: `p-[2px] bg-gradient-to-br from-rose-300 via-purple-300 to-amber-200`
- White inner container
- Multi-step questions
- Result shows color swatches + link to personal analysis + retake
- Undertone quiz for color/skin posts
- Season quiz for "What Season Am I?"

### 5. Color Hex Swatches
For any color list, show visual swatches:
```tsx
{[
  { name: "Navy", hex: "#1B2951" },
  { name: "Emerald", hex: "#046A38" },
].map((c) => (
  <div key={c.name} className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded text-sm text-gray-700">
    <span className="w-4 h-4 rounded-full border border-gray-200 flex-shrink-0" style={{ backgroundColor: c.hex }} />
    {c.name}
  </div>
))}
```

### 6. Mid-article AnalysisCTA
- Import: `import AnalysisCTA from "../components/AnalysisCTA";`
- Place after a natural section break (roughly middle of article)
- Shows preview image, description, $89 price with $129 crossed out
- Trust line: "7-day money-back guarantee · Created by a style coach · In your inbox within 48h"

### 7. Nudge Links (after color/body sections)
For color posts:
```tsx
<p className="text-sm text-gray-400 mb-8">These are general guidelines — <Link to="/personal-analysis" className="text-rose-400 hover:text-rose-500 transition-colors">get colors picked specifically for you</Link></p>
```
For body type posts:
```tsx
<p className="text-sm text-gray-400 mb-8">These are general tips — <Link to="/personal-analysis" className="text-rose-400 hover:text-rose-500 transition-colors">get a guide made for your body type</Link></p>
```

### 8. Related Articles
- Grid of 4 links (`md:grid-cols-2 gap-4`)
- Link to related posts within same topic area
- Gray hover background

### 9. FAQ Section
- 6-7 questions relevant to the specific topic
- Collapsible `<details>` elements with `+` icon that rotates
- Include id="faq" anchor
```tsx
<details className="group border-b border-gray-200">
  <summary className="flex justify-between items-center cursor-pointer py-4 font-medium text-gray-900 hover:text-gray-600 transition-colors">
    {item.q}
    <span className="text-gray-400 group-open:rotate-45 transition-transform text-xl ml-4 flex-shrink-0">+</span>
  </summary>
  <p className="text-gray-700 pb-4 leading-relaxed">{item.a}</p>
</details>
```

### 10. FAQ Schema (JSON-LD)
After `</article>`, add structured data:
```tsx
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "...", "acceptedAnswer": { "@type": "Answer", "text": "..." }},
  ]
})}} />
```

### 11. Bottom AnalysisCTA + Footer
```tsx
<div className="container mx-auto px-4 max-w-4xl">
  <AnalysisCTA />
</div>
<Footer />
```

---

## Images

### Storage
All images in Supabase Storage: `https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/blog/`
No subfolders — flat structure with descriptive prefix names.

### Dimensions
| Type | Aspect Ratio | Usage |
|------|-------------|-------|
| Hero | 16:9 | Top of post |
| In-post | 1:1 (square) | Between sections |

### Naming Convention
`[post-slug]-[description].png`
Example: `pale-skin-cool-colors.png`, `color-combo-cobalt-white.png`

### Requirements
- Always include `alt` text
- Use `loading="lazy"` for below-fold images
- 1 image per 300 words minimum

---

## Adding a New Blog Post

### Step 1: Create page
`src/pages/YourPostName.tsx` — follow BestColorsForPaleSkin.tsx as template

### Step 2: Register in blogPosts.ts
```typescript
{
  title: "Post Title",
  description: "Short SEO description",
  image: `${BLOG_IMAGE_BASE}/your-image.png`,
  href: "/post-slug",
  category: "Color Analysis", // or Body Type, Fashion Aesthetic, Style Guide, Shopping Tech, Fashion Trends
  featured: false
}
```

### Step 3: Add route in App.tsx
```typescript
import YourPostName from "./pages/YourPostName";
// In Routes:
<Route path="/post-slug" element={<YourPostName />} />
```

### Step 4: Add to sitemap.xml
```xml
<url>
  <loc>https://stylegenius.app/post-slug</loc>
  <changefreq>monthly</changefreq>
  <priority>0.7</priority>
</url>
```

### Categories → Where they display
| Category | Route | Helper |
|----------|-------|--------|
| Color Analysis | `/color` | `getColorPosts()` |
| Body Type | `/body` | `getBodyPosts()` |
| Fashion Aesthetic | `/style` | `getStylePosts()` |
| Style Guide | `/style` | `getStylePosts()` |
| Shopping Tech | `/shopping` | `getShoppingPosts()` |
| Fashion Trends | `/shopping` | `getShoppingPosts()` |

---

## Writing Style

### Tone
- Conversational, not corporate
- Helpful friend giving advice
- Honest and direct
- No fake enthusiasm

### Do's
- Use "you" and "your"
- Short sentences, short paragraphs
- Bold key phrases for scanning
- Practical, actionable advice

### Don'ts
- No walls of text
- No "BEST EVER!" hype
- No generic filler paragraphs
- No emojis in content

---

## Checklist Before Publishing

- [ ] Page created in src/pages/
- [ ] SEO component with title, description, keywords, article schema, breadcrumbs
- [ ] H1 with Playfair Display
- [ ] Table of Contents with anchor links
- [ ] Hex color swatches (for color posts)
- [ ] Interactive quiz (where relevant)
- [ ] Mid-article AnalysisCTA
- [ ] Nudge links after color/body sections
- [ ] Images with alt text and lazy loading
- [ ] Related articles grid (4 links)
- [ ] FAQ section (6-7 questions) with details/summary
- [ ] FAQ JSON-LD schema markup
- [ ] Bottom AnalysisCTA before Footer
- [ ] Registered in blogPosts.ts
- [ ] Route added in App.tsx
- [ ] Added to sitemap.xml
- [ ] Mobile preview looks good
