import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { hero, asset } from '../content'
import { Button } from './ui/Button'
import { ArrowUpRight } from './ui/Icons'
import './Hero.css'

const EASE = [0.25, 1, 0.5, 1]
// gentle easeOut for a very smooth settle
const SMOOTH = [0.16, 1, 0.3, 1]

/**
 * Floating portrait cluster. Each picture starts small and invisible at the
 * CENTRE of the hero (fromX/fromY = vector pointing from its final spot back to
 * the middle) then glides out to its scattered position — the "showing from the
 * middle" reveal from the Vertora hero. rot = final tilt.
 */
const FLOATS = [
  { src: '/img/tpl/694b9417ddc7bead3c8533a8_Vertora-hero-rotate-image-three.webp', cls: 'hero__float--l1', rot: -8, fromX: 340, fromY: 150 },
  { src: '/img/tpl/694b94177f8b4b0365e00b92_Vertora-hero-rotate-image-four.webp', cls: 'hero__float--l2', rot: 6, fromX: 300, fromY: -40 },
  { src: '/img/tpl/694b9417a3c95891b75259ca_Vertora-hero-rotate-image-one.webp', cls: 'hero__float--l3', rot: -4, fromX: 210, fromY: 110 },
  { src: '/img/tpl/694ba4cea1a84fe6a2530535_Vertora-rotate-image-ten.webp', cls: 'hero__float--r1', rot: 9, fromX: -340, fromY: 150 },
  { src: '/img/tpl/694ba4cee6d68eb1e8beaffd_Vertora-rotate-image-seven.webp', cls: 'hero__float--r2', rot: -7, fromX: -300, fromY: -40 },
  { src: '/img/tpl/694ba4ceb71a14e70737ea93_Vertora-rotate-image-six.webp', cls: 'hero__float--r3', rot: 5, fromX: -210, fromY: 110 },
]

function Word({ children, delay }) {
  return (
    <span className="hero__word">
      <motion.span
        initial={{ y: '110%' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, ease: EASE, delay }}
      >
        {children}
      </motion.span>
    </span>
  )
}

function FloatImg({ src, className, rot, fromX, fromY, delay, reduce }) {
  return (
    <motion.img
      src={src}
      alt=""
      aria-hidden
      className={`hero__float ${className}`}
      initial={
        reduce
          ? { opacity: 0 }
          : { opacity: 0, scale: 0.2, x: fromX, y: fromY, rotate: rot * 0.3 }
      }
      animate={
        reduce
          ? { opacity: 1 }
          : { opacity: 1, scale: 1, x: 0, y: 0, rotate: rot }
      }
      transition={{ duration: 1.15, ease: SMOOTH, delay: reduce ? 0 : delay }}
    />
  )
}

export default function Hero() {
  const reduce = useReducedMotion()
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

          <div className="hero__heading">
            {FLOATS.map((f, i) => (
              <FloatImg
                key={f.cls}
                src={asset(f.src)}
                className={f.cls}
                rot={f.rot}
                fromX={f.fromX}
                fromY={f.fromY}
                delay={0.35 + i * 0.1}
                reduce={reduce}
              />
            ))}
            <h1 className="hero__title"><Word delay={0.2}>{hero.titleTop}</Word></h1>
            <h1 className="hero__title"><Word delay={0.35}>{hero.titleBottom}</Word></h1>
          </div>

          <div className="hero__bottom">
            <div className="hero__bottom-left">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
              >
                {hero.lead}
              </motion.p>
              <Button label={hero.primary.label} href={hero.primary.href} variant="light" />
            </div>
            <ul className="hero__services">
              {hero.services.map(([label, href], i) => (
                <motion.li
                  key={label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
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
