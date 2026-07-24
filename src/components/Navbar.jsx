import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { nav, brand, asset } from '../content'
import { Button } from './ui/Button'
import './Navbar.css'

const EASE = [0.76, 0, 0.24, 1]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // close menu on route change
  useEffect(() => { setOpen(false) }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <>
      <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <div className="nav__inner container-lg">
          <Link className="nav__brand" to="/" onClick={() => setOpen(false)}>
            <img src={asset('/img/ten80ten-mark-512.png')} alt="Ten80Ten Studios" />
            <span>Ten80Ten<sup>®</sup></span>
          </Link>

          <nav className="nav__links">
            {nav.links.map(([label, href]) => (
              <NavLink
                key={label}
                to={href}
                end={href === '/'}
                className={({ isActive }) => (isActive ? 'is-active' : '')}
              >
                {label}
              </NavLink>
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
                    <motion.div
                      initial={{ y: '110%' }}
                      animate={{ y: 0 }}
                      exit={{ y: '110%' }}
                      transition={{ duration: 0.6, ease: EASE, delay: 0.15 + i * 0.05 }}
                    >
                      <Link to={href} onClick={() => setOpen(false)}>{label}</Link>
                    </motion.div>
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
