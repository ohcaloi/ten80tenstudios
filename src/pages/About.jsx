import './About.css'
import { Reveal, SplitWords } from '../lib/Reveal'
import { Counter } from '../lib/Counter'
import { ArrowUpRight } from '../components/ui/Icons'
import Cta from '../components/Cta'
import { aboutPage, img } from '../content'

export default function About() {
  const { hero, stats, statement, capabilities, awardsTitle, awards, team } = aboutPage

  return (
    <div className="abt">
      {/* 1 — HERO */}
      <section className="abt-hero">
        <div className="container-lg">
          <div className="abt-hero__meta">
            <Reveal as="span" dir="up" className="abt-chip">{hero.since}</Reveal>
            <Reveal as="span" dir="up" delay={0.06} className="abt-chip">{hero.place}</Reveal>
          </div>

          <h1 className="abt-hero__title">
            <span className="abt-hero__line">
              <SplitWords text={hero.title} stagger={0.07} />
            </span>
            <span className="abt-hero__line abt-hero__line--accent">
              <SplitWords text={hero.titleAccent} delay={0.12} stagger={0.05} />
            </span>
          </h1>

          <div className="abt-hero__intro-wrap">
            <Reveal as="p" dir="up" delay={0.25} className="abt-hero__intro">
              {hero.intro}
            </Reveal>
          </div>

          <Reveal dir="scale" delay={0.15} duration={0.9} className="abt-hero__media">
            <img className="abt-hero__img" src={img.aboutHero} alt="Ten80Ten Studios at work" loading="lazy" />
          </Reveal>
        </div>
      </section>

      {/* 2 — STATS */}
      <section className="abt-stats">
        <div className="container-lg">
          <div className="abt-stats__grid">
            {stats.map((s, i) => (
              <Reveal key={i} dir="up" delay={i * 0.1} className="abt-stat">
                <span className="abt-stat__value">
                  <Counter value={s.value} suffix={s.suffix} />
                </span>
                <p className="abt-stat__label">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — STATEMENT + CAPABILITIES (dark) */}
      <section className="abt-statement">
        <div className="container-lg">
          <div className="abt-statement__panel">
            <Reveal as="span" dir="up" className="eyebrow abt-statement__eyebrow">What we do</Reveal>
            <h2 className="abt-statement__head">
              <SplitWords text={statement} stagger={0.035} />
            </h2>

            <ol className="abt-caps">
              {capabilities.map((c, i) => {
                const num = String(i + 1).padStart(2, '0')
                return (
                  <Reveal as="li" key={c} dir="up" delay={i * 0.05} className="abt-caps__row">
                    <span className="abt-caps__num">{num}</span>
                    <span className="abt-caps__label">{c}</span>
                  </Reveal>
                )
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* 4 — AWARDS */}
      <section className="abt-awards">
        <div className="container-lg">
          <div className="abt-awards__grid">
            <div className="abt-awards__head">
              <Reveal as="span" dir="up" className="eyebrow">Recognition</Reveal>
              <Reveal as="h2" dir="up" delay={0.08} className="abt-awards__title">
                {awardsTitle}
              </Reveal>
            </div>

            <ul className="abt-awards__list">
              {awards.map((a, i) => (
                <Reveal as="li" key={i} dir="up" delay={i * 0.06} className="abt-award">
                  <span className="abt-award__year">{a.year}</span>
                  <span className="abt-award__name">{a.name}</span>
                  <span className="abt-award__note">{a.note}</span>
                  <span className="abt-award__icon" aria-hidden><ArrowUpRight size={18} /></span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5 — TEAM */}
      <section className="abt-team">
        <div className="container-lg">
          <div className="abt-team__head">
            <Reveal as="span" dir="up" className="eyebrow">The team</Reveal>
            <Reveal as="h2" dir="up" delay={0.08} className="abt-team__title">
              The specialists behind the work
            </Reveal>
          </div>

          <div className="abt-team__grid">
            {team.map((m, i) => (
              <Reveal key={m.name} dir="up" delay={i * 0.1} className="abt-member">
                <div className="abt-member__media">
                  <img className="abt-member__img" src={m.img} alt={m.name} loading="lazy" />
                </div>
                <div className="abt-member__body">
                  <h3 className="abt-member__name">{m.name}</h3>
                  <span className="abt-member__role">{m.role}</span>
                  <div className="abt-member__skills">
                    {m.skills.map((sk) => (
                      <span className="abt-member__chip" key={sk}>{sk}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Cta />
    </div>
  )
}
