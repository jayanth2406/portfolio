import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, GitBranch, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import { profileImagePath, projects, skills, social } from '../data'

const roles = ['AI Engineer', 'Full-Stack Dev', 'ML Builder', 'CS Student']

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

function TypewriterRole() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  const currentRole = useMemo(() => roles[roleIndex], [roleIndex])

  useEffect(() => {
    const typingSpeed = isDeleting ? 44 : 90
    const holdTime = 1300

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), holdTime)
        return
      }

      if (isDeleting && displayText.length === 0) {
        setIsDeleting(false)
        setRoleIndex((prev) => (prev + 1) % roles.length)
        return
      }

      const nextText = isDeleting
        ? currentRole.slice(0, displayText.length - 1)
        : currentRole.slice(0, displayText.length + 1)
      setDisplayText(nextText)
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [currentRole, displayText, isDeleting])

  return (
    <p className="text-xl text-sub sm:text-2xl">
      <span className="font-mono">I am a </span>
      <span className="font-mono text-accent">{displayText}</span>
      <span className="font-mono text-accent animate-blink">|</span>
    </p>
  )
}

export default function Home() {
  return (
    <div>
      <section className="relative flex min-h-[85vh] flex-col justify-center pt-36">
        <div className="pointer-events-none absolute -left-20 top-24 h-52 w-52 rounded-full bg-accent/5 blur-3xl" />
        <div className="pointer-events-none absolute -right-12 top-20 h-64 w-64 rounded-full bg-indigo-500/5 blur-3xl" />

        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
          <motion.div
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: 0.1 }}
            className="space-y-7"
          >
            <motion.div variants={fadeUp} transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 font-mono text-xs text-accent">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-70" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
                </span>
                Available for internships
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl font-bold leading-[1.05] tracking-tight text-text sm:text-6xl lg:text-7xl"
            >
              Jayanth
              <br />
              <span className="font-normal text-sub">Reddy.</span>
            </motion.h1>

            <motion.div variants={fadeUp} transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}>
              <TypewriterRole />
            </motion.div>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-2xl text-base leading-relaxed text-sub sm:text-lg"
            >
              CS student at Mahindra University (CGPA 9.49). I enjoy building useful products,
              from AI-driven tools to full-stack apps that solve real problems.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-3"
            >
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-bg transition-colors hover:bg-accent-dim"
              >
                View Projects
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-3"
            >
              <a
                href={social.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="grid h-9 w-9 place-items-center rounded-lg border border-border text-sub transition-colors hover:border-muted hover:text-accent"
              >
                <GitBranch size={17} />
              </a>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid h-9 w-9 place-items-center rounded-lg border border-border text-sub transition-colors hover:border-muted hover:text-accent"
              >
                <ArrowUpRight size={17} />
              </a>
              <a
                href={`mailto:${social.email}`}
                target="_blank"
                rel="noreferrer"
                aria-label="Email"
                className="grid h-9 w-9 place-items-center rounded-lg border border-border text-sub transition-colors hover:border-muted hover:text-accent"
              >
                <Mail size={17} />
              </a>
              <span className="font-mono text-xs text-sub">@jayanth2406</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 scale-105 rounded-2xl border border-accent/20" />
            <div className="absolute inset-0 scale-110 rounded-2xl border border-border opacity-50" />
            <img
              src={profileImagePath}
              alt="Jayanth Reddy"
              className="relative z-10 h-64 w-64 rounded-2xl object-cover transition-all duration-500 hover:grayscale-0"
              style={{ filter: 'grayscale(30%) contrast(1.05)' }}
            />
            <div className="absolute -bottom-4 -right-4 z-20 rounded-xl border border-border bg-surface px-4 py-2 shadow-glow">
              <p className="font-mono text-xl font-medium text-accent">9.49</p>
              <p className="text-[11px] uppercase tracking-wide text-sub">CGPA</p>
            </div>
          </motion.div>
        </div>

        <div className="pointer-events-none absolute bottom-8 right-6 hidden items-center gap-3 lg:flex">
          <div className="h-8 w-px bg-gradient-to-b from-accent/60 to-transparent" />
          <span className="origin-left rotate-90 font-mono text-[10px] uppercase tracking-[0.3em] text-sub">
            scroll
          </span>
        </div>
      </section>

      <section className="py-24">
        <p className="font-mono text-sm text-accent">01 - Skills</p>
        <h2 className="mt-2 text-3xl font-bold text-text">What I do</h2>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group, index) => (
            <motion.article
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border border-border bg-surface p-5"
            >
              <p className="font-mono text-xs uppercase tracking-wide text-accent">{group.category}</p>
              <div className="mt-3 space-y-2">
                {group.items.map((item) => (
                  <p key={item} className="text-sm text-sub transition-colors hover:text-text">
                    {item}
                  </p>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="py-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-sm text-accent">02 - Projects</p>
            <h2 className="mt-2 text-3xl font-bold text-text">Things I&apos;ve built</h2>
          </div>
          <Link to="/projects" className="hidden text-sm text-sub transition-colors hover:text-accent sm:block">
            All projects
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <Link to="/projects" className="mt-6 inline-block text-sm text-sub transition-colors hover:text-accent sm:hidden">
          All projects
        </Link>
      </section>

      <section className="py-24">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface bg-gradient-to-br from-accent/5 to-transparent p-10 text-center sm:p-16">
          <div className="mx-auto mb-6 h-12 w-px bg-gradient-to-b from-accent/40 to-transparent" />
          <p className="font-mono text-sm text-accent">03 - Let&apos;s talk</p>
          <h2 className="mt-3 text-3xl font-bold text-text sm:text-4xl">Open to opportunities</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-sub sm:text-base">
            Actively looking for internships in AI engineering, ML research, and full-stack
            development. I would love to contribute to ambitious teams building meaningful products.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-bg transition-colors hover:bg-accent-dim"
            >
              Get in touch
            </Link>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border px-5 py-3 text-sm font-semibold text-text transition-colors hover:border-muted hover:text-accent"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
