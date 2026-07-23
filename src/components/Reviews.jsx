import './Reviews.css'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Reveal } from '../lib/Reveal'
import { Counter } from '../lib/Counter'
import { Star, ArrowRight } from './ui/Icons'
import { stats } from '../content'

const AUTO_MS = 5000

/** rt-review-v1 — Outcomes stat row + testimonial slider + big inverted stat. */
export default function Reviews() {
  const slides = stats.testimonials
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState(1)

  const go = (next) => {
    setDir(next > index || (index === slides.length - 1 && next === 0) ? 1 : -1)
    setIndex((next + slides.length) % slides.length)
  }
  const prev = () => { setDir(-1); setIndex((i) => (i - 1 + slides.length) % slides.length) }
  const next = () => { setDir(1); setIndex((i) => (i + 1) % slides.length) }

  useEffect(() => {
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const id = setInterval(() => {
      setDir(1)
      setIndex((i) => (i + 1) % slides.length)
    }, AUTO_MS)
    return () => clearInterval(id)
  }, [slides.length])

  const active = slides[index]

  return (
    <section className="reviews section" id="reviews">
      <div className="container-lg">
        {/* TOP — eyebrow + headline */}
        <div className="reviews__head">
          <Reveal dir="up" as="span" className="reviews__eyebrow eyebrow">
            {stats.eyebrow}
          </Reveal>
          <Reveal dir="up" delay={0.08} as="h2" className="reviews__headline">
            {stats.headline}
          </Reveal>
        </div>

        {/* STAT ROW — 3 counters */}
        <Reveal dir="up" delay={0.08} className="reviews__stats">
          {stats.items.map((item, i) => (
            <div className="reviews__stat" key={i}>
              <span className="reviews__stat-value">
                <Counter value={item.value} suffix={item.suffix} />
              </span>
              <span className="reviews__stat-label">{item.label}</span>
            </div>
          ))}
        </Reveal>

        {/* BOTTOM — slider + big stat */}
        <div className="reviews__bottom">
          <Reveal dir="up" className="reviews__slider">
            <div className="reviews__slider-stage">
              <AnimatePresence mode="wait" initial={false} custom={dir}>
                <motion.div
                  key={index}
                  className="reviews__slide"
                  custom={dir}
                  initial={{ opacity: 0, x: dir * 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: dir * -40 }}
                  transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
                >
                  <div className="reviews__stars" aria-hidden>
                    {Array.from({ length: 5 }, (_, s) => (
                      <Star key={s} size={18} />
                    ))}
                  </div>
                  <blockquote className="reviews__quote">{active.quote}</blockquote>
                  <div className="reviews__meta">
                    <span className="reviews__role">{active.role}</span>
                    <span className="reviews__tag">{active.tag}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="reviews__controls">
              <div className="reviews__dots" role="tablist" aria-label="Testimonials">
                {slides.map((_, d) => (
                  <button
                    key={d}
                    type="button"
                    className={'reviews__dot' + (d === index ? ' is-active' : '')}
                    aria-label={`Go to testimonial ${d + 1}`}
                    aria-selected={d === index}
                    role="tab"
                    onClick={() => go(d)}
                  />
                ))}
              </div>
              <div className="reviews__arrows">
                <button
                  type="button"
                  className="reviews__arrow reviews__arrow--prev"
                  aria-label="Previous testimonial"
                  onClick={prev}
                >
                  <ArrowRight size={18} />
                </button>
                <button
                  type="button"
                  className="reviews__arrow"
                  aria-label="Next testimonial"
                  onClick={next}
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </Reveal>

          {/* BIG STAT — inverted black panel */}
          <Reveal dir="scale" delay={0.1} className="reviews__big">
            <span className="reviews__big-value">
              <Counter value={stats.big.value} suffix={stats.big.suffix} />
            </span>
            <span className="reviews__big-label">{stats.big.label}</span>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
