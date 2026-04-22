import { social } from '../data'

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 px-6 py-8 sm:flex-row sm:items-center">
        <div className="inline-flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent text-xs font-bold text-bg">
            JR
          </span>
          <p className="font-mono text-xs text-sub">© 2025 Jayanth Reddy Yerabolu</p>
        </div>

        <div className="flex items-center gap-5 text-sm text-sub">
          <a href={social.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-accent">
            GitHub
          </a>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${social.email}`}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-accent"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
