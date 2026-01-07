# StyleGenius File Structure

## LIVE FILES

### Main Pages (Static HTML in /public/)
These are the LIVE pages served directly:
- `public/home.html` - Homepage (/)
- `public/app.html` - App page (/app)
- `public/extension.html` - Extension page (/extension)
- `public/virtual-try-on.html` - Virtual Try-On feature page
- `public/price-tracking.html` - Price Tracking feature page
- `public/style-analysis.html` - Style Analysis feature page

### Blog Pages (React in /src/pages/)
All blog posts are React components:
- `src/pages/Blog.tsx` - Blog index
- `src/pages/WhatColorsSuitMe.tsx`
- `src/pages/KibbeBodyTypes.tsx`
- `src/pages/WarmVsCoolUndertones.tsx`
- ... (all other .tsx files in src/pages/ are blog posts)

### Static Assets (/public/)
- Images: `/public/*.png`
- Favicon: `/public/mainavatar.png`

## IMPORTANT
- Main pages (home, app, extension, etc.) are STATIC HTML in /public/
- Blog pages are REACT components in /src/pages/
- DO NOT create React components for main pages
- DO NOT look at /src/pages/ for main page code
