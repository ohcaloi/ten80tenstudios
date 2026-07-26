import './Capabilities.css'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Reveal } from '../lib/Reveal'
import { Button } from './ui/Button'
import { ArrowRight } from './ui/Icons'
import { capabilities } from '../content'

/**
 * Full-service creative — scroll-driven list (Vertora rt-service-v1).
 * Left column is sticky (image + caption); as each numbered row on the
 * right crosses the viewport centre it becomes the active black pill and
 * the left image cross-fades to match. IntersectionObserver, not clicks.
 */
export default function Capabilities() {
  const { eyebrow, headline, caption, cta, items } = capabilities
  const [active, setActive] = useState(0)
  const listRef = useRef(null)

  useEffect(() => {
    const rows = listRef.current?.querySelectorAll('.caps__row')
    if (!rows?.length) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number(e.target.dataset.i))
        })
      },
      { rootMargin: '-48% 0px -48% 0px', threshold: 0 }
    )
    rows.forEach((r) => io.observe(r))
    return () => io.disconnect()
  }, [])

  return (
    <section className="caps section" id="capabilities">
      <div className="container-lg">
        {/* Header: heading + CTA */}
        <div className="caps__top">
          <Reveal dir="up" as="h2" className="caps__headline">{headline}</Reveal>
          <Reveal dir="up" delay={0.1} className="caps__cta">
            <Button label={cta.label} href={cta.href} variant="accent" />
          </Reveal>
        </div>

        <div className="caps__body">
          {/* Sticky left: swapping image + caption */}
          <div className="caps__left">
            <div className="caps__media">
              {items.map((it, i) => (
                <img
                  key={it.label}
                  src={it.img}
                  alt=""
                  loading="lazy"
                  className={`caps__img${i === active ? ' is-active' : ''}`}
                />
              ))}
            </div>
            <p className="caps__caption">
              <span className="eyebrow caps__eyebrow">{eyebrow}</span>
              {caption}
            </p>
          </div>

          {/* Right: numbered rows */}
          <div className="caps__list" ref={listRef}>
            {items.map((it, i) => {
              const num = String(i + 1).padStart(2, '0')
              return (
                <Link
                  to="/service"
                  key={it.label}
                  data-i={i}
                  className={`caps__row${i === active ? ' is-active' : ''}`}
                  onMouseEnter={() => setActive(i)}
                >
                  <span className="caps__num">({num})</span>
                  <span className="caps__label">{it.label}</span>
                  <span className="caps__arrow" aria-hidden><ArrowRight size={22} /></span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
