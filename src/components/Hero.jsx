import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { hero } from '../content'
import { Button } from './ui/Button'
import { ArrowUpRight } from './ui/Icons'
import './Hero.css'

const EASE = [0.25, 1, 0.5, 1]

// floating image cluster (template scatters webp thumbs around the headline)
const LEFT = [
  '/img/tpl/694b9417ddc7bead3c8533a8_Vertora-hero-rotate-image-three.webp',
  '/img/tpl/694b94177f8b4b0365e00b92_Vertora-hero-rotate-image-four.webp',
  '/img/tpl/694b9417a3c95891b75259ca_Vertora-hero-rotate-image-one.webp',
]
const RIGHT = [
  '/img/tpl/694ba4cea1a84fe6a2530535_Vertora-rotate-image-ten.webp',
  '/img/tpl/694ba4cee6d68eb1e8beaffd_Vertora-rotate-image-seven.webp',
  '/img/tpl/694ba4ceb71a14e70737ea93_Vertora-rotate-image-six.webp',
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

function FloatImg({ src, className, delay }) {
  return (
    <motion.img
      src={src}
      alt=""
      aria-hidden
      className={`hero__float ${className}`}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: EASE, delay }}
    />
  )
}

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__panel">
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
            {LEFT.map((s, i) => (
              <FloatImg key={s} src={s} className={`hero__float--l${i + 1}`} delay={0.5 + i * 0.12} />
            ))}
            {RIGHT.map((s, i) => (
              <FloatImg key={s} src={s} className={`hero__float--r${i + 1}`} delay={0.6 + i * 0.12} />
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
