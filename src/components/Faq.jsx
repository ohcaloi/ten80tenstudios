import './Faq.css'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Reveal } from '../lib/Reveal'
import { Button } from './ui/Button'
import { Plus } from './ui/Icons'
import { faq } from '../content'

const EASE = [0.25, 1, 0.5, 1]

export default function Faq() {
  const { eyebrow, headline, sub, items } = faq
  // Single-open accordion; first item open by default.
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="faq section" id="faq">
      <div className="container-lg faq__inner">
        {/* LEFT — heading block */}
        <div className="faq__left">
          <Reveal dir="up">
            <span className="eyebrow">{eyebrow}</span>
          </Reveal>
          <Reveal dir="up" delay={0.06}>
            <h2 className="faq__headline">{headline}</h2>
          </Reveal>
          <Reveal dir="up" delay={0.12}>
            <p className="faq__sub">{sub}</p>
          </Reveal>
          <Reveal dir="up" delay={0.18} className="faq__cta">
            <p className="faq__cta-line">Can&rsquo;t find your answer?</p>
            <Button label="Let's talk" href="#contact" />
          </Reveal>
        </div>

        {/* RIGHT — accordion */}
        <Reveal dir="up" delay={0.1} className="faq__right">
          {items.map((item, i) => {
            const isOpen = i === openIndex
            const panelId = `faq-panel-${i}`
            const btnId = `faq-btn-${i}`
            return (
              <div className={`faq__item${isOpen ? ' is-open' : ''}`} key={item.q}>
                <button
                  id={btnId}
                  className="faq__q"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                >
                  <span className="faq__q-text">{item.q}</span>
                  <span className="faq__icon" aria-hidden>
                    <Plus size={18} stroke={2} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={btnId}
                      className="faq__panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.42, ease: EASE }}
                    >
                      <p className="faq__a">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
