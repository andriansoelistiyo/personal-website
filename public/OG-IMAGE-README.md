# OG Image for Social Sharing

⚠️ **IMPORTANT**: You need to create and add `og-image.jpg` to this folder for optimal social media sharing.

## Why This Is Important:
When people share your portfolio on LinkedIn, Facebook, Twitter, or WhatsApp, this image will appear as the preview card. Without it, they'll see a broken image placeholder.

## Specifications:
- **Size**: 1200x630px (Facebook/LinkedIn/Twitter optimal size)
- **Format**: JPG or PNG (rename to `og-image.jpg`)
- **File size**: Keep under 1MB for fast loading
- **Location**: Save as `/public/og-image.jpg`

---

## 🎨 Design Recommendations:

### Content to Include:
1. **Your Name**: "Andrian Soelistiyo" (large, bold, black)
2. **Title**: "UI/UX Designer" (medium, gray)
3. **Tagline**: "Transforming complex systems into intuitive interfaces" (small, light gray)
4. **Background**: White or very light gray (#F5F5F5)
5. **Optional**: Minimal geometric shapes or grid pattern

### Typography:
- **Heading**: Bricolage Grotesque (Bold/800)
- **Body**: Inter (Light/300 or Regular/400)

### Color Palette:
- **Black**: #000000
- **White**: #FFFFFF  
- **Gray**: #737373 or #525252
- **Background**: #FFFFFF or #FAFAFA

---

## 🚀 Quick Creation Methods:

### Option 1: Canva (Easiest - 5 minutes)
1. Go to [canva.com](https://canva.com)
2. Click "Custom Size" → Enter 1200 x 630 px
3. Design:
   ```
   Background: White (#FFFFFF)
   
   Text 1: "Andrian Soelistiyo"
   - Font: Montserrat Bold or similar
   - Size: 72-80pt
   - Color: Black (#000000)
   - Position: Center, upper third
   
   Text 2: "UI/UX Designer"
   - Font: Montserrat Regular
   - Size: 36-40pt
   - Color: Gray (#525252)
   - Position: Below name
   
   Optional: Add thin black line or minimal shapes
   ```
4. Download as JPG (High quality)
5. Rename to `og-image.jpg`

### Option 2: Figma (Professional - 10 minutes)
1. Create new file in Figma
2. Create Frame: 1200 x 630px
3. Design matching your portfolio's minimal aesthetic:
   - Use actual Bricolage Grotesque font
   - Match exact color codes (#000000, #FFFFFF)
   - Keep it super minimal (less is more)
4. Export: File → Export → JPG (High quality)
5. Save as `og-image.jpg`

### Option 3: Use Screenshot (Quick hack - 2 minutes)
1. Open your portfolio homepage
2. Take clean screenshot of Hero section
3. Open in any image editor (Preview on Mac, Paint on Windows, Photoshop)
4. Resize/crop to 1200 x 630px
5. Export as JPG
6. Save as `og-image.jpg`

### Option 4: Use a Template
Download a minimal template from:
- [Figma Community](https://www.figma.com/community/search?resource_type=mixed&sort_by=relevance&query=og%20image&editor_type=all)
- [Canva Templates](https://www.canva.com/templates/?query=social%20media%20og)

---

## 📍 Where to Save:
Place the file here: `/public/og-image.jpg`

The code is already configured to use this path:
```html
<meta property="og:image" content="https://andriansoelistiyo.netlify.app/og-image.jpg" />
```

---

## ✅ Testing After Upload:

After adding the image and deploying, test social sharing with these tools:

1. **Facebook Debugger**:  
   https://developers.facebook.com/tools/debug/
   - Paste your URL
   - Click "Scrape Again" to refresh cache

2. **LinkedIn Post Inspector**:  
   https://www.linkedin.com/post-inspector/
   - Paste your URL
   - Check preview

3. **Twitter Card Validator**:  
   https://cards-dev.twitter.com/validator
   - Paste your URL
   - Generate preview

4. **WhatsApp**:  
   - Just paste link in any chat
   - Preview should appear

---

## 🎯 Expected Result:

When someone shares `https://andriansoelistiyo.netlify.app/` on social media, they'll see:

```
┌─────────────────────────────────────┐
│                                     │
│      Andrian Soelistiyo            │
│      UI/UX Designer                 │
│                                     │
│  [Your minimalist design here]      │
│                                     │
└─────────────────────────────────────┘
  Andrian Soelistiyo - UI/UX Designer Portfolio
  UI/UX Designer specializing in transforming...
```

---

## 💡 Pro Tips:

1. **Keep it simple**: Your portfolio is minimal - the OG image should be too
2. **High contrast**: Black on white works best for thumbnails
3. **Test on mobile**: Most shares are viewed on phones
4. **Update regularly**: Change the design when you rebrand
5. **File size matters**: Compress to under 500KB for faster loading

---

## ⚠️ Don't:
- ❌ Use too much text (hard to read in small preview)
- ❌ Use thin fonts (won't be readable)
- ❌ Use gradients or complex patterns
- ❌ Make file size over 1MB
- ❌ Use image with important details at edges (might get cropped)

---

**Need help?** The design should take 5-10 minutes maximum. Keep it simple, professional, and consistent with your portfolio's aesthetic.

Once created, commit and push:
```bash
git add public/og-image.jpg
git commit -m "Add OG image for social sharing"
git push origin main
```

Then test with the validators above! 🚀

