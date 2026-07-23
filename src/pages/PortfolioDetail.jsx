import { useParams, Link, Navigate } from 'react-router-dom'
import { Reveal, SplitWords } from '../lib/Reveal'
import { Counter } from '../lib/Counter'
import { ArrowUpRight, ArrowRight } from '../components/ui/Icons'
import Cta from '../components/Cta'
import { getProject, portfolioPage } from '../content'
import './PortfolioDetail.css'

export default function PortfolioDetail() {
  const { slug } = useParams()
  const project = getProject(slug)
  if (!project) return <Navigate to="/portfolio" replace />

  const idx = portfolioPage.projects.findIndex((p) => p.slug === slug)
  const next = portfolioPage.projects[(idx + 1) % portfolioPage.projects.length]

  return (
    <div className="pd">
      {/* HERO */}
      <section className="pd-hero">
        <div className="container-lg">
          <Reveal as="div" dir="up" className="pd-hero__top">
            <Link to="/portfolio" className="pd-back">
              <ArrowUpRight size={15} /> All projects
            </Link>
            <span className="eyebrow pd-hero__tag">{project.tag}</span>
          </Reveal>

          <h1 className="pd-hero__title">
            <SplitWords text={project.name} />
          </h1>

          <Reveal as="p" dir="up" delay={0.1} className="pd-hero__desc">
            {project.desc}
          </Reveal>

          <Reveal dir="up" delay={0.16} className="pd-meta">
            <div className="pd-meta__item">
              <span className="pd-meta__label">Client</span>
              <span className="pd-meta__value">{project.client}</span>
            </div>
            <div className="pd-meta__item">
              <span className="pd-meta__label">Discipline</span>
              <span className="pd-meta__value">{project.discipline}</span>
            </div>
            <div className="pd-meta__item">
              <span className="pd-meta__label">Year</span>
              <span className="pd-meta__value">{project.year}</span>
            </div>
            <div className="pd-meta__item">
              <span className="pd-meta__label">Location</span>
              <span className="pd-meta__value">{project.location}</span>
            </div>
          </Reveal>
        </div>

        <Reveal dir="scale" delay={0.1} className="pd-hero__media container-lg">
          <img src={project.img} alt={project.name} />
        </Reveal>
      </section>

      {/* OVERVIEW + SERVICES */}
      <section className="pd-overview section">
        <div className="container-lg pd-overview__grid">
          <div className="pd-overview__left">
            <span className="eyebrow">Overview</span>
          </div>
          <div className="pd-overview__right">
            <Reveal as="h2" dir="up" className="pd-overview__lead">
              {project.overview}
            </Reveal>
            <Reveal dir="up" delay={0.1} className="pd-services">
              {project.services.map((s) => (
                <span className="pd-service" key={s}>{s}</span>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* CHALLENGE / APPROACH */}
      <section className="pd-split section">
        <div className="container-lg pd-split__grid">
          <Reveal dir="up" className="pd-split__col">
            <span className="pd-split__num">01</span>
            <h3 className="pd-split__title">The challenge</h3>
            <p className="pd-split__body">{project.challenge}</p>
          </Reveal>
          <Reveal dir="up" delay={0.1} className="pd-split__col">
            <span className="pd-split__num">02</span>
            <h3 className="pd-split__title">Our approach</h3>
            <p className="pd-split__body">{project.approach}</p>
          </Reveal>
        </div>
      </section>

      {/* GALLERY */}
      <section className="pd-gallery">
        <div className="container-lg">
          <div className="pd-gallery__grid">
            {project.gallery.map((src, i) => (
              <Reveal
                key={src + i}
                dir="scale"
                delay={i * 0.08}
                className={`pd-gallery__item${i === 0 ? ' pd-gallery__item--wide' : ''}`}
              >
                <img src={src} alt={`${project.name} visual ${i + 1}`} loading="lazy" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="pd-results section">
        <div className="container-lg">
          <Reveal as="span" dir="up" className="eyebrow pd-results__eyebrow">Results</Reveal>
          <div className="pd-results__grid">
            {project.results.map((r, i) => (
              <Reveal dir="up" delay={i * 0.1} className="pd-result" key={i}>
                <span className="pd-result__value">
                  <Counter value={r.value} suffix={r.suffix} />
                </span>
                <span className="pd-result__label">{r.label}</span>
              </Reveal>
            ))}
          </div>
          <Reveal dir="up" delay={0.1} className="pd-quote">
            <blockquote>“{project.quote.text}”</blockquote>
            <cite>{project.quote.who}</cite>
          </Reveal>
        </div>
      </section>

      {/* NEXT PROJECT */}
      <section className="pd-next">
        <Link to={`/portfolio/${next.slug}`} className="pd-next__link container-lg">
          <div className="pd-next__text">
            <span className="eyebrow">Next project</span>
            <span className="pd-next__name">{next.name}</span>
            <span className="pd-next__tag">{next.tag}</span>
          </div>
          <span className="pd-next__media">
            <img src={next.img} alt={next.name} loading="lazy" />
            <span className="pd-next__chip"><ArrowRight size={22} /></span>
          </span>
        </Link>
      </section>

      <Cta />
    </div>
  )
}
