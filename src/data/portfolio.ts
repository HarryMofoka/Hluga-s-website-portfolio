import ecommerceImg from "@/assets/work-ecommerce.jpg";
import dashboardImg from "@/assets/work-dashboard.jpg";
import taskManagerImg from "@/assets/work-taskmanager.jpg";
import portfolioImg from "@/assets/work-portfolio.jpg";
import directoryImg from "@/assets/work-directory.jpg";
import studyImg from "@/assets/work-study.jpg";
import weatherImg from "@/assets/work-weather.jpg";
import agencyImg from "@/assets/work-agency.jpg";

export const profile = {
  name: "Lehlohonolo Mofokeng",
  brand: "HLUGA.",
  role: "Junior Frontend Developer",
  location: "Johannesburg, ZA",
  email: "hello@nexlinksolutionsza.co.za",
  company: "Nexlink Solutions ZA",
  headline: "I build interactive web experiences with clean code and modern design.",
};

export const socials = [
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "Instagram", href: "#" },
];

export type Project = {
  slug: string;
  title: string;
  role: string;
  image: any;
  year: string;
  client: string;
  duration: string;
  stack: string[];
  summary: string;
  problem: string;
  approach: string;
  outcome: string;
  highlights: string[];
  metrics: { num: string; label: string }[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    role: "React & Next.js",
    image: ecommerceImg,
    year: "2025",
    client: "Retail startup, Sandton",
    duration: "14 weeks",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Stripe"],
    summary:
      "A storefront built for South African shoppers on slow connections — fast product browsing, low-data image delivery and a checkout that survives dropped signal.",
    problem:
      "The client's existing store was a heavy template that took over nine seconds to become interactive on a mid-range Android phone. Carts were abandoned at checkout because the payment step reloaded the whole page and lost state whenever the signal dipped.",
    approach:
      "I rebuilt the storefront on Next.js with server-rendered category pages, responsive AVIF imagery and a route-level data cache. Checkout became a resilient multi-step flow that persists to local storage, so a lost connection never costs the customer their basket. Every interactive element was rebuilt with keyboard and screen-reader support.",
    outcome:
      "The store now loads in under two seconds on 3G and the checkout completion rate moved sharply upward in the first month after launch.",
    highlights: [
      "Server-rendered catalogue with incremental revalidation",
      "Offline-tolerant checkout that restores an interrupted basket",
      "Image pipeline serving AVIF/WebP at four breakpoints",
      "Full keyboard navigation and WCAG AA colour contrast",
    ],
    metrics: [
      { num: "1.9s", label: "Largest Contentful Paint on 3G" },
      { num: "+34%", label: "Checkout completion" },
      { num: "98", label: "Lighthouse performance score" },
    ],
    featured: true,
  },
  {
    slug: "data-dashboard",
    title: "Data Dashboard",
    role: "Vue 3 & D3.js",
    image: dashboardImg,
    year: "2025",
    client: "Logistics operator",
    duration: "10 weeks",
    stack: ["Vue 3", "D3.js", "TypeScript", "Vite", "WebSockets"],
    summary:
      "A live operations dashboard rendering thousands of delivery events per minute without dropping a frame.",
    problem:
      "Dispatch controllers were reading fleet status off three separate spreadsheets refreshed by hand. Decisions were being made on data that was, at best, twenty minutes old.",
    approach:
      "I designed a single-screen command view in Vue 3 with D3 for the charting layer. A WebSocket stream feeds a small reactive store, and heavy series are drawn to canvas rather than SVG so the frame budget stays intact under load. Controllers can drill from a fleet-wide view down to a single vehicle in two clicks.",
    outcome:
      "Controllers now work from one screen with sub-second data, and the manual spreadsheet routine was retired entirely.",
    highlights: [
      "Canvas-rendered time series handling 5,000+ points smoothly",
      "WebSocket stream with automatic reconnect and backfill",
      "Saved view presets per controller",
      "Dark interface tuned for a warehouse control room",
    ],
    metrics: [
      { num: "60fps", label: "Sustained render under live load" },
      { num: "<1s", label: "Event-to-screen latency" },
      { num: "3 → 1", label: "Tools replaced by one dashboard" },
    ],
    featured: true,
  },
  {
    slug: "task-manager-app",
    title: "Task Manager App",
    role: "React Native",
    image: taskManagerImg,
    year: "2024",
    client: "Nexlink internal product",
    duration: "8 weeks",
    stack: ["React Native", "Expo", "TypeScript", "SQLite", "Reanimated"],
    summary:
      "An offline-first mobile task manager for small teams who cannot rely on always-on data.",
    problem:
      "Field teams lose signal constantly. Every task app the team tried assumed a connection and simply failed — silently discarding updates captured on site.",
    approach:
      "I built an offline-first React Native app backed by a local SQLite store with a sync queue that reconciles on reconnect. Gesture-driven interactions were built with Reanimated so the app feels native, and conflict resolution surfaces clearly rather than overwriting a colleague's work.",
    outcome:
      "Teams capture work on site regardless of coverage, and everything reconciles cleanly the moment they are back in range.",
    highlights: [
      "Local-first SQLite store with a durable sync queue",
      "Visible, resolvable sync conflicts",
      "60fps swipe and drag gestures via Reanimated",
      "Shipped to both stores from a single Expo codebase",
    ],
    metrics: [
      { num: "100%", label: "Feature parity while offline" },
      { num: "0", label: "Lost updates since launch" },
      { num: "4.6", label: "Average internal rating" },
    ],
    featured: true,
  },
  {
    slug: "creative-portfolio",
    title: "Creative Portfolio",
    role: "Vanilla JS & CSS",
    image: portfolioImg,
    year: "2024",
    client: "Independent photographer",
    duration: "5 weeks",
    stack: ["Vanilla JS", "CSS", "Canvas API", "IntersectionObserver"],
    summary:
      "A dependency-free portfolio site with a spotlight cursor reveal and typographic scroll choreography.",
    problem:
      "The photographer wanted something memorable but hosted cheaply on static hosting, with no framework and no build step to maintain a year from now.",
    approach:
      "Everything is hand-written CSS and vanilla JavaScript: a canvas-driven spotlight mask over layered hero imagery, IntersectionObserver-driven reveals, and an oversized typographic system. Total JavaScript payload stayed under 8KB, and every effect degrades gracefully under prefers-reduced-motion.",
    outcome:
      "A site that loads almost instantly, costs nothing to host, and will still run unchanged in five years.",
    highlights: [
      "Canvas spotlight mask reveal on the hero",
      "Under 8KB of JavaScript, zero dependencies",
      "Full prefers-reduced-motion fallbacks",
      "Static hosting, no build pipeline",
    ],
    metrics: [
      { num: "8KB", label: "Total JavaScript shipped" },
      { num: "100", label: "Lighthouse accessibility score" },
      { num: "0", label: "Runtime dependencies" },
    ],
    featured: true,
  },
  {
    slug: "township-business-directory",
    title: "Township Business Directory",
    role: "React & Mapbox",
    image: directoryImg,
    year: "2025",
    client: "Community initiative, Vereeniging",
    duration: "12 weeks",
    stack: ["React", "Mapbox GL", "Supabase", "Tailwind CSS"],
    summary:
      "A map-and-list directory helping local shoppers find spaza shops, salons and tradespeople near them.",
    problem:
      "Small township businesses are effectively invisible online. Owners had no affordable way to publish opening hours, contact details or a location that a phone could navigate to.",
    approach:
      "I built a split map-and-list surface where searching, filtering and panning stay in sync. Business owners claim and edit their own listing through a deliberately simple form designed for a first-time smartphone user, and the whole app is installable as a PWA so it works after the first visit even with no data.",
    outcome:
      "Over three hundred businesses were listed within the first two months, most of them appearing online for the very first time.",
    highlights: [
      "Synchronised map, filter and list state",
      "Owner-claimed listings with a low-literacy-friendly form",
      "Installable PWA with cached listing data",
      "Built for one-handed use on small screens",
    ],
    metrics: [
      { num: "300+", label: "Businesses listed" },
      { num: "72%", label: "Traffic from mobile" },
      { num: "2 min", label: "Average time to claim a listing" },
    ],
    featured: false,
  },
  {
    slug: "matric-study-tracker",
    title: "Matric Study Tracker",
    role: "React & Local Storage",
    image: studyImg,
    year: "2024",
    client: "Side project",
    duration: "6 weeks",
    stack: ["React", "TypeScript", "Recharts", "Local Storage"],
    summary:
      "A study planner for matric learners that turns a syllabus into a realistic, trackable weekly timetable.",
    problem:
      "Learners preparing for finals were planning on paper and losing track of which topics they had actually covered versus merely read once.",
    approach:
      "The app takes a subject list and exam dates and generates a spaced-repetition timetable. Progress rings and a topic-confidence rating make weak areas obvious at a glance. Everything stores locally, so no account and no data cost is required to use it.",
    outcome:
      "Used by a study group of forty learners through their final term, with confidence ratings replacing guesswork about what to revise next.",
    highlights: [
      "Automatic spaced-repetition timetable generation",
      "Topic confidence tracking with visual weak-area flags",
      "Works entirely offline, no account needed",
      "Printable weekly plan for learners without a device",
    ],
    metrics: [
      { num: "40", label: "Learners in the pilot group" },
      { num: "0", label: "Data cost to use" },
      { num: "12", label: "Subjects supported" },
    ],
    featured: false,
  },
  {
    slug: "weather-pwa",
    title: "Weather PWA",
    role: "Vanilla JS & Service Workers",
    image: weatherImg,
    year: "2024",
    client: "Open source",
    duration: "3 weeks",
    stack: ["Vanilla JS", "Service Workers", "Web APIs", "CSS"],
    summary:
      "A tiny installable forecast app that stays useful when the network disappears.",
    problem:
      "Most weather apps ship megabytes of JavaScript and show nothing at all when offline — exactly when a cached forecast is most useful.",
    approach:
      "A service worker caches the last successful forecast and serves it instantly on launch, then quietly revalidates. The whole app is under 30KB, animates its sky gradient from the current conditions, and installs to the home screen like a native app.",
    outcome:
      "Published as an open-source project and picked up by other developers as a reference for stale-while-revalidate caching.",
    highlights: [
      "Stale-while-revalidate service worker caching",
      "Under 30KB total transfer",
      "Conditions-driven gradient theming",
      "Installable with an offline launch screen",
    ],
    metrics: [
      { num: "30KB", label: "Total app size" },
      { num: "Instant", label: "Offline cold start" },
      { num: "MIT", label: "Open source licence" },
    ],
    featured: false,
  },
  {
    slug: "nexlink-agency-site",
    title: "Nexlink Agency Site",
    role: "TanStack Start & Motion",
    image: agencyImg,
    year: "2026",
    client: "Nexlink Solutions ZA",
    duration: "7 weeks",
    stack: ["TanStack Start", "React", "Motion", "TypeScript"],
    summary:
      "The marketing site for my own studio — a case study in restraint, speed and considered motion.",
    problem:
      "As a new studio we needed a site that would win trust from clients who had never heard of us, without leaning on stock imagery or the usual template look.",
    approach:
      "Server-rendered routes for every service and case study so each page is independently shareable and indexable. Motion is used sparingly and purposefully: staged text reveals, a magnetic call to action, and page transitions that give the site a sense of continuity rather than novelty.",
    outcome:
      "The site became our main inbound channel, and most enquiries now arrive already referencing a specific case study.",
    highlights: [
      "Fully server-rendered, per-page metadata",
      "Purposeful motion system with reduced-motion parity",
      "Case-study-led information architecture",
      "Sub-second navigation between routes",
    ],
    metrics: [
      { num: "0.8s", label: "Median page load" },
      { num: "100", label: "Lighthouse SEO score" },
      { num: "#1", label: "Inbound enquiry channel" },
    ],
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export type Service = {
  slug: string;
  name: string;
  desc: string;
  intro: string;
  includes: string[];
  tools: string[];
};

export const services: Service[] = [
  {
    slug: "frontend-development",
    name: "Frontend Development",
    desc: "Building responsive, accessible, and performant web applications.",
    intro:
      "I build the front end of web products from the component up: typed, tested, accessible and quick on the kind of device and connection most South Africans actually use. Performance is treated as a feature with a budget, not something measured after launch.",
    includes: [
      "Component architecture and design-system setup",
      "Responsive layouts from 320px upward",
      "Performance budgets enforced in CI",
      "WCAG AA accessibility as a baseline, not an extra",
      "API integration with proper loading and error states",
      "Handover documentation your next developer can follow",
    ],
    tools: ["React", "Next.js", "TanStack Start", "Vue 3", "TypeScript", "Tailwind CSS", "Vite"],
  },
  {
    slug: "ui-ux-implementation",
    name: "UI/UX Implementation",
    desc: "Turning complex Figma designs into pixel-perfect code.",
    intro:
      "I take a Figma file and turn it into a living interface that matches the design at every breakpoint — including the states designers rarely draw: empty, loading, error, too-long-name, offline.",
    includes: [
      "Pixel-accurate translation of Figma to code",
      "Design tokens wired to a themeable system",
      "Every interaction state built, not just the happy path",
      "Dark mode and theming support",
      "Reusable component library with usage examples",
      "Design QA passes with the designer before sign-off",
    ],
    tools: ["Figma", "Tailwind CSS", "shadcn/ui", "Radix UI", "Storybook", "CSS custom properties"],
  },
  {
    slug: "web-animation",
    name: "Web Animation",
    desc: "Adding life to interfaces with GSAP, Framer Motion, and CSS.",
    intro:
      "Motion should explain the interface, not decorate it. I build animation systems where every transition has a reason — orienting the user, showing what changed, rewarding an action — and where reduced-motion users get an equally complete experience.",
    includes: [
      "Scroll-driven reveals and parallax choreography",
      "Page and route transition systems",
      "Canvas and mask-based effects",
      "Micro-interactions on buttons, inputs and cards",
      "GPU-friendly animation kept off the main thread",
      "Full prefers-reduced-motion alternatives",
    ],
    tools: ["GSAP", "Motion", "CSS animations", "Canvas API", "IntersectionObserver", "Lenis"],
  },
];

export const processSteps = [
  {
    num: "01",
    title: "Discovery",
    body: "A short call to understand the product, the audience and what success actually means. I come back with scope, timeline and a fixed quote.",
  },
  {
    num: "02",
    title: "Architecture",
    body: "Component structure, data flow, design tokens and a performance budget agreed before a single feature is built.",
  },
  {
    num: "03",
    title: "Build",
    body: "Weekly deploys to a preview URL. You see progress continuously instead of waiting for a reveal at the end.",
  },
  {
    num: "04",
    title: "Polish & handover",
    body: "Accessibility audit, performance pass, cross-device QA, then documented handover so your team can carry it forward.",
  },
];

export type Experience = {
  year: string;
  role: string;
  company: string;
  summary: string;
  points: string[];
};

export const experiences: Experience[] = [
  {
    year: "July 2025 - Present",
    role: "Co-founder & Software Developer",
    company: "Nexlink Solutions ZA",
    summary:
      "Co-founded a Johannesburg software studio building web products for small and mid-sized South African businesses. I lead everything front end: architecture, implementation, performance and client-facing delivery.",
    points: [
      "Set the studio's frontend stack and component standards",
      "Delivered storefronts, dashboards and marketing sites end to end",
      "Run scoping calls and translate client goals into technical plans",
      "Introduced performance budgets and accessibility checks to every build",
    ],
  },
  {
    year: "2025",
    role: "Freelance Frontend Developer",
    company: "Independent",
    summary:
      "Took on independent contracts alongside finishing my studies, mostly rescuing slow or broken sites for local businesses.",
    points: [
      "Rebuilt underperforming template sites as fast custom front ends",
      "Worked directly with designers to implement Figma systems",
      "Learned to scope, quote and ship solo under real deadlines",
    ],
  },
  {
    year: "2022 - 2025",
    role: "Graduated",
    company: "Sedibeng TVET College",
    summary:
      "Completed my qualification in information technology, where I moved from fundamentals into the web work that became my focus.",
    points: [
      "Grounding in programming fundamentals, databases and networking",
      "Built the first version of my portfolio as a final-year project",
      "Started contributing to open-source projects in my own time",
    ],
  },
  {
    year: "2022 - Present",
    role: "Open Source Contributor",
    company: "Community projects",
    summary:
      "Ongoing contributions to web tooling and animation libraries, mostly documentation, accessibility fixes and small performance patches.",
    points: [
      "Accessibility and documentation contributions to UI libraries",
      "Published a reference weather PWA under an MIT licence",
      "Active in local developer communities around Johannesburg",
    ],
  },
];

export const skills = [
  {
    group: "Languages",
    items: ["JavaScript", "TypeScript", "HTML5", "CSS3", "SQL"],
  },
  {
    group: "Frameworks",
    items: ["React", "Next.js", "TanStack Start", "Vue 3", "React Native"],
  },
  {
    group: "Styling & motion",
    items: ["Tailwind CSS", "GSAP", "Motion", "Canvas API", "Design tokens"],
  },
  {
    group: "Tooling",
    items: ["Vite", "Git", "Figma", "Playwright", "Lighthouse CI"],
  },
];

export const stats = [
  { num: "2025", label: "Sedibeng TVET college Graduate" },
  { num: "Founder", label: "Nexlink Solutions ZA" },
  { num: "Johannesburg", label: "Base Location" },
];
