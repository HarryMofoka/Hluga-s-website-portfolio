# HLUGA. — Interactive Portfolio & Production CMS Platform

Welcome to the official repository for **HLUGA.** — the digital portfolio and content management system of **Lehlohonolo Mofokeng**, a junior frontend developer based in Johannesburg, South Africa.

This repository features a fast, responsive portfolio website built with **Next.js 15**, **React 19**, **TypeScript**, and a custom editorial design system, alongside a built-in **CMS Platform** with real-time analytics, content editors, theme customization, and automated GitHub deployment tools.

---

## 👤 About Lehlohonolo Mofokeng

- **Name**: Lehlohonolo Mofokeng
- **Brand**: HLUGA.
- **Role**: Junior Frontend Developer & Software Specialist
- **Base Location**: Johannesburg, South Africa 🇿🇦
- **Studio**: Co-founder & Developer at **Nexlink Solutions ZA**
- **Education**: IT Graduate from Sedibeng TVET College (2025)
- **Email**: `hello@nexlinksolutionsza.co.za`
- **GitHub**: [https://github.com/HarryMofoka](https://github.com/HarryMofoka)
- **Repository**: [https://github.com/HarryMofoka/Hluga-s-website-portfolio.git](https://github.com/HarryMofoka/Hluga-s-website-portfolio.git)

Lehlohonolo builds fast, accessible, and interactive web experiences with clean component architecture and performance budgets enforced for South African network conditions.

---

## 🚀 Key Website Features

1. **Editorial & Brutalist Design Aesthetic**:
   - High contrast dark/cream palette (`#111111`, `#0b0b0b`, `#f4f1e8`).
   - Signature Ice Blue accent highlights (`#75c5de`).
   - Typography powered by the modern **Inter** font family.
   - Canvas-driven spotlight flashlight effect on the Hero banner.
2. **Fast & Accessible**:
   - Sub-second page navigation and responsive layouts from 320px screens upward.
   - WCAG AA color contrast compliance.
3. **Full Production CMS Platform (`/cms`)**:
   - **Real-Time Analytics**: Metric cards (Page Views, Unique Visitors, Avg Duration, Bounce Rate), interactive SVG trend graph, traffic source attribution, top routes, top projects, and device/country audience breakdowns.
   - **Content Manager**: Full CRUD interface for Profile & Bio, Projects (stack, metrics, featured toggle), Services, Experience timeline, and Social links.
   - **Section & Layout Manager**: Toggle section visibility (Hero, About, Work, Services, Experience, Contact), reorder layout sequence, and update section headings.
   - **Color & Theme Tuner**: Custom color picker, preset theme selector (*Cyber Cyan*, *Sandton Gold*, *Midnight Emerald*, *Obsidian Violet*), and live site preview.
   - **Git Deployment**: One-click Git staging, commit creation, and automated push to `https://github.com/HarryMofoka/Hluga-s-website-portfolio.git`.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **UI Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: Vanilla CSS & Custom Design Tokens (`src/portfolio.css`, `CMS/cms.css`)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Backend & Middleware**: Next.js Server Route Handlers & Analytics Middleware (`src/middleware.ts`)
- **Storage**: Atomic JSON Database Engine (`src/lib/cms-db.ts` & `src/data/cms-config.json`)

---

## ⚡ Quick Start Guide (Local Development)

### 1. Prerequisites
Ensure you have **Node.js** (v18.0.0 or higher) and **npm** installed on your system.

### 2. Clone Repository & Install Dependencies
```bash
git clone https://github.com/HarryMofoka/Hluga-s-website-portfolio.git
cd Hluga-s-website-portfolio
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

### 4. Access the CMS Platform
Navigate to [http://localhost:3000/cms](http://localhost:3000/cms) in your browser.
- **Default Admin Passkey**: `hluga2026admin`

### 5. Build for Production
```bash
npm run build
```

---

## 📚 Beginner Learning Book (`/to learn`)

Are you new to web development? We have compiled a **7-chapter step-by-step learning guide** specifically for complete beginners in the **[`to learn/`](file:///c:/Users/Admin/OneDrive/Desktop/Hluga%27s%20site/to%20learn)** folder:

1. **[01-introduction-and-web-basics.md](file:///c:/Users/Admin/OneDrive/Desktop/Hluga%27s%20site/to%20learn/01-introduction-and-web-basics.md)** — What is HTML, CSS, JavaScript, React, and Next.js.
2. **[02-project-structure-and-files.md](file:///c:/Users/Admin/OneDrive/Desktop/Hluga%27s%20site/to%20learn/02-project-structure-and-files.md)** — Detailed tour of every file and folder in the project.
3. **[03-styling-and-design-system.md](file:///c:/Users/Admin/OneDrive/Desktop/Hluga%27s%20site/to%20learn/03-styling-and-design-system.md)** — How design tokens, colors, and themes work.
4. **[04-components-and-pages.md](file:///c:/Users/Admin/OneDrive/Desktop/Hluga%27s%20site/to%20learn/04-components-and-pages.md)** — How React components and Next.js routes work.
5. **[05-the-cms-platform-and-analytics.md](file:///c:/Users/Admin/OneDrive/Desktop/Hluga%27s%20site/to%20learn/05-the-cms-platform-and-analytics.md)** — How backend CMS data and analytics middleware function.
6. **[06-customization-and-editing-guide.md](file:///c:/Users/Admin/OneDrive/Desktop/Hluga%27s%20site/to%20learn/06-customization-and-editing-guide.md)** — Practical cookbook for editing text, projects, colors, and adding pages.
7. **[07-deployment-and-git.md](file:///c:/Users/Admin/OneDrive/Desktop/Hluga%27s%20site/to%20learn/07-deployment-and-git.md)** — How Git, GitHub, and live hosting on Vercel work.

---

## 🔒 Security & Environment Variables

No external API keys are required to run this project out-of-the-box. You can optionally configure an admin passkey in a `.env.local` file:

```env
# Optional Custom Admin Passkey for /cms
CMS_ADMIN_KEY=YourCustomSecretPasskey
```

---

## 📄 License & Attribution

Designed and developed by **Lehlohonolo Mofokeng (HLUGA.)** for **Nexlink Solutions ZA**.
Repository: [https://github.com/HarryMofoka/Hluga-s-website-portfolio.git](https://github.com/HarryMofoka/Hluga-s-website-portfolio.git)
