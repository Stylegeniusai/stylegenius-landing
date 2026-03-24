# StyleGenius Project Structure

## VIKTIGT - LÄS DETTA FÖRST

### Sidan är en BLOGG - ingen separat /blog route

Hemsidan (Index) har 4 kategorier:
- **COLOR** (`/color`) → ColorCategory.tsx → `getColorPosts()`
- **BODY** (`/body`) → BodyCategory.tsx → `getBodyPosts()`
- **STYLE** (`/style`) → StyleCategory.tsx → `getStylePosts()`
- **SHOPPING** (`/shopping`) → ShoppingCategory.tsx → `getShoppingPosts()`

### Blogginlägg - EN ENDA KÄLLA

Alla blogginlägg definieras i **`src/data/blogPosts.ts`** - ENDAST DENNA FIL.

Blog.tsx finns men är SEKUNDÄR. Rör den inte.

### Kategorier och var de visas

| Kategori | Visas på | Helper funktion |
|----------|----------|-----------------|
| `"Color Analysis"` | `/color` | `getColorPosts()` |
| `"Body Type"` | `/body` | `getBodyPosts()` |
| `"Fashion Aesthetic"` | `/style` | `getStylePosts()` |
| `"Style Guide"` | `/style` | `getStylePosts()` |
| `"Shopping Tech"` | `/shopping` | `getShoppingPosts()` |
| `"Fashion Trends"` | `/shopping` | `getShoppingPosts()` |

### När du lägger till ett nytt blogginlägg

1. Lägg till i `src/data/blogPosts.ts` med rätt kategori
2. Skapa sidan i `src/pages/`
3. Lägg till route i `src/App.tsx`
4. Lägg till i `public/sitemap.xml`

### Bilder

Alla bloggbilder ligger på Supabase Storage:
```
https://imkvzudhshjgqkoywosw.supabase.co/storage/v1/object/public/blog/
```

INGA MAPPAR - alla bilder direkt i `blog/` med prefix:
- `indie-sleaze-hero.png`
- `spring-2026-colors-hero.png`
- etc.

### Sidornas struktur (TSX)

Följ befintliga sidor som mall:
- `CoquetteAesthetic.tsx`
- `CleanGirlAesthetic.tsx`
- `BestColorsForPaleSkin.tsx`

Alla har:
- SEO component
- Navigation
- Hero section med gradient
- Content sections
- Related articles
- Footer
