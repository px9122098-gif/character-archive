# Character Archive

Character Archive is a cinematic, responsive website that connects two independent visual stories through one interactive hub. The current collection includes **Ichika Amasawa** and **Jack Wolfe**.

The project is intentionally built with plain HTML, CSS, and JavaScript. There is no framework, build step, or package installation, so every layout and animation can be studied directly.

## Highlights

- A split-screen character hub with image depth, hover expansion, keyboard focus, and mobile stacking.
- A distinct visual system for every archive instead of one palette reused everywhere.
- Full-screen character introductions, floating photographs, an accessible About dialog, and two continuously moving gallery rows.
- Responsive layouts for ultrawide monitors, laptops, tablets, and phones.
- Reduced-motion support for visitors who disable animation in their operating system.
- Semantic HTML, keyboard-visible focus states, useful image descriptions, and lazy-loaded gallery assets.

## Visual direction

| Archive | Mood | Main colours |
| --- | --- | --- |
| Hub | Dark editorial exhibition | `#09070b`, soft white, character accents |
| Ichika | Playful, intelligent, slightly dangerous | `#120d15`, `#a62f69`, `#ee9bb3`, `#e4cc63` |
| Jack | Theatrical, warm, intimate | `#0b0708`, `#6e1830`, `#a8464e`, `#d7b46c` |

The display font is **Anton** and the interface font is **Manrope**, both loaded from Google Fonts with system fallbacks.

## Project structure

```text
character-archive/
├── index.html                 # Character hub
├── styles.css                # Hub layout, colours, motion, responsive rules
├── script.js                 # Subtle pointer depth on the hub
├── README.md
├── PROJECT_LEARNING_GUIDE_RU.md
└── characters/
    ├── ichika/
    │   ├── index.html
    │   ├── styles-base.css    # Shared character-page foundation
    │   ├── styles.css         # Ichika-specific refinements
    │   ├── script.js          # Dialog and gallery behaviour
    │   └── assets/images/
    └── jack/
        ├── index.html
        ├── styles-base.css
        ├── styles.css         # Jack-specific palette and refinements
        ├── script.js
        └── assets/images/
```

## Run locally

No installation is required.

1. Open the project folder in VS Code.
2. Install the **Live Server** extension if it is not already installed.
3. Open `index.html` and choose **Open with Live Server**.
4. Start from the hub rather than opening a character page directly, so relative links are tested as they will work after deployment.

A simple static server is also enough:

```bash
python -m http.server 5500
```

Then visit `http://localhost:5500`.

## Add another archive

1. Duplicate one folder inside `characters/` and rename it with a short lowercase slug, for example `characters/frieren/`.
2. Replace the images and edit that page's copy, alternative text, colours, and About facts.
3. Add a new portal link to the root `index.html`.
4. Give the portal a modifier class such as `.portal--frieren` and define its accent colours and scene image in the root `styles.css`.
5. Test the page at desktop, mobile, keyboard-only, and reduced-motion settings.

If the collection grows beyond four or five characters, the next useful refactor is to store character data in a small JSON file and generate hub cards from JavaScript.

## Deployment

This is a static website, so it can be deployed to GitHub Pages, Cloudflare Pages, Netlify, Vercel, or a regular Nginx/Apache server. Upload the **contents of the repository root** as the site's document root. No server-side runtime is needed.

For a private repository and a personal server, prefer a read-only deploy key or a narrowly scoped access token. Do not copy a personal GitHub password or full-access token onto the server.

Before making the repository public, review image ownership and add credits or licences where required. The code can be published independently, but photographs and anime artwork may have separate copyright terms.

## Roadmap

- Add page-to-page transitions with the View Transitions API and a safe fallback.
- Move character metadata into JSON when the archive becomes larger.
- Add a filter or search mode after the collection reaches six or more stories.
- Create Open Graph preview images for social links.
- Convert the heaviest gallery images to modern responsive formats and add `srcset`.
- Add image credits and source notes to every archive.
- Add a quiet ambient-sound option that is off by default.
- Introduce an archive timeline or release-year filter without turning the hub into a dashboard.

## Future character ideas

Each new archive should receive its own art direction instead of only changing the accent colour.

### Anime and animation

- **Makima** — controlled red, black, formal geometry, surveillance motifs.
- **Frieren** — moonlit blue, silver, slow motion, memories arranged like a timeline.
- **Violet Evergarden** — ivory paper, blue enamel, letter-writing transitions.
- **Satoru Gojo** — electric blue, high contrast, depth and lens distortion.
- **Johan Liebert** — near-monochrome editorial design with unsettling negative space.

### Film and television

- **Wednesday Addams** — black, cold violet, gothic typography, symmetrical framing.
- **Paul Atreides** — sand, deep blue, monumental type and restrained particles.
- **Villanelle** — fashion-editorial colour changes and playful asymmetry.
- **Thomas Shelby** — charcoal, tobacco brown, archival newspaper details.

### Performers and musicians

- **Florence Pugh** — modern editorial photography with warm red accents.
- **Timothée Chalamet** — fashion archive with narrow typography and muted neutrals.
- **AURORA** — pale Nordic colour, soft grain, organic motion.
- **Hozier** — earth tones, handwritten details, forest textures.

For real people, use images you own, have permission to publish, or can legally reuse with clear attribution.

## Learning notes

The detailed Russian-language walkthrough is in [`PROJECT_LEARNING_GUIDE_RU.md`](PROJECT_LEARNING_GUIDE_RU.md). It explains the actual HTML, CSS, and JavaScript used here and includes questions and practical exercises.

## Status

Version: **1.0.0**  
Current archives: **2**  
Stack: **HTML5 · CSS3 · JavaScript (ES6+)**  
Build step: **none**

