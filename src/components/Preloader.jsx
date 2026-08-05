import './Preloader.css'
import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { asset } from '../content'

const EASE = [0.76, 0, 0.24, 1]

// decorative floating "+" marks (Trionn signature)
const PLUSES = [
  { top: '18%', left: '12%', d: 0 }, { top: '26%', left: '82%', d: 0.4 },
  { top: '68%', left: '20%', d: 0.8 }, { top: '74%', left: '76%', d: 0.2 },
  { top: '44%', left: '90%', d: 0.6 }, { top: '52%', left: '6%', d: 1 },
]

export default function Preloader({ onComplete }) {
  const reduce = useReducedMotion()
  const [count, setCount] = useState(0)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    const timers = []
    if (reduce) {
      timers.push(setTimeout(onComplete, 400))
      return () => timers.forEach(clearTimeout)
    }
    // count 0 → 100 (setInterval, not rAF, so it always runs)
    let c = 0
    const iv = setInterval(() => {
      c = Math.min(100, c + (c < 80 ? Math.ceil(Math.random() * 7) + 2 : 3))
      setCount(c)
      if (c >= 100) {
        clearInterval(iv)
        // hold on full colour, start the wipe (CSS), then unmount via timeout
        timers.push(setTimeout(() => setExiting(true), 600))
        timers.push(setTimeout(onComplete, 600 + 950))
      }
    }, 85)
    return () => { clearInterval(iv); timers.forEach(clearTimeout) }
  }, [reduce, onComplete])

  const gray = 1 - count / 100 // 1 = b&w, 0 = full colour

  return (
    <div className={`preloader${exiting ? ' preloader--exit' : ''}`} aria-hidden>
      {/* floating plus marks */}
      {!reduce && PLUSES.map((p, i) => (
        <motion.span
          key={i}
          className="preloader__plus"
          style={{ top: p.top, left: p.left }}
          animate={{ y: [0, -14, 0], opacity: [0.25, 0.6, 0.25] }}
          transition={{ duration: 4 + p.d, repeat: Infinity, ease: 'easeInOut', delay: p.d }}
        >+</motion.span>
      ))}

      <div className="preloader__center">
        <motion.img
          className="preloader__logo"
          src={asset('/img/ten80ten-mark-512.png')}
          alt="Ten80Ten Studios"
          style={{ filter: `grayscale(${gray}) brightness(${0.7 + (1 - gray) * 0.3})`, scale: 0.9 + (1 - gray) * 0.1 }}
        />
        <span className="preloader__word">Ten80Ten Studios</span>
        <span className="preloader__tag">Design · Motion · Storytelling</span>
      </div>

      {/* progress: counter + bar */}
      <div className="preloader__foot">
        <span className="preloader__count">{count}<sup>%</sup></span>
        <span className="preloader__bar"><span className="preloader__bar-fill" style={{ width: `${count}%` }} /></span>
      </div>
    </div>
  )
}
