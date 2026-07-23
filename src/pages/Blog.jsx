import './Blog.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Reveal, SplitWords } from '../lib/Reveal'
import { ArrowUpRight } from '../components/ui/Icons'
import Cta from '../components/Cta'
import { blogPage } from '../content'

/* Deterministic gradient for author monogram avatars */
const AVATAR_GRADIENTS = [
  'linear-gradient(135deg, #f3350c, #ff8a5c)',
  'linear-gradient(135deg, #4d4d4d, #a0a0a0)',
  'linear-gradient(135deg, #1a1a1a, #5a5a5a)',
  'linear-gradient(135deg, #f3350c, #b31d00)',
  'linear-gradient(135deg, #3a3a3a, #f3350c)',
]

export default function Blog() {
  const { hero, posts } = blogPage
  const [view, setView] = useState('grid')

  return (
    <div className="blg">
      {/* 1 — HERO */}
      <section className="blg-hero">
        <div className="container-lg">
          <div className="blg-hero__row">
            <div className="blg-hero__lead">
              <Reveal as="span" dir="up" className="eyebrow blg-hero__eyebrow">
                Journal
              </Reveal>
              <h1 className="blg-hero__title">
                <SplitWords text={hero.title} stagger={0.06} />
              </h1>
            </div>

            <div className="blg-toggle" role="group" aria-label="View style">
              <button
                type="button"
                className={`blg-toggle__btn${view === 'grid' ? ' is-active' : ''}`}
                aria-pressed={view === 'grid'}
                onClick={() => setView('grid')}
              >
                <GridIcon />
                Grid style
              </button>
              <button
                type="button"
                className={`blg-toggle__btn${view === 'list' ? ' is-active' : ''}`}
                aria-pressed={view === 'list'}
                onClick={() => setView('list')}
              >
                <ListIcon />
                List style
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2 — ARTICLES GRID */}
      <section className="blg-articles">
        <div className="container-lg">
          <div className={`blg-grid blg-grid--${view}`}>
            {posts.map((post, i) => (
              <Reveal key={i} dir="up" delay={(i % 3) * 0.08} className="blg-cardwrap">
                <Link to="/blog" className="blg-card">
                  <div className="blg-card__media">
                    <img
                      className="blg-card__img"
                      src={post.img}
                      alt={post.title}
                      loading="lazy"
                    />
                    <span className="blg-card__badge" aria-hidden>
                      <ArrowUpRight size={16} />
                    </span>
                  </div>

                  <div className="blg-card__body">
                    <span className="blg-card__date">
                      <span className="blg-card__dot" aria-hidden />
                      {post.date}
                    </span>
                    <h4 className="blg-card__title">{post.title}</h4>
                    <div className="blg-card__author">
                      <span
                        className="blg-card__avatar"
                        style={{ background: AVATAR_GRADIENTS[i % AVATAR_GRADIENTS.length] }}
                        aria-hidden
                      >
                        {post.author.charAt(0)}
                      </span>
                      <span className="blg-card__name">{post.author}</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — CTA */}
      <Cta />
    </div>
  )
}

function GridIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <rect x="3" y="3" width="8" height="8" rx="1.5" />
      <rect x="13" y="3" width="8" height="8" rx="1.5" />
      <rect x="3" y="13" width="8" height="8" rx="1.5" />
      <rect x="13" y="13" width="8" height="8" rx="1.5" />
    </svg>
  )
}

function ListIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <rect x="3" y="4" width="18" height="4" rx="1.5" />
      <rect x="3" y="10" width="18" height="4" rx="1.5" />
      <rect x="3" y="16" width="18" height="4" rx="1.5" />
    </svg>
  )
}
