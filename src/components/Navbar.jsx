import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

function Hamburger({ isOpen }) {
  return (
    <div className="flex h-5 w-6 flex-col items-end justify-between" aria-hidden="true">
      <motion.span
        animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
        className="h-[2px] w-6 origin-center bg-text"
      />
      <motion.span animate={{ opacity: isOpen ? 0 : 1 }} className="h-[2px] w-4 bg-text" />
      <motion.span
        animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0, width: isOpen ? 24 : 18 }}
        className="h-[2px] w-[18px] origin-center bg-text"
      />
    </div>
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'border-b border-border bg-bg/80 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-6">
        <Link to="/" className="group inline-flex items-center gap-3" aria-label="Go to home">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent text-sm font-bold text-bg">
            JR
          </span>
          <span className="text-sm font-semibold tracking-wide text-text transition-colors group-hover:text-accent">
            Jayanth Reddy
          </span>
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `relative rounded-full px-4 py-2 text-sm transition-colors ${
                  isActive ? 'text-accent' : 'text-sub hover:text-text'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 -z-10 rounded-full border border-border bg-surface"
                      transition={{ type: 'spring', stiffness: 340, damping: 28 }}
                    />
                  )}
                  {item.label}
                </>
              )}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-lg border border-border p-3 text-text md:hidden"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          <Hamburger isOpen={isOpen} />
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="border-t border-border bg-bg/95 px-6 pb-6 pt-4 backdrop-blur-xl md:hidden"
          >
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl border px-4 py-3 text-sm transition-colors ${
                      isActive
                        ? 'border-accent/40 bg-accent/10 text-accent'
                        : 'border-border bg-surface text-sub hover:text-text'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
