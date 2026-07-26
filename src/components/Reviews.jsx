import './Reviews.css'
import { Reveal, SplitWords } from '../lib/Reveal'
import { Counter } from '../lib/Counter'
import { Star } from './ui/Icons'
import { stats } from '../content'

function StarRating({ score = 5 }) {
  const pct = Math.max(0, Math.min(100, (score / 5) * 100))
  return (
    <span className="rev__stars" aria-label={`${score} out of 5`}>
      <span className="rev__stars-base">
        {Array.from({ length: 5 }, (_, i) => <Star key={i} size={16} />)}
      </span>
      <span className="rev__stars-fill" style={{ width: `${pct}%` }}>
        {Array.from({ length: 5 }, (_, i) => <Star key={i} size={16} />)}
      </span>
    </span>
  )
}

function QuoteMark() {
  return <span className="rev__quotemark" aria-hidden>&#8220;&#8220;</span>
}

function Person({ name, role, avatar, dark }) {
  return (
    <div className={`rev__person${dark ? ' rev__person--dark' : ''}`}>
      <span className="rev__avatar"><img src={avatar} alt="" loading="lazy" /></span>
      <span className="rev__person-text">
        <span className="rev__person-name">{name}</span>
        <span className="rev__person-role">{role}</span>
      </span>
    </div>
  )
}

function BigCard({ data, delay }) {
  return (
    <Reveal dir="up" delay={delay} className="rev__card rev__card--big">
      <div className="rev__stat">
        <span className="rev__stat-value"><Counter value={data.value} suffix={data.suffix} /></span>
        <span className="rev__stat-label">{data.statLabel}</span>
      </div>
      <QuoteMark />
      <blockquote className="rev__quote">“{data.quote}”</blockquote>
      <Person name={data.name} role={data.role} avatar={data.avatar} />
    </Reveal>
  )
}

function SmallCard({ data, delay }) {
  return (
    <Reveal dir="up" delay={delay} className={`rev__card rev__card--small${data.dark ? ' rev__card--dark' : ''}`}>
      <QuoteMark />
      <blockquote className="rev__quote">“{data.quote}”</blockquote>
      <Person name={data.name} role={data.role} avatar={data.avatar} dark={data.dark} />
    </Reveal>
  )
}

export default function Reviews() {
  const { headline, bar, featured, satisfaction, small, image } = stats
  return (
    <section className="rev section" id="reviews">
      <div className="container-lg">
        <Reveal dir="up" as="h2" className="rev__headline">
          <SplitWords text={headline} />
        </Reveal>

        {/* top stats bar */}
        <Reveal dir="up" delay={0.1} className="rev__bar">
          <h3 className="rev__bar-heading">{bar.heading}</h3>
          <div className="rev__bar-metric">
            <span className="rev__bar-value"><Counter value={bar.metric.value} suffix={bar.metric.suffix} /></span>
            <span className="rev__bar-label">{bar.metric.label}</span>
          </div>
          <div className="rev__bar-metric">
            <span className="rev__bar-value">{bar.rating.value}</span>
            <span className="rev__bar-rating">
              <StarRating score={bar.rating.score} />
              <span className="rev__bar-label">{bar.rating.label}</span>
            </span>
          </div>
        </Reveal>

        {/* bento grid */}
        <div className="rev__grid">
          <div className="rev__col">
            <BigCard data={featured} delay={0.05} />
            <div className="rev__row">
              <SmallCard data={small[0]} delay={0.12} />
              <SmallCard data={small[1]} delay={0.18} />
            </div>
          </div>
          <div className="rev__col">
            <BigCard data={satisfaction} delay={0.1} />
            <Reveal dir="scale" delay={0.15} className="rev__image">
              <img src={image} alt="" loading="lazy" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
