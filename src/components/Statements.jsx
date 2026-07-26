import './Statements.css'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from 'framer-motion'
import { statements } from '../content'

const EASE = [0.16, 1, 0.3, 1]

/**
 * One phrase. Its rotation, blur, scale and opacity are driven by the line's
 * own scroll position: it enters from a blurred sideways angle at the bottom,
 * comes forward and sharp through the centre, then rotates + blurs away and is
 * gone as it exits the top.
 */
function StatementRow({ item, i, hovered, setHovered, reduce }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [26, 0, -26])
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [14, 0, -14])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.88, 1, 0.88])
  const opacity = useTransform(scrollYProgress, [0, 0.22, 0.72, 1], [0, 1, 1, 0])
  const blur = useTransform(scrollYProgress, [0, 0.5, 1], [14, 0, 14])
  const filter = useMotionTemplate`blur(${blur}px)`

  const style = reduce ? undefined : { rotateX, rotateY, scale, opacity, filter }

  return (
    <div className="stm__row-perspective" ref={ref}>
      <motion.div className="stm__row-tilt" style={style}>
        <Link
          to="/service"
          className={`stm__row${hovered === i ? ' is-active' : ''}${
            hovered != null && hovered !== i ? ' is-dim' : ''
          }`}
          onMouseEnter={() => setHovered(i)}
          onFocus={() => setHovered(i)}
          onBlur={() => setHovered(null)}
        >
          {item.text}
        </Link>
      </motion.div>
    </div>
  )
}

export default function Statements() {
  const reduce = useReducedMotion()
  const [hovered, setHovered] = useState(null)
  const areaRef = useRef(null)

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
          <StatementRow
            key={it.text}
            item={it}
            i={i}
            hovered={hovered}
            setHovered={setHovered}
            reduce={reduce}
          />
        ))}

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
