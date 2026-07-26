import './Statements.css'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'
import { statements } from '../content'

const EASE = [0.16, 1, 0.3, 1]

export default function Statements() {
  const reduce = useReducedMotion()
  const [hovered, setHovered] = useState(null)
  const areaRef = useRef(null)

  // cursor-following thumbnail (desktop)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const cfg = { stiffness: 350, damping: 30, mass: 0.6 }
  const x = useSpring(mx, cfg)
  const y = useSpring(my, cfg)

  const onMove = (e) => {
    if (reduce) return
    const rect = areaRef.current?.getBoundingClientRect()
    if (!rect) return
    mx.set(e.clientX - rect.left)
    my.set(e.clientY - rect.top)
  }

  return (
    <section className="stm section" id="statements">
      <div
        className="container-lg stm__list"
        ref={areaRef}
        onMouseMove={onMove}
        onMouseLeave={() => setHovered(null)}
      >
        {statements.items.map((it, i) => (
          <div className="stm__row-perspective" key={it.text}>
            <motion.div
              className="stm__row-tilt"
              initial={reduce ? { opacity: 0 } : { opacity: 0, rotateX: 55, y: 30 }}
              whileInView={reduce ? { opacity: 1 } : { opacity: 1, rotateX: 0, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              <Link
                to="/service"
                className={`stm__row${hovered === i ? ' is-active' : ''}${
                  hovered != null && hovered !== i ? ' is-dim' : ''
                }`}
                onMouseEnter={() => setHovered(i)}
                onFocus={() => setHovered(i)}
                onBlur={() => setHovered(null)}
              >
                {it.text}
              </Link>
            </motion.div>
          </div>
        ))}

        {/* cursor-following image revealed on hover (desktop) */}
        {!reduce && (
          <motion.div
            className="stm__cursor"
            style={{ x, y }}
            initial={false}
            animate={{ opacity: hovered != null ? 1 : 0, scale: hovered != null ? 1 : 0.7 }}
            transition={{ duration: 0.35, ease: EASE }}
            aria-hidden
          >
            <div className="stm__cursor-inner">
              {statements.items.map((it, i) => (
                <img
                  key={it.text}
                  src={it.img}
                  alt=""
                  className={hovered === i ? 'is-shown' : ''}
                  loading="lazy"
                />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
