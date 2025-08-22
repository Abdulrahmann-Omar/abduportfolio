---
title: abduportfolio
emoji: 🐳
colorFrom: yellow
colorTo: red
sdk: static
pinned: false
tags:
  - deepsite
---

# Abdulrahman Omar - AI/ML Portfolio

![Portfolio Screenshot](./public/images/portfolio-screenshot.png)

A modern, responsive portfolio website built with Astro, Tailwind CSS, and a touch of Matrix-inspired design. Showcasing my skills, experience, and projects in AI, Machine Learning, and Software Development.

## 🚀 Features

- **Modern UI/UX** with dark theme and Matrix-inspired design elements
- **Responsive Layout** that works on all devices
- **Interactive Components** including:
  - Animated hero section with Matrix code rain effect
  - Skills accordion with progress bars
  - Timeline-based experience section
  - Filterable projects grid
  - Contact form with validation
- **Optimized Performance** with Astro's partial hydration
- **SEO Optimized** with proper meta tags and structured data
- **Accessible** following WCAG 2.1 guidelines

## 🛠️ Tech Stack

- [Astro](https://astro.build/) - The web framework for content-driven websites
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - For smooth animations
- [Headless UI](https://headlessui.com/) - Accessible UI components
- [Heroicons](https://heroicons.com/) - Beautiful hand-crafted SVG icons

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm (v7 or later) or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/abduportfolio.git
   cd abduportfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

```bash
npm run build
# or
yarn build
```

This will create a `dist` directory with your production-ready site.

## 📁 Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── sections/      # Page sections (Hero, Skills, etc.)
│   └── ui/            # Base UI components (Button, Card, etc.)
├── layouts/           # Layout components
├── pages/             # Application routes
└── styles/            # Global styles
```

## 🎨 Customization

### Colors

Edit the `tailwind.config.mjs` file to customize the color scheme:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        'matrix-dark': '#0a0a0a',
        'matrix-light': '#1a1a1a',
        'matrix-green': '#0f0',
        // Add your custom colors here
      },
    },
  },
};
```

### Content

- Update your personal information in the respective component files
- Add/remove projects in `src/components/sections/Projects.astro`
- Update experience in `src/components/sections/Experience.astro`
- Modify skills in `src/components/sections/Skills.astro`

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Astro](https://astro.build/) team for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Headless UI](https://headlessui.com/) for accessible components

Check out the configuration reference at https://huggingface.co/docs/hub/spaces-config-reference