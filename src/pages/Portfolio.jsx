import './Portfolio.css'
import { Link } from 'react-router-dom'
import { Reveal, SplitWords } from '../lib/Reveal'
import { Marquee } from '../components/ui/Marquee'
import { ArrowUpRight } from '../components/ui/Icons'
import Cta from '../components/Cta'
import { portfolioPage } from '../content'

export default function Portfolio() {
  const { hero, projects } = portfolioPage
  // Repeat the ticker word enough times to fill the marquee track.
  const tickerItems = Array.from({ length: 6 }, (_, i) => i)

  return (
    <div className="pf">
      {/* 1 — HERO */}
      <section className="pf-hero">
        <div className="container-lg">
          <Reveal as="span" dir="up" className="eyebrow pf-hero__eyebrow">
            Selected work · 2025
          </Reveal>
          <h1 className="pf-hero__title">
            <SplitWords text={hero.title} stagger={0.08} />
          </h1>
          <Reveal as="p" dir="up" delay={0.2} className="pf-hero__lead">
            A showcase of brands, products and digital experiences shaped end
            to end by Ten80Ten Studios.
          </Reveal>
        </div>

        <Reveal dir="none" delay={0.15} duration={1} className="pf-hero__ticker">
          <Marquee duration={26} gap="0" className="pf-ticker">
            {tickerItems.map((i) => (
              <span className="pf-ticker__item" key={i}>
                <span className="pf-ticker__text">{hero.ticker}</span>
                <span className="pf-ticker__sep" aria-hidden>—</span>
              </span>
            ))}
          </Marquee>
        </Reveal>
      </section>

      {/* 2 — PROJECTS (editorial staggered grid) */}
      <section className="pf-work section">
        <div className="container-lg">
          <div className="pf-grid">
            {projects.map((p, i) => {
              const num = String(i + 1).padStart(2, '0')
              return (
                <Reveal
                  key={p.slug}
                  dir="up"
                  delay={(i % 2) * 0.08}
                  duration={0.85}
                  className={`pf-card pf-card--${i % 2 === 0 ? 'a' : 'b'}`}
                >
                  <Link to="/portfolio" className="pf-card__link">
                    <div className="pf-card__media">
                      <span className="pf-card__num">{num}</span>
                      <img
                        className="pf-card__img"
                        src={p.img}
                        alt={p.name}
                        loading="lazy"
                      />
                    </div>

                    <div className="pf-card__body">
                      <div className="pf-card__row">
                        <h2 className="pf-card__name">{p.name}</h2>
                        <span className="pf-card__year">{p.year}</span>
                      </div>
                      <span className="eyebrow pf-card__tag">{p.tag}</span>
                      <p className="pf-card__desc">{p.desc}</p>
                      <span className="pf-card__more">
                        View more
                        <span className="pf-card__arrow" aria-hidden>
                          <ArrowUpRight size={16} />
                        </span>
                      </span>
                    </div>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <Cta />
    </div>
  )
}
