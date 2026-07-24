import { motion } from 'framer-motion'

// Very smooth easeOut (expo-like) for a soft fade-in on scroll.
const EASE = [0.22, 1, 0.36, 1]

/** Fade/slide-in on scroll into view. dir: up|left|right|scale|none */
export function Reveal({ children, dir = 'up', delay = 0, duration = 0.95, className, as = 'div', once = true, amount = 0.2, ...rest }) {
  const M = motion[as] || motion.div
  const offset = 22
  const hidden = {
    up: { opacity: 0, y: offset },
    left: { opacity: 0, x: -offset },
    right: { opacity: 0, x: offset },
    scale: { opacity: 0, scale: 0.92 },
    none: { opacity: 0 },
  }[dir]
  return (
    <M
      className={className}
      initial={hidden}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </M>
  )
}

/** Split a line into words that rise up in sequence (hero-style). */
export function SplitWords({ text, className, delay = 0, stagger = 0.06, duration = 0.8 }) {
  const words = String(text).split(' ')
  return (
    <span className={className} style={{ display: 'inline-block' }} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top' }}>
          <motion.span
            style={{ display: 'inline-block' }}
            initial={{ y: '110%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration, delay: delay + i * stagger, ease: EASE }}
            aria-hidden
          >
            {w}{i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </span>
  )
}
