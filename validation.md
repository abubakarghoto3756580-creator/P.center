# Reference-Led UI Validation

## Desktop English

The rebuilt page renders the supplied reference pattern with a thin information band, rounded dark-primary navigation, split hero composition, dark four-stat band, three-panel introduction, rounded service cards, clinician grid, and fixed scroll-to-top control. Existing Specialists Center content, identities, contact details, images, and service text remain present.

## Desktop Arabic RTL

The language control switches all existing content into Arabic. The header, hero, split layout, buttons, navigation direction, and statistics band mirror correctly for RTL presentation while retaining the same visual structure and supplied content.

## Content Retention Check

The rendered page contains all four existing service cards, all eleven clinician cards, and all six supplied clinician portraits. No client-side errors were reported during the visual validation.

## Doctor-Team Refinement

The complete doctor grid retains all eleven real clinician records. Each concise card now contains only its profile image or existing photo-pending state, name, specialty, experience, booking control, and profile control. The profile control opens a modal containing the corresponding real credentials and treatment areas; the booking control retains its original WhatsApp path.

The desktop team grid renders four cards per row, with a final three-card row for the eleven existing records. The six supplied clinician images appear within matching white 4:3 containers using `object-fit: contain`; no source image modifications were introduced.

The existing language control switches the refined doctor-card system to Arabic with `dir="rtl"`, Arabic names and specialties, RTL card alignment, and localized profile controls. The updated card system preserves the overall bilingual behavior of the website.

The final rendered Arabic desktop state reports eleven doctor cards, eleven booking controls, eleven profile controls, and a four-column team grid. The corresponding mobile stylesheet reduces the same grid to a single column with full-width, touch-sized action buttons.

## Doctor-Card Color System

All eleven doctor cards now use the supplied `#D6E8F0` Light Blue-Gray as the visible card and content surface, while retaining white `4:3` photo areas. Navy remains the text anchor, specialties and primary appointment controls use the supplied teal values, and the existing experience clock preserves a restrained gold accent. Desktop and mobile screenshots confirm the cards no longer read as an overly white grid.

## Transparent Clinician Image Replacement

Only the six requested image source assignments were changed. Visual review and rendered-source checks confirmed the exact requested mapping: Fahad Al-Buqmi → Image 1, Turki Majeed → Image 2, Abdulaziz Al-Shamali → Image 3, Khaled Al-Rubaie → Image 4, Mishari Al-Otaibi → Image 5, and Mohammed Al-Ghali → Image 6. The six uploaded source files were copied byte-for-byte before deployment and each remains rendered with the existing `object-fit: contain` photo treatment.

## Doctor-Card Centered Typography

All eleven card names, specialties, and experience rows use a centered text treatment. The name is the strongest centered element, the teal specialty remains a two-line secondary element, and the existing gold-accented experience row is centered beneath it. The card layout, colors, imagery, actions, and source data remain unchanged.

The Arabic RTL state was verified with computed `text-align: center` on names, specialties, and experience rows, matching the English treatment. The mobile one-column screenshot confirms the centered text stack and existing action controls remain readable without horizontal overflow.

## Hero Typography and Spacing

The hero now uses a heavier rounded geometric display treatment, with the English copy explicitly composed into short teal and navy headline lines. The existing teal eyebrow dash, muted paragraph, gold appointment pill, image placement, and color system are retained. Desktop, mobile, English LTR, and Arabic RTL views confirm that the new hierarchy remains legible and aligned with the current interface direction.

## Working Hours

The Working Hours section now shows Saturday `1:30 PM – 9:30 PM`, Sunday through Thursday `10:00 AM – 9:00 PM`, and Friday `Closed` in English, with equivalent Arabic values. The Ramadan row remains unchanged at `8:30 AM – 2:30 PM` / `٨:٣٠ صباحًا – ٢:٣٠ مساءً`. The section’s layout, typography, and colors were not changed.

## Uniform Doctor-Card Pattern

All eleven existing doctor cards now share one light clinical surface, consistent photo or photo-pending area, centered navy name hierarchy, teal specialty treatment, muted experience line with a subtle gold clock accent, and matching two-action controls. The six supplied clinician portraits are retained unchanged; the five remaining client-photo areas retain the existing neutral placeholder treatment. Desktop, mobile, English LTR, and Arabic RTL states preserve the current responsive grid and functionality.

## Doctor Profile Modal Separation

The revised profile modal was opened with a real clinician portrait in Arabic RTL. The portrait is contained entirely in its own bounded image panel, while the eyebrow, name, specialty, experience row, credentials list, treatment-area list, and full-width appointment action occupy a separate white content panel. The image and text do not overlap, and the same shared layout is applied to every clinician modal.

The shared modal layout was also checked after returning to the team directory containing the neutral photo-pending cards. Both the real-photo and no-photo states route through the same bounded image component and separate profile content panel, preventing image-to-text overlap in all eleven clinician profiles.

## Treatment Techniques Carousel

The former multi-card Treatment Techniques grid has been replaced by a single substantial active-slide panel. It advances every 2.8 seconds, loops across all nine listed techniques, and provides dot indicators, a progress bar, previous/next controls, and horizontal swipe handling. Any manual selection pauses autoplay for 4.2 seconds before it resumes. Desktop and mobile full-page captures confirm the carousel retains the dark navy, teal, and gold style while remaining isolated from surrounding sections.

## Site-wide Motion System

All existing main sections and the footer now receive a single-run IntersectionObserver reveal using opacity and vertical transform only. Existing card groups use capped 80ms staggering, and existing interactive controls retain their colors and behavior while gaining concise transform/shadow hover feedback. The animation layer uses no permanent compositing hints, pauses no user interactions, and disables its transitions under `prefers-reduced-motion`. Desktop and mobile full-page verification confirmed no content is obscured and no layout or touch-target changes were introduced.

## Professional Clinician Avatars

The five photo-pending clinician cards now use centered professional avatar silhouettes on the existing Light Blue-Gray image surface. The initial letters and photo-pending label are removed. The six supplied real clinician portraits remain unchanged and continue to use the existing contained presentation. Desktop and mobile views confirm the avatar and real-photo states share the same image area, card dimensions, actions, and text layout.

## Doctor-prefilled WhatsApp Booking

Only team-card and profile-modal appointment controls now build a WhatsApp URL using the active clinician’s display name. English messages use `Hello, I would like to book an appointment with [doctor name].`; Arabic messages use the localized equivalent with the Arabic clinician name. General site-wide booking controls continue to open the existing generic WhatsApp flow unchanged.

## Services/Care Areas Readability

All four service cards now reserve separate flow regions for the number/icon row, category title, checklist, and bottom care-area link. The overlay no longer uses absolute full-card content positioning, so checklist text cannot overlap titles. The original navy, teal, gold, and image-hover treatment remains intact; default text uses the light card surface and hover text uses the existing dark image overlay for contrast. Desktop and mobile checks confirmed the same readable card structure.

## Mobile Navbar Edge Alignment

At the mobile breakpoint, the existing language/menu action group now receives the remaining flex space before it, placing it against the same right-side inset used by the logo on the left. The narrow override does not alter component dimensions, colors, controls, or desktop navigation. Mobile and desktop viewport checks confirmed the intended alignment and retained visual presentation.

## Renewed Services/Care Areas Separation

The four service cards now use explicit grid rows for the category title and the care-area region, rather than relying on the prior flexible layout alone. Every checklist starts 17px below its title box and every care-area link starts 14px below its checklist; rendered measurements confirmed those non-overlapping vertical ranges across cards 01–04. The existing palette, background imagery, hover overlay, icons, and card treatment are unchanged.

## Structural Services/Care Areas Fix

The card component was rebuilt internally with three independent semantic regions: a title wrapper, a checklist wrapper, and a bottom link. This removes the old full-card overlay element from the text flow entirely, so legacy overlay positioning cannot put the category title on top of its checklist. Desktop inspection and the 390px mobile capture show all four cards retaining their visuals while their title and care-area items remain distinct; the TypeScript check and production build both pass.

## Official Insurance Partner Logos

The supplied official MedGulf and Malath Insurance image files were copied unchanged to managed static storage and are rendered inside the existing Insurance panel as two individual white logo cards. Each card uses `object-fit: contain` and includes a localized company name below the mark. Desktop inspection and a 390px mobile capture confirm the supplied logo colors remain clear against the light surfaces; TypeScript and the production build pass.

## Interactive Insurance Partner Cards

Both logo cards now open the partners’ official public information destinations in a separate browser tab: MedGulf’s Saudi homepage and Malath’s official English page. The cards have keyboard-visible focus treatment and a restrained desktop hover lift, border, and shadow response; touch interactions remain direct. Each card includes localized guidance that eligibility depends on an active policy and approved benefits, with coverage confirmation requested before a visit. Desktop and 390px mobile checks confirmed readable partner cards and their links; TypeScript and the production build pass.

## Statistic Count-up and Booking Flow

The requested top and lower statistics now begin at zero and count to their preserved final values over 1.7 seconds when each individual element enters the viewport. The implementation runs once per statistic, retains decimals, `+`, and `/ 5` notation, and displays final values immediately when reduced motion is requested. All general appointment actions now scroll smoothly to the booking form. The form collects name, email, phone, service, preferred date, and optional notes, then opens a `wa.me/966558008066` URL with the structured booking details prefilled. Desktop interaction checks confirmed the hero appointment action scrolls to the form and an intercepted test submission contained the correct number, name, service, and date; the 390px mobile capture and production build also passed.

## Top Statistics Typography and Lower Section Simplification

The inline count-up spans now inherit the original `42px` desktop and `29px` mobile top-stat type scale, restoring the intended prominence without altering the animation. The duplicate lower Google rating and Instagram cards have been removed. The retained Insurance panel occupies the full former grid width with its existing partner logos, links, and eligibility content preserved. Desktop and 390px mobile checks confirmed the top-stat display, natural Insurance-to-contact flow, and count-up behavior; TypeScript and production builds pass.

## Consistent Clinical Imagery

The faded hero illustration was replaced with a crisp, high-key clinical physician photograph that preserves the existing right-side hero composition and text-safe left region. The appointment panel now uses a matched professional physiotherapy-session asset. Service cards 02–04 have individual Orthopedic/Musculoskeletal, Sports Injuries, and Women’s Health clinical background images under the existing navy-teal hover overlay, matching card 01’s treatment without changing the card design. Desktop and 390px mobile screenshots confirm the preserved layout and image composition; the TypeScript check and production build pass.

## Arabic RTL Navbar Alignment

The Arabic navbar now uses the direction-aware `row` flex flow rather than the previous hard-coded reverse flow. This places the logo at the right side of the RTL navigation bar and the English toggle/menu group at the matching left inset; the existing mobile action-group spacing continues to push the group to that edge. Arabic desktop inspection and the unchanged 390px mobile navbar check confirmed mirrored placement without altering the components’ styles, dimensions, or LTR behavior. The TypeScript check and production build pass.

## Sports Injuries and Women's Health Background Recovery

The failed Sports Injuries and Women's Health generation URLs were replaced with two new, distinct clinical-image assets: athlete knee rehabilitation for card 03 and a dignified women’s health physiotherapy consultation for card 04. Both are mapped only through the existing `::before` image layer, retaining the established navy-to-teal gradient, card hover behavior, icons, checklist copy, and layout. The old failed asset URLs are no longer referenced, and the TypeScript check plus production build pass.

## Document Language and Zoom Accessibility

The application now synchronizes `document.documentElement.lang` and `document.documentElement.dir` with the active language state: English uses `en` and `ltr`; Arabic uses `ar` and `rtl`. The initial HTML document retains English defaults for first render, then updates as soon as the user switches language. The viewport tag now uses `width=device-width, initial-scale=1.0` with no `maximum-scale` restriction, allowing normal browser pinch zoom. English and Arabic language switching, the 390px mobile layout, TypeScript checking, and the production build were verified.

## SEO and Crawlability Metadata

The document head now contains a `MedicalClinic` JSON-LD entity with the established bilingual clinic name, Saudi address, phone number, Saturday and Sunday–Thursday hours, and 4.7/5 aggregate rating. Open Graph title, description, locale, URL, and official-logo image fields were added for social sharing. Root `robots.txt` allows all crawlers and references `sitemap.xml`, which lists the homepage. Both files were served successfully through the development site, and the TypeScript check plus production build pass.

## Floating Share Control

A compact fixed Share control now sits above the existing back-to-top and WhatsApp actions. It provides keyboard-accessible menu items for WhatsApp and Twitter/X, each opening a sharing URL that includes the public clinic URL; social platforms can then use the established Open Graph metadata for their previews. The menu opens above the button to avoid the viewport edge, retains a mirrored left-side position for RTL, and was checked at the desktop viewport. TypeScript and the production build pass.

## Floating WhatsApp Mark

The generic floating chat icon was replaced only in the existing WhatsApp contact control with a 28px WhatsApp brand mark. The original `wa.me/966558008066` destination, teal round button, fixed position, action label, and nearby Share/back-to-top controls are unchanged. Desktop and 390px mobile screenshots confirmed a clear, non-overlapping mark; TypeScript and the production build pass.

## External Deployment Image Packaging

The project now includes a `sync-assets` utility which downloads the 19 currently referenced image assets, including the official logo, clinician portraits, insurance logos, clinical photography, service backgrounds, and WhatsApp mark, into `client/public/manus-storage` immediately before the Vercel build. This makes the existing root-relative image paths part of the Vite deployment output rather than runtime-only platform paths. `vercel.json` runs that sync before building and serves the `dist/public` output directory. A local synchronization build confirmed that all 19 representative assets are emitted with the production output; the temporary local copies were then removed to respect the source-project media limit.
