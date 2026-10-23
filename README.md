# P. Center — Elite Specialists Clinic (Jeddah)

Single-page bilingual (Arabic / English) website for P. Center, built with React + Vite.

- Content lives in `client/src/pages/Home.tsx` (`content`, `services`, `team`, `partners`, `reviews`, `hours`).
- Clinician portraits: add images to `client/public/team/` and map them in `clinicianPhotos` by initials (e.g. `KY: "/team/khaled-yaseen.png"`).
- Brand assets: `client/public/brand/`.
- Build: `pnpm install && pnpm build` (output in `dist/public`, ready for Vercel/Netlify).
