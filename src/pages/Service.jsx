import './Service.css'
import { Reveal, SplitWords } from '../lib/Reveal'
import { Marquee } from '../components/ui/Marquee'
import { ArrowUpRight, Star } from '../components/ui/Icons'
import { Button } from '../components/ui/Button'
import { Link } from 'react-router-dom'
import Pricing from '../components/Pricing'
import Cta from '../components/Cta'
import { servicePage } from '../content'

export default function Service() {
  const { hero, headline, pillars, trust, list } = servicePage

  return (
    <div className="svp">
      {/* 1 — HERO */}
      <section className="svp-hero">
        <div className="container-lg svp-hero__inner">
          <Reveal as="span" dir="up" className="eyebrow svp-hero__eyebrow">
            What we offer
          </Reveal>

          <h1 className="svp-hero__title">
            <SplitWords text={hero.title} stagger={0.08} duration={0.9} />
          </h1>

          <div className="svp-hero__foot">
            <Reveal dir="up" delay={0.25} as="p" className="svp-hero__intro">
              {hero.intro}
            </Reveal>
            <Reveal dir="up" delay={0.35} className="svp-hero__cta">
              <Button label="Let's talk" href="/contact" variant="accent" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2 — HEADLINE + PILLARS */}
      <section className="svp-pillars section">
        <div className="container-lg">
          <div className="svp-pillars__head">
            <Reveal as="span" dir="up" className="eyebrow">
              Why Ten80Ten
            </Reveal>
            <h2 className="svp-pillars__headline">
              <SplitWords text={headline} stagger={0.04} />
            </h2>
          </div>

          <div className="svp-pillars__grid">
            {pillars.map((p, i) => (
              <Reveal key={p.title} dir="up" delay={i * 0.1} className="svp-pillar">
                <span className="svp-pillar__num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="svp-pillar__title">{p.title}</h3>
                <p className="svp-pillar__desc">{p.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — TRUST MARQUEE (dark) */}
      <section className="svp-trust" aria-label={trust}>
        <Marquee duration={30} gap="0">
          {[0, 1, 2].map((k) => (
            <span className="svp-trust__group" key={k}>
              <span className="svp-trust__phrase">{trust}</span>
              <span className="svp-trust__star" aria-hidden>
                <Star size={34} />
              </span>
            </span>
          ))}
        </Marquee>
      </section>

      {/* 4 — SERVICE LIST */}
      <section className="svp-list section">
        <div className="container-lg">
          <Reveal as="span" dir="up" className="eyebrow svp-list__eyebrow">
            Our services
          </Reveal>

          <div className="svp-list__items">
            {list.map((item, i) => (
              <Reveal key={item.num} dir="up" delay={0.05} className="svp-item">
                <div className="svp-item__text">
                  <span className="svp-item__num">{item.num}</span>
                  <h3 className="svp-item__title">{item.title}</h3>
                  <p className="svp-item__desc">{item.desc}</p>
                  <Link to="/portfolio" className="svp-item__link">
                    <span>View more</span>
                    <span className="svp-item__chip" aria-hidden>
                      <ArrowUpRight size={16} />
                    </span>
                  </Link>
                </div>

                <Link to="/portfolio" className="svp-item__media" aria-label={`${item.title} — view more`}>
                  <img src={item.img} alt={item.title} loading="lazy" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — PRICING */}
      <Pricing />

      {/* 6 — CTA */}
      <Cta />
    </div>
  )
}
