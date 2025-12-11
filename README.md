# Hurri - Move Fast, Stay Connected

A modern, minimalistic website built with Next.js 15, React 19, and Tailwind CSS 4, featuring a clean WhatsApp-inspired design.

## Tech Stack

- **Framework**: Next.js 15.5.2 with App Router and Turbopack
- **UI Library**: React 19.2.0
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI (Dialog, Select, Tabs, Slider)
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Component Pattern**: shadcn/ui architecture

## Getting Started

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Run the development server with Turbopack
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

```bash
# Create a production build
npm run build

# Start the production server
npm start
```

## Project Structure

```
hurri/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── ui/                # Reusable UI components
│   │   ├── button.tsx
│   │   └── card.tsx
│   └── sections/          # Page sections
│       ├── navbar.tsx
│       ├── hero.tsx
│       ├── features.tsx
│       ├── cta.tsx
│       └── footer.tsx
├── lib/
│   └── utils.ts           # Utility functions
└── public/                # Static assets
```

## Features

- ✨ Modern, minimalistic design inspired by WhatsApp
- 🎨 WhatsApp green color scheme with smooth gradients
- 🎭 Smooth animations with Framer Motion
- 📱 Fully responsive design
- ♿ Accessible UI components with Radix UI
- 🚀 Optimized performance with Next.js 15 and Turbopack
- 🎯 Type-safe development with TypeScript
- 🎨 Utility-first styling with Tailwind CSS 4

## Customization

### Colors

The color scheme is defined in `app/globals.css` using CSS variables. You can customize the WhatsApp-inspired green theme by modifying the `--primary` variable:

```css
--primary: 142 70% 49%; /* WhatsApp green */
```

### Content

Update the content in the following sections:
- Hero section: `components/sections/hero.tsx`
- Features: `components/sections/features.tsx`
- CTA: `components/sections/cta.tsx`
- Footer: `components/sections/footer.tsx`

## License

All rights reserved.

