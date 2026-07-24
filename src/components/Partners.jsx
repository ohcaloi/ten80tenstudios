import './Partners.css'
import { Reveal } from '../lib/Reveal'
import { partners } from '../content'

/** Partners — 4×2 grid of logo cards that invert to black on hover. */
export default function Partners() {
  return (
    <section className="partners section" id="partners">
      <div className="container-lg">
        <div className="partners__head">
          <Reveal dir="up" as="span" className="eyebrow partners__eyebrow">
            {partners.eyebrow}
          </Reveal>
          <Reveal dir="up" delay={0.08} as="h2" className="partners__title">
            {partners.headline}
          </Reveal>
        </div>

        <div className="partners__grid">
          {partners.items.map((p, i) => (
            <Reveal
              key={p.name}
              dir="up"
              delay={(i % 4) * 0.06 + Math.floor(i / 4) * 0.08}
              className="partners__card"
            >
              <img className="partners__logo" src={p.logo} alt="" loading="lazy" />
              <span className="partners__name">{p.name}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
