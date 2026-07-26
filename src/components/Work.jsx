import './Work.css'
import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Reveal } from '../lib/Reveal'
import { Marquee } from './ui/Marquee'
import { work } from '../content'

/** Rotating circular-text award badge with the logo in the centre. */
function Badge() {
  const reduce = useReducedMotion()
  const text = work.badge.ring.repeat(2)
  return (
    <div className="work__badge">
      <motion.svg
        viewBox="0 0 200 200"
        className="work__badge-ring"
        animate={reduce ? {} : { rotate: 360 }}
        transition={{ duration: 22, ease: 'linear', repeat: Infinity }}
        aria-hidden
      >
        <defs>
          <path id="work-badge-path" d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0" />
        </defs>
        <text>
          <textPath href="#work-badge-path" xlinkHref="#work-badge-path">{text}</textPath>
        </text>
      </motion.svg>
      <span className="work__badge-logo">
        <img src={work.badge.logo} alt="" />
      </span>
    </div>
  )
}

function ProjectCard({ p, delay }) {
  return (
    <Reveal dir="up" delay={delay} duration={0.8} amount={0.3} className="work__card">
      <Link to={`/portfolio/${p.slug}`} className="work__card-link">
        <div className="work__media">
          <img src={p.img} alt={p.name} loading="lazy" />
          {/* name marquee strip revealed on hover */}
          <span className="work__marquee" aria-hidden>
            <Marquee duration={14} gap="0">
              {Array.from({ length: 8 }, (_, i) => (
                <span className="work__marquee-item" key={i}>{p.name}</span>
              ))}
            </Marquee>
          </span>
        </div>
        <div className="work__row">
          <span className="work__name">{p.name}</span>
          <span className="work__year">{p.year}</span>
        </div>
      </Link>
    </Reveal>
  )
}

export default function Work() {
  return (
    <section className="work section" id="work">
      <div className="container-lg">
        <div className="work__head">
          <Reveal dir="up" as="h2" className="work__title">Featured work</Reveal>
          <div className="work__head-right">
            <Reveal dir="scale" className="work__badge-wrap"><Badge /></Reveal>
            <Reveal dir="up" delay={0.1} as="p" className="work__lead">
              {work.headline}
            </Reveal>
          </div>
        </div>

        <div className="work__grid">
          {work.projects.map((p, i) => (
            <ProjectCard key={p.slug} p={p} delay={(i % 2) * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}
