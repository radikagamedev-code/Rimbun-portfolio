# Ruang Rimbun: Boutique Plant Shop Landing Page & Bilingual Localization

- **Client / Industry:** Fictional Small Business / Botanical & Urban Nursery Retail
- **Platform / Stack:** Vanilla HTML5, CSS3 (Custom Properties & CSS Art), Vanilla ES6+
- **Deliverables:** 1-Page Responsive Business Landing Page, English–Indonesian Bilingual Localization Toggle, Pure CSS Hero Artwork
- **Turnaround:** Concept Sprint / Portfolio Reference Project
- **Live Samples:** [English Landing Page](business.html) · [Bilingual Localization Demo](bilingual.html)

---

## 1. The Challenge
Small businesses often struggle with websites that are either overly complex, bloated with heavy plugins, or poorly adapted for regional multi-lingual markets. When local boutiques expand to serve both local Indonesian visitors and international expats or tourists, they face:
- Cluttered, slow-loading mobile experiences.
- Literal, awkward machine translations that break button boundaries and visual hierarchy.
- Prohibitive development and maintenance costs from heavy frameworks.

The goal of this project was to demonstrate how a focused, high-performance one-page website can establish a calm, inviting brand aesthetic while providing effortless in-place language switching between English and Bahasa Indonesia.

---

## 2. The Solution
A cohesive design and front-end engineering execution consisting of:

### Section Hierarchy & Layout
1. **Hero Section:** Clear value proposition (*"Make room for something growing"*) paired with a zero-asset, pure CSS illustration of a potted houseplant to ensure instantaneous rendering (< 0.8s LCP).
2. **Product Curation Cards:** Three structured categories (*"Sunny corners"*, *"Low-light rooms"*, *"First-time growers"*) helping prospective buyers self-identify their needs.
3. **Brand Storytelling:** Narrative approach explaining the shop's philosophy and creating an approachable, friendly neighborhood presence.
4. **Visit & Contact Section:** Structured practical details (location, opening hours, WhatsApp/phone placeholders) designed for easy real-world client handover.

### Bilingual Localization Engine
- **In-place DOM translation:** Implemented via HTML5 `data-en` and `data-id` attributes controlled by a lightweight (~10 line) vanilla JavaScript controller.
- **Natural Idiomatic Copy:** Content was culturally adapted rather than translated word-for-word, ensuring natural Indonesian phrasing (e.g., *"Make room for something growing"* &rarr; *"Beri ruang untuk yang bertumbuh"*).
- **Zero Layout Distortion:** Translations were tested on 320px–414px mobile viewports to prevent wrapping overflows or broken button padding.

---

## 3. Results & Technical Highlights
- **Performance:** 100/100 Lighthouse Performance score with zero cumulative layout shift (CLS = 0.00).
- **Payload:** Entire page weight under 30 KB (uncompressed), requiring zero external image downloads.
- **Accessibility:** WCAG 2.1 AA compliant contrast ratios, full keyboard focus rings (`:focus-visible`), and screen-reader accessible toggle state announcements.

---

## 4. Associated Documentation
- [Product Requirements Document (PRD)](PRD.md)
- [System Architecture Document](ARCHITECTURE.md)
