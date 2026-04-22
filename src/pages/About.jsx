import { motion } from 'framer-motion'
import { Mail, MapPin } from 'lucide-react'
import { personal } from '../data'

const interests = [
  {
    title: 'AI Engineering',
    description: 'Building products with LLMs, embeddings, and retrieval systems.',
  },
  {
    title: 'Full-Stack Dev',
    description: 'React, Node.js, and scalable backend architectures.',
  },
  {
    title: 'Machine Learning',
    description: 'Applied ML from classification to generative models.',
  },
  {
    title: 'Open Source & Research',
    description: 'Contributing to and learning from the community.',
  },
]

const timeline = [
  '2023 - Present: B.Tech CSE, Mahindra University, CGPA 9.49, Scholarship recipient',
  '2026 - Present: Webmaster, IEEE Computer Society Student Branch, Mahindra University',
  'Jan-Feb 2026: Polaris - AI Coding Agent (personal project)',
  '2025: MovieMate - Conversational AI (GenAI course project, RAG + FAISS + LLM)',
  '2025: Digital Contagion Simulator (agent-based modeling research)',
  '2025: ICETCI Volunteer, International Conference on Computational Intelligence',
  "2025: 1st Place, Advanced Hackathon by Qubit Club & Maker's Lab (merit scholarship)",
]

export default function About() {
  return (
    <div className="pt-36">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mb-4 h-1 w-16 rounded-full bg-accent/70" />
        <p className="font-mono text-sm text-accent">About</p>
        <h1 className="mt-2 text-5xl font-bold leading-tight tracking-tight text-text sm:text-6xl">
          A little about
          <br />
          <span className="font-normal text-sub">me.</span>
        </h1>
      </motion.div>

      <section className="mt-10 grid items-start gap-10 lg:grid-cols-[1fr_auto]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4 text-base leading-relaxed text-sub"
        >
          <p>
            I am Jayanth Reddy Yerabolu, a Computer Science undergraduate at Mahindra University,
            Hyderabad, currently in my third year with a CGPA of 9.49.
          </p>
          <p>
            My journey started with C and C++ fundamentals, then expanded into JavaScript and
            modern web development, eventually pulling me into AI and ML systems design.
          </p>
          <p>
            I enjoy building practical projects such as MovieMate (RAG, FAISS, LLM workflow),
            Polaris (an AI coding agent), and a digital stress contagion simulator for network-based
            research.
          </p>
          <p>
            Outside coding, volleyball and chess keep me balanced. Both involve thinking several
            moves ahead, a mindset that translates directly into how I design software systems.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="/Jayanth_Resume.pdf"
              download
              className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-bg transition-colors hover:bg-accent-dim"
            >
              Download Resume ↓
            </a>
            <a
              href={`mailto:${personal.primaryEmail}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border px-5 py-3 text-sm font-semibold text-text transition-colors hover:border-muted hover:text-accent"
            >
              Send Email →
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden lg:block"
        >
          <div className="absolute inset-0 scale-105 rounded-2xl border border-accent/20" />
          <div className="absolute inset-0 scale-110 rounded-2xl border border-border opacity-50" />
          <img
            src="/img/jayanth.png"
            alt="Jayanth portrait"
            className="relative z-10 h-72 w-72 rounded-2xl object-cover transition-all duration-500 hover:grayscale-0"
            style={{ filter: 'grayscale(30%) contrast(1.05)' }}
          />
          <div className="absolute -bottom-4 -left-4 z-10 inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-3 py-2 text-xs text-sub">
            <MapPin size={14} className="text-accent" />
            {personal.location}
          </div>
        </motion.div>
      </section>

      <section className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {interests.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl border border-border bg-surface p-6"
          >
            <h2 className="text-lg font-semibold text-text">{item.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-sub">{item.description}</p>
          </motion.article>
        ))}
      </section>

      <section className="mt-16 pb-8">
        <h2 className="text-2xl font-bold text-text">Timeline</h2>
        <div className="relative mt-6 space-y-5 border-l border-border pl-6">
          {timeline.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <span className="absolute -left-[31px] top-[7px] h-2.5 w-2.5 rounded-full bg-accent" />
              <p className="text-sm leading-relaxed text-sub">{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="pb-10">
        <div className="rounded-2xl border border-border bg-surface p-5 text-sm text-sub">
          <p className="inline-flex items-center gap-2">
            <Mail size={15} className="text-accent" />
            For collaborations and internships: {personal.primaryEmail}
          </p>
        </div>
      </section>
    </div>
  )
}
