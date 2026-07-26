import './Partners.css'
import { Reveal } from '../lib/Reveal'
import { Marquee } from './ui/Marquee'
import { partners } from '../content'

function ToolCard({ item }) {
  return (
    <div className="partners__card">
      <img className="partners__logo" src={item.logo} alt={item.name} loading="lazy" />
    </div>
  )
}

/** Our toolkit — scrolling marquees of tool cards that flip to black on hover
 *  (the marquee pauses on hover so a card can be targeted). */
export default function Partners() {
  const half = Math.ceil(partners.items.length / 2)
  const rowA = partners.items.slice(0, half)
  const rowB = partners.items.slice(half)

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
      </div>

      <Reveal dir="up" delay={0.1} className="partners__marquee">
        <Marquee duration={38} gap="1rem">
          {rowA.map((it) => <ToolCard key={it.name} item={it} />)}
        </Marquee>
        <Marquee duration={46} gap="1rem" reverse>
          {rowB.map((it) => <ToolCard key={it.name} item={it} />)}
        </Marquee>
      </Reveal>
    </section>
  )
}
