# Chapter 6: Practical Customization & Editing Guide

This chapter is a practical "How-To" cookbook. It contains exact step-by-step instructions for modifying every part of the website, whether using the CMS dashboard or by editing code directly!

---

## 1. How to Change Your Bio, Name, or Email

### Method A: Using the CMS (No Code Required)
1. Open your browser and navigate to `http://localhost:3000/cms` (or `https://yoursite.com/cms`).
2. Log in using your passkey (default: `hluga2026admin`).
3. Click the **Content** tab at the top.
4. Under **Profile & Bio**, edit:
   - Full Name
   - Brand / Logo Title
   - Developer Role
   - Location
   - Email Address
   - Headline & Bio text
5. Click **Save Profile Changes**. Your website will immediately display your new details!

### Method B: Editing Code Directly
1. Open **[src/data/cms-config.json](file:///c:/Users/Admin/OneDrive/Desktop/Hluga%27s%20site/src/data/cms-config.json)**.
2. Locate the `"profile"` object at the top of the file:
   ```json
   "profile": {
     "name": "Lehlohonolo Mofokeng",
     "brand": "HLUGA.",
     "role": "Junior Frontend Developer",
     "location": "Johannesburg, ZA",
     "email": "hello@nexlinksolutionsza.co.za"
   }
   ```
3. Change the values inside quotes and save the file!

---

## 2. How to Add a New Portfolio Project

### Using the CMS:
1. Go to `/cms` → **Content** → Click **Projects**.
2. Fill out the **Add New Project** form:
   - **Project Title**: e.g., "Mobile Banking App"
   - **Role / Category**: e.g., "React Native & TypeScript"
   - **Client**: e.g., "Fintech Client, Sandton"
   - **Year**: e.g., "2026"
   - **Summary**: Brief description of the project
   - **Problem / Approach / Outcome**: Detailed case study breakdown
3. Click **Add Project**. Your new project will appear instantly on the homepage and `/work` page!

---

## 3. How to Hide or Reorder Homepage Sections

Want to hide a section temporarily (e.g., hide Services or Experience)?
1. Go to `/cms` → Click **Sections**.
2. To hide a section: Toggle the switch next to the section name to **OFF**.
3. To reorder sections: Click the **Up (↑)** or **Down (↓)** arrow buttons.
4. To change a section title: Edit the **Main Heading Title** box.
5. Click **Save Section Layout**.

---

## 4. How to Change Website Colors

1. Go to `/cms` → Click **Colors & Theme**.
2. **Option 1**: Click one of the preset theme buttons (*Cyber Cyan*, *Sandton Gold*, *Midnight Emerald*, *Obsidian Violet*).
3. **Option 2**: Use the color picker to pick your own custom **Primary Accent Color** (`--hl-accent`).
4. Watch the **Live Site Preview** on the right side of the screen to see how it looks!

---

## 5. How to Add a Brand New Page to the Website

Suppose you want to add a new page at `https://yoursite.com/blog`:

1. Open your code editor and create a new folder: `src/app/blog/`.
2. Inside `src/app/blog/`, create a new file named `page.tsx`.
3. Paste the following starting code into `src/app/blog/page.tsx`:
   ```tsx
   "use client";

   export default function BlogPage() {
     return (
       <div style={{ padding: "8rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
         <h1>My Blog</h1>
         <p>Welcome to my blog page!</p>
       </div>
     );
   }
   ```
4. Save the file. Navigating to `http://localhost:3000/blog` will now render your new page!

---

## Next Steps
Finish your learning journey by reading **[Chapter 7: Deployment & Git](file:///c:/Users/Admin/OneDrive/Desktop/Hluga%27s%20site/to%20learn/07-deployment-and-git.md)**!
