import { motion } from 'framer-motion'
import { GitBranch } from 'lucide-react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data'

const stats = [
  { label: 'Projects', value: '3' },
  { label: 'Technologies', value: '10+' },
  { label: 'GitHub Repos', value: '3' },
]

export default function Projects() {
  return (
    <div className="pt-36">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mb-4 h-1 w-16 rounded-full bg-accent/70" />
        <p className="font-mono text-sm text-accent">Projects</p>
        <h1 className="mt-2 text-5xl font-bold leading-tight tracking-tight text-text sm:text-6xl">
          Things I&apos;ve
          <br />
          <span className="font-normal text-sub">built.</span>
        </h1>
      </motion.div>

      <section className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {stats.map((item, index) => (
          <motion.article
            key={item.label}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl border border-border bg-surface p-5 text-center"
          >
            <p className="font-mono text-3xl font-medium text-accent">{item.value}</p>
            <p className="mt-1 text-sm text-sub">{item.label}</p>
          </motion.article>
        ))}
      </section>

      <section className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </section>

      <motion.section
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-10 rounded-2xl border border-border bg-surface p-6 sm:flex sm:items-center sm:justify-between"
      >
        <div>
          <h2 className="text-lg font-semibold text-text">Explore more on GitHub</h2>
          <p className="mt-1 text-sm text-sub">
            More experiments, prototypes, and research projects are available in my repositories.
          </p>
        </div>
        <a
          href="https://github.com/jayanth2406"
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-text transition-colors hover:border-muted hover:text-accent sm:mt-0"
        >
          <GitBranch size={16} />
          github.com/jayanth2406
        </a>
      </motion.section>
    </div>
  )
}
