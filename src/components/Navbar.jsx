import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { nav, brand } from '../content'
import { Button } from './ui/Button'
import './Navbar.css'

const EASE = [0.76, 0, 0.24, 1]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <>
      <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <div className="nav__inner container-lg">
          <a className="nav__brand" href="#home" onClick={() => setOpen(false)}>
            <img src="/img/ten80ten-mark-512.png" alt="Ten80Ten" />
            <span>Ten80Ten</span>
          </a>

          <nav className="nav__links">
            {nav.links.map(([label, href]) => (
              <a key={label} href={href}>{label}</a>
            ))}
          </nav>

          <div className="nav__right">
            <Button label={nav.cta.label} href={nav.cta.href} className="nav__cta" />
            <button
              className={`nav__burger ${open ? 'is-open' : ''}`}
              onClick={() => setOpen((o) => !o)}
              aria-label="Menu"
            >
              <span /><span />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="menu"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="menu__inner container-lg">
              <ul className="menu__links">
                {nav.links.map(([label, href], i) => (
                  <li key={label} style={{ overflow: 'hidden' }}>
                    <motion.a
                      href={href}
                      onClick={() => setOpen(false)}
                      initial={{ y: '110%' }}
                      animate={{ y: 0 }}
                      exit={{ y: '110%' }}
                      transition={{ duration: 0.6, ease: EASE, delay: 0.15 + i * 0.05 }}
                    >
                      {label}
                    </motion.a>
                  </li>
                ))}
              </ul>
              <div className="menu__foot">
                <span>{brand.positioning}</span>
                <a href={`mailto:${brand.email}`}>{brand.email}</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
