import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { hero, asset } from '../content'
import { Button } from './ui/Button'
import { ArrowUpRight } from './ui/Icons'
import './Hero.css'

const EASE = [0.25, 1, 0.5, 1]
const SMOOTH = [0.16, 1, 0.3, 1]
const EASE_IN = [0.5, 0, 0.75, 0]

// The centre "pack" of photos — a fanned spread (rotate + x offset per card).
// Larger than before, and each drops straight down into its fanned column.
const PACK = [
  { src: '/img/tpl/694b9417ddc7bead3c8533a8_Vertora-hero-rotate-image-three.webp', r: -15, x: -150 },
  { src: '/img/tpl/694b94177f8b4b0365e00b92_Vertora-hero-rotate-image-four.webp', r: -9, x: -90 },
  { src: '/img/tpl/694b9417a3c95891b75259ca_Vertora-hero-rotate-image-one.webp', r: -3, x: -30 },
  { src: '/img/tpl/694ba4ceb71a14e70737ea93_Vertora-rotate-image-six.webp', r: 3, x: 30 },
  { src: '/img/tpl/694ba4cee6d68eb1e8beaffd_Vertora-rotate-image-seven.webp', r: 9, x: 90 },
  { src: '/img/tpl/694ba4cea1a84fe6a2530535_Vertora-rotate-image-ten.webp', r: 15, x: 150 },
]
const DROP_FROM = -260 // photos rest this far above the gap (drop in / rise out)

// Photos drop straight down one-by-one from above (shown), hold, then rise back up (exit).
const packVariants = {
  hidden: (i) => ({ opacity: 0, y: DROP_FROM, scale: 0.98, x: PACK[i].x, rotate: PACK[i].r }),
  shown: (i) => ({
    opacity: 1, y: 0, scale: 1, x: PACK[i].x, rotate: PACK[i].r,
    transition: { duration: 0.62, ease: SMOOTH, delay: i * 0.13 },
  }),
  exit: (i) => ({
    opacity: 0, y: DROP_FROM, scale: 0.98, x: PACK[i].x, rotate: PACK[i].r,
    transition: { duration: 0.5, ease: EASE_IN, delay: i * 0.1 },
  }),
}

function Word({ children, side, open }) {
  // Words split apart to open a gap in the middle, then close again.
  const target = open ? (side === 'left' ? '-10vw' : '10vw') : '0vw'
  return (
    <motion.span
      className={`hero__word hero__word--${side}`}
      animate={{ x: target }}
      transition={{ duration: 0.8, ease: SMOOTH }}
    >
      {children}
    </motion.span>
  )
}

export default function Hero() {
  const reduce = useReducedMotion()
  // phase: 'closed' (words together, no photos) → 'open' (gap opens) →
  //        'show' (photos fan in + hold) → 'retract' (photos rise out) → loop
  const [phase, setPhase] = useState('closed')

  useEffect(() => {
    if (reduce) {
      setPhase('show')
      return
    }
    let alive = true
    const wait = (ms) => new Promise((res) => setTimeout(res, ms))
    ;(async () => {
      // small beat before the first run so the page settles
      await wait(600)
      while (alive) {
        setPhase('open')
        await wait(850) // words split open
        if (!alive) break
        setPhase('show')
        await wait(700 + 2000) // photos fan in, then hold ~2s
        if (!alive) break
        setPhase('retract')
        await wait(650) // photos rise up and out
        if (!alive) break
        setPhase('closed')
        await wait(850 + 1000) // words close, then a pause before repeating
      }
    })()
    return () => {
      alive = false
    }
  }, [reduce])

  const wordsOpen = phase === 'open' || phase === 'show' || phase === 'retract'
  const packState = phase === 'show' ? 'shown' : phase === 'retract' ? 'exit' : 'hidden'

  return (
    <section className="hero" id="home">
      <div
        className="hero__panel hero__panel--wallpaper"
        style={{ backgroundImage: `url(${asset('/img/herobackground.png')})` }}
      >
        <div className="hero__overlay" />
        <div className="hero__content container-lg">
          <motion.span
            className="hero__eyebrow eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {hero.eyebrow}
          </motion.span>

          <div className="hero__stage">
            {/* Split headline: two words that open a gap in the middle */}
            <h1 className="hero__title-line">
              <Word side="left" open={wordsOpen}>{hero.titleTop}</Word>
              <Word side="right" open={wordsOpen}>{hero.titleBottom}</Word>
            </h1>

            {/* The pack of photos that fans into the centre gap */}
            <div className="hero__pack" aria-hidden>
              {PACK.map((p, i) => (
                <motion.img
                  key={p.src}
                  className="hero__pack-img"
                  src={asset(p.src)}
                  alt=""
                  custom={i}
                  variants={packVariants}
                  initial="hidden"
                  animate={packState}
                />
              ))}
            </div>
          </div>

          <div className="hero__bottom">
            <div className="hero__bottom-left">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                {hero.lead}
              </motion.p>
              <Button label={hero.primary.label} href={hero.primary.href} variant="light" className="btn--talk" />
            </div>
            <ul className="hero__services">
              {hero.services.map(([label, href], i) => (
                <motion.li
                  key={label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
                >
                  <Link to={href}><span>{label}</span><ArrowUpRight size={16} /></Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
