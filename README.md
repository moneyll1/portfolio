# Manil Ghimire — Personal Developer Portfolio

A handcrafted, modern developer portfolio designed for **Manil Ghimire**, Computer Engineering student at Himalaya College of Engineering, Tribhuvan University, Kathmandu, Nepal.

Built with an editorial Swiss design ethos: strong typographic hierarchy, disciplined whitespace, zero AI template clichés, and modern frontend architecture.

---

## Technology Stack

- **Frontend Framework**: [React.js](https://react.dev/) (v18.3)
- **Build Tool**: [Vite](https://vitejs.dev/) (v6.1)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v3.4) with custom editorial design tokens
- **Language**: [TypeScript](https://www.typescriptlang.org/) (v5.7)
- **Animations**: [Motion / Framer Motion](https://motion.dev/) (v12.4)
- **Icons**: [Lucide React](https://lucide.dev/) (v0.475)
- **Typography**: Google Fonts — *Newsreader* (Editorial Serif), *Plus Jakarta Sans* (Grotesque Sans), and *JetBrains Mono* (Spec Monospace)

---

## Highlights & Philosophy

- **Zero AI Clichés**: No gradient blobs, no glassmorphism cards, no generic SaaS copy, no fake percentage bars, and no stock developer illustrations.
- **Authentic Identity**: Features Manil's actual portrait photograph, academic record at Himalaya College of Engineering, campus leadership coordinating Himalaya Exhibition 2026, and verified technical competencies.
- **Distinctive Project Showcases**:
  - **Quiz Royale**: Real-time two-player quiz app (team of 4) with WebSockets (Socket.io), Node/Express backend, ML genre classification microservice, and an interactive architecture specimen.
  - **DocuQuery / RAG Chatbot**: Document ingestion with overlap chunking, local vector embeddings, and MongoDB Atlas Vector Search.
  - **Offline Chatbot**: Self-contained local LLM inference using quantized models (GGUF).
  - **Speech Converter**: Unified two-way text-to-speech and speech-to-text utility.
  - **Prompt-to-Image Generator**: Diffusion-based generative AI interface.
  - **Personal Developer Portfolio**: Modern React + Vite web platform.
- **Theme & Accessibility**: Obsidian dark mode and warm ivory linen light mode with automatic system preference detection and `localStorage` persistence. Supports `prefers-reduced-motion`.

---

## Directory Structure

```
.
├── index.html                   # Vite HTML entry template
├── vite.config.ts               # Vite configuration
├── tailwind.config.js           # Tailwind CSS design tokens
├── postcss.config.js            # PostCSS configuration
├── tsconfig.json                # TypeScript compiler options
├── public/                      # Static assets served as-is
│   └── assets/
│       ├── images/
│       │   └── manil-portrait.jpg
│       └── Manil_Ghimire_Resume.pdf
├── src/
│   ├── main.tsx                 # Application entry point
│   ├── App.tsx                  # Root layout & theme controller
│   ├── index.css                # Tailwind directives & base rules
│   ├── types/
│   │   └── index.ts             # TypeScript interfaces
│   ├── data/
│   │   └── portfolioData.ts     # Verified portfolio dataset
│   └── components/
│       ├── Navbar.tsx           # Understated sticky navigation & theme toggle
│       ├── Hero.tsx             # Typographic hero with framed portrait & metrics
│       ├── About.tsx            # Authentic introduction & biographical dossier
│       ├── Projects.tsx         # Varied editorial project showcases
│       ├── Experience.tsx       # Collegiate leadership & event management
│       ├── Education.tsx        # Chronological academic timeline
│       ├── Skills.tsx           # Categorized competencies & context
│       ├── Certifications.tsx   # Broadway Infosys trainings & milestones
│       ├── Contact.tsx          # Direct communication cards & dispatch form
│       └── Footer.tsx           # Minimal footer with dynamic year
└── README.md
```

---

## Development & Build Commands

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Starts Vite dev server at `http://localhost:3000` (or `http://localhost:5173`) with Hot Module Replacement (HMR).

### 3. Production Build
```bash
npm run build
```
Type-checks with `tsc` and outputs an optimized production bundle into the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## Identity & Contact

- **Name**: Manil Ghimire
- **Location**: Kathmandu, Nepal
- **Email**: [mon.neyl108@gmail.com](mailto:mon.neyl108@gmail.com)
- **Phone**: +977-9843896446
- **LinkedIn**: [linkedin.com/in/manilghimire](https://linkedin.com/in/manilghimire)
- **GitHub**: [github.com/money-ll](https://github.com/money-ll)
