# Harish Kumar P — XR Developer Portfolio

Production-ready portfolio website for **Harish Kumar P**, an XR Developer specializing in Unity C# AR/VR development.

## 🚀 Live Demo

*Deploy to your preferred platform (Vercel, Netlify, GitHub Pages, etc.)*

## ✨ Features

- **Hero Section** — Animated background, professional introduction, core competency badges
- **About Section** — Professional bio, focus areas, statistics cards
- **Projects Showcase** — 4 production Unity XR projects with GitHub links and Cloudinary video demos:
  - VR Walkthrough (XR Interaction Toolkit, OpenXR, Meta Quest)
  - AI Chatbot Integration in Unity (Gemini API, TextMeshPro)
  - AR Car Showcase (Vuforia Image Targets, Android)
  - Interactive AR Storybook (VRTAM Studios, Vuforia, private repo)
- **Skills Section** — 20 categorized skills with official brand logos (Unity, Vuforia, Unreal, Blender, Maya, Git, Android, C#, Figma, Fork, OpenXR, Gemini, VS Code, etc.)
- **Experience Timeline** — VRTAM Studios internship + independent projects
- **Contact Form** — Gmail compose integration, form validation
- **Responsive Design** — Mobile-first, dark theme, smooth animations

## 🛠 Tech Stack

| Category | Technologies |
|----------|--------------|
| **Frontend** | React 19, Vite 8, Tailwind CSS 3 |
| **Icons** | Lucide React, Custom SVG logos |
| **Fonts** | Inter, Space Grotesk, JetBrains Mono (Google Fonts) |
| **Linting** | Oxlint |
| **Build** | Vite (ESM, optimized production bundle) |
| **Deployment** | Static hosting (Vercel, Netlify, GitHub Pages, Cloudflare Pages) |

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Hero.jsx         # Hero section with HKP placeholder
│   ├── About.jsx        # Bio, focus areas, stats
│   ├── Projects.jsx     # Project cards + video modal
│   ├── Skills.jsx       # Skill cards with brand logos
│   ├── Experience.jsx   # Experience timeline
│   ├── Contact.jsx      # Contact form + Gmail compose
│   ├── Footer.jsx       # Footer with social links
│   ├── Navbar.jsx       # Responsive navigation
│   ├── SectionTitle.jsx # Reusable section header
│   ├── VideoModal.jsx   # Cloudinary video popup
│   └── BrandIcons.jsx   # SVG social icons
├── data/                # Portfolio content
│   ├── profile.js       # Personal info, socials, badges
│   ├── projects.js      # Project data + Cloudinary URLs
│   ├── skills.js        # 20 skills across 5 categories
│   └── experience.js    # Work experience entries
└── assets/              # Static assets
public/
├── assets/              # Images, icons, backgrounds
│   ├── icons/           # 14 brand SVG logos
│   ├── projects/        # Project thumbnails
│   ├── profile/         # HKP placeholder images
│   └── backgrounds/     # Hero pattern
└── favicon.svg          # Custom VR headset favicon
```

## 🔧 Local Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Run linting
npm run lint

# Production build
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel --prod
```

### Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

### GitHub Pages
```bash
npm run build
# Push dist/ to gh-pages branch or use GitHub Actions
```

### Cloudflare Pages
Connect repository → Build command: `npm run build` → Output: `dist`

## 🔐 Environment & Secrets

- **No `.env` files required** — All project data is in `src/data/`
- **Cloudinary video URLs** are in `src/data/projects.js` (public delivery URLs)
- **No API keys, credentials, or tokens** in the repository
- **Contact form** uses Gmail compose URL (no backend needed)

## 📄 License

MIT License — Feel free to use as reference for your own portfolio.

---

**Harish Kumar P** — XR Developer  
Unity • Vuforia • XR Interaction Toolkit • Meta Quest • C#  
[GitHub](https://github.com/heyharish-io) • [LinkedIn](https://www.linkedin.com/in/harish2303/) • [Email](mailto:heyharish.io@gmail.com)