import { motion } from 'framer-motion'
import { ArrowUpRight, GitBranch } from 'lucide-react'

const gradientMap = {
  'from-blue-900/40 to-indigo-900/20':
    'linear-gradient(145deg, rgba(30, 58, 138, 0.36), rgba(49, 46, 129, 0.2))',
  'from-rose-900/40 to-orange-900/20':
    'linear-gradient(145deg, rgba(136, 19, 55, 0.34), rgba(154, 52, 18, 0.2))',
  'from-emerald-900/40 to-teal-900/20':
    'linear-gradient(145deg, rgba(6, 78, 59, 0.38), rgba(17, 94, 89, 0.2))',
}

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-muted"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: gradientMap[project.gradient] }}
      />

      <div className="relative z-10 space-y-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span
              className="grid h-10 w-10 place-items-center rounded-lg border text-lg"
              style={{
                backgroundColor: `${project.accentColor}26`,
                borderColor: `${project.accentColor}66`,
              }}
            >
              {project.icon}
            </span>
            <div>
              <p className="font-mono text-xs uppercase tracking-wide text-sub">{project.year}</p>
              <span
                className="mt-1 inline-flex rounded-full border px-2 py-0.5 font-mono text-[11px]"
                style={{
                  color: project.accentColor,
                  borderColor: `${project.accentColor}66`,
                  backgroundColor: `${project.accentColor}20`,
                }}
              >
                {project.status}
              </span>
            </div>
          </div>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.title} repository`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-sub transition-colors hover:border-muted hover:text-accent"
          >
            <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-bold text-text">{project.title}</h3>
          <p className="font-mono text-xs uppercase tracking-wide text-sub">{project.subtitle}</p>
        </div>

        <p className="text-sm leading-relaxed text-sub">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-md bg-border px-2.5 py-1 font-mono text-[11px] text-sub">
              {tag}
            </span>
          ))}
        </div>

        <div className="inline-flex max-w-full items-center gap-2 font-mono text-xs text-sub">
          <GitBranch size={13} className="shrink-0" />
          <span className="truncate">{project.github.replace('https://github.com/', '')}</span>
        </div>
      </div>
    </motion.article>
  )
}
