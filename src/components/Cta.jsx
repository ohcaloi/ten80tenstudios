import './Cta.css'
import { Reveal, SplitWords } from '../lib/Reveal'
import { Button } from './ui/Button'
import { cta } from '../content'

/** Full-bleed CTA panel: black rounded card with an accent radial glow. */
export default function Cta() {
  return (
    <section className="cta" id="contact">
      <div className="cta-outer">
        <Reveal dir="scale" className="cta-panel" duration={0.9}>
          <div className="cta-glow" aria-hidden />
          <div className="cta-content">
            <Reveal as="p" dir="up" className="cta-eyebrow eyebrow">
              {cta.eyebrow}
            </Reveal>
            <h2 className="cta-headline">
              <SplitWords text={cta.headline} stagger={0.05} />
            </h2>
            <Reveal dir="up" delay={0.15} className="cta-action">
              <Button label={cta.button.label} href={cta.button.href} variant="light" />
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
