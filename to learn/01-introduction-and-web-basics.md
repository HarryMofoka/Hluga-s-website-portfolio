# Chapter 1: Introduction & Web Coding Basics

Welcome to the **HLUGA. Website Learning Book**! This guide was written specifically for complete beginners who want to understand how a modern, professional web application is built from scratch.

Whether you have never written a line of code before, or you are just getting started, this book will walk you step-by-step through every single concept used to build this website portfolio and CMS platform.

---

## 1. What is a Website?

At its core, a website is a set of files hosted on a computer (called a **server**) that your web browser (like Google Chrome, Safari, or Microsoft Edge) downloads and displays to you over the internet.

Modern websites are built using three core fundamental web technologies, plus a framework that ties them together:

```
+-----------------------------------------------------------------------+
|                             YOUR WEBSITE                              |
+-------------------+--------------------+------------------------------+
|     HTML          |        CSS         |          JAVASCRIPT          |
| (The Skeleton)    |   (The Styling)    |         (The Brains)         |
|                   |                    |                              |
| Headings, text,   | Colors, layout,    | Animations, clicks, state,   |
| images, links     | fonts, spacing     | fetching data, interactivity |
+-------------------+--------------------+------------------------------+
```

### A. HTML (HyperText Markup Language) — The Skeleton
HTML provides the basic structural elements of your website. It uses **tags** enclosed in angle brackets `< >`.
- `<h1>Hello World</h1>` makes a big main heading.
- `<p>This is a paragraph.</p>` holds text.
- `<button>Click Me</button>` creates an interactive button.

### B. CSS (Cascading Style Sheets) — The Clothes & Design
CSS makes your skeleton look stunning! It controls colors, backgrounds, font sizes, margins, alignment, and responsive screens.
```css
/* Example CSS */
body {
  background-color: #0b0b0b; /* Dark background */
  color: #f4f1e8;            /* Cream text color */
  font-family: 'Inter', sans-serif;
}
```

### C. JavaScript (JS) & TypeScript (TS) — The Logic & Brains
JavaScript makes websites interactive. When you click a menu button, toggle dark mode, or submit a form, JavaScript handles that logic.

**TypeScript** is a safer version of JavaScript used in this project. It adds "types" to prevent bugs (e.g., ensuring a price is always a number, not text).

---

## 2. What Frameworks Are Used Here?

Instead of writing plain HTML files by hand for every single page, modern developers use powerful tools called **React** and **Next.js**.

### What is React?
React is a popular JavaScript library created by Meta (Facebook). It allows us to split a website into reusable building blocks called **Components**.
For example:
- A `Button` component can be reused on 20 different pages.
- A `SiteNav` component renders the navigation menu at the top of every page automatically.

### What is Next.js 15?
Next.js is a framework built on top of React. It handles:
1. **Routing**: Turning folders into website URLs (e.g., a folder `app/about` automatically creates the page `https://yoursite.com/about`).
2. **Speed & Performance**: Server-rendering pages so they load in under a second on mobile phones.
3. **API Endpoints**: Running backend code (like saving database data or tracking analytics) directly inside your web app!

---

## 3. Key Concepts to Remember

| Concept | What It Means in Simple Terms |
| :--- | :--- |
| **Component** | A reusable piece of user interface (like a Nav Bar, Card, or Button). |
| **Props** | Inputs passed into a component (like giving a Button a label "Submit"). |
| **State** | Data inside a component that can change over time (like a toggle ON/OFF switch). |
| **Route** | A page URL on your website (e.g. `/work`, `/about`, `/cms`). |
| **CMS** | Content Management System — a dashboard where you can edit text and colors without touching code. |

---

## Next Steps
Now that you know the foundational blocks, head over to **[Chapter 2: Project Structure & Files](file:///c:/Users/Admin/OneDrive/Desktop/Hluga%27s%20site/to%20learn/02-project-structure-and-files.md)** to inspect how all files in this repository are organized!
