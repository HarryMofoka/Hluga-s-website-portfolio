# Chapter 2: Project Structure & Directory Guide

In this chapter, we will explore the folder map of the entire project so you always know where every file lives and what it does.

---

## 1. Project Directory Map

Here is the full directory tree of the repository:

```
Hluga's site/
├── CMS/                       <-- Dedicated CMS Platform folder
│   ├── components/            <-- CMS UI tabs (Analytics, Content, Sections, Colors, Git)
│   │   ├── AnalyticsTab.tsx
│   │   ├── CMSDashboard.tsx
│   │   ├── ColorThemeTab.tsx
│   │   ├── ContentManagerTab.tsx
│   │   ├── GitSyncTab.tsx
│   │   └── SectionManagerTab.tsx
│   ├── cms.css                <-- CMS styling rules
│   ├── index.ts               <-- Main CMS export entry
│   ├── types.ts               <-- TypeScript data types
│   └── utils/
│       └── defaultData.ts     <-- Fallback portfolio data
│
├── src/                       <-- Main Website Source Code
│   ├── app/                   <-- Next.js Page Routes
│   │   ├── about/             <-- About page (/about)
│   │   ├── api/cms/           <-- Backend REST API endpoints
│   │   │   ├── analytics/     <-- Analytics API
│   │   │   ├── auth/          <-- Admin Authentication API
│   │   │   ├── content/       <-- Content CRUD API
│   │   │   ├── git/           <-- GitHub Push API
│   │   │   ├── sections/      <-- Layout Sections API
│   │   │   └── theme/         <-- Color Theme API
│   │   ├── cms/               <-- CMS Admin Page (/cms)
│   │   ├── contact/           <-- Contact page (/contact)
│   │   ├── experience/        <-- Experience page (/experience)
│   │   ├── services/          <-- Services page (/services)
│   │   ├── work/              <-- Work showcase page (/work & /work/[slug])
│   │   ├── layout.tsx         <-- Main application wrapper & HTML head
│   │   └── page.tsx           <-- Homepage (/)
│   ├── components/            <-- Reusable UI components (SiteNav, Hero, WorkList, SiteFooter)
│   ├── context/
│   │   └── CMSContext.tsx     <-- React Context sharing live CMS data across all pages
│   ├── data/
│   │   └── cms-config.json    <-- Master JSON database file
│   ├── lib/
│   │   └── cms-db.ts          <-- Database helper engine & file storage logic
│   ├── middleware.ts          <-- Real-time traffic analytics middleware
│   ├── portfolio.css          <-- Main website stylesheet & CSS tokens
│   └── styles.css             <-- Global base styles
│
├── public/                    <-- Static images, icons & assets
├── to learn/                  <-- Beginner educational book (You are here!)
├── package.json               <-- Project configuration & installed packages
├── tsconfig.json              <-- TypeScript settings
└── README.md                  <-- Project overview & documentation
```

---

## 2. Explanation of Key Folders

### A. The `src/app/` Folder (Pages & Routing)
Next.js uses folder names to create URLs automatically:
- `src/app/page.tsx` → Your Homepage (`/`)
- `src/app/about/page.tsx` → About Page (`/about`)
- `src/app/work/page.tsx` → Work Showcase Page (`/work`)
- `src/app/services/page.tsx` → Services Page (`/services`)
- `src/app/experience/page.tsx` → Experience Page (`/experience`)
- `src/app/contact/page.tsx` → Contact Page (`/contact`)
- `src/app/cms/page.tsx` → CMS Admin Platform (`/cms`)

### B. The `src/components/` Folder (UI Building Blocks)
This folder contains the visual elements that make up the pages:
- `SiteNav.tsx`: Top navigation bar and mobile drawer menu.
- `Hero.tsx`: High-impact animated intro banner on the homepage with spotlight effect.
- `WorkList.tsx`: Interactive project grid displaying case studies.
- `SiteFooter.tsx`: Footer links and call-to-action contact banner.

### C. The `CMS/` Folder (Standalone Platform)
A completely separate platform directory containing the CMS dashboard interface, analytics charts, content editors, section arrangement controls, theme tuner, and Git commit tools.

### D. The `src/lib/cms-db.ts` & `src/data/cms-config.json` Files (Database)
- `cms-config.json` is the single source of truth storing your profile text, projects, services, colors, and analytics.
- `cms-db.ts` is the backend code that safely reads and writes to `cms-config.json` whenever you click "Save" in the CMS.

---

## 3. Configuration Files

- **`package.json`**: Lists all npm dependencies (React, Next.js, Lucide Icons) and scripts (like `npm run dev` to start locally or `npm run build` to compile).
- **`tsconfig.json`**: Configures TypeScript compiler settings.
- **`next.config.mjs`**: Configuration file for Next.js engine options.

---

## Next Steps
Now that you know where every file is located, move to **[Chapter 3: Styling & Design System](file:///c:/Users/Admin/OneDrive/Desktop/Hluga%27s%20site/to%20learn/03-styling-and-design-system.md)** to learn how website colors, fonts, and designs work!
