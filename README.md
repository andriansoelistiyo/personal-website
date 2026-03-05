# Andrian Soelistiyo - UI/UX Designer Portfolio

Portfolio website pribadi untuk Andrian Soelistiyo, seorang UI/UX Designer dengan 6+ tahun pengalaman dalam product design.

🌐 **Live Site:** https://andriansoelistiyo.netlify.app

---

## 🎨 Features

- ✅ **Minimal & Premium Design** - Monochrome color palette (Black, White, Neutral Gray)
- ✅ **Single Page with 4 Sections** - Hero, Portfolio, Resume, Contact
- ✅ **Dynamic Routing** - Project detail pages dengan React Router
- ✅ **Bilingual Support** - English/Indonesia language toggle
- ✅ **2 Featured Projects** - Kelola Keuangan & Holysnap dengan case study lengkap
- ✅ **SEO Optimized** - Meta tags, Open Graph, Twitter Cards, Structured Data
- ✅ **Google Analytics** - Comprehensive tracking (ID: G-TJ3R7N3PB5)
- ✅ **Fully Responsive** - Desktop, tablet, dan mobile
- ✅ **Performance Optimized** - Lazy loading, code splitting, image optimization

---

## 🛠️ Tech Stack

- **Framework:** React 18
- **Routing:** React Router v7
- **Styling:** Tailwind CSS v4
- **Typography:** Bricolage Grotesque (Headings) + Inter (Body)
- **SEO:** react-helmet-async
- **Icons:** Lucide React
- **Build Tool:** Vite
- **Hosting:** Netlify

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or pnpm

### Installation
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

---

## 📦 Deployment

### Netlify (Drag & Drop)
1. Build project: `npm run build`
2. Drag `dist` folder ke https://app.netlify.com/
3. Ubah site name ke `andriansoelistiyo`
4. Done! ✅

**📖 Full Guide:** See `/NETLIFY-DEPLOYMENT-GUIDE.md`

---

## 📂 Project Structure

```
/
├── public/
│   ├── images/projects/      # Project images & assets
│   ├── _redirects            # Netlify SPA routing
│   ├── robots.txt            # SEO crawling rules
│   └── sitemap.xml           # Site structure
├── src/
│   ├── app/
│   │   ├── components/       # React components
│   │   ├── context/          # Language context
│   │   ├── data/             # Project data
│   │   ├── translations/     # Bilingual text
│   │   ├── utils/            # Analytics utilities
│   │   └── App.tsx           # Main app component
│   └── styles/               # Global styles
├── netlify.toml              # Netlify configuration
└── vite.config.ts            # Vite configuration
```

---

## 📊 Analytics

**Tracking ID:** G-TJ3R7N3PB5

### What's Tracked:
- ✅ Page views (automatic)
- ✅ Download Resume clicks
- ✅ Project card clicks
- ✅ View Project button clicks
- ✅ Contact link clicks
- ✅ Language toggle
- ✅ Navigation events

**📖 Full Guide:** See `/GOOGLE-ANALYTICS-GUIDE.md`

---

## 🎯 SEO Features

- ✅ **Meta Tags** - Title, description, keywords, canonical URLs
- ✅ **Open Graph** - Facebook/LinkedIn sharing optimization
- ✅ **Twitter Cards** - Twitter/X sharing optimization
- ✅ **Structured Data** - Person & CreativeWork schema (JSON-LD)
- ✅ **Breadcrumbs** - Navigation schema
- ✅ **Sitemap** - XML sitemap for search engines
- ✅ **Robots.txt** - Search engine crawling rules

**📊 SEO Score:** 95/100

**📖 Full Report:** See `/SEO-AUDIT-REPORT.md`

---

## 🌍 Bilingual Support

Website mendukung 2 bahasa:
- **English (EN)** - Default
- **Indonesian (ID)** - Toggle available on project pages

Language toggle tersedia di Project Detail pages untuk memberikan pengalaman bilingual yang seamless.

---

## 📝 Projects Featured

### 1. Kelola Keuangan
Personal finance management app dengan fokus pada simplicity dan user-friendly interface.

**Link:** https://kelola-keuangan-testing.netlify.app/

### 2. Holysnap (In Progress)
Social media platform untuk photographers dan content creators.

**Link:** https://small-uneven-96502327.figma.site/

---

## 📚 Documentation

Lengkap dengan documentation untuk semua aspek:

- 📄 **`NETLIFY-DEPLOYMENT-GUIDE.md`** - Complete deployment guide
- 📄 **`SEO-AUDIT-REPORT.md`** - Full SEO analysis & recommendations
- 📄 **`GOOGLE-ANALYTICS-GUIDE.md`** - Analytics setup & monitoring
- 📄 **`PRE-LAUNCH-CHECKLIST.md`** - Pre-launch checklist
- 📄 **`OG-IMAGE-GUIDE.md`** - Social media image guide
- 📄 **`QUICK-DEPLOY.txt`** - Quick reference card

---

## 🔧 Configuration Files

### `netlify.toml`
Netlify build configuration dengan:
- Build command: `npm run build`
- Publish directory: `dist`
- Security headers
- Cache optimization
- SPA redirects

### `vite.config.ts`
Vite configuration dengan:
- React plugin
- Tailwind CSS plugin
- Path aliases
- Asset handling

---

## 🎨 Design System

### Colors
- **Primary:** Black (#000000)
- **Background:** White (#FFFFFF)
- **Text:** Neutral Gray shades
- **Accent:** Pure monochrome

### Typography
- **Headings:** Bricolage Grotesque (Extrabold)
- **Body:** Inter (Light & Regular)
- **Line Height:** Relaxed for readability

### Layout
- **Max Width:** 1200px
- **Padding:** Responsive (6-12 on mobile, 12 on desktop)
- **Grid:** 2-column for projects
- **Spacing:** Consistent vertical rhythm

---

## 🔗 External Links

- **Resume:** Google Drive link
- **LinkedIn:** https://www.linkedin.com/in/andrian-soelistiyo-6a9324a1/
- **WhatsApp:** https://wa.me/6287788087738
- **Email:** andrian.socialmedia@gmail.com

---

## 📱 Responsive Design

Website fully responsive dengan breakpoints:
- **Mobile:** 375px - 767px
- **Tablet:** 768px - 1024px
- **Desktop:** 1025px+

---

## ⚡ Performance

- ✅ **Lazy Loading** - Images & components
- ✅ **Code Splitting** - Dynamic imports
- ✅ **Image Optimization** - Proper sizing & formats
- ✅ **Caching** - Static assets cached (1 year)
- ✅ **CDN** - Netlify global CDN

**Target Score:** 90+ on PageSpeed Insights

---

## 🔒 Security

- ✅ **HTTPS** - SSL certificate (Netlify automatic)
- ✅ **Security Headers** - XSS, Frame Options, Content Type
- ✅ **External Links** - rel="noopener noreferrer"
- ✅ **DDoS Protection** - Netlify built-in

---

## 🆘 Support & Troubleshooting

### Build Issues
```bash
# Clean install
rm -rf node_modules
npm install

# Clean build
rm -rf dist
npm run build
```

### Deployment Issues
- Check Netlify build logs
- Verify `_redirects` file exists
- Confirm all images in `/public/images/`

### Analytics Issues
- Wait 24-48 hours for data
- Check Real-time in GA dashboard
- Verify tracking ID: G-TJ3R7N3PB5

---

## 📄 License

© 2026 Andrian Soelistiyo. All rights reserved.

---

## 📞 Contact

- **Email:** andrian.socialmedia@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/andrian-soelistiyo-6a9324a1/
- **WhatsApp:** +62 877-8808-7738

---

**Built with ❤️ using React, Tailwind CSS, and Vite**

**Last Updated:** March 3, 2026
