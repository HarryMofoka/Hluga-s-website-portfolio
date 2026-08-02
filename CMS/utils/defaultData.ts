import { CMSConfig } from "../types";

export const defaultCMSConfig: CMSConfig = {
  profile: {
    name: "Lehlohonolo Mofokeng",
    brand: "HLUGA.",
    role: "Junior Frontend Developer",
    location: "Johannesburg, ZA",
    email: "hello@nexlinksolutionsza.co.za",
    company: "Nexlink Solutions ZA",
    headline: "I build interactive web experiences with clean code and modern design.",
    bio: "Hi, I'm Lehlohonolo Mofokeng. I'm a passionate junior frontend developer based in Johannesburg, dedicated to turning complex problems into beautiful, intuitive interface designs.",
  },

  stats: [
    { num: "2025", label: "Sedibeng TVET college Graduate" },
    { num: "Founder", label: "Nexlink Solutions ZA" },
    { num: "Johannesburg", label: "Base Location" },
  ],

  socials: [
    { label: "GitHub", href: "https://github.com/HarryMofoka" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Twitter", href: "https://twitter.com" },
    { label: "Instagram", href: "https://instagram.com" },
  ],

  projects: [
    {
      slug: "e-commerce-platform",
      title: "E-Commerce Platform",
      role: "React & Next.js",
      image: "/work-ecommerce.jpg",
      year: "2025",
      client: "Retail startup, Sandton",
      duration: "14 weeks",
      stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Stripe"],
      summary:
        "A storefront built for South African shoppers on slow connections — fast product browsing, low-data image delivery and a checkout that survives dropped signal.",
      problem:
        "The client's existing store took over nine seconds to become interactive on a mid-range phone. Carts were abandoned because payment reloaded the full page.",
      approach:
        "Rebuilt on Next.js with server-rendered category pages, responsive AVIF imagery and route-level caching. Checkout persists to local storage for offline tolerance.",
      outcome:
        "Store loads in under 2 seconds on 3G and checkout completion rate increased by 34% post launch.",
      highlights: [
        "Server-rendered catalogue with incremental revalidation",
        "Offline-tolerant checkout that restores interrupted baskets",
        "Image pipeline serving AVIF/WebP at four breakpoints",
        "Full keyboard navigation and WCAG AA contrast",
      ],
      metrics: [
        { num: "1.9s", label: "LCP on 3G" },
        { num: "+34%", label: "Checkout completion" },
        { num: "98", label: "Lighthouse score" },
      ],
      featured: true,
    },
    {
      slug: "data-dashboard",
      title: "Data Dashboard",
      role: "Vue 3 & D3.js",
      image: "/work-dashboard.jpg",
      year: "2025",
      client: "Logistics operator",
      duration: "10 weeks",
      stack: ["Vue 3", "D3.js", "TypeScript", "Vite", "WebSockets"],
      summary:
        "A live operations dashboard rendering thousands of delivery events per minute without dropping a frame.",
      problem:
        "Controllers were reading fleet status off three separate spreadsheets refreshed manually with outdated data.",
      approach:
        "Single-screen command view in Vue 3 with D3 canvas charting layer fed by a WebSocket stream.",
      outcome:
        "Controllers work from one screen with sub-second data, eliminating manual spreadsheet overhead.",
      highlights: [
        "Canvas-rendered time series handling 5,000+ points smoothly",
        "WebSocket stream with automatic reconnect and backfill",
        "Saved view presets per controller",
        "Dark interface tuned for warehouse control rooms",
      ],
      metrics: [
        { num: "60fps", label: "Render under live load" },
        { num: "<1s", label: "Latency" },
        { num: "3 → 1", label: "Tools replaced" },
      ],
      featured: true,
    },
    {
      slug: "task-manager-app",
      title: "Task Manager App",
      role: "React Native",
      image: "/work-taskmanager.jpg",
      year: "2024",
      client: "Nexlink internal product",
      duration: "8 weeks",
      stack: ["React Native", "Expo", "TypeScript", "SQLite", "Reanimated"],
      summary:
        "An offline-first mobile task manager for small teams who cannot rely on always-on data.",
      problem:
        "Field teams lose signal constantly and other apps discarded unsubmitted field updates.",
      approach:
        "Offline-first React Native app backed by local SQLite store with a sync queue that reconciles on reconnect.",
      outcome:
        "Teams capture work on site regardless of coverage, auto-reconciling upon reconnection.",
      highlights: [
        "Local-first SQLite store with durable sync queue",
        "Visible, resolvable sync conflicts",
        "60fps swipe gestures via Reanimated",
        "Shipped to iOS and Android from single Expo repo",
      ],
      metrics: [
        { num: "100%", label: "Offline parity" },
        { num: "0", label: "Lost updates" },
        { num: "4.6", label: "Internal rating" },
      ],
      featured: true,
    },
  ],

  services: [
    {
      slug: "frontend-development",
      name: "Frontend Development",
      desc: "Building responsive, accessible, and performant web applications.",
      intro:
        "I build the front end of web products from the component up: typed, tested, accessible and quick on any device.",
      includes: [
        "Component architecture and design-system setup",
        "Responsive layouts from 320px upward",
        "Performance budgets enforced in CI",
        "WCAG AA accessibility as a baseline",
      ],
      tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite"],
    },
    {
      slug: "ui-ux-implementation",
      name: "UI/UX Implementation",
      desc: "Turning complex Figma designs into pixel-perfect code.",
      intro:
        "I take Figma files and convert them into living interfaces that match the design across all state boundaries.",
      includes: [
        "Pixel-accurate translation of Figma to code",
        "Design tokens wired to a themeable system",
        "Dark mode and theming support",
      ],
      tools: ["Figma", "Tailwind CSS", "Radix UI", "CSS Custom Properties"],
    },
    {
      slug: "web-animation",
      name: "Web Animation",
      desc: "Adding life to interfaces with GSAP, Framer Motion, and CSS.",
      intro:
        "Motion should explain the interface, orienting the user and rewarding interactions.",
      includes: [
        "Scroll-driven reveals and parallax choreography",
        "Route transition systems",
        "Micro-interactions on buttons and cards",
      ],
      tools: ["GSAP", "Motion", "CSS Animations", "Canvas API"],
    },
  ],

  experiences: [
    {
      year: "July 2025 - Present",
      role: "Co-founder & Software Developer",
      company: "Nexlink Solutions ZA",
      summary:
        "Co-founded a Johannesburg software studio building web products for South African businesses.",
      points: [
        "Set the studio's frontend stack and component standards",
        "Delivered storefronts, dashboards and marketing sites end to end",
        "Introduced performance budgets and accessibility checks to every build",
      ],
    },
    {
      year: "2025",
      role: "Freelance Frontend Developer",
      company: "Independent",
      summary:
        "Took on independent contracts alongside studies, creating custom frontends for local clients.",
      points: [
        "Rebuilt underperforming template sites as fast custom front ends",
        "Worked directly with designers to implement Figma systems",
      ],
    },
    {
      year: "2022 - 2025",
      role: "Graduated",
      company: "Sedibeng TVET College",
      summary:
        "Completed qualification in IT, building web projects and foundational software skills.",
      points: [
        "Grounding in programming fundamentals, databases and networking",
        "Built the first version of portfolio as a final-year project",
      ],
    },
  ],

  sections: [
    { id: "hero", name: "Hero Section", enabled: true, title: "Hero Header", order: 1 },
    { id: "about", name: "About Me", enabled: true, title: "About", subtitle: "Me", order: 2 },
    { id: "work", name: "Selected Work", enabled: true, title: "Selected", subtitle: "Work", order: 3 },
    { id: "services", name: "My Services", enabled: true, title: "My", subtitle: "Services", order: 4 },
    { id: "experience", name: "My Experience", enabled: true, title: "My", subtitle: "Experience", order: 5 },
    { id: "contact", name: "Contact & Footer", enabled: true, title: "Let's Work Together", order: 6 },
  ],

  theme: {
    page: "#e4e4e4",
    ink: "#111111",
    inkDeep: "#0b0b0b",
    cream: "#f4f1e8",
    muted: "#9a9590",
    accent: "#75c5de",
    preset: "original",
  },

  analytics: {
    totalViews: 14820,
    uniqueVisitors: 6420,
    avgTimeOnSite: "3m 42s",
    bounceRate: "32.4%",
    dailyMetrics: [
      { date: "Jul 27", views: 420, visitors: 190 },
      { date: "Jul 28", views: 580, visitors: 260 },
      { date: "Jul 29", views: 750, visitors: 340 },
      { date: "Jul 30", views: 910, visitors: 410 },
      { date: "Jul 31", views: 1120, visitors: 530 },
      { date: "Aug 01", views: 1450, visitors: 680 },
      { date: "Aug 02", views: 1680, visitors: 790 },
    ],
    trafficSources: [
      { source: "Direct", count: 4850, percentage: 38 },
      { source: "Google Search", count: 3580, percentage: 28 },
      { source: "LinkedIn", count: 2420, percentage: 19 },
      { source: "GitHub", count: 1210, percentage: 10 },
      { source: "Referrals & Other", count: 640, percentage: 5 },
    ],
    pageViews: [
      { path: "/", title: "Home Page", views: 7240 },
      { path: "/work", title: "All Projects / Work", views: 3120 },
      { path: "/about", title: "About Me", views: 1890 },
      { path: "/services", title: "Services", views: 1450 },
      { path: "/experience", title: "Experience Timeline", views: 1120 },
    ],
    topProjects: [
      { title: "E-Commerce Platform", views: 1980, percentage: 38 },
      { title: "Data Dashboard", views: 1420, percentage: 27 },
      { title: "Task Manager App", views: 980, percentage: 19 },
      { title: "Township Business Directory", views: 840, percentage: 16 },
    ],
    deviceStats: [
      { device: "Mobile Phone", percentage: 64 },
      { device: "Desktop / Laptop", percentage: 31 },
      { device: "Tablet", percentage: 5 },
    ],
    countryStats: [
      { country: "South Africa", code: "ZA", count: 4890 },
      { country: "United States", code: "US", count: 680 },
      { country: "United Kingdom", code: "GB", count: 420 },
      { country: "Germany", code: "DE", count: 210 },
      { country: "Others", code: "WW", count: 220 },
    ],
  },
};
