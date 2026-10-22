# Reference-led Design Specification

## Ground-Truth Direction: Modern Clinical Confidence

The provided primary image only captures a blocked browser page; it contains no usable site layout beyond a plain error state. The observed live homepage therefore supplies the required visual ground truth for recreating the intended public-facing experience without copying the reference site’s proprietary copy, branding, or photography.

**Design Movement:** Contemporary healthcare editorial design, balancing clinical clarity with warm, high-touch service cues.

**Core Principles:**

1. Pair generous white space with bright, reassuring medical imagery and saturated clinical color accents.
2. Lead each section with clear hierarchy: a short eyebrow, an assertive multi-line heading, then concise supporting copy.
3. Use modular card groupings with strong image crops, soft shadows, and varied asymmetrical composition rather than a monotonous content grid.
4. Keep pathways to contact and appointments visible but never visually frantic.

**Color Philosophy:** White and cool powder-blue create clinical calm and give images room to breathe. Deep navy makes information feel dependable and legible. Emerald green represents expertise and care, while vermilion red creates an unmistakable action signal for appointment CTAs.

**Layout Paradigm:** A wide, editorial landing page structured as a procession of varied modules: a utility ribbon, a compact navigation bar, an asymmetric text-and-image hero, overlapping action tiles, serially numbered service cards, photo-led staff stories, and information-rich final contact bands.

**Signature Elements:**

1. A deep navy inset line beside colored section eyebrows and circular numeric counters.
2. Rounded but not bubble-like action buttons, primarily vermilion with a small gold or teal icon accent.
3. Layered clinical image compositions with soft, architectural pale-blue shapes and small dotted texture fields.

**Interaction Philosophy:** Motion should confirm intent—navigation and cards raise slightly on hover, CTAs compress briefly on press, and section content reveals with a gentle upward fade as it enters the viewport. All contact and appointment triggers surface a clear in-page confirmation rather than falsely submitting information.

**Animation:** Entrances use opacity and a 12–18 px translate transform with 360–520 ms staggered timing. Buttons and cards use 160–220 ms spring-like transitions. A single slow drifting background orb may be used in the hero; no auto-advancing carousels or distracting ambient effects. Respect reduced-motion preferences.

**Typography System:** Use **Manrope** for clean, compact UI, navigation, labels, and body copy; use **DM Sans** in heavier weights for high-impact headings. Headings use tight tracking and line-height around 0.98–1.08, while body text remains open and comfortably legible. Avoid default system fonts and Inter.

**Brand Essence:** A contemporary hospital clinic experience for patients who want an immediate, clear path to compassionate specialist care. **Reassuring, expert, attentive.**

**Brand Voice:** Calm, specific, and helpful; no vague wellness slogans. CTAs are practical and service-led.

> “Care that starts with a clear next step.”
>
> “Speak with our care team today.”

**Wordmark & Logo:** An original abstract medical mark that combines a teal four-leaf care cross with a warm-gold circular core, placed beside a custom high-contrast two-line wordmark. The mark is symbolic only; it must not imitate the reference brand logo.

**Signature Brand Color:** **Care Vermilion — #E44036**.

## Fidelity Contract

Implement the same type of header rhythm, asymmetrical hero, action-tile placement, rich card system, warm professional photography, medical service sequence, staff cards, insurance and contact zones, and mobile collapse behavior observed in the live reference. Use original generic placeholders and neutral named demo content where business-specific content was not provided. Do not use names, testimonials, direct medical claims, or imagery from the reference site.

## Style Decisions

- The teal care-cross with warm-gold core recurs as a restrained editorial marker in care-story, facilities, team, and contact modules, not only in the logo.
- Display headline tracking remains concise but is loosened enough to preserve optical separation and line-level readability.
- Photography is assigned a distinct storytelling role per module: a family-facing doctor for the hero, a care coordinator for appointments, a diagnostic consultation for the care story, and a team portrait for facility orientation.
