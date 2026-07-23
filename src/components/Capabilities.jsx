import './Capabilities.css'
import { motion } from 'framer-motion'
import { Reveal } from '../lib/Reveal'
import { Marquee } from './ui/Marquee'
import { ArrowUpRight } from './ui/Icons'
import { capabilities } from '../content'

const EASE = [0.25, 1, 0.5, 1]

function MarqueeBand({ items }) {
  const row = items.map((word, i) => (
    <span className="caps-mq__item" key={i}>
      <span className="caps-mq__word">{word}</span>
      <span className="caps-mq__star" aria-hidden>✳</span>
    </span>
  ))
  return (
    <div className="caps-mq" aria-hidden>
      <Marquee duration={38} gap="0rem">
        <div className="caps-mq__row">{row}</div>
      </Marquee>
    </div>
  )
}

export default function Capabilities() {
  const { eyebrow, headline, list, marquee } = capabilities

  return (
    <section className="caps section" id="capabilities">
      {/* Full-bleed inverted marquee band */}
      <MarqueeBand items={marquee} />

      <div className="container-lg caps__inner">
        <div className="caps__grid">
          {/* LEFT — eyebrow + headline */}
          <div className="caps__intro">
            <Reveal dir="up">
              <span className="eyebrow">{eyebrow}</span>
            </Reveal>
            <Reveal dir="up" delay={0.08}>
              <h2 className="caps__headline">{headline}</h2>
            </Reveal>
          </div>

          {/* RIGHT — numbered capability list */}
          <ol className="caps__list">
            {list.map((item, i) => {
              const num = String(i + 1).padStart(2, '0')
              return (
                <Reveal
                  as="li"
                  key={item}
                  dir="up"
                  delay={i * 0.07}
                  className="caps__row"
                >
                  <a className="caps__link" href="#services">
                    <span className="caps__index">({num})</span>
                    <span className="caps__label">{item}</span>
                    <motion.span
                      className="caps__arrow"
                      aria-hidden
                      whileHover={{ rotate: 0 }}
                    >
                      <ArrowUpRight size={26} stroke={1.75} />
                    </motion.span>
                  </a>
                </Reveal>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
