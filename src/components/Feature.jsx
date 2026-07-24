import './Feature.css'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Reveal } from '../lib/Reveal'
import { feature, asset } from '../content'

const EASE = [0.25, 1, 0.5, 1]

const PORTRAITS = [
  { src: '/img/tpl/693a8f9ec144c3445fbf9d4a_vertora-portfolio-potrait-image-one.webp', className: 'feature__portrait feature__portrait--tl', rot: -7, dur: 6 },
  { src: '/img/tpl/693a8ffd1c34776fe58fe717_vertora-portfolio-potrait-image-two.webp', className: 'feature__portrait feature__portrait--tr', rot: 6, dur: 7 },
  { src: '/img/tpl/693a9084c54c759302a46c3d_vertora-portfolio-potrait-image-three.webp', className: 'feature__portrait feature__portrait--bl', rot: 5, dur: 6.5 },
  { src: '/img/tpl/693a90b74776d0df57d7bde1_vertora-portfolio-potrait-image-four.webp', className: 'feature__portrait feature__portrait--br', rot: -6, dur: 7.5 },
]

/** Detect prefers-reduced-motion (SSR-safe). */
function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(mq.matches)
    update()
    mq.addEventListener?.('change', update)
    return () => mq.removeEventListener?.('change', update)
  }, [])
  return reduced
}

export default function Feature() {
  const reduced = usePrefersReducedMotion()
  const lines = feature.rotate
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (reduced) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % lines.length)
    }, 3000)
    return () => clearInterval(id)
  }, [reduced, lines.length])

  return (
    <section className="feature section" id="feature">
      <div className="container-lg feature__inner">
        <Reveal dir="up" as="p" className="eyebrow feature__eyebrow">
          {feature.eyebrow}
        </Reveal>

        <div className="feature__stage">
          {/* Floating portrait images */}
          {PORTRAITS.map((p, i) => (
            <motion.img
              key={i}
              src={asset(p.src)}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className={p.className}
              style={{ rotate: `${p.rot}deg` }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.1, ease: EASE }}
              {...(reduced
                ? {}
                : {
                    animate: { y: [0, -14, 0] },
                    transition: { y: { duration: p.dur, repeat: Infinity, ease: 'easeInOut' } },
                  })}
            />
          ))}

          {/* Rotating statement */}
          <div className="feature__statement" aria-live="polite">
            <AnimatePresence mode="wait" initial={false}>
              <motion.h2
                key={reduced ? 0 : index}
                className="feature__line"
                initial={reduced ? false : { y: '110%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                exit={reduced ? { opacity: 0 } : { y: '-110%', opacity: 0 }}
                transition={{ duration: 0.7, ease: EASE }}
              >
                {reduced ? lines[0] : lines[index]}
              </motion.h2>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
