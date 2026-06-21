# Portfolio Customization Guide

This guide will help you customize and extend your modern portfolio.

## 📝 Quick Edits

### 1. Update Your Information

Edit `src/data/portfolioData.js`:

```javascript
// Change your name, role, email
export const SKILLS = [
  { name: "Skill Name", icon: "emoji", level: 85, color: "#color" },
];

export const EXPERIENCE = [
  {
    role: "Your Role",
    company: "Company Name",
    location: "City",
    period: "Start – End",
    type: "Full-time",
    points: ["Achievement 1", "Achievement 2"],
    tags: ["Tech1", "Tech2"],
  },
];

export const PROJECTS = [
  {
    title: "Project Name",
    subtitle: "One-line description",
    period: "Timeline",
    emoji: "emoji",
    gradient: "from-color-500 to-color-600",
    glow: "#hexcolor",
    // ... more fields
  },
];
```

### 2. Customize Colors

Edit `src/context/ThemeContext.jsx`:

```javascript
const THEMES = {
  dark: {
    name: "dark",
    bg: "linear-gradient(135deg, #0a0a14 0%, #1a1a2e 100%)",
    primary: "#ec4899",      // Main accent
    secondary: "#a855f7",    // Secondary accent
    accent: "#06b6d4",       // Accent color
    text: "#ffffff",         // Text color
    textMuted: "rgba(255,255,255,0.6)",  // Muted text
    cardBg: "rgba(20,20,35,0.5)",        // Card background
    borderColor: "rgba(236,72,153,0.1)", // Border color
  },
};
```

### 3. Change Contact Email

Update email addresses in:
- `src/components/Navbar.jsx` - "Hire Me" button
- `src/components/Hero.jsx` - CTA buttons
- `src/components/AboutContactSection.jsx` - Contact section

Replace `eshant.yadav7017@gmail.com` with your email.

## 🎨 Advanced Customization

### Add a New Theme

1. Open `src/context/ThemeContext.jsx`
2. Add new theme to `THEMES` object:

```javascript
const THEMES = {
  // ... existing themes
  customTheme: {
    name: "customTheme",
    bg: "linear-gradient(135deg, #yourColor1 0%, #yourColor2 100%)",
    primary: "#primaryHex",
    secondary: "#secondaryHex",
    accent: "#accentHex",
    text: "#textHex",
    textMuted: "rgba(text, 0.6)",
    cardBg: "rgba(card, 0.5)",
    borderColor: "rgba(border, 0.1)",
  },
};
```

### Create a New Section

1. Create new component in `src/components/YourSection.jsx`:

```javascript
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export function YourSection() {
  const { theme } = useTheme();

  return (
    <section id="yoursection" style={{ padding: "100px 40px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Your content */}
      </div>
    </section>
  );
}
```

2. Update `src/App.jsx`:

```javascript
import { YourSection } from "./components/YourSection";

function AppContent() {
  return (
    <div>
      {/* ... other sections */}
      <YourSection />
    </div>
  );
}
```

3. Update navigation in `src/data/portfolioData.js`:

```javascript
export const NAV_LINKS = ["Home", "About", "Skills", "Experience", "Projects", "YourSection", "Contact"];
```

### Customize Animations

Edit animations in component files using Framer Motion:

```javascript
// Fade in animation
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  viewport={{ once: true }}
>
  Content
</motion.div>

// Hover effect
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Click me
</motion.button>
```

## 🎯 Common Customizations

### Change Font Family

Edit `src/styles/global.css`:

```css
body {
  font-family: 'Your Font', sans-serif;
}
```

### Add a Logo/Profile Image

1. Add image to `src/assets/`
2. Update `Navbar.jsx`:

```javascript
<img src={require("../assets/logo.png")} alt="Logo" style={{ width: "40px" }} />
```

### Update Social Links

Edit `src/data/portfolioData.js`:

```javascript
export const SOCIAL_LINKS = [
  { icon: "icon", label: "Platform", href: "https://..." },
];
```

### Customize Hero TypeWriter

Edit `src/components/Hero.jsx`:

```javascript
<TypeWriter
  words={[
    "Your Role 1",
    "Your Role 2",
    "Your Role 3",
  ]}
/>
```

## 🚀 Performance Tips

1. **Lazy Load Images**: Use Next.js Image component or similar
2. **Code Splitting**: Already implemented via React.lazy()
3. **Optimize Animations**: Reduce animation durations for slower devices
4. **Minify**: Use `npm run build` for production

## 📱 Responsive Tweaks

Edit breakpoints in components:

```javascript
display: gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))"  // Mobile first

// Or use media queries
@media (max-width: 768px) {
  .element { /* styles */ }
}
```

## 🔗 Adding External Links

```javascript
<a href="https://your-link.com" target="_blank" rel="noopener noreferrer">
  Link Text
</a>
```

## 📊 SEO Optimization

1. Update `public/index.html`:

```html
<meta name="description" content="Your portfolio description">
<meta name="keywords" content="keywords">
<title>Eshant Yadav - Developer</title>
```

2. Add Open Graph tags for social sharing

## 🧪 Testing

```bash
# Run tests
npm test

# Build for production
npm run build

# Serve production build locally
npm install -g serve
serve -s build
```

## 📦 Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop build folder to netlify.com
```

### GitHub Pages
Update `package.json`:
```json
"homepage": "https://yourusername.github.io/portfolio"
```

## 🐛 Troubleshooting

**Build errors**: Clear node_modules and reinstall
```bash
rm -rf node_modules
npm install
```

**Animations not showing**: Check Framer Motion version in package.json

**Styling issues**: Clear browser cache (Ctrl+Shift+Delete)

## 📚 Resources

- [React Documentation](https://react.dev)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com)
- [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)

---

Happy customizing! 🚀
