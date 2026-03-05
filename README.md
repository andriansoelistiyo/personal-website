# 🎨 Andrian Soelistiyo - Portfolio Website

A minimal, monochrome portfolio website for UI/UX Designer with production-ready SEO optimization, bilingual support, and Google Analytics tracking.

![Portfolio Preview](https://andriansoelistiyo.netlify.app/og-image.jpg)

## 🚀 Live Demo

**Production**: [andriansoelistiyo.netlify.app](https://andriansoelistiyo.netlify.app)

---

## ✨ Features

### Design & UX
- 🎨 **Super Minimal Design**: Monochrome palette (Black, White, Neutral Gray)
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile
- ✨ **Smooth Animations**: Powered by Motion (Framer Motion)
- 🌗 **Clean Typography**: Bricolage Grotesque (Headings) + Inter (Body)

### Technical Features
- ⚡ **Lightning Fast**: Built with Vite + React
- 🔍 **SEO Optimized**: Structured data, meta tags, sitemap
- 🌐 **Bilingual Support**: English/Indonesian toggle (Project pages)
- 📊 **Google Analytics**: Full tracking (G-TJ3R7N3PB5)
- 🎯 **Event Tracking**: Downloads, clicks, project views
- 🖼️ **Lazy Loading**: Optimized image loading
- 📱 **Social Media Ready**: Open Graph & Twitter Cards

### Content Sections
1. **Hero** - Introduction with download resume CTA
2. **Portfolio** - Featured projects with thumbnails
3. **Experience** - Work history timeline
4. **Contact** - Email, LinkedIn, WhatsApp links

### Project Case Studies
- Full case study pages for each project
- Bilingual content (EN/ID)
- Sections: Overview, Problem Statement, Research, Personas, User Journey, Design Screens, Usability Testing, Impact, Key Learnings
- Image lightbox with keyboard navigation

---

## 🛠️ Tech Stack

- **Framework**: React 18.3.1
- **Build Tool**: Vite 6.3.5
- **Routing**: React Router DOM 7.13.0
- **Styling**: Tailwind CSS 4.1.12
- **Animations**: Motion 12.23.24
- **SEO**: React Helmet Async 2.0.5
- **Icons**: Lucide React 0.487.0
- **Deployment**: Netlify

---

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Clone & Install
```bash
# Clone repository
git clone https://github.com/yourusername/personal-website.git
cd personal-website

# Install dependencies
npm install
# or
pnpm install
```

### Development
```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
personal-website/
├── public/
│   ├── _headers              # Netlify headers (cache, security)
│   ├── _redirects            # SPA routing
│   ├── 404.html              # Custom 404 page
│   ├── robots.txt            # Search engine directives
│   ├── sitemap.xml           # XML sitemap
│   ├── favicon.svg           # Favicon
│   ├── og-image.jpg          # Social sharing image (TO CREATE)
│   └── OG-IMAGE-README.md    # OG image creation guide
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── ui/           # Shadcn components
│   │   │   ├── figma/        # ImageWithFallback
│   │   │   ├── LanguageToggle.tsx
│   │   │   ├── ProjectDetail.tsx
│   │   │   └── ScrollReveal.tsx
│   │   ├── context/
│   │   │   └── LanguageContext.tsx
│   │   ├── data/
│   │   │   └── projects.ts   # Project case study data
│   │   ├── utils/
│   │   │   └── analytics.ts  # GA4 tracking functions
│   │   └── App.tsx           # Main app component
│   ├── imports/              # Figma imported assets
│   └── styles/
│       ├── fonts.css         # Google Fonts imports
│       └── theme.css         # Design tokens
├── .gitignore
├── netlify.toml              # Netlify config
├── package.json
├── vite.config.ts
├── SEO-CHECKLIST.md          # SEO implementation guide
└── README.md
```

---

## 🔍 SEO Implementation

### ✅ Completed
- Meta tags (title, description, keywords)
- Open Graph tags (Facebook/LinkedIn)
- Twitter Card tags
- Structured data (JSON-LD): Person, CreativeWork, Breadcrumb
- Canonical URLs
- robots.txt & sitemap.xml
- 404 page
- Security headers
- Performance optimization

### ⚠️ Manual Actions Required
1. **Create OG Image**: Follow `/public/OG-IMAGE-README.md`
2. **Submit to Search Console**: After deployment
3. **Test Social Sharing**: Facebook Debugger, LinkedIn Inspector

**Full checklist**: See `SEO-CHECKLIST.md`

---

## 📊 Analytics

### Google Analytics 4
- **Property ID**: G-TJ3R7N3PB5
- **Tracking**: Page views, events, conversions

### Tracked Events
- `download_resume` - Resume download clicks
- `contact_click` - Contact button clicks (email, LinkedIn, WhatsApp)
- `project_card_click` - Project card clicks on homepage
- `view_project` - "View Project" button clicks
- `back_to_home` - Back navigation clicks

---

## 🌐 Deployment

### Netlify (Recommended)

#### Option 1: GitHub Integration
1. Push code to GitHub
2. Login to [Netlify](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect GitHub repository
5. Build settings (auto-detected):
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Deploy!

#### Option 2: CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

### Environment Variables
None required for production. All configs are in code.

---

## 🎯 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📝 Content Updates

### Add New Project
1. Add project images to `/public/images/projects/your-project/`
2. Update `/src/app/data/projects.ts`:
```typescript
{
  id: 3,
  slug: "your-project-slug",
  title: "Project Title",
  // ... add all required fields
}
```
3. Update `/public/sitemap.xml` with new project URL
4. Rebuild and deploy

### Update Resume Link
Edit Google Drive link in:
- Line 165: Hero section "Download Resume" button
- Line 257: Experience section "Download Resume" button

### Update Contact Info
Edit links in:
- Line 164-172: Hero section (if resume link changes)
- Line 286-313: Contact section (email, LinkedIn, WhatsApp)

---

## 🐛 Troubleshooting

### Build Errors
```bash
# Clear cache
rm -rf node_modules dist
npm install
npm run build
```

### Netlify Deploy Fails
- Check build command in `netlify.toml`
- Ensure Node version is 18+
- Check Netlify build logs

### Social Preview Not Showing
1. Create `og-image.jpg` (see `OG-IMAGE-README.md`)
2. Clear cache in Facebook Debugger
3. Wait 24h for crawlers to update

---

## 📄 License

© 2026 Andrian Soelistiyo. All rights reserved.

---

## 👤 Contact

**Andrian Soelistiyo**  
UI/UX Designer

- 📧 Email: [andrian.socialmedia@gmail.com](mailto:andrian.socialmedia@gmail.com)
- 💼 LinkedIn: [andrian-soelistiyo](https://www.linkedin.com/in/andrian-soelistiyo-6a9324a1/)
- 💬 WhatsApp: [+62 877-8808-7738](https://wa.me/6287788087738)

---

## 🙏 Acknowledgments

- Design inspired by minimal portfolio trends
- Built with React + Vite
- Deployed on Netlify
- Icons by Lucide
- Fonts from Google Fonts

---

**Last Updated**: March 5, 2026  
**Version**: 1.0.0  
**Status**: Production Ready ✅
