import './Services.css'
import { motion } from 'framer-motion'
import { Reveal, SplitWords } from '../lib/Reveal'
import { services } from '../content'

const EASE = [0.16, 1, 0.3, 1]

/** One service card: white by default, flips to charcoal on hover while the
 *  thumbnail wrap expands from width 0 to reveal the image. */
function Card({ card, delay }) {
  return (
    <Reveal dir="up" delay={delay} duration={0.75} className="svc__card">
      <div className="svc__card-top">
        <h3 className="svc__card-title">{card.title}</h3>
        <span className="svc__card-imgwrap" aria-hidden>
          <img src={card.img} alt="" loading="lazy" />
        </span>
      </div>
      <p className="svc__card-desc">{card.desc}</p>
    </Reveal>
  )
}

/** Concentric dashed rings that scale in when the stage enters view. */
function Rings() {
  const ring = (cls, delay, scaleFrom) => (
    <motion.span
      className={`svc__ring ${cls}`}
      initial={{ opacity: 0, scale: scaleFrom }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.1, ease: EASE, delay }}
      aria-hidden
    />
  )
  return (
    <>
      {ring('svc__ring--outer', 0.05, 0.8)}
      {ring('svc__ring--mid', 0.15, 0.84)}
      <motion.div
        className="svc__ring svc__ring--inner"
        initial={{ opacity: 0, scale: 0.88 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.1, ease: EASE, delay: 0.25 }}
      >
        <p className="svc__statement">
          <SplitWords text={services.statement} delay={0.5} stagger={0.03} />
        </p>
      </motion.div>
    </>
  )
}

export default function Services() {
  const [a, b, c, d] = services.cards
  return (
    <section className="svc section" id="services">
      <div className="container-lg svc__intro">
        <Reveal as="p" className="eyebrow svc__eyebrow" dir="up">
          {services.eyebrow}
        </Reveal>
        <h2 className="svc__headline">
          <SplitWords text={services.headline} />
        </h2>
      </div>

      <div className="container-lg">
        <div className="svc__stage">
          <div className="svc__col svc__col--left">
            <Card card={a} delay={0.05} />
            <Card card={b} delay={0.15} />
          </div>

          <div className="svc__center">
            <Rings />
          </div>

          <div className="svc__col svc__col--right">
            <Card card={c} delay={0.1} />
            <Card card={d} delay={0.2} />
          </div>
        </div>
      </div>
    </section>
  )
}
