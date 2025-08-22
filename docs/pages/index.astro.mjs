import { c as createComponent, m as maybeRenderHead, a as addAttribute, r as renderScript, b as renderTemplate, d as createAstro, e as renderHead, f as renderComponent, g as renderSlot, s as spreadAttributes } from '../chunks/astro/server_C9L-Exa2.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                                 */
import 'clsx';
import { signal } from '@preact/signals';
export { renderers } from '../renderers.mjs';

const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
  ];
  let isMenuOpen = false;
  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  };
  return renderTemplate`${maybeRenderHead()}<header class="fixed w-full z-50 transition-all duration-300 bg-transparent"> <nav class="container mx-auto px-6 py-4"> <div class="flex items-center justify-between"> <a href="#home" class="text-2xl font-bold text-matrix-green glow">
&lt;AO/&gt;
</a>  <div class="hidden md:flex items-center space-x-8"> ${links.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="text-gray-300 hover:text-matrix-green transition-colors duration-300 font-medium" data-scroll> ${link.name} </a>`)} <a href="/ABDULRAHMAN OMAR Resume.pdf" class="px-4 py-2 bg-matrix-green/10 text-matrix-green border border-matrix-green/30 rounded-md hover:bg-matrix-green/20 transition-colors duration-300" download>
Resume
</a> </div>  <div class="md:hidden"> <button${addAttribute(toggleMenu, "on:click")} class="text-gray-300 hover:text-matrix-green focus:outline-none" aria-label="Toggle menu"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> ${isMenuOpen ? renderTemplate`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>` : renderTemplate`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>`} </svg> </button> </div> </div>  ${isMenuOpen && renderTemplate`<div class="md:hidden mt-4 py-4 border-t border-matrix-green/10"> <div class="flex flex-col space-y-4"> ${links.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="text-gray-300 hover:text-matrix-green transition-colors duration-300 py-2"${addAttribute(() => isMenuOpen = false, "on:click")}> ${link.name} </a>`)} <a href="/ABDULRAHMAN OMAR Resume.pdf" class="px-4 py-2 bg-matrix-green/10 text-matrix-green border border-matrix-green/30 rounded-md hover:bg-matrix-green/20 transition-colors duration-300 text-center" download>
Download Resume
</a> </div> </div>`} </nav> </header> ${renderScript($$result, "C:/Users/Abdu Omar/Desktop/Portfolio/abduportfolio/src/components/sections/Navigation.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Abdu Omar/Desktop/Portfolio/abduportfolio/src/components/sections/Navigation.astro", void 0);

const $$Astro$4 = createAstro("https://abdulrahmann-omar.github.io/abduportfolio");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title = "Abdulrahman Omar | AI & Data Science Portfolio" } = Astro2.props;
  return renderTemplate`<html lang="en" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description" content="AI Engineer & Data Scientist specializing in building intelligent systems and extracting insights from complex data."><title>${title}</title><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url" content="https://abdulrahman-omar.com/"><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description" content="AI Engineer & Data Scientist specializing in building intelligent systems and extracting insights from complex data."><meta property="og:image" content="/images/og-image.jpg"><!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:url" content="https://abdulrahman-omar.com/"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description" content="AI Engineer & Data Scientist specializing in building intelligent systems and extracting insights from complex data."><meta name="twitter:image" content="/images/og-image.jpg"><!-- Favicon --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="alternate icon" href="/favicon.ico"><!-- Preload critical resources --><link rel="preload" href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&family=Inter:wght@300;400;500;600;700&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'">${maybeRenderHead()}<noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&family=Inter:wght@300;400;500;600;700&display=swap"></noscript>${renderHead()}</head> <body class="antialiased bg-matrix-dark text-gray-100"> ${renderComponent($$result, "Navigation", $$Navigation, {})} <main class="pt-16"> ${renderSlot($$result, $$slots["default"])} </main> <!-- Footer will be added later --> ${renderScript($$result, "C:/Users/Abdu Omar/Desktop/Portfolio/abduportfolio/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "C:/Users/Abdu Omar/Desktop/Portfolio/abduportfolio/src/layouts/Layout.astro", void 0);

const $$Astro$3 = createAstro("https://abdulrahmann-omar.github.io/abduportfolio");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    href = "#",
    variant = "primary",
    className = "",
    ...attrs
  } = Astro2.props;
  const baseClasses = "inline-flex items-center justify-center px-6 py-3 rounded-md font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-matrix-dark focus:ring-matrix-green";
  const variants = {
    primary: "bg-matrix-green text-matrix-dark hover:bg-matrix-green/90 focus:ring-matrix-green/50",
    outline: "border-2 border-matrix-green text-matrix-green hover:bg-matrix-green/10 focus:ring-matrix-green/50",
    secondary: "bg-matrix-light text-gray-200 hover:bg-matrix-light/80 focus:ring-matrix-green/50"
  };
  const buttonClasses = `${baseClasses} ${variants[variant] || variants.primary} ${className}`;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(buttonClasses, "class")}${spreadAttributes(attrs)}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/Abdu Omar/Desktop/Portfolio/abduportfolio/src/components/ui/Button.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="home" class="min-h-screen flex items-center relative overflow-hidden" data-astro-cid-anhloy43> <!-- Matrix Background --> <div class="fixed inset-0 z-0" data-astro-cid-anhloy43> <canvas id="matrix-canvas" class="w-full h-full" aria-hidden="true" data-astro-cid-anhloy43></canvas> </div> <div class="container mx-auto px-6 relative z-10" data-astro-cid-anhloy43> <div class="max-w-4xl mx-auto text-center" data-astro-cid-anhloy43> <div class="inline-block px-4 py-2 mb-6 bg-matrix-green/10 border border-matrix-green/30 rounded-full text-matrix-green text-sm font-mono" data-astro-cid-anhloy43>
Welcome to my digital realm
</div> <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight" data-astro-cid-anhloy43> <span class="text-white" data-astro-cid-anhloy43>Hi, I'm</span>${" "} <span class="text-matrix-green glow" data-astro-cid-anhloy43>Abdulrahman Omar</span> </h1> <div class="h-16 md:h-20 mb-8" data-astro-cid-anhloy43> <div class="typewriter text-2xl md:text-4xl font-mono text-gray-300" data-astro-cid-anhloy43> <span class="text-matrix-green" data-astro-cid-anhloy43>$</span> I build intelligent systems that solve real-world problems
</div> </div> <p class="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed" data-astro-cid-anhloy43>
AI Engineer & Data Scientist specializing in building intelligent systems and extracting insights from complex data.
        Currently pushing the boundaries of what's possible with machine learning and artificial intelligence.
</p> <div class="flex flex-wrap justify-center gap-4" data-astro-cid-anhloy43> ${renderComponent($$result, "Button", $$Button, { "href": "#projects", "variant": "primary", "class": "group", "data-astro-cid-anhloy43": true }, { "default": ($$result2) => renderTemplate` <span data-astro-cid-anhloy43>View My Work</span> <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-anhloy43> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" data-astro-cid-anhloy43></path> </svg> ` })} ${renderComponent($$result, "Button", $$Button, { "href": "#contact", "variant": "outline", "data-astro-cid-anhloy43": true }, { "default": ($$result2) => renderTemplate`
Get In Touch
` })} </div> </div> </div> <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce" data-astro-cid-anhloy43> <a href="#about" class="text-matrix-green hover:text-white transition-colors duration-300" aria-label="Scroll down" data-astro-cid-anhloy43> <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-anhloy43> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" data-astro-cid-anhloy43></path> </svg> </a> </div> </section>  ${renderScript($$result, "C:/Users/Abdu Omar/Desktop/Portfolio/abduportfolio/src/components/sections/Hero.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Abdu Omar/Desktop/Portfolio/abduportfolio/src/components/sections/Hero.astro", void 0);

const $$Skills = createComponent(($$result, $$props, $$slots) => {
  const skills = [
    {
      category: "Programming Languages",
      items: [
        "Python",
        "C++",
        "SQL",
        "Java",
        "JavaScript",
        "R",
        "C#"
      ]
    },
    {
      category: "AI/ML & Data Science",
      items: [
        "Deep Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Time Series Analysis",
        "Statistical Modeling"
      ]
    },
    {
      category: "ML Frameworks & Tools",
      items: [
        "PyTorch",
        "TensorFlow",
        "Scikit-learn",
        "XGBoost",
        "Hugging Face"
      ]
    },
    {
      category: "Data Processing & Visualization",
      items: [
        "Pandas",
        "NumPy",
        "Matplotlib/Seaborn",
        "Plotly"
      ]
    },
    {
      category: "MLOps & Deployment",
      items: [
        "Docker",
        "Git",
        "FastAPI",
        "Gradio"
      ]
    },
    {
      category: "RAG Systems",
      items: [
        "LangChain",
        "ChromaDB",
        "Pinecone",
        "Vector Databases",
        "Document Processing",
        "Semantic Search"
      ]
    },
    {
      category: "Generative AI",
      items: [
        "LLMs",
        "GPT Models",
        "Diffusion Models",
        "Prompt Engineering",
        "Fine-tuning",
        "AI Content Generation"
      ]
    },
    {
      category: "Automation",
      items: [
        "Scripting",
        "Workflow Automation",
        "CI/CD Pipelines",
        "Task Scheduling",
        "API Integration"
      ]
    },
    {
      category: "Soft Skills",
      items: [
        "Team Leadership",
        "Analytical Thinking",
        "Problem Solving",
        "Communication"
      ]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="skills" class="py-20 bg-gray-900 relative overflow-hidden" data-astro-cid-sye7xtqh> <div class="container mx-auto px-6 relative z-10" data-astro-cid-sye7xtqh> <!-- Heading --> <div class="text-center mb-16" data-astro-cid-sye7xtqh> <h2 class="text-4xl font-bold mb-4" data-astro-cid-sye7xtqh> <span class="gradient-text" data-astro-cid-sye7xtqh>Skills & Expertise</span> </h2> <div class="w-24 h-1 bg-emerald-500 mx-auto my-6" data-astro-cid-sye7xtqh></div> <p class="text-xl text-gray-400 max-w-3xl mx-auto" data-astro-cid-sye7xtqh>
A showcase of my technical skills and areas of expertise in the field of AI and Data Science.
</p> </div> <!-- Skills Grid --> <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-astro-cid-sye7xtqh> ${skills.map((skillCategory) => renderTemplate`<div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-matrix-green/50 transition-all duration-300" data-astro-cid-sye7xtqh> <h3 class="text-xl font-bold text-matrix-green mb-6" data-astro-cid-sye7xtqh>${skillCategory.category}</h3> <div class="flex flex-wrap gap-2" data-astro-cid-sye7xtqh> ${skillCategory.items.map((item) => renderTemplate`<span class="px-3 py-1.5 bg-gray-700/50 text-gray-200 rounded-full text-sm" data-astro-cid-sye7xtqh> ${item} </span>`)} </div> </div>`)} </div> </div> <!-- Decorative elements --> <div class="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full filter blur-3xl opacity-30 -mr-32 -mt-32" data-astro-cid-sye7xtqh></div> <div class="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl opacity-30 -ml-48 -mb-48" data-astro-cid-sye7xtqh></div> <!-- Animated background particles --> <div class="absolute inset-0 overflow-hidden" data-astro-cid-sye7xtqh> <div class="particle particle-1" data-astro-cid-sye7xtqh></div> <div class="particle particle-2" data-astro-cid-sye7xtqh></div> <div class="particle particle-3" data-astro-cid-sye7xtqh></div> </div> </section> `;
}, "C:/Users/Abdu Omar/Desktop/Portfolio/abduportfolio/src/components/sections/Skills.astro", void 0);

const $$Astro$2 = createAstro("https://abdulrahmann-omar.github.io/abduportfolio");
const $$Timeline = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Timeline;
  const { items, className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`relative ${className}`, "class")}>  <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-matrix-green/30 md:left-1/2"></div> <div class="space-y-12"> ${items.map((item, index) => renderTemplate`<div class="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-8">  <div${addAttribute([
    "relative pb-12 md:pb-20",
    index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12 md:col-start-2"
  ], "class:list")}>  <div class="text-sm font-semibold text-matrix-green mb-1"> ${item.date} </div>  <h3 class="text-xl font-bold text-white mb-2"> ${item.title} </h3>  <div class="text-lg text-gray-300 mb-3"> ${item.company} </div>  <p class="text-gray-400"> ${item.description} </p>  ${item.tags && item.tags.length > 0 && renderTemplate`<div class="mt-4 flex flex-wrap gap-2"> ${item.tags.map((tag) => renderTemplate`<span class="px-3 py-1 text-xs font-medium bg-matrix-green/10 text-matrix-green rounded-full"> ${tag} </span>`)} </div>`}  <div class="absolute left-0 -top-10 w-8 h-8 rounded-full bg-matrix-dark border-4 border-matrix-green flex items-center justify-center md:left-1/2 md:-ml-4"> <div class="w-2 h-2 rounded-full bg-matrix-green"></div> </div> </div> </div>`)} </div> </div>`;
}, "C:/Users/Abdu Omar/Desktop/Portfolio/abduportfolio/src/components/ui/Timeline.astro", void 0);

const $$Experience = createComponent(($$result, $$props, $$slots) => {
  const experiences = [
    {
      role: "AI Intern",
      company: "Optomatica",
      period: "Aug 2025 \u2013 Present",
      description: [
        "Evaluated a baseline Retrieval-Augmented Generation (RAG) system using Ragas, designing and curating tailored test datasets for more accurate benchmarking",
        "Architected and implemented an advanced RAG system for activeQ Protest's RFP automation platform, boosting accuracy by 15%+ through optimized retrieval pipelines and query expansion"
      ]
    },
    {
      role: "Data Science Intern",
      company: "SIGMA EMEA",
      period: "Aug 2025 \u2013 Present",
      description: [
        "Designed and implemented a customer segmentation and traveler-focused recommendation system for a telecom operator with live tracking for accurate personalization",
        "Delivered personalized offers and predictive insights that enhanced customer engagement and loyalty, leading a team of 5 to develop data-driven business solutions"
      ]
    },
    {
      role: "Bachelor of Computer Science and AI",
      company: "University of Science and Technology at Zewail City",
      period: "Sep 2022 \u2013 July 2026",
      description: [
        "Relevant Coursework: Deep Learning, Data Mining, Algorithm Design, Software Engineering, RAG, NLP",
        "Head of Multimedia Committee \u2014 IEEE Zewail City (Sep 2024 \u2013 Present)",
        "Organizing Committee Member \u2014 IEEE Zewail City (Dec 2023 \u2013 Present)"
      ]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="experience" class="py-20 bg-matrix-dark/30 relative overflow-hidden" data-astro-cid-ghubstuj> <div class="container mx-auto px-6 relative z-10" data-astro-cid-ghubstuj> <div class="text-center mb-16" data-astro-cid-ghubstuj> <h2 class="text-4xl font-bold mb-4" data-astro-cid-ghubstuj> <span class="gradient-text" data-astro-cid-ghubstuj>Work Experience</span> </h2> <div class="w-24 h-1 bg-matrix-green mx-auto my-6" data-astro-cid-ghubstuj></div> <p class="text-xl text-gray-400 max-w-3xl mx-auto" data-astro-cid-ghubstuj>
My professional journey and the roles that have shaped my career in technology and AI.
</p> </div> <div class="relative max-w-5xl mx-auto" data-astro-cid-ghubstuj> ${renderComponent($$result, "Timeline", $$Timeline, { "items": experiences, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Abdu Omar/Desktop/Portfolio/abduportfolio/src/components/ui/Timeline.astro", "client:component-export": "default", "data-astro-cid-ghubstuj": true })}  <div class="absolute top-0 -left-20 w-64 h-64 bg-matrix-green/5 rounded-full filter blur-3xl opacity-30 -z-10" data-astro-cid-ghubstuj></div> <div class="absolute bottom-0 -right-20 w-96 h-96 bg-indigo-500/5 rounded-full filter blur-3xl opacity-30 -z-10" data-astro-cid-ghubstuj></div> </div> <div class="mt-16 text-center" data-astro-cid-ghubstuj> <a href="/ABDULRAHMAN OMAR Resume.pdf" class="inline-flex items-center px-6 py-3 border border-matrix-green/30 text-matrix-green rounded-md hover:bg-matrix-green/10 transition-colors duration-300 group" download data-astro-cid-ghubstuj> <span data-astro-cid-ghubstuj>Download Full Resume</span> <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ghubstuj> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" data-astro-cid-ghubstuj></path> </svg> </a> </div> </div> </section> `;
}, "C:/Users/Abdu Omar/Desktop/Portfolio/abduportfolio/src/components/sections/Experience.astro", void 0);

const $$Astro$1 = createAstro("https://abdulrahmann-omar.github.io/abduportfolio");
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { project } = Astro2.props;
  const { title, description, tags, github, demo, featured = false } = project;
  return renderTemplate`${maybeRenderHead()}<article class="group relative h-full flex flex-col overflow-hidden rounded-lg border border-matrix-green/20 bg-matrix-light/5 hover:bg-matrix-light/10 transition-all duration-300 hover:border-matrix-green/40 hover:shadow-lg hover:shadow-matrix-green/5">  <div class="relative h-32 bg-gradient-to-r from-matrix-green/30 via-matrix-light/10 to-matrix-green/30 flex items-center justify-center"> <span class="text-matrix-green text-4xl font-bold opacity-70"> ${title.charAt(0)} </span> ${featured && renderTemplate`<div class="absolute top-4 right-4 bg-matrix-green text-matrix-dark text-xs font-bold px-3 py-1 rounded-full">
Featured
</div>`} </div>  <div class="flex-1 p-6 flex flex-col"> <h3 class="text-xl font-bold text-white mb-2 group-hover:text-matrix-green transition-colors"> ${title} </h3> <p class="text-gray-400 mb-4 flex-1"> ${description} </p>  ${tags && tags.length > 0 && renderTemplate`<div class="flex flex-wrap gap-2 mb-4"> ${tags.slice(0, 3).map((tag) => renderTemplate`<span class="px-2 py-1 text-xs font-medium bg-matrix-green/10 text-matrix-green rounded"> ${tag} </span>`)} ${tags.length > 3 && renderTemplate`<span class="px-2 py-1 text-xs font-medium bg-matrix-light/10 text-gray-400 rounded">
+${tags.length - 3} more
</span>`} </div>`}  <div class="flex items-center justify-between pt-4 mt-auto border-t border-matrix-green/10"> ${demo && renderTemplate`<a${addAttribute(demo, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-sm font-medium text-matrix-green hover:text-white group"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path> </a>`} ${github && renderTemplate`<a${addAttribute(github, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors" aria-label="View on GitHub"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.16 22 16.416 22 12c0-5.523-4.477-10-10-10z"></path> </svg> <span class="ml-1">Code</span> </a>`} </div> </div> </article>`;
}, "C:/Users/Abdu Omar/Desktop/Portfolio/abduportfolio/src/components/ui/ProjectCard.astro", void 0);

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const allProjects = [
    {
      id: 1,
      title: "NeuraViva: News-Driven Multi-Stock Forecasting",
      description: "Developed an end-to-end framework that integrates financial news sentiment analysis with multi-stock time series forecasting, achieving MSE of 0.02.",
      tags: ["Python", "TensorFlow", "NLP", "Time Series", "SHAP", "LIME", "XGBoost"],
      github: "https://github.com/Abdulrahmann-Omar/FinSentImpact-A-News-Driven-Multi-Stock-Forecasting-Framework",
      demo: "#",
      category: "ai",
      featured: true,
      highlights: [
        "Implemented SVM, XGBoost, Random Forest, and Linear Regression models",
        "Utilized SHAP and LIME for model explainability",
        "Integrated news sentiment analysis with stock price prediction"
      ]
    },
    {
      id: 2,
      title: "Underwater Acoustic Target Detection",
      description: "Engineered a dual deep learning framework combining CNN-based object detection and Siamese networks for underwater target recognition.",
      tags: ["Python", "PyTorch", "Computer Vision", "Transfer Learning", "Gradio"],
      github: "#",
      demo: "#",
      category: "ai",
      featured: true,
      highlights: [
        "Achieved superior classification accuracy with MobileNetV2",
        "Deployed scalable inference system via Gradio",
        "Addressed challenges in marine surveillance and underwater robotics"
      ]
    },
    {
      id: 3,
      title: "Gemini-Powered RAG Pipeline",
      description: "Developed a modular RAG pipeline using LangChain, ChromaDB, and Google Gemini for financial document analysis.",
      tags: ["Python", "LangChain", "ChromaDB", "Google Gemini", "RAG", "NLP"],
      github: "https://github.com/Abdulrahmann-Omar/PDF-RAG-with-Gemini",
      demo: "#",
      category: "ai",
      featured: true,
      highlights: [
        "Enabled semantic retrieval from financial documents",
        "Integrated PDF parsing and vector search",
        "Implemented secure API handling"
      ]
    },
    {
      id: 4,
      title: "Fraud Detection System",
      description: "Trained multiple models for fraud detection with up to 98% precision on highly imbalanced IEEE-CIS dataset.",
      tags: ["Python", "Scikit-learn", "SMOTE", "XGBoost", "Neural Networks", "SHAP"],
      github: "https://github.com/Abdulrahmann-Omar/Fraud_Detection_With_Various_Models",
      demo: "#",
      category: "ml",
      featured: true,
      highlights: [
        "Tackled class imbalance (0.17% fraud rate)",
        "Reduced false negatives by 18%",
        "Delivered SHAP visualizations and insights"
      ]
    }
  ];
  const categories = [
    { id: "all", name: "All Projects" },
    { id: "ai", name: "AI/ML" },
    { id: "ml", name: "Machine Learning" },
    { id: "nlp", name: "NLP" },
    { id: "cv", name: "Computer Vision" }
  ];
  const activeFilter = signal("all");
  const filteredProjects = () => {
    if (activeFilter.value === "all") return allProjects;
    return allProjects.filter((project) => project.category === activeFilter.value);
  };
  allProjects.filter((project) => project.featured);
  return renderTemplate`${maybeRenderHead()}<section id="projects" class="py-20 bg-matrix-dark/20 relative overflow-hidden" data-astro-cid-44zkpkd5> <div class="container mx-auto px-6 relative z-10" data-astro-cid-44zkpkd5> <div class="text-center mb-16" data-astro-cid-44zkpkd5> <h2 class="text-4xl font-bold mb-4" data-astro-cid-44zkpkd5> <span class="gradient-text" data-astro-cid-44zkpkd5>Featured Projects</span> </h2> <div class="w-24 h-1 bg-matrix-green mx-auto my-6" data-astro-cid-44zkpkd5></div> <p class="text-xl text-gray-400 max-w-3xl mx-auto" data-astro-cid-44zkpkd5>
A selection of my recent work in AI, machine learning, and software development.
</p> </div>  <div class="flex flex-wrap justify-center gap-4 mb-12" data-astro-cid-44zkpkd5> ${categories.map((category) => renderTemplate`<button${addAttribute(() => activeFilter.value = category.id, "onClick")}${addAttribute([
    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
    activeFilter.value === category.id ? "bg-matrix-green text-matrix-dark" : "text-gray-300 hover:text-white hover:bg-matrix-light/10 border border-matrix-green/20"
  ], "class:list")} data-astro-cid-44zkpkd5> ${category.name} </button>`)} </div>  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-astro-cid-44zkpkd5> ${filteredProjects().map((project) => renderTemplate`${renderComponent($$result, "ProjectCard", $$ProjectCard, { "project": project, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Abdu Omar/Desktop/Portfolio/abduportfolio/src/components/ui/ProjectCard.astro", "client:component-export": "default", "data-astro-cid-44zkpkd5": true })}`)} </div>  <div class="text-center mt-16" data-astro-cid-44zkpkd5> <a href="#" class="inline-flex items-center px-6 py-3 border border-matrix-green/30 text-matrix-green rounded-md hover:bg-matrix-green/10 transition-colors duration-300 group" data-astro-cid-44zkpkd5> <span data-astro-cid-44zkpkd5>View All Projects</span> <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-44zkpkd5> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" data-astro-cid-44zkpkd5></path> </svg> </a> </div> </div>  <div class="absolute top-0 right-0 w-64 h-64 bg-matrix-green/5 rounded-full filter blur-3xl opacity-20 -mr-32 -mt-32" data-astro-cid-44zkpkd5></div> <div class="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/5 rounded-full filter blur-3xl opacity-20 -ml-48 -mb-48" data-astro-cid-44zkpkd5></div> </section> `;
}, "C:/Users/Abdu Omar/Desktop/Portfolio/abduportfolio/src/components/sections/Projects.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const contactInfo = [
    {
      icon: "\u{1F4E7}",
      title: "Email",
      value: "abdu.omar.muhammad@gmail.com",
      href: "mailto:abdu.omar.muhammad@gmail.com"
    },
    {
      icon: "\u{1F4DE}",
      title: "Phone",
      value: "+20 109 808 1484",
      href: "tel:+20 109 808 1484"
    },
    {
      icon: "\u{1F4CD}",
      title: "Location",
      value: "Cairo, Egypt",
      href: "https://maps.google.com/?q=Cairo,Egypt"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="contact" class="py-20 bg-matrix-dark/50 relative overflow-hidden" data-astro-cid-zbjjch6a> <div class="container mx-auto px-6 relative z-10" data-astro-cid-zbjjch6a> <div class="text-center mb-16" data-astro-cid-zbjjch6a> <h2 class="text-4xl font-bold mb-4" data-astro-cid-zbjjch6a> <span class="gradient-text" data-astro-cid-zbjjch6a>Get In Touch</span> </h2> <div class="w-24 h-1 bg-matrix-green mx-auto my-6" data-astro-cid-zbjjch6a></div> <p class="text-xl text-gray-400 max-w-3xl mx-auto" data-astro-cid-zbjjch6a>
Have a question or want to work together? Feel free to reach out!
</p> </div> <div class="max-w-2xl mx-auto" data-astro-cid-zbjjch6a> <div class="bg-matrix-light/5 border border-matrix-green/20 rounded-lg p-8 backdrop-blur-sm" data-astro-cid-zbjjch6a> <h3 class="text-2xl font-bold text-white mb-6 text-center" data-astro-cid-zbjjch6a>Get In Touch</h3> <p class="text-gray-400 mb-8 text-center" data-astro-cid-zbjjch6a>
Feel free to reach out to me through any of the following channels.
</p> <div class="space-y-6 max-w-md mx-auto" data-astro-cid-zbjjch6a> ${contactInfo.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} target="_blank" rel="noopener noreferrer" class="flex items-center p-4 rounded-lg bg-matrix-light/5 hover:bg-matrix-light/10 border border-matrix-green/10 hover:border-matrix-green/30 transition-all group" data-astro-cid-zbjjch6a> <div class="flex-shrink-0 h-12 w-12 rounded-full bg-matrix-green/10 flex items-center justify-center text-matrix-green text-xl group-hover:bg-matrix-green/20 transition-colors" data-astro-cid-zbjjch6a> ${item.icon} </div> <div class="ml-4" data-astro-cid-zbjjch6a> <h4 class="text-sm font-medium text-gray-300" data-astro-cid-zbjjch6a>${item.title}</h4> <p class="text-matrix-green group-hover:text-white transition-colors" data-astro-cid-zbjjch6a>${item.value}</p> </div> </a>`)} </div> </div> </div> </div> <!-- Decorative elements --> <div class="absolute top-0 right-0 w-64 h-64 bg-matrix-green/5 rounded-full filter blur-3xl opacity-20 -mr-32 -mt-32" data-astro-cid-zbjjch6a></div> <div class="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/5 rounded-full filter blur-3xl opacity-20 -ml-48 -mb-48" data-astro-cid-zbjjch6a></div> </section> `;
}, "C:/Users/Abdu Omar/Desktop/Portfolio/abduportfolio/src/components/sections/Contact.astro", void 0);

const $$Astro = createAstro("https://abdulrahmann-omar.github.io/abduportfolio");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Experience", $$Experience, {})} ${renderComponent($$result2, "Projects", $$Projects, {})} ${renderComponent($$result2, "Skills", $$Skills, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} ${maybeRenderHead()}<footer class="bg-matrix-dark/80 border-t border-matrix-green/10 py-8"> <div class="container mx-auto px-6 text-center"> <div class="flex justify-center space-x-6 mb-6"> <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors"> <span class="sr-only">GitHub</span> <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"> <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path> </svg> </a> <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors"> <span class="sr-only">LinkedIn</span> <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"> <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path> </svg> </a> <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors"> <span class="sr-only">Twitter</span> <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"> <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path> </svg> </a> </div> <p class="text-gray-500 text-sm">
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Abdulrahman Omar. All rights reserved.
</p> <p class="text-gray-600 text-xs mt-2">
Made with ❤️ using Astro, Tailwind CSS, and a touch of AI magic.
</p> </div> </footer> ` })}`;
}, "C:/Users/Abdu Omar/Desktop/Portfolio/abduportfolio/src/pages/index.astro", void 0);

const $$file = "C:/Users/Abdu Omar/Desktop/Portfolio/abduportfolio/src/pages/index.astro";
const $$url = "/abduportfolio";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
