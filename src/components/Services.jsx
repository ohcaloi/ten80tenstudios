import './Services.css'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Reveal, SplitWords } from '../lib/Reveal'
import { ArrowUpRight } from './ui/Icons'
import { services } from '../content'

/**
 * One sticky card in the stack. As the NEXT card scrolls up over it, this card
 * shrinks (1 -> 0.9) and dims (1 -> 0.6). The transform is applied to an inner
 * motion element so that if JS/framer fails, the card content is still fully
 * readable (graceful non-JS baseline). Under 768px / reduced-motion the CSS
 * turns off sticky + the transform is visually neutralised.
 */
function ServiceCard({ card, index, dark }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6])

  return (
    <div
      className="svc__card-slot"
      ref={ref}
      style={{ '--i': index, top: `calc(7rem + ${index * 1.6}rem)` }}
    >
      <motion.article
        className={`svc__card${dark ? ' svc__card--dark' : ''}`}
        style={{ scale, opacity }}
      >
        <div className="svc__card-text">
          <span className="svc__num">{card.num}</span>
          <h3 className="svc__title">{card.title}</h3>
          <p className="svc__desc">{card.desc}</p>
          <Link className="svc__more" to="/service">
            Learn more
            <span className="svc__more-chip"><ArrowUpRight size={16} /></span>
          </Link>
        </div>
        <div className="svc__card-media">
          <img src={card.img} alt={card.title} loading="lazy" />
        </div>
      </motion.article>
    </div>
  )
}

export default function Services() {
  return (
    <section className="svc" id="services">
      <div className="container-lg svc__intro">
        <Reveal as="p" className="eyebrow svc__eyebrow" dir="up">
          {services.eyebrow}
        </Reveal>
        <h2 className="svc__headline">
          <SplitWords text={services.headline} />
        </h2>
      </div>

      <div className="container-lg">
        <div className="svc__cards">
          {services.cards.map((card, i) => (
            <ServiceCard key={card.num} card={card} index={i} dark={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
