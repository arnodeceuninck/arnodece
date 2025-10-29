# Arno Deceuninck - Portfolio Website

A modern, professional portfolio website showcasing my projects, skills, and experience as a Data Engineer and Computer Scientist.

## 🌟 Features

- **Modern Design**: Clean, professional interface with a dark theme
- **Cool Effects**: Text decryption animations, smooth scrolling, parallax effects, and interactive hover states
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **Performance Optimized**: Fast loading with lazy loading and optimized animations
- **Static HTML**: No build process required - works directly on GitHub Pages

## 🚀 Quick Start

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/arnodeceuninck/arnodece.git
cd arnodece
```

2. Open `index.html` in your browser:
   - Simply double-click the file, or
   - Use a local server (recommended):
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (if you have http-server installed)
   npx http-server
   ```

3. Open `http://localhost:8000` in your browser

### Deploy to GitHub Pages

1. Push your code to GitHub:
```bash
git add .
git commit -m "Initial portfolio website"
git push origin main
```

2. Enable GitHub Pages:
   - Go to your repository settings
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "main" branch
   - Click "Save"
   - Your site will be available at `https://arnodeceuninck.github.io/arnodece/`

## 📁 Project Structure

```
arnodece/
├── index.html          # Main HTML file
├── styles.css          # All styling and responsive design
├── script.js           # Interactive features and animations
└── README.md          # This file
```

## 🎨 Customization

### Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #0ea5e9;     /* Main brand color */
    --secondary-color: #8b5cf6;   /* Accent color */
    --bg-primary: #0f172a;        /* Background */
    /* ... more colors */
}
```

### Content

All content is in `index.html`. Key sections to update:

- **Hero Section**: Update name, title, and description
- **About Section**: Modify education and work experience
- **Projects Section**: Add/remove project cards
- **Contact Section**: Update contact information

### Effects

JavaScript effects can be customized in `script.js`:

- `TextDecrypt`: Adjust decryption speed and characters
- `initCardTilt`: Modify 3D tilt intensity
- `initCursorGlow`: Change glow size and color

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid, Flexbox, and animations
- **Vanilla JavaScript**: No frameworks - pure JS for all interactions
- **Google Fonts**: Inter and JetBrains Mono fonts

## 📱 Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px
- Small Mobile: < 480px

## ✨ Key Features Explained

### Text Decryption Effect
The name and subtitle use a cool decryption animation that cycles through random characters before revealing the actual text.

### Smooth Scrolling
Navigation links smoothly scroll to sections with proper offset for the fixed navbar.

### Card Tilt Effect
Project and contact cards have a subtle 3D tilt effect on hover (desktop only).

### Mobile Navigation
Hamburger menu for mobile devices with smooth slide-in animation.

### Cursor Glow
Subtle glow effect that follows the cursor on desktop devices.

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Arno Deceuninck**

- GitHub: [@arnodeceuninck](https://github.com/arnodeceuninck)
- LinkedIn: [arnodece](https://www.linkedin.com/in/arnodece)
- Email: arnodece@gmail.com

## 🙏 Acknowledgments

- Fonts from Google Fonts
- Icons from inline SVGs
- Inspiration from modern web design trends

---

Made with ❤️ and ☕ by Arno Deceuninck
