# Kisang Hwang – Portfolio

This is my personal developer portfolio site built with **React + TypeScript + Vite**.  
It showcases my experience as a **React Native Mobile Engineer / Software Engineer**, including production mobile apps and school projects.

🔗 **Live Site:** https://YOUR-PROD-DOMAIN.vercel.app  
🔗 **LinkedIn:** https://www.linkedin.com/in/kisang-hwang-068745219  
🔗 **GitHub:** https://github.com/KisangHwang

---

## 🧩 Tech Stack

- **Frontend**

  - React 18 + TypeScript
  - Vite
  - Tailwind CSS (with custom theme utilities)
  - shadcn/ui components
  - lucide-react icons

- **Features**

  - Bilingual content: **English / Korean** (simple i18n with context + hooks)
  - Dark / Light theme toggle
  - Smooth section navigation (Home, About, Skills, Projects, Contact)
  - Animated UI (custom CSS keyframes + Tailwind utilities)

- **Backend / Infra**
  - Deployed on **Vercel**
  - Contact form integrated with **AWS SES** (serverless function) to send emails

---

## 🌐 Sections

- **Hero** – Intro, headline, quick CTA
- **About** – Short bio + what I’m currently looking for
- **Skills** – Categorized skill listing with proficiency levels
- **Projects** – Production & school projects including:
  - Two Daisies
  - U (Campus Utility App)
  - ONPOST
  - Crew
  - Phishing Detector (LLM Chrome Extension)
  - TicketPro (DB-focused school platform)
- **Contact** – Contact info + AWS SES powered email form

---

## 🛠 Local Development

```bash
npm install
npm run dev
npm run build
npm run preview
```

---

## 🗣 i18n (EN / KO)

Language is handled via React Context + custom hook, and persisted using `localStorage` so refresh keeps your language preference.

---

## 📩 Contact Form

Uses:

- `/api/contact` Vercel Serverless Function
- AWS SES
- Environment variables (`.env` + Vercel Dashboard)

---

## 🚀 Deployment

- Hosted on **Vercel**
- CI/CD via GitHub → Vercel auto deployment

---

## 📎 License

Portfolio use only — feel free to reference structure, but please don’t copy 1:1.
