# Character Archive

Character Archive is a growing collection of cinematic character portraits. A scalable hub connects independent visual stories, while every archive keeps its own palette, typography, composition, gallery rhythm, and About profile.

Current collection:

1. **Ichika Amasawa** — playful wine, pink, and gold.
2. **Jack Wolfe** — theatrical burgundy, amber, and warm ivory.
3. **Satoru Gojo** — deep indigo, electric cyan, and violet.

The project uses plain HTML, CSS, and JavaScript. There is no framework, package installation, or build step.

## Highlights

- Data-driven hub that automatically renders the collection from `archive-data.js`.
- Responsive grid: one card on phones, two on tablets, three on desktop, and up to four on ultrawide screens.
- Independent character art direction instead of palette-swapped copies.
- Full-screen introductions, floating photographs, accessible About dialogs, and two seamless gallery rows.
- Keyboard focus, useful image descriptions, lazy gallery loading, and reduced-motion support.
- Static architecture that can be hosted on GitHub Pages, Cloudflare Pages, Netlify, Vercel, Nginx, or Apache.

## Project structure

```text
character-archive/
├── index.html                    # Hub shell and reusable card template
├── archive-data.js               # One data object per character
├── styles.css                    # Scalable hub grid and interactions
├── script.js                     # Renders cards and adds pointer depth
├── README.md
├── ADDING_CHARACTERS_RU.md       # Step-by-step expansion guide
├── PROJECT_LEARNING_GUIDE_RU.md
└── characters/
    ├── ichika/
    ├── jack/
    └── satoru/
        ├── index.html
        ├── styles-base.css
        ├── styles.css
        ├── script.js
        └── assets/images/
```

## Visual systems

| Archive | Display font | Body font | Main colours |
| --- | --- | --- | --- |
| Hub | Anton | Manrope | `#07090f`, soft white, per-card accents |
| Ichika | Anton | Manrope | `#120d15`, `#a62f69`, `#ee9bb3`, `#e4cc63` |
| Jack | Anton | Manrope | `#0b0708`, `#6e1830`, `#a8464e`, `#d7b46c` |
| Satoru | Bebas Neue | Space Grotesk | `#02050d`, `#4456d9`, `#55ddff`, `#9beeff` |

## Run locally

No installation is required.

1. Open the repository folder in VS Code.
2. Open the root `index.html` with the Live Server extension.
3. Enter each archive through the hub so relative paths are tested exactly as they will work after deployment.

A simple static server also works:

```bash
python -m http.server 5500
```

Then open `http://localhost:5500`.

## Add a character to the hub

The hub no longer contains one manually copied HTML block per character. Open `archive-data.js`, copy an existing object, and change its values:

```js
{
  slug: "frieren",
  number: "04",
  universe: "Frieren: Beyond Journey's End",
  firstName: "Frieren",
  lastName: "The Mage",
  description: "A quiet journey through memory and time.",
  href: "characters/frieren/index.html",
  scene: "characters/frieren/assets/images/main_photo.webp",
  figure: "characters/frieren/assets/images/background.webp",
  accent: "#8fb8d8",
  accentSoft: "#e8f4ff",
  scenePosition: "center",
  figurePosition: "bottom right"
}
```

The counter and column count update automatically. The detailed Russian guide is in [`ADDING_CHARACTERS_RU.md`](ADDING_CHARACTERS_RU.md).

## Satoru design notes

Satoru's page intentionally breaks the previous visual pattern:

- a colder colour space inspired by the Six Eyes and Limitless;
- Bebas Neue instead of Anton for a sharper, taller display voice;
- asymmetrical floating-photo rails rather than eight evenly distributed cards;
- circular infinity lines and a faint grid built with CSS;
- varied gallery heights and asymmetric corner radii;
- a portrait-led About panel using a blue-sky composition.

## Deployment

This is a static website. Upload the repository contents as the document root; no server-side runtime is needed.

For a private GitHub repository and a personal server, use a read-only deploy key or a narrowly scoped token. Never store a personal password or unrestricted GitHub token on the server.

Before making the repository public, review image ownership and add credits or licences where required. Code and media can have different usage rights.

## Roadmap

- Move repeated character-page foundations into a documented starter template.
- Add Open Graph preview images for the hub and each archive.
- Add responsive `srcset` versions for large gallery images.
- Introduce search or filters after the collection reaches six or more archives.
- Add image credits and source notes.
- Consider View Transitions after checking browser support and reduced-motion behaviour.
- Move archive data to JSON only if another tool or CMS needs to edit it.

## Future archive ideas

- **Makima** — controlled red, black, and surveillance motifs.
- **Frieren** — moonlit blue, silver, and memory-based pacing.
- **Violet Evergarden** — ivory paper, blue enamel, and letter transitions.
- **Johan Liebert** — monochrome editorial space and restrained motion.
- **Wednesday Addams** — cold violet and gothic symmetry.
- **Paul Atreides** — sand, deep blue, and monumental typography.
- **AURORA** — Nordic pale colour and organic movement.
- **Hozier** — earth tones, handwritten details, and forest texture.

For real people, use photographs you own, have permission to publish, or can legally reuse with clear attribution.

## Status

Version: **1.1.0**

Current archives: **3**

Stack: **HTML5 · CSS3 · JavaScript (ES6+)**

Build step: **none**
