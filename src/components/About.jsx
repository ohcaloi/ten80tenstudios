import './About.css'
import { Reveal } from '../lib/Reveal'
import { Counter } from '../lib/Counter'
import { Button } from './ui/Button'
import { about } from '../content'

/** About — big heading, vertical eyebrow, two-tone quote, CTA + stat, tall photo. */
export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container-lg about__grid">
        <div className="about__left">
          <Reveal dir="up" as="h2" className="about__headline">
            {about.headline}
          </Reveal>

          <div className="about__block">
            <span className="about__eyebrow">{about.eyebrow}</span>

            <div className="about__content">
              <Reveal dir="up" as="blockquote" className="about__quote">
                <span className="about__quote-strong">“{about.quoteStrong}</span>
                <span className="about__quote-muted">{about.quoteMuted}”</span>
              </Reveal>

              <Reveal dir="up" delay={0.1} className="about__cta">
                <Button label={about.cta.label} href={about.cta.href} variant="" className="btn--talk" />
              </Reveal>

              <Reveal dir="up" delay={0.16} className="about__stat">
                <span className="about__stat-value">
                  <Counter value={about.stat.value} />
                  <sup className="about__stat-plus">{about.stat.suffix}</sup>
                </span>
                <span className="about__stat-label">{about.stat.label}</span>
              </Reveal>
            </div>
          </div>
        </div>

        <Reveal dir="scale" delay={0.1} className="about__media">
          <img src={about.img} alt="" loading="lazy" />
        </Reveal>
      </div>
    </section>
  )
}
