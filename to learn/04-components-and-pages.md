# Chapter 4: Components & Pages Guide

In this chapter, we will break down how React components work in this project, how pages render content, and how you can add new text or sections!

---

## 1. What is a React Component?

A React Component is a JavaScript function that returns HTML-like markup called **JSX** (JavaScript XML).

Here is a simplified example of a React component:

```tsx
// Example React Component
export function Greeting(props: { name: string }) {
  return (
    <div className="greeting-box">
      <h1>Hello, {props.name}!</h1>
      <p>Welcome to my portfolio.</p>
    </div>
  );
}
```

Notice how `{props.name}` allows us to insert dynamic JavaScript variables directly into the HTML!

---

## 2. Key Components in This Website

### A. `Hero.tsx` ([src/components/Hero.tsx](file:///c:/Users/Admin/OneDrive/Desktop/Hluga%27s%20site/src/components/Hero.tsx))
- **What it does**: Renders the large hero banner on the homepage.
- **Cool Feature**: Includes an interactive HTML5 `<canvas>` that tracks your mouse cursor and displays a spotlight flashlight effect over the hero image!

### B. `SiteNav.tsx` ([src/components/SiteNav.tsx](file:///c:/Users/Admin/OneDrive/Desktop/Hluga%27s%20site/src/components/SiteNav.tsx))
- **What it does**: Renders the floating logo button, hamburger menu button, and slide-out navigation menu for mobile and desktop screens.
- **Link**: Includes a discrete link to `/cms` for admin management.

### C. `WorkList.tsx` ([src/components/WorkList.tsx](file:///c:/Users/Admin/OneDrive/Desktop/Hluga%27s%20site/src/components/WorkList.tsx))
- **What it does**: Takes an array of project items and renders case study cards showing project titles, tags, summaries, and metrics.

### D. `SiteFooter.tsx` ([src/components/SiteFooter.tsx](file:///c:/Users/Admin/OneDrive/Desktop/Hluga%27s%20site/src/components/SiteFooter.tsx))
- **What it does**: Displays the "Let's work together" contact callout banner and copyright links at the bottom of pages.

---

## 3. How Pages Work (`src/app/`)

Next.js uses folder-based routing. Inside `src/app/`, every subdirectory containing a `page.tsx` file becomes a public route:

| Route URL | Source File | Purpose |
| :--- | :--- | :--- |
| `https://yoursite.com/` | `src/app/page.tsx` | Main portfolio homepage displaying Hero, About, Work, Services, Experience |
| `https://yoursite.com/work` | `src/app/work/page.tsx` | Complete list of all portfolio case studies |
| `https://yoursite.com/about` | `src/app/about/page.tsx` | Lehlohonolo Mofokeng's biography, background, and skills |
| `https://yoursite.com/services` | `src/app/services/page.tsx` | Services offered & workflow process breakdown |
| `https://yoursite.com/experience` | `src/app/experience/page.tsx` | Work experience timeline & career milestone points |
| `https://yoursite.com/contact` | `src/app/contact/page.tsx` | Contact details & email callout |
| `https://yoursite.com/cms` | `src/app/cms/page.tsx` | Full CMS Admin Platform |

---

## 4. How Data Flows to Pages

Instead of hardcoding text into HTML, pages get their content from **`useCMS()`** context:

```tsx
// How page.tsx gets live CMS data:
const { config } = useCMS();
const { profile, projects, services } = config;
```

This means whenever you edit text in the CMS, `config` updates automatically, and all pages immediately display your new text!

---

## Next Steps
Now let's explore **[Chapter 5: The CMS Platform & Analytics](file:///c:/Users/Admin/OneDrive/Desktop/Hluga%27s%20site/to%20learn/05-the-cms-platform-and-analytics.md)** to learn how the backend CMS handles data and analytics tracking!
