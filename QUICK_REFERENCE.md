# 🚀 Quick Start & File Reference

## 📂 Key Files to Edit

### Your Content
- **Portfolio Data**: `src/data/portfolioData.js` - Skills, projects, experience
- **Profile Info**: `src/components/Hero.jsx` - Name, roles, description
- **Contact**: `src/components/AboutContactSection.jsx` - Email, socials

### Styling & Customization
- **Colors/Themes**: `src/context/ThemeContext.jsx` - 5 pre-made themes
- **Global Styles**: `src/styles/global.css` - Animations, effects
- **Component Styles**: Individual `.jsx` files - Inline styles

### Configuration
- **Package Info**: `package.json` - Dependencies, scripts
- **HTML Template**: `public/index.html` - SEO, meta tags

---

## 🎨 Available Themes

Click theme button in navbar to switch:
1. **Dark** - Purple & Pink gradients
2. **Ocean** - Blue & Cyan tones
3. **Neon** - Vibrant & Bold
4. **Forest** - Green & Teal
5. **Sunset** - Orange & Gold

---

## 📝 Common Changes

### Change Your Email
Search for: `eshant.yadav7017@gmail.com`
Replace with: `your@email.com`

### Update Skills
Edit `SKILLS` array in `src/data/portfolioData.js`:
```javascript
{ name: "Skill", icon: "emoji", level: 90, color: "#color" }
```

### Add Project
Add to `PROJECTS` array in `src/data/portfolioData.js`

### Change Colors
Edit theme in `src/context/ThemeContext.jsx`:
```javascript
primary: "#yourcolor"
```

---

## 🏃 Running Commands

```bash
npm start      # Dev server on localhost:3000
npm build      # Production build
npm test       # Run tests
npm audit fix  # Fix vulnerabilities
```

---

## 📊 File Structure Overview

```
my-portfolio/
├── src/
│   ├── components/          ← React components
│   ├── context/             ← Theme management
│   ├── data/                ← Your portfolio content
│   ├── hooks/               ← Animation utilities
│   ├── styles/              ← Global CSS
│   ├── assets/              ← Images & media
│   ├── App.jsx              ← Main component
│   └── index.js             ← Entry point
├── public/                  ← Static files
├── package.json             ← Dependencies
└── README.md                ← Documentation
```

---

## 🎬 Sections & Their Files

| Section | File | ID |
|---------|------|-----|
| Navigation | `Navbar.jsx` | - |
| Hero | `Hero.jsx` | home |
| About | `AboutContactSection.jsx` | about |
| Skills | `SkillsSection.jsx` | skills |
| Experience | `ExperienceSection.jsx` | experience |
| Projects | `ProjectsSection.jsx` | projects |
| Contact | `AboutContactSection.jsx` | contact |

---

## 🎯 Next Steps

1. ✅ Portfolio is ready to use!
2. 📝 Update your information in `src/data/portfolioData.js`
3. 🎨 Test all 5 themes with the navbar switcher
4. 📸 Add your profile picture to `src/assets/`
5. 🚀 Deploy to Vercel, Netlify, or GitHub Pages

---

## 🆘 Help & Resources

- **Customization**: See `CUSTOMIZATION_GUIDE.md`
- **Implementation Details**: See `IMPLEMENTATION_SUMMARY.md`
- **Main README**: See `README.md`
- **React Docs**: https://react.dev
- **Framer Motion**: https://www.framer.com/motion/

---

## ✨ Features Checklist

- ✅ Multiple themes (5 color schemes)
- ✅ Smooth animations throughout
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark mode included
- ✅ Fast performance
- ✅ Accessibility friendly
- ✅ TypeWriter effect
- ✅ Floating animations
- ✅ Hover effects
- ✅ Mobile menu

---

## 📞 Contact

**Email**: eshant.yadav7017@gmail.com  
**LinkedIn**: linkedin.com/in/yeshant1  
**GitHub**: github.com/yeshant1

---

**Built with ❤️ | React + Framer Motion + Modern CSS**
