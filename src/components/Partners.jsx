import './Partners.css'
import { Reveal } from '../lib/Reveal'
import { Marquee } from './ui/Marquee'
import { partners } from '../content'

/** Partners / works-with logos — two opposite-direction monochrome wordmark marquees. */
export default function Partners() {
  const row = partners.logos.map((name) => (
    <span className="partners__word" key={name}>
      {name}
    </span>
  ))

  return (
    <section className="partners section" id="partners">
      <div className="container">
        <Reveal dir="up" className="partners__head">
          <span className="eyebrow">{partners.eyebrow}</span>
          <h2 className="partners__title">{partners.headline}</h2>
        </Reveal>
      </div>

      <div className="partners__rows">
        <Marquee duration={38} gap="4rem">
          {row}
        </Marquee>
        <Marquee duration={52} reverse gap="4rem">
          {row}
        </Marquee>
      </div>
    </section>
  )
}
