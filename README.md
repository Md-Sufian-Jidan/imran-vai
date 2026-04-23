# The Pixelverse

A modern Photoshop editing website built with Next.js and Tailwind CSS. Visitors can explore premium photo editing services, review portfolio work, and send inquiries directly through the contact form.

## ✨ Project Overview

This website is designed for a photo editing service brand that showcases:

- Professional image editing and clipping path services
- A clean and modern service catalog with service details
- Portfolio showcase with case studies and visual proof
- A contact page with a working contact form powered by server-side email handling
- Responsive website layout optimized for desktop and mobile

## 🚀 Features

- Homepage with service highlights, process steps, client testimonials, and CTA sections
- Dedicated services and portfolio pages
- Contact form using server-side action with Nodemailer
- Data-driven layout via `src/lib/commonLinks.ts`
- Tailwind CSS and `next-themes` for styling and theme readiness
- Built for growth with components and clean app structure

## 🧩 Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- Nodemailer for contact email delivery
- Framer Motion for UI animations
- Radix UI and Shadcn UI patterns
- Zod for form validation

## 📁 Project Structure

- `src/app/` — application routes and page layout
- `src/components/` — reusable UI components and page sections
- `src/lib/` — shared data, navigation links, and service definitions
- `src/types/` — shared TypeScript interfaces and types
- `src/assets/images/` — static image assets used in the site

## ⚙️ Setup and Run Locally

### Requirements

- Node.js 20+ or Bun
- `npm`, `pnpm`, or Bun installed

### Install dependencies

Use your preferred package manager:

```bash
npm install
# or
pnpm install
# or
bun install
```

### Run development server

```bash
npm run dev
# or
pnpm dev
# or
bun run bun --bun next dev
```

Then open:

```bash
http://localhost:3000
```

### Build for production

```bash
npm run build
# or
pnpm build
```

### Start production server

```bash
npm start
# or
pnpm start
```

## 🔐 Environment Variables

The contact form uses Nodemailer and requires email configuration. Create a `.env` file in the project root with:

```env
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-email-password
RECEIVER_EMAIL=contact@your-domain.com
SITE_KEYWORDS=photo editing, clipping path, retouching, portfolio
```

> For Gmail, use an App Password instead of your normal Gmail password.

## 📌 Available Scripts

- `npm run dev` — start development server
- `npm run build` — build production app
- `npm start` — run production server
- `npm run lint` — run ESLint

## 💼 About the Developer

Created by **Md Abu Sufian Jidan** — a MERN stack developer and software engineer.

- GitHub: `https://github.com/your-github-username`
- LinkedIn: `https://linkedin.com/in/your-linkedin-username`
- Portfolio: `https://your-portfolio.com`
- Facebook: `https://facebook.com/your-facebook-page`

> Replace the link placeholders above with your real profiles.

## 📍 Notes

- The website is branded for a modern photo editing agency and includes detailed service pages such as clipping path, background removal, masking, shadow creation, and photo retouching.
- The contact page is configured for server-side email handling using environment variables.

## 🙌 Contribution

If you want to customize the design or update service content, edit the `src/lib/commonLinks.ts` file and the components under `src/components/modules`.

---

Made with care for photo editing, digital retouching, and professional client conversions.