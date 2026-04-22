You are a senior frontend engineer. Build me a complete, production-quality personal portfolio 
website. I have already scaffolded the project using:

  bun create vite@latest portfolio --template react

Install these dependencies:
  bun add react-router-dom framer-motion lucide-react
  bun add -d tailwindcss@3 postcss autoprefixer
  bunx tailwindcss init -p

Then build the entire portfolio. Do not leave any placeholder code. Every file must be complete 
and functional. No TODOs. No "add your content here". Production-ready output only.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
IDENTITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: Jayanth Reddy Yerabolu
Roll No: SE23UCSE080
University: Mahindra University, Hyderabad
Degree: B.Tech Computer Science and Engineering
Year: 3rd Year (2023 – Present)
CGPA: 9.49 / 10
Email (primary): jryerabolu@gmail.com
Email (university): se23ucse080@mahindrauniversity.edu.in
Phone: +91 8074622662
GitHub: https://github.com/jayanth2406
LinkedIn: https://linkedin.com/in/jayanth-reddy-yerabolu
Location: Hyderabad, India
Status: Actively looking for internships in AI engineering, ML research, and full-stack dev
Hobbies: Volleyball, Chess

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DESIGN SYSTEM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Theme: Dark premium modern — inspired by Vercel, Linear, and AI startups.
NOT generic. NOT purple gradients. NOT Inter font.

Colors (use as Tailwind custom colors in tailwind.config.js):
  bg:         #080808   (main background)
  surface:    #0f0f0f   (card backgrounds)
  border:     #1a1a1a   (borders)
  muted:      #404040   (muted text/icons)
  accent:     #e8ff47   (electric yellow — primary CTA, highlights)
  accent-dim: #c8df27   (hover state of accent)
  text:       #f0f0f0   (primary text)
  sub:        #888888   (secondary text)

Typography:
  Import from Google Fonts:
    - Syne (weights 400, 500, 600, 700, 800) — used for ALL text
    - JetBrains Mono (weights 300, 400, 500) — used for code, tags, labels, monospaced UI

font-sans → Syne
font-mono → JetBrains Mono

Global styles (index.css):
  - Custom scrollbar: 4px wide, #1a1a1a thumb, turns #e8ff47 on hover
  - Noise texture overlay on body::before using an SVG data URI feTurbulence filter, opacity 0.35, z-index 9999, pointer-events none
  - ::selection: background rgba(232,255,71,0.2), color #e8ff47
  - Smooth scroll on html element
  - -webkit-font-smoothing: antialiased on body

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FILE STRUCTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
src/
  main.jsx              ← BrowserRouter wrapping App
  App.jsx               ← Routes for /, /projects, /about, /contact
  index.css             ← global styles, fonts, scrollbar, noise, selection
  data/
    index.js            ← all projects, skills, social links as exported constants
  components/
    Navbar.jsx
    Footer.jsx
    ProjectCard.jsx
  pages/
    Home.jsx
    Projects.jsx
    About.jsx
    Contact.jsx
public/
  img/
    jayanth.png         ← profile photo (already placed by me, just reference it)
  Jayanth_Resume.pdf    ← resume file (already placed, add a download button)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PROJECTS DATA (src/data/index.js)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Export a `projects` array with these three entries:

1. {
     id: 'polaris',
     title: 'Polaris',
     subtitle: 'AI Coding Agent',
     description: 'A full-stack AI coding assistant integrating LLM APIs with real-time frontend 
                   interaction. Features session persistence, backend prompt engineering, and a 
                   seamless developer experience built for productivity.',
     tags: ['React', 'Node.js', 'LLM APIs', 'Full-Stack', 'Prompt Engineering'],
     github: 'https://github.com/jayanth2406/polaris',
     year: '2026',
     status: 'Live',
     icon: '⚡',
     accentColor: '#6366f1',
     gradient: 'from-blue-900/40 to-indigo-900/20',
   }

2. {
     id: 'moviemate',
     title: 'MovieMate',
     subtitle: 'Conversational Movie AI',
     description: 'Conversational AI system for intelligent movie discovery. Combines 
                   SentenceTransformer embeddings, FAISS vector similarity search, hybrid 
                   metadata filters (genre, actor, year), LLM prompt engineering, and 
                   turn-by-turn memory. Features a Gradio web UI and SQLite movie database.',
     tags: ['Python', 'FAISS', 'RAG', 'SentenceTransformers', 'Gradio', 'SQLite', 'LLM'],
     github: 'https://github.com/jayanth2406/MovieMate-conversational-AI',
     year: '2025',
     status: 'Complete',
     icon: '🎬',
     accentColor: '#f43f5e',
     gradient: 'from-rose-900/40 to-orange-900/20',
   }

3. {
     id: 'contagion',
     title: 'Digital Contagion Simulator',
     subtitle: 'Agent-Based Stress Propagation',
     description: 'Python-based agent simulation modeling how stress propagates through social 
                   networks. Analyzes intervention strategies and network dynamics to understand 
                   emotional contagion patterns in student environments using graph-based modeling.',
     tags: ['Python', 'Agent-Based Modeling', 'Network Analysis', 'Simulation'],
     github: 'https://github.com/amitverma-cf/sc-digital-contagion-simulator',
     year: '2025',
     status: 'Research',
     icon: '🧬',
     accentColor: '#10b981',
     gradient: 'from-emerald-900/40 to-teal-900/20',
   }

Export a `skills` array:
[
  { category: 'Languages',   items: ['Python', 'C / C++', 'JavaScript', 'Java', 'HTML / CSS'] },
  { category: 'AI & ML',     items: ['LLM APIs', 'RAG Systems', 'FAISS', 'SentenceTransformers', 'NLP', 'Embeddings'] },
  { category: 'Web & Tools', items: ['React', 'Node.js', 'Convex', 'REST APIs', 'Git', 'Gradio'] },
  { category: 'Concepts',    items: ['Data Structures', 'OOP', 'Machine Learning', 'Agent-Based Modeling'] },
]

Export a `social` object:
{
  github: 'https://github.com/jayanth2406',
  linkedin: 'https://linkedin.com/in/jayanth-reddy-yerabolu',
  email: 'jryerabolu@gmail.com',
}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COMPONENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

── Navbar.jsx ──
- Fixed top, full width, z-50
- On scroll past 30px: bg-bg/80 backdrop-blur-xl border-b border-border. Transparent before.
- Logo: small square with "JR" in bg color on accent background, followed by "Jayanth Reddy" text
- Nav links: Home, Projects, About, Contact using NavLink. Active state: text-accent with a 
  Framer Motion layoutId animated background pill behind it.
- "Resume" button on the right: bg-accent text-bg, downloads Jayanth_Resume.pdf
- Mobile: hamburger icon (3 lines animating to X with Framer Motion), dropdown menu with all links
- Entire navbar animates in from y:-80 opacity:0 on mount

── Footer.jsx ──
- border-t border-border, mt-32
- Left: JR logo mark + "© 2025 Jayanth Reddy Yerabolu" in font-mono text-sub
- Right: GitHub, LinkedIn, Email links in text-sub, hover text-accent

── ProjectCard.jsx ──
Props: { project, index }
- bg-surface border border-border rounded-2xl p-6 overflow-hidden
- On hover: y shifts up by 4px (Framer Motion whileHover), border lightens to border-muted
- On hover: gradient background fades in (using project.gradient), opacity-0 to opacity-100
- Header row: icon badge (styled with project.accentColor at 15% opacity background, 40% border) 
  + year label in font-mono text-sub + status badge styled with project.accentColor
- Top-right: arrow-up-right icon linking to project.github, bordered square button
- Title: text-xl font-bold text-text
- Subtitle: text-xs font-mono text-sub
- Description: text-sm text-sub leading-relaxed
- Tags: small pills, bg-border text-sub font-mono text-[11px] rounded-md
- Footer: git branch icon + repo path truncated, font-mono text-xs
- whileInView animation: opacity 0→1, y 30→0, staggered by index * 0.1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PAGES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

── Home.jsx ──

HERO SECTION:
- pt-36 to clear navbar, min-h-[85vh], flex flex-col justify-center
- Ambient glow: two absolute divs with bg-accent/5 and bg-indigo-500/5, blur-3xl, pointer-events-none
- Grid: left text column, right profile photo (hidden on mobile, shown lg+)

Left column content (all animate in with staggered fadeUp: opacity 0→1, y 24→0):
  1. Pill badge: pulsing green dot + "Available for internships" in accent, bordered, bg-accent/5
  2. H1: "Jayanth" on line 1, "Reddy." on line 2 in text-sub font-normal (contrast effect)
     Font: text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]
  3. Typed role animator — cycles through: ['AI Engineer', 'Full-Stack Dev', 'ML Builder', 'CS Student']
     Implement with useState + useEffect typing/deleting logic. Show in text-xl font-mono.
     The changing text renders in text-accent. Add a blinking | cursor (CSS animation).
  4. Bio paragraph: "CS student at Mahindra University (CGPA 9.49). I build intelligent tools — 
     from RAG pipelines and AI agents to full-stack applications that actually solve problems."
  5. Two CTA buttons: "View Projects" (Link to /projects, bg-accent text-bg, arrow icon animates right on hover)
     and "Resume" (border-border, download link)
  6. Social row: GitHub, LinkedIn, Mail icon buttons (bordered square, 36px) + "@jayanth2406" label in font-mono

Right column (profile photo):
  - Outer decorative ring: absolute div, rounded-2xl border border-accent/20, scale-105
  - Second ring: border-border, scale-110, opacity-50
  - <img src="/img/jayanth.png"> w-64 h-64 object-cover rounded-2xl
    style: grayscale(30%) contrast(1.05), hover transitions to grayscale(0%)
  - CGPA badge: absolute -bottom-4 -right-4, bg-surface border border-border rounded-xl
    Shows "9.49" in text-accent font-mono text-xl, "CGPA" in text-sub text-[11px]

Scroll indicator: absolute bottom-8, w-px h-8 gradient line + rotated "scroll" text in font-mono

SKILLS SECTION (below hero, py-24):
- Section label: "01 — Skills" in text-accent font-mono text-sm
- H2: "What I work with" text-3xl font-bold
- 4-column responsive grid (1 col mobile → 2 col sm → 4 col lg)
- Each skill group card: bg-surface border border-border rounded-2xl p-5
  Category label in text-accent font-mono text-xs, then items as text-sub text-sm, 
  each hovering to text-text

FEATURED PROJECTS SECTION (py-8):
- Section label: "02 — Projects" + H2: "Things I've built"
- "All projects" link to /projects (right-aligned, hidden on mobile)
- 3-column responsive grid using ProjectCard component
- Mobile "All projects" link below grid

CTA SECTION (py-24):
- bg-surface border border-border rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden
- bg-gradient-to-br from-accent/5 to-transparent
- Thin top accent line: w-px h-12 bg-gradient from accent/40 to transparent, centered
- Section label "03 — Let's talk", H2: "Open to opportunities"
- Sub text about internship availability
- Two buttons: "Get in touch" (Link to /contact, bg-accent) + "LinkedIn ↗" (bordered, external)

── Projects.jsx ──
- pt-36 header with accent bar + "Projects" label
- H1: "Things I've" / "built." (second line in text-sub font-normal)
- Stats row: 3 cards showing "3 Projects", "10+ Technologies", "3 GitHub Repos"
  Each: bg-surface border rounded-2xl p-5 text-center, value in text-3xl font-bold text-accent font-mono
- Full project grid: all 3 ProjectCards
- GitHub CTA banner at bottom: bg-surface border rounded-2xl, text + link to github.com/jayanth2406

── About.jsx ──
- pt-36 header with accent bar + "About" label  
- H1: "A little about" / "me." (second line text-sub)
- Two-column grid: bio text left, profile photo right (lg only)

Bio text (4 paragraphs):
  Para 1: Introduce Jayanth, Mahindra University, CGPA 9.49
  Para 2: Journey from C/C++ fundamentals to AI/ML interest
  Para 3: Projects — MovieMate (RAG/FAISS/LLM), Polaris (AI coding agent), stress simulator
  Para 4: Volleyball and chess as hobbies — "both involve thinking several moves ahead"
  
  Two buttons below: "Download Resume ↓" (bg-accent) + "Send Email →" (bordered)

Photo: same treatment as hero — grayscale filter, decorative rings, location badge overlay

Interests section (4 cards in 2x2 grid):
  - "AI Engineering" — Building products with LLMs, embeddings, and retrieval systems
  - "Full-Stack Dev" — React, Node.js, and scalable backend architectures
  - "Machine Learning" — Applied ML from classification to generative models
  - "Open Source & Research" — Contributing to and learning from the community

Timeline section (vertical line on left, dot markers in accent):
  - 2023 — Present: B.Tech CSE, Mahindra University, CGPA 9.49, Scholarship recipient
  - 2026 — Present: Webmaster, IEEE Computer Society Student Branch, Mahindra University
  - Jan–Feb 2026: Polaris — AI Coding Agent (personal project)
  - 2025: MovieMate — Conversational AI (GenAI course project, RAG + FAISS + LLM)
  - 2025: Digital Contagion Simulator (agent-based modeling research)
  - 2025: ICETCI Volunteer, International Conference on Computational Intelligence
  - 2025: 1st Place, Advanced Hackathon by Qubit Club & Maker's Lab (merit scholarship)

── Contact.jsx ──
- pt-36 header: "Let's talk" / "build something."
- Subtitle: actively looking for internships in AI engineering, ML research, full-stack dev

Two-column layout (main channels left, info cards right):

Left — 3 clickable channel cards (anchor tags):
  Each: bg-surface border rounded-2xl p-6, hover border-muted, icon badge in accent
  1. Email: jryerabolu@gmail.com — "Best for internship enquiries and project collabs"
  2. LinkedIn: jayanth-reddy-yerabolu — "Connect professionally or send a message"
  3. GitHub: github.com/jayanth2406 — "See what I'm building, star a repo, or open an issue"

Right — 3 stacked info cards:
  Card 1 "Quick copy": code display of email + copy-to-clipboard button (uses navigator.clipboard, 
    shows Check icon for 2 seconds after copying)
  Card 2 "Currently available": pulsing green dot + "Open to internships" heading + short blurb 
    about summer 2026 roles, Hyderabad-based, open to remote
  Card 3 "Details": key-value pairs
    University: Mahindra University
    Year: 3rd Year (B.Tech CSE)
    CGPA: 9.49 / 10
    Roll No.: SE23UCSE080

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ANIMATIONS (Framer Motion)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- All page content: fadeUp variant — opacity 0→1, y 24→0, duration 0.55s, ease [0.16, 1, 0.3, 1]
- Stagger children with custom delay prop (index * 0.1)
- ProjectCards: whileInView (once: true, margin: -60px), staggered by index
- Navbar: initial y:-80 opacity:0 → y:0 opacity:1 on mount
- Active nav indicator: Framer Motion layoutId="nav-indicator" animated background
- Profile photo: initial scale:0.9 opacity:0 → scale:1 opacity:1
- Timeline items: x:-16 opacity:0 → x:0 opacity:1, staggered
- Mobile menu: AnimatePresence, y:-10 opacity:0 → y:0 opacity:1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ROUTING (App.jsx)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Use react-router-dom v6 with BrowserRouter in main.jsx.
App.jsx renders <Navbar />, <Routes> with 4 routes, and <Footer />.
Routes:
  /           → Home
  /projects   → Projects
  /about      → About
  /contact    → Contact

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RESPONSIVENESS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- All pages: max-w-6xl mx-auto px-6
- Profile photo: hidden on mobile, visible lg+
- Skills grid: 1 col → 2 col sm → 4 col lg
- Projects grid: 1 col → 2 col md → 3 col lg
- Hero buttons: flex-wrap
- Navbar: hamburger on mobile (md:hidden), full links on desktop (hidden md:flex)
- Contact: single column mobile, two-column lg

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CRITICAL RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. NEVER use Inter, Roboto, or system-ui as the font. Only Syne + JetBrains Mono.
2. NEVER use purple gradients or cliché AI aesthetics.
3. Every component must be complete — no placeholder comments.
4. All external links must have target="_blank" rel="noreferrer".
5. Profile image path: /img/jayanth.png (in public/img/)
6. Resume path: /Jayanth_Resume.pdf (in public/) — use as <a href="/Jayanth_Resume.pdf" download>
7. Tailwind v3 only. Do not use Tailwind v4 syntax.
8. Use lucide-react for all icons.
9. The typed role animation must be implemented with useState + useEffect (no external library).
10. Do not use any <form> tags — use onClick handlers for all interactions.
11. Generate every file completely. Do not split across multiple responses. Output all files.