# TIS – Tula's International School Redesign

A complete, production-ready frontend redesign of the official website for **Tula's International School (TIS), Dehradun**. 

This application transforms the school's digital presence into a modern, high-converting, visually stunning, and animation-rich international school platform while retaining authentic TIS branding, messaging, academic structure, and campus information.

---

## 🌟 Key Features

- **Modern Gurukul Concept Showcase**: Dedicated editorial layouts presenting TIS's blend of ancient Indian values with modern global pedagogy.
- **Top Fixed Scroll Progress Bar**: Smooth gradient progress indicator tracking scroll position.
- **Desktop Custom Cursor**: Smooth ring & dot cursor follower with spring physics and interactive element scaling (automatically disabled on mobile/touch screens).
- **Scroll-Triggered Reveals**: Section-by-section viewport entrance animations powered by Framer Motion.
- **Interactive Academic Pathways**: Tabbed curriculum exploration for Primary (IV-V), Middle (VI-VIII), High School (IX-X), and Senior Secondary Streams (Science, Commerce, Humanities).
- **16+ Sports & Clubs Grid**: Showcase of Olympic-standard athletic facilities and co-curricular guilds.
- **Bento Grid Campus Gallery**: High-impact visual gallery with hover zoom effects and zero layout shift.
- **Instant Admissions Enquiry Modal**: Accessible popup form with simulated OTP verification and grade selection.
- **Fully Responsive**: Crafted for 320px, 375px, 390px, 430px, 768px, 1024px, 1280px, 1440px, and 1920px viewports.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, React 19)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & Vanilla CSS Tokens
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Iconography**: [Lucide React](https://lucide.dev/)
- **Typography**: [Google Fonts (Outfit)](https://fonts.google.com/specimen/Outfit)

---

## 📂 Project Structure

```
tis-redesign/
├── public/
│   ├── images/                # Optimized campus & sports imagery
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── globals.css        # CSS variable tokens, glassmorphism, animations
│   │   ├── layout.jsx         # SEO metadata, font loader, Cursor & ScrollProgress
│   │   └── page.jsx           # Main homepage composition
│   ├── components/
│   │   ├── Navbar.jsx         # Glassmorphic header & mobile navigation drawer
│   │   ├── Hero.jsx           # High-impact visual hero & floating stats
│   │   ├── TrustSection.jsx   # Credibility metrics & Modern Gurukul indicators
│   │   ├── About.jsx          # Asymmetric editorial section
│   │   ├── WhyTIS.jsx         # Core strength cards
│   │   ├── Academics.jsx      # Tabbed curriculum & streams
│   │   ├── Facilities.jsx     # Bento grid campus gallery
│   │   ├── StudentLife.jsx    # 16+ Sports & co-curricular clubs
│   │   ├── AdmissionsCTA.jsx  # High-converting admissions banner & 4-step timeline
│   │   ├── Testimonials.jsx   # Parent & student voices
│   │   ├── Contact.jsx        # Campus details & direct inquiry form
│   │   ├── Footer.jsx         # Rich footer & affiliation details
│   │   └── EnquireModal.jsx   # Admissions enquiry popup modal
│   ├── components/ui/
│   │   ├── Button.jsx         # Variant & size system button
│   │   ├── CustomCursor.jsx   # Desktop spring cursor follower
│   │   ├── ScrollProgress.jsx # Top scroll indicator bar
│   │   ├── Reveal.jsx         # Viewport reveal container
│   │   └── SectionHeading.jsx # Section header system
│   └── lib/
│       ├── constants.js       # TIS datasets & contact info
│       └── utils.js           # Class merger helper
├── tailwind.config.js
├── next.config.mjs
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

### Installation & Local Development

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd tis-redesign
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Production Build

To test the production bundle locally:

```bash
npm run build
npm start
```

---

## 🌐 Deployment

This project is fully compatible with Vercel:

1. Push code to GitHub repository.
2. Import project into Vercel Dashboard.
3. Keep default settings (`Framework Preset: Next.js`).
4. Click **Deploy**.

---

## ✨ Animation Features

1. **Scroll-Triggered Reveals**: Uses `whileInView` with `viewport={{ once: true }}` to animate sections into view seamlessly without repeated layout shifts.
2. **Scroll Progress Bar**: Leverages Framer Motion `useScroll` and `useSpring` to render a non-blocking gradient bar at the top of the viewport.
3. **Custom Cursor**: Built with spring physics (`damping: 25`, `stiffness: 250`). Automatically hides when a touch device is detected or if `prefers-reduced-motion` is enabled.

---

## ♿ Accessibility & Performance

- **Semantic HTML5**: Uses proper `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>` elements.
- **Keyboard Navigation**: All interactive elements, modal triggers, and buttons feature visible focus states.
- **Reduced Motion**: Respects `prefers-reduced-motion` media queries.
- **Performance**: Zero runtime layout thrashing, hardware-accelerated transforms and opacity transitions.

---

## 👨‍💻 Developer Notes

- **Data Decoupling**: All TIS content (programs, sports list, contact details, testimonials) is managed cleanly inside `src/lib/constants.js`.
- **Reusable UI Primitives**: Modular button system, section heading primitives, and reveal wrappers keep code DRY and maintainable for code reviews.
