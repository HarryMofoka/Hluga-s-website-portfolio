# Chapter 7: Deployment & Git Workflow

In this final chapter, you will learn how version control with **Git** works, how your code is stored on **GitHub**, and how to host your website live on the internet!

---

## 1. What is Git & GitHub?

### What is Git?
Git is a version control system that acts like a time machine for your codebase. It saves snapshots of your code (called **commits**) so you can track changes, collaborate, and restore previous versions if anything breaks.

### What is GitHub?
GitHub is a cloud platform that hosts your Git repositories online. Your website repository is hosted at:
`https://github.com/HarryMofoka/Hluga-s-website-portfolio.git`

---

## 2. Essential Git Terminal Commands

Here are the basic commands used to manage code changes:

```bash
# 1. Check the status of modified files
git status

# 2. Stage all modified files for a commit
git add .

# 3. Save a snapshot of your changes with a descriptive message
git commit -m "feat: add new portfolio project"

# 4. Push your local commits to your GitHub repository
git push origin main
```

---

## 3. Pushing Changes via the CMS (One-Click Git Commit)

You don't even need to open a terminal to push updates!

1. Open `/cms` and navigate to the **Git Commit** tab.
2. Type a short commit message (e.g., *"Updated bio and added new client case study"*).
3. Click **Commit & Push to GitHub Repo**.
4. The backend server automatically stages your files, creates a Git commit, and pushes directly to `https://github.com/HarryMofoka/Hluga-s-website-portfolio.git`!

---

## 4. How to Deploy Your Website Live to Vercel (Free Hosting)

To make your website accessible to anyone in the world on a custom `.com` or `.vercel.app` domain:

1. Go to **[Vercel.com](https://vercel.com)** and sign up for a free account using your GitHub account.
2. Click **Add New Project** → Select your repository: `HarryMofoka/Hluga-s-website-portfolio`.
3. Keep default settings:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./`
4. Click **Deploy**.
5. Within 60 seconds, Vercel will compile your site and give you a live production URL (e.g., `https://hluga-portfolio.vercel.app`)!

Whenever you click "Commit & Push" in the CMS or run `git push origin main` in your terminal, Vercel will automatically re-deploy your site live in seconds!

---

## Congratulations!
You have completed the **HLUGA. Learning Book**! You now understand HTML/CSS basics, React components, Next.js routing, design tokens, the production CMS backend, and cloud deployment.
