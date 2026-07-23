import './Work.css'
import { useState, useRef } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'
import { Reveal } from '../lib/Reveal'
import { ArrowUpRight } from './ui/Icons'
import { work } from '../content'

export default function Work() {
  const [hovered, setHovered] = useState(null)
  const reduce = useReducedMotion()
  const areaRef = useRef(null)

  // Cursor-follow thumbnail (desktop only)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const springCfg = { stiffness: 350, damping: 30, mass: 0.6 }
  const x = useSpring(mx, springCfg)
  const y = useSpring(my, springCfg)

  const onMove = (e) => {
    if (reduce) return
    const rect = areaRef.current?.getBoundingClientRect()
    if (!rect) return
    mx.set(e.clientX - rect.left)
    my.set(e.clientY - rect.top)
  }

  const active = hovered != null ? work.projects[hovered] : null

  return (
    <section className="work section" id="work">
      <div className="container-lg">
        {/* Header */}
        <div className="work__head">
          <Reveal dir="up" className="work__eyebrow-row">
            <span className="eyebrow">{work.eyebrow}</span>
          </Reveal>

          <div className="work__title-row">
            <Reveal dir="up" as="h2" className="work__title">
              Featured work
              <span className="work__badge" aria-hidden>
                <BadgeStar reduce={reduce} />
              </span>
            </Reveal>
            <Reveal dir="up" delay={0.1} className="work__lead">
              {work.headline}
            </Reveal>
          </div>
        </div>

        {/* Project list */}
        <div
          className="work__list"
          ref={areaRef}
          onMouseMove={onMove}
          onMouseLeave={() => setHovered(null)}
        >
          {work.projects.map((p, i) => (
            <Reveal
              key={p.name}
              dir="up"
              delay={i * 0.08}
              as="a"
              href="/portfolio"
              className={`work__row${hovered === i ? ' is-active' : ''}${hovered != null && hovered !== i ? ' is-dim' : ''}`}
              onMouseEnter={() => setHovered(i)}
              onFocus={() => setHovered(i)}
              onBlur={() => setHovered(null)}
            >
              {/* Inline thumb (tablet/mobile) */}
              <span className="work__thumb-inline" aria-hidden>
                <img src={p.img} alt="" loading="lazy" />
              </span>

              <span className="work__name">{p.name}</span>

              <span className="work__meta">
                <span className="work__tag">{p.tag}</span>
                <span className="work__year">{p.year}</span>
              </span>

              <span className="work__arrow" aria-hidden>
                <ArrowUpRight size={22} />
              </span>
            </Reveal>
          ))}

          {/* Cursor-follow floating thumbnail (desktop) */}
          {!reduce && (
            <motion.div
              className="work__cursor"
              style={{ x, y }}
              initial={false}
              animate={{
                opacity: active ? 1 : 0,
                scale: active ? 1 : 0.7,
              }}
              transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
              aria-hidden
            >
              <div className="work__cursor-inner">
                {work.projects.map((p, i) => (
                  <img
                    key={p.name}
                    src={p.img}
                    alt=""
                    className={hovered === i ? 'is-shown' : ''}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

function BadgeStar({ reduce }) {
  return (
    <motion.svg
      width="100%"
      height="100%"
      viewBox="0 0 48 48"
      fill="none"
      animate={reduce ? {} : { rotate: 360 }}
      transition={{ duration: 12, ease: 'linear', repeat: Infinity }}
    >
      <path
        d="M24 2c1.6 8.4 5.2 12 13.6 13.6-8.4 1.6-12 5.2-13.6 13.6C22.4 20.8 18.8 17.2 10.4 15.6 18.8 14 22.4 10.4 24 2Z"
        transform="translate(0 8)"
        fill="var(--accent)"
      />
    </motion.svg>
  )
}
