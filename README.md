# 🔐 POST-QUANTUM CRISIS | 2029 COUNTDOWN

A memey, cyberpunk educational website about post-quantum cryptography and Google's 2029 deadline.

**Live countdown to the end of classical encryption as we know it.** 💀

## 🚀 QUICK START

### Prerequisites
- Node.js 16+ installed
- npm or yarn

### Installation

```bash
# Clone or download the project
cd vite-pqc-meme

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The site will automatically open at `http://localhost:5173` 🎉

### Build for Production

```bash
npm run build
npm run preview
```

## 🎨 WHAT'S INSIDE

### Features
- ⏰ **LIVE COUNTDOWN TIMER** - Days, hours, minutes, seconds until 2029
- 🌀 **Glitch Effects** - CyberPunk aesthetic with real glitch animations
- 🎯 **Memey Content** - Educational content delivered with maximum personality
- 📱 **Responsive Design** - Works on mobile, tablet, desktop
- ✨ **Smooth Animations** - Scroll animations, hover effects, pulsing elements
- 🔥 **Neon Aesthetic** - Cyan, green, pink, and purple vibes

### Tech Stack
- **Vite** - Lightning-fast build tool
- **React 18** - UI framework
- **Tailwind CSS** - Utility-first styling
- **Custom CSS Animations** - Glitch, flicker, scan effects

## 📁 PROJECT STRUCTURE

```
vite-pqc-meme/
├── src/
│   ├── components/
│   │   ├── Countdown.jsx       # Countdown timer (years/days/hours/mins/secs)
│   │   ├── ThreatSection.jsx   # Quantum threat explanation
│   │   ├── SolutionSection.jsx # Post-quantum crypto solutions
│   │   └── GlitchText.jsx      # Glitch effect component
│   ├── App.jsx                 # Main app structure
│   ├── index.css               # Global styles + animations
│   └── main.jsx                # React entry point
├── index.html                  # HTML template
├── package.json                # Dependencies
├── tailwind.config.js          # Tailwind configuration
├── vite.config.js              # Vite configuration
└── postcss.config.js           # PostCSS configuration
```

## 🎮 CUSTOMIZATION

### Change the Target Year
Edit `src/components/Countdown.jsx`:
```javascript
const target = new Date('2029-01-01').getTime();
// Change 2029 to your year
```

### Modify Colors
Edit `tailwind.config.js`:
```javascript
neon: {
  pink: '#ff0080',
  green: '#39ff14',
  purple: '#b300ff',
  cyan: '#00ffff',
}
```

### Add More Sections
Create new components in `src/components/` and import them in `App.jsx`

### Custom Fonts
Edit `index.html` to import different Google Fonts

## 🔧 DEVELOPMENT

### Add new dependencies
```bash
npm install package-name
```

### Hot Module Replacement (HMR)
Changes are reflected in the browser instantly. Just save and refresh!

### Debug
- Open DevTools (F12)
- Check console for errors
- Use React DevTools extension for component inspection

## 📚 EDUCATIONAL CONTENT SECTIONS

1. **Hero Section** - Glitchy countdown timer and main CTA
2. **Threat Section** - 4 main threats of quantum computing
3. **Solution Section** - Post-quantum crypto methods:
   - Lattice-based (ML-KEM, ML-DSA)
   - Hash-based (SPHINCS+)
   - Multivariate polynomial
   - Code-based (Classic McEliece)
4. **NIST Standards** - Current approved algorithms
5. **Action Items** - What developers and users should do

## 🌐 DEPLOYMENT

### Deploy to Vercel
```bash
npm i -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Upload the 'dist' folder to Netlify
```

### Deploy to GitHub Pages
1. Add to `package.json`: `"homepage": "https://username.github.io/repo"`
2. Run `npm run build`
3. Push `dist` to GitHub

## 📖 LEARNING RESOURCES

- [NIST Post-Quantum Cryptography](https://csrc.nist.gov/projects/post-quantum-cryptography/)
- [Google Quantum Safe Cryptography](https://blog.google/technology/quantum-safety/)
- [liboqs - Open Quantum Safe](https://liboqs.org/)
- [Post-Quantum Cryptography - Wikipedia](https://en.wikipedia.org/wiki/Post-quantum_cryptography)

## 🤝 CONTRIBUTING

Feel free to fork, modify, and make it even more memey!

Suggestions:
- Add more threat scenarios
- Create interactive crypto demos
- Add PQC algorithm visualizations
- Expand the meme energy 📈

## 📄 LICENSE

This project is open source and available under the MIT License.

## 🎯 GOALS

- ✅ Educate people about post-quantum cryptography
- ✅ Make cryptography FUN and accessible
- ✅ Build urgency around the 2029 deadline
- ✅ Showcase modern web dev (Vite + React + Tailwind)
- ✅ Maximum meme energy while being factually accurate

---

**REMEMBER: Stay quantum-safe, stay based.** 🔐✨

Made with 💚 for degens who care about cryptography
# PQS
