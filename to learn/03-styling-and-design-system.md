# Chapter 3: Styling & Design System Guide

In this chapter, you will learn how the visual design system of HLUGA website works, how CSS variables control colors, and how you can change the look and feel of the site!

---

## 1. The HLUGA Visual Aesthetic

HLUGA features a modern, editorial/brutalist design aesthetic characterized by:
- High contrast dark and light elements (`#111111` ink vs `#f4f1e8` cream).
- Signature ice-blue accent highlights (`#75c5de`).
- Modern typography using the **Inter** font family.
- Subtle spotlight canvas masks and smooth micro-animations.

---

## 2. What Are CSS Variables (Design Tokens)?

In CSS, **variables** (also called design tokens) store colors, spacing, or font names in one central place so they can be reused across the entire website.

The site's variables are defined in `src/portfolio.css`:

```css
:root {
  --hl-page: #e4e4e4;      /* Main website background */
  --hl-ink: #111111;       /* Primary dark text / headers */
  --hl-ink-deep: #0b0b0b;  /* Deep dark background */
  --hl-cream: #f4f1e8;     /* Off-white cream cards */
  --hl-muted: #9a9590;     /* Secondary muted subtext */
  --hl-accent: #75c5de;    /* Primary highlight color (Ice Blue) */
  --hl-line: rgba(17, 17, 17, 0.1);
}
```

### How Variables Are Consumed:
When a button or text element wants to use the accent color, it references `var(--hl-accent)`:

```css
.cta-button {
  background-color: var(--hl-accent);
  color: #0b0b0b;
}
```

---

## 3. Dynamic Color Tuning via CMS

Because the website is connected to `CMSProvider` ([src/context/CMSContext.tsx](file:///c:/Users/Admin/OneDrive/Desktop/Hluga%27s%20site/src/context/CMSContext.tsx)), these CSS variables are updated **dynamically in real time**!

When you select a theme preset (like *Cyber Cyan*, *Sandton Gold*, or *Midnight Emerald*) in the CMS under **Colors & Theme**:
1. The CMS updates the JavaScript state.
2. `CMSProvider` injects the new values directly into the browser's `:root` style.
3. Every component on your website instantly re-skins itself without needing a page refresh!

---

## 4. How to Change Styles Manually in Code

If you want to edit CSS rules directly in code:

### A. Editing Global Styles & Colors
Open **[src/portfolio.css](file:///c:/Users/Admin/OneDrive/Desktop/Hluga%27s%20site/src/portfolio.css)**.
- To change default page background, edit line 7: `--hl-page: #e4e4e4;`
- To change primary accent color, edit line 12: `--hl-accent: #75c5de;`

### B. Editing CMS Dashboard Styles
Open **[CMS/cms.css](file:///c:/Users/Admin/OneDrive/Desktop/Hluga%27s%20site/CMS/cms.css)**.
- To change card padding, edit `.cms-card`.
- To change input border colors, edit `.cms-input`.

---

## Next Steps
Now that you understand styling, jump to **[Chapter 4: Components & Pages](file:///c:/Users/Admin/OneDrive/Desktop/Hluga%27s%20site/to%20learn/04-components-and-pages.md)** to see how HTML structure and React components fit together!
