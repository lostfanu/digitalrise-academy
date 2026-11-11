# DigitalRise Academy — React Website

Advanced, multi-page React website for DigitalRise Academy.
Tagline: **Learn. Grow. Succeed.**

Main course: **Digital Freelancing & AI Growth Mastery** — 3 Months, **PKR 17,000** per student.

## Run it in VS Code

```bash
npm install
npm run dev
```

Then open the local address Vite prints (usually http://localhost:5173).

Other commands:

```bash
npm run build    # production build into dist/
npm run preview  # preview the production build locally
```

## Pages (8)

- `/` Home — hero, course at a glance, 7 topics, 3-phase roadmap, instructor
- `/about` About
- `/courses` Courses
- `/curriculum` Curriculum — searchable, phase-filterable, 3-phase roadmap
- `/instructor` Instructor — Muhammad Irfan
- `/pricing` Fee & Admissions
- `/faq` FAQ — accordion
- `/contact` Contact / Enrol — enquiry form

Every page has a sticky nav, breadcrumbs, a scroll-progress bar, and Previous / Next links.

## Before publishing — add your contact details

Open `src/data/course.js` and fill in the `CONTACT` section:

- `whatsappNumber` — TODO: add your WhatsApp number, digits only, international format, e.g. `923001234567`
- `email` — TODO: add your email address

Until you add them, the WhatsApp / Email buttons on the Contact page stay disabled, and the page shows a notice. No phone number or email has been invented.

## Notes

- Built with Vite + React 18 + React Router (HashRouter, so it also works on static hosting such as GitHub Pages).
- Only verified facts are used: course name, 3 Months, PKR 17,000, the 7 topics, 6 days/week, 2–3 hours/day, 30% theory / 70% practical, and the instructor bio. No testimonials, certificates, dates, locations, or job/income guarantees were added.
- Instructor photo: `public/instructor.jpg` (the user's profile photo).
