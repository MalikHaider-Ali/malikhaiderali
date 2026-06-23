# Ahmad Raza Portfolio — Next.js

A high-performance portfolio built with **Next.js 14 (App Router)**, **Tailwind CSS**, **Framer Motion**, and **Lenis** smooth scroll.

## Tech Stack

- **Next.js 14** — App Router
- **TypeScript**
- **Tailwind CSS** — custom design tokens matching the original design
- **Framer Motion** — page/section animations, stagger reveals, hover effects
- **Lenis** — butter-smooth scroll

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css       # Global styles, dot-grid bg, animations
│   ├── layout.tsx        # Root layout with Lenis provider + fonts
│   └── page.tsx          # Home page composing all sections
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx    # Fixed navbar with mobile hamburger menu
│   │   └── Footer.tsx    # Footer with links
│   ├── sections/
│   │   ├── Hero.tsx      # Hero with typewriter + terminal animation
│   │   ├── StatsBar.tsx  # Animated counter stats
│   │   ├── BentoGrid.tsx # Navigation bento card grid
│   │   └── Ticker.tsx    # Scrolling ticker/marquee
│   └── ui/
│       └── LenisProvider.tsx  # Lenis smooth scroll context
```

## Customization

- Colors and typography tokens are in `tailwind.config.ts`
- Content (name, roles, bio, links) is in the component files
- Add more sections (Projects, Services, Contact, etc.) in `src/components/sections/`
