# Virat's Portfolio

Personal portfolio website built with Next.js, Tailwind CSS v4, and next-themes. Clean, fast, dark mode supported.

**Live →** [your-domain.com](https://your-domain.com)

---

## Stack

- **Framework** — Next.js 15 (App Router)
- **Styling** — Tailwind CSS v4
- **Dark Mode** — next-themes
- **Fonts** — Space Grotesk, Dancing Script (Google Fonts)
- **Form** — InputHaven
- **Booking** — Cal.com

---

## Features

- Dark / light mode toggle
- Animated mobile nav drawer (right to left slide)
- Project slider with auto-advance
- Contact form with Indian phone validation (+91, 10 digits)
- Book a call section via Cal.com
- FAQ section
- Scroll-triggered animations
- Fully responsive

---

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000)

---

## Project Structure

```
app/
├── page.js          # Home page
├── about/page.js    # About page
├── layout.js        # Root layout with fonts + providers
└── globals.css      # Tailwind config + theme tokens

components/
├── navbar.jsx
├── footer.jsx
├── TechStack.jsx
├── ProjectSlider.jsx
├── FAQ.jsx
├── Contact.jsx
└── theme/
    └── themeContext.js
```

---

## Sections

| Section | Description |
|---|---|
| Hero | Intro with tagline |
| Tech Stack | Technologies I work with |
| Projects | Slider with live project cards |
| FAQ | Common questions before hiring |
| Contact | Form + book a call |

---

## Customization

**Add a project** — edit the `projects` array in `ProjectSlider.jsx`

**Update contact email** — change `href` in `Contact.jsx`

**Book a call link** — replace `YOUR_CALENDLY_OR_CAL_LINK` in `Contact.jsx` with your Cal.com link

**Resume** — drop your PDF in `/public/resume.pdf`

---

## Contact

Made by **Virat** — [your@email.com](mailto:your@email.com)