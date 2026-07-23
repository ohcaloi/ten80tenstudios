import './About.css'
import { Reveal } from '../lib/Reveal'
import { Counter } from '../lib/Counter'
import { Button } from './ui/Button'
import { about, brand } from '../content'

const IMG = '/img/tpl/6927fa39f319ce7615bbb20b_vertora-about-section-image.webp'

/** rt-about-v1 — About + animated counter. Two-column: pull-quote left, image card + stat right. */
export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container-lg">
        <div className="about__grid">
          <div className="about__left">
            <Reveal dir="up" as="span" className="about__eyebrow eyebrow">
              {about.eyebrow}
            </Reveal>

            <Reveal dir="up" delay={0.08} as="h2" className="about__quote">
              {about.quote}
            </Reveal>

            <Reveal dir="up" delay={0.16} as="p" className="about__body">
              {about.body}
            </Reveal>

            <Reveal dir="up" delay={0.24} className="about__cta">
              <Button label={brand.cta.label} href={brand.cta.href} variant="" />
            </Reveal>
          </div>

          <Reveal dir="scale" delay={0.1} className="about__right">
            <div className="about__card">
              <img className="about__img" src={IMG} alt="A specialist running the system" loading="lazy" />
              <div className="about__stat">
                <span className="about__stat-value">
                  <Counter value={about.stat.value} suffix={about.stat.suffix} />
                </span>
                <span className="about__stat-label">{about.stat.label}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
