import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

/**
 * Slot-machine number reel — each digit column scrolls 0..9 and lands on target.
 * Mirrors Vertora's animated stat counters.
 */
export function Counter({ value, duration = 1.6, className, suffix = '', prefix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const digits = String(value).split('')
  return (
    <span ref={ref} className={className} style={{ display: 'inline-flex', alignItems: 'baseline' }}>
      {prefix}
      {digits.map((d, i) =>
        /\d/.test(d)
          ? <Digit key={i} target={Number(d)} play={inView} duration={duration} index={i} />
          : <span key={i}>{d}</span>
      )}
      {suffix}
    </span>
  )
}

function Digit({ target, play, duration, index }) {
  const [h, setH] = useState(0)
  const measure = useRef(null)
  useEffect(() => { if (measure.current) setH(measure.current.offsetHeight) }, [])
  const cycles = 1 // one extra spin before landing
  const finalY = -(cycles * 10 + target) * h
  return (
    <span style={{ display: 'inline-block', height: h || '1em', overflow: 'hidden', lineHeight: 1 }}>
      <span ref={measure} style={{ visibility: h ? 'hidden' : 'visible', position: h ? 'absolute' : 'static' }}>0</span>
      {h > 0 && (
        <motion.span
          style={{ display: 'flex', flexDirection: 'column' }}
          initial={{ y: 0 }}
          animate={play ? { y: finalY } : { y: 0 }}
          transition={{ duration, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
        >
          {Array.from({ length: cycles * 10 + target + 1 }, (_, n) => (
            <span key={n} style={{ height: h }}>{n % 10}</span>
          ))}
        </motion.span>
      )}
    </span>
  )
}
