# Virata Interior & Exterior Design - 3D Immersive Website

A luxury, modern, and immersive 3D interactive design system for a premium interior and exterior design firm. Now featuring cutting-edge Three.js 3D visualization technology.

## 🎨 Design System Overview + 3D Features

This website is built on a complete, production-ready design system featuring:

- **Color Palette:** Dark Navy, Off White, Luxury Gold, and stone grays
- **Typography:** Playfair Display (headings), Inter (body), Cinzel (accents)
- **Spacing System:** 8px-based grid system (4px - 80px)
- **Components:** 20+ fully specified components (buttons, cards, forms, navigation)
- **Responsive Design:** Mobile-first approach with 3 breakpoints (480px, 1024px, 1440px)
- **Dark Mode:** Complete dark mode support with theme toggle
- **Accessibility:** WCAG AA compliant design and code

### ✨ NEW - 3D Immersive Features

- **Three.js Integration:** Advanced 3D graphics rendering engine
- **Interactive 3D Elements:**
  - Hero Section: Animated 3D rotating cubes with luxury gold coloring
  - About Section: 3D textured cube with multi-face materials
  - Service Icons: 3D spinning icosphere geometries with real-time rotation
  - Project Cards: 3D pyramid/tetrahedron shapes representing architectural projects
- **Dynamic Lighting:** Directional and ambient lighting for realistic 3D effects
- **Responsive 3D Canvas:** Automatically adjusts to screen size and orientation
- **Smooth Animations:** Continuous rotation and float animations for engaging visuals
- **SVG 3D Images:** Pre-rendered 3D SVG graphics for branding elements

## 📂 Project Structure

```
virata-website/
├── index.html                 # Homepage
├── pages/
│   ├── about.html            # About page
│   ├── services.html         # Services page
│   ├── portfolio.html        # Portfolio/Projects page
│   ├── contact.html          # Contact page
│   └── project-detail.html   # Project detail page
├── css/
│   ├── styles.css            # Main stylesheet (design system)
│   └── responsive.css        # Responsive breakpoints
├── js/
│   └── main.js               # JavaScript interactivity
├── assets/
│   ├── images/               # Project images
│   ├── icons/                # SVG icons
│   └── fonts/                # Custom fonts (if any)
├── README.md                 # This file
├── package.json              # Dependencies
└── .gitignore               # Git ignore file
```

## 🚀 Getting Started

### Prerequisites

- Any modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor or IDE (VS Code recommended)
- Node.js (optional, for local development server)

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/yourusername/virata-website.git
cd virata-website
```

2. **Local development (optional with Node.js):**
```bash
# Install dependencies
npm install

# Start local development server
npm start

# The website will be available at http://localhost:8000
```

3. **Or simply open in browser:**
```bash
# Open index.html directly in browser
# On macOS:
open index.html

# On Windows:
start index.html

# On Linux:
xdg-open index.html
```

## 🎯 Features

### Core Features
- ✅ **Responsive Design** - Perfect on mobile, tablet, desktop
- ✅ **Dark Mode** - Toggle-able dark mode with persistence
- ✅ **Smooth Animations** - Page load, scroll, and hover animations
- ✅ **Mobile Menu** - Hamburger menu for mobile devices
- ✅ **Accessibility** - WCAG AA compliant, keyboard navigation
- ✅ **Performance Optimized** - Fast loading, optimized assets
- ✅ **SEO Ready** - Semantic HTML, meta tags, structured data

### 🌐 3D Immersive Features
- ✨ **Three.js 3D Engine** - Professional 3D graphics rendering
- ✨ **Interactive 3D Hero** - Animated rotating gold cubes in hero section
- ✨ **3D About Section** - Textured rotating cube showcasing luxury materials
- ✨ **Service Icon 3D** - Spinning icosphere shapes with dynamic lighting
- ✨ **Project Card 3D** - Pyramid geometries representing architectural projects
- ✨ **Dynamic Lighting** - Directional and ambient lighting for depth perception
- ✨ **Responsive Canvas** - 3D elements adapt to all screen sizes
- ✨ **Hardware Acceleration** - GPU-accelerated rendering for smooth performance
- ✨ **SVG 3D Assets** - Vector-based 3D visual elements included

### Pages Included
1. **Homepage** - Hero, trust indicators, services, projects, testimonials
2. **About** - Company story, mission/vision, team, timeline
3. **Services** - Service details, process, features
4. **Portfolio** - Project gallery, filters, detail pages
5. **Contact** - Contact form, location, inquiry

### Components
- Buttons (Primary, Secondary, Tertiary)
- Form inputs (Text, Email, Textarea, Select)
- Cards (Service, Project, Testimonial)
- Navigation (Header, Mobile Menu, Footer)
- Modals and overlays
- Icons and avatars

## 🎨 Design System Reference

### Colors
```css
Primary:      #0F172A (Dark Navy)
Secondary:    #F8F5F2 (Off White)
Accent:       #C9A96E (Luxury Gold)
Text Light:   #87827D (Stone Gray)
Border:       #D4C5B0 (Warm Sand)
```

### Typography
```css
Headings:  Playfair Display (Serif)
Body:      Inter, Poppins (Sans-serif)
Accent:    Cinzel (Serif)
```

### Spacing
```css
xs:  4px     sm:  8px      md:  16px    lg:  24px
xl:  32px    2xl: 48px     3xl: 64px    4xl: 80px
```

### Responsive Breakpoints
```css
Mobile:   480px (max-width)
Tablet:   768px - 1024px
Desktop:  1025px and above
```

## 📖 Usage Examples

### Using Buttons

```html
<!-- Primary Button -->
<button class="btn btn-primary">Book Consultation</button>

<!-- Secondary Button -->
<button class="btn btn-secondary">Learn More</button>

<!-- Tertiary Link -->
<a href="#" class="btn-link">Explore Portfolio →</a>

<!-- Button Sizes -->
<button class="btn btn-primary btn-sm">Small</button>
<button class="btn btn-primary btn-md">Medium</button>
<button class="btn btn-primary btn-lg">Large</button>
```

### Using Cards

```html
<!-- Service Card -->
<div class="service-card">
    <div class="service-icon">🏠</div>
    <h3 class="service-title">Interior Design</h3>
    <p class="service-desc">Description here...</p>
</div>

<!-- Project Card -->
<div class="project-card">
    <div class="project-overlay"></div>
    <div class="project-content">
        <p class="project-category">RESIDENTIAL</p>
        <h3 class="project-title">Project Name</h3>
    </div>
</div>
```

### Using Dark Mode

```javascript
// Toggle dark mode
document.getElementById('themeToggle').click();

// Or programmatically
virata.applyTheme('dark');  // or 'light'
```

## 🔧 Customization

### Change Colors

Edit `css/styles.css` and update CSS variables:

```css
:root {
    --color-accent: #C9A96E;  /* Change accent color */
    --color-primary: #0F172A; /* Change primary color */
    /* ... other colors */
}
```

### Change Fonts

Update font imports in `index.html` and CSS:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;600&display=swap" rel="stylesheet">
```

### Change Spacing

Modify spacing variables in `css/styles.css`:

```css
:root {
    --space-lg: 24px;  /* Default spacing */
    --space-xl: 32px;
    /* ... other spacing */
}
```

## 📱 Responsive Testing

Test at key breakpoints:

- **Mobile**: 375px (iPhone SE), 480px (Standard mobile)
- **Tablet**: 768px (iPad), 1024px (iPad Pro)
- **Desktop**: 1440px (Standard desktop), 1920px (Large screens)

### Using DevTools

1. Open browser DevTools (F12)
2. Click device toggle (phone icon)
3. Test at different screen sizes
4. Check touch interactions

## ♿ Accessibility

The site follows WCAG 2.1 Level AA standards:

- ✅ Proper heading hierarchy (H1-H6)
- ✅ Color contrast > 4.5:1
- ✅ Keyboard navigation
- ✅ ARIA labels where needed
- ✅ Semantic HTML
- ✅ Focus indicators visible

### Testing Accessibility

```bash
# Using axe DevTools (Chrome extension)
# Using WAVE (https://wave.webaim.org/)
# Using Lighthouse (built into Chrome)
```

## 📊 Performance

### Page Speed Targets

- Largest Contentful Paint (LCP): < 2.5s
- First Input Delay (FID): < 100ms
- Cumulative Layout Shift (CLS): < 0.1

### Optimization Tips

1. **Image Optimization:** Compress images before adding
2. **Lazy Loading:** Use `loading="lazy"` on images
3. **Minification:** Minify CSS and JavaScript in production
4. **CDN:** Use CDN for assets

## 🔍 SEO

### Meta Tags

```html
<meta name="description" content="...">
<meta name="keywords" content="...">
<meta name="author" content="...">
<meta name="theme-color" content="#0F172A">
```

### Structured Data

Schema.org markup included for:
- Organization
- LocalBusiness
- Service
- BreadcrumbList

## 🧪 Testing

### Manual Testing Checklist

- [ ] Test all pages load
- [ ] Test responsive design (mobile, tablet, desktop)
- [ ] Test dark mode toggle
- [ ] Test mobile menu
- [ ] Test all buttons and links
- [ ] Test forms submission
- [ ] Test keyboard navigation
- [ ] Test with screen reader

### Automated Testing

```bash
# Using Lighthouse
npm run lighthouse

# Using accessibility checker
npm run accessibility-check
```

## 📞 Contact & Support

For design system documentation, see:
- `VIRATA_DESIGN_SYSTEM.md` - Complete specifications
- `VIRATA_FIGMA_STRUCTURE_GUIDE.md` - Figma setup guide
- `VIRATA_IMPLEMENTATION_GUIDE.md` - Implementation best practices

## 🚀 Deployment

### GitHub Pages

1. Push code to GitHub
2. Go to repository Settings
3. Scroll to "GitHub Pages"
4. Select `main` branch as source
5. Site will be published at `https://username.github.io/virata-website`

### Netlify

1. Connect GitHub repository
2. Set build command: (leave empty for static site)
3. Set publish directory: `.` (root)
4. Deploy

### Traditional Hosting

1. Upload all files to web server
2. Ensure `.html`, `.css`, `.js` files are in correct directories
3. Test all pages load correctly

## 📝 License

This design system is provided as-is for use by Virata Interior & Exterior and authorized team members.

## 🤝 Contributing

For improvements or bug reports:
1. Create an issue on GitHub
2. Describe the problem
3. Provide screenshots/steps to reproduce
4. Submit pull request with fix

## ✨ Credits

- Design System: Senior UX/UI Designer
- Implementation: Virata Team
- Fonts: Google Fonts
- Icons: Custom SVG

## 📈 Analytics

Google Analytics integration ready. Add your GA code to:

```html
<!-- In header of index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🎬 3D Implementation Guide

### Three.js 3D Scenes

The website uses Three.js library for creating interactive 3D visualizations. Here's what's included:

#### 1. Hero Section 3D Background (`initHero3D()`)
- **Elements:** 3 animated cubes with luxury gold coloring (#C9A96E)
- **Animation:** Continuous rotation on all axes
- **Lighting:** Directional and accent lighting for dramatic effect
- **Canvas ID:** `hero-3d-bg`

#### 2. About Section 3D Cube (`initAbout3D()`)
- **Elements:** Multi-colored cube showcasing material palette
- **Faces:** 6 different luxury material colors
- **Animation:** Smooth rotation for presentation
- **Canvas ID:** `about-3d-scene`

#### 3. Service Icons 3D Spheres (`initService3D()`)
- **Elements:** Icosphere geometries (high-poly spheres)
- **Count:** 3 unique spheres for each service
- **Colors:** Luxury color palette (#C9A96E, #D4C4B0, #B8956A)
- **Canvas IDs:** `service-3d-1`, `service-3d-2`, `service-3d-3`

#### 4. Project Cards 3D Pyramids (`initProject3D()`)
- **Elements:** Tetrahedron pyramids
- **Count:** 5 projects with unique color variations
- **Animation:** Rotating pyramids representing architectural projects
- **Canvas IDs:** `project-3d-1` through `project-3d-5`

### 3D Assets

SVG-based 3D visual assets included:
- `3d-interior-design.svg` - Isometric interior cube
- `3d-architecture.svg` - Building/pyramid structure
- `3d-landscape.svg` - Spheres with landscape elements
- `3d-luxury-living.svg` - Complex 3D box structure

### Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ All modern mobile browsers

### Performance

- GPU-accelerated rendering
- 60 FPS animations on most devices
- Automatic canvas resize handling
- Optimized lighting calculations

## 🔐 Security

- ✅ HTTPS recommended (via hosting provider)
- ✅ No sensitive data in code
- ✅ Form data submission to secure server
- ✅ Regular security updates

---

**Status:** Production Ready ✅  
**Last Updated:** April 2026  
**Version:** 1.0

For questions or support, contact the Virata team.
