import './Pricing.css'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Reveal } from '../lib/Reveal'
import { Button } from './ui/Button'
import { Check } from './ui/Icons'
import { pricing } from '../content'

const EASE = [0.25, 1, 0.5, 1]

function Price({ value, featured }) {
  return (
    <div className={`pricing-price${featured ? ' is-featured' : ''}`}>
      <div className="pricing-price__num">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={value}
            initial={{ y: '0.5em', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-0.5em', opacity: 0 }}
            transition={{ duration: 0.32, ease: EASE }}
            className="pricing-price__value"
          >
            {value}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="pricing-price__suffix">/ mo</span>
    </div>
  )
}

export default function Pricing() {
  const { eyebrow, headline, note, tiers } = pricing
  const [billing, setBilling] = useState('monthly')
  const yearly = billing === 'yearly'

  return (
    <section className="pricing section" id="pricing">
      <div className="container-lg pricing__inner">
        {/* TOP — eyebrow + headline + toggle */}
        <div className="pricing__head">
          <Reveal dir="up">
            <span className="eyebrow">{eyebrow}</span>
          </Reveal>
          <Reveal dir="up" delay={0.08}>
            <h2 className="pricing__headline">{headline}</h2>
          </Reveal>

          <Reveal dir="up" delay={0.16} className="pricing__toggle-wrap">
            <div className="pricing-toggle" role="tablist" aria-label="Billing period">
              <button
                type="button"
                role="tab"
                aria-selected={!yearly}
                className={`pricing-toggle__opt${!yearly ? ' is-active' : ''}`}
                onClick={() => setBilling('monthly')}
              >
                {!yearly && (
                  <motion.span layoutId="pricing-toggle-pill" className="pricing-toggle__pill" transition={{ duration: 0.35, ease: EASE }} />
                )}
                <span className="pricing-toggle__label">Monthly</span>
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={yearly}
                className={`pricing-toggle__opt${yearly ? ' is-active' : ''}`}
                onClick={() => setBilling('yearly')}
              >
                {yearly && (
                  <motion.span layoutId="pricing-toggle-pill" className="pricing-toggle__pill" transition={{ duration: 0.35, ease: EASE }} />
                )}
                <span className="pricing-toggle__label">
                  Yearly <span className="pricing-toggle__save">Save 15%</span>
                </span>
              </button>
            </div>
          </Reveal>

          <Reveal dir="up" delay={0.22}>
            <p className="pricing__note">{note}</p>
          </Reveal>
        </div>

        {/* CARDS */}
        <div className="pricing__grid">
          {tiers.map((tier, i) => {
            const price = yearly ? tier.priceYearly : tier.priceMonthly
            const featured = tier.featured === true
            return (
              <Reveal
                key={tier.name}
                dir="up"
                delay={i * 0.1}
                className={`pricing-card${featured ? ' is-featured' : ''}`}
              >
                <div className="pricing-card__top">
                  <div className="pricing-card__namerow">
                    <span className="pricing-card__name">{tier.name}</span>
                    {featured && <span className="pricing-card__badge">Most popular</span>}
                  </div>
                  <Price value={price} featured={featured} />
                  <p className="pricing-card__blurb">{tier.blurb}</p>
                </div>

                <div className="pricing-card__divider" />

                <ul className="pricing-card__features">
                  {tier.features.map((f) => (
                    <li className="pricing-card__feature" key={f}>
                      <span className="pricing-card__check" aria-hidden>
                        <Check size={14} stroke={2.4} />
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="pricing-card__cta">
                  <Button
                    label="Get started"
                    href="#contact"
                    variant={featured ? 'light' : 'outline'}
                    className="pricing-card__btn"
                  />
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
