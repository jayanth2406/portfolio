import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Check, Copy, GitBranch, Mail } from 'lucide-react'
import { personal, social } from '../data'

const channels = [
  {
    title: 'Email',
    value: social.email,
    href: `mailto:${social.email}`,
    helper: 'Best for internship enquiries and project collabs',
    icon: Mail,
  },
  {
    title: 'LinkedIn',
    value: 'jayanth-reddy-yerabolu',
    href: social.linkedin,
    helper: 'Connect professionally or send a message',
    icon: ArrowUpRight,
  },
  {
    title: 'GitHub',
    value: 'github.com/jayanth2406',
    href: social.github,
    helper: "See what I'm building, star a repo, or open an issue",
    icon: GitBranch,
  },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(social.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="pt-36 pb-10">
      <motion.header
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="font-mono text-sm text-accent">Contact</p>
        <h1 className="mt-2 text-5xl font-bold leading-tight tracking-tight text-text sm:text-6xl">
          Let&apos;s talk
          <br />
          <span className="font-normal text-sub">build something.</span>
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-sub sm:text-base">
          Actively looking for internships in AI engineering, ML research, and full-stack
          development.
        </p>
      </motion.header>

      <section className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_360px]">
        <div className="space-y-4">
          {channels.map((channel, index) => {
            const Icon = channel.icon
            return (
              <motion.a
                key={channel.title}
                href={channel.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="block rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-muted"
              >
                <div className="flex items-start gap-4">
                  <span className="grid h-10 w-10 place-items-center rounded-lg border border-accent/30 bg-accent/10 text-accent">
                    <Icon size={17} />
                  </span>
                  <div>
                    <h2 className="text-lg font-semibold text-text">{channel.title}</h2>
                    <p className="mt-1 font-mono text-sm text-accent">{channel.value}</p>
                    <p className="mt-2 text-sm text-sub">{channel.helper}</p>
                  </div>
                </div>
              </motion.a>
            )
          })}
        </div>

        <div className="space-y-4">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border bg-surface p-5"
          >
            <p className="font-mono text-xs uppercase tracking-wide text-accent">Quick copy</p>
            <div className="mt-3 rounded-xl border border-border bg-bg p-3 font-mono text-sm text-text">
              {social.email}
            </div>
            <button
              type="button"
              onClick={handleCopy}
              className="mt-3 inline-flex items-center gap-2 rounded-full border border-border px-3 py-2 text-xs text-sub transition-colors hover:border-muted hover:text-accent"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              {copied ? 'Copied' : 'Copy email'}
            </button>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="rounded-2xl border border-border bg-surface p-5"
          >
            <p className="font-mono text-xs uppercase tracking-wide text-accent">Currently available</p>
            <div className="mt-3 flex items-start gap-3">
              <span className="relative mt-1 flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-65" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400" />
              </span>
              <div>
                <p className="font-semibold text-text">Open to internships</p>
                <p className="mt-1 text-sm text-sub">
                  Looking for summer 2026 roles. Based in Hyderabad and open to remote collaboration.
                </p>
              </div>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="rounded-2xl border border-border bg-surface p-5"
          >
            <p className="font-mono text-xs uppercase tracking-wide text-accent">Details</p>
            <div className="mt-3 space-y-2 text-sm text-sub">
              <p>
                <span className="text-text">University:</span> {personal.university}
              </p>
              <p>
                <span className="text-text">Year:</span> {personal.year}
              </p>
              <p>
                <span className="text-text">CGPA:</span> {personal.cgpa}
              </p>
              <p>
                <span className="text-text">Roll No.:</span> {personal.rollNo}
              </p>
            </div>
          </motion.article>
        </div>
      </section>
    </div>
  )
}
