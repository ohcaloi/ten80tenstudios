import './Contact.css'
import { useState } from 'react'
import { Reveal, SplitWords } from '../lib/Reveal'
import { ArrowUpRight } from '../components/ui/Icons'
import Cta from '../components/Cta'
import { contactPage, brand } from '../content'

export default function Contact() {
  const { hero, info, socials, budgets } = contactPage

  const [form, setForm] = useState({ name: '', email: '', budget: '', message: '' })

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = `New project enquiry — ${form.name || 'Website contact'}`
    const bodyLines = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Budget: ${form.budget}`,
      '',
      'Message:',
      form.message,
    ]
    const body = bodyLines.join('\n')
    const mailto = `mailto:${brand.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
  }

  return (
    <div className="cnt">
      {/* 1 — HERO */}
      <section className="cnt-hero">
        <div className="container-lg">
          <Reveal as="span" dir="up" className="cnt-hero__eyebrow eyebrow">
            Get in touch
          </Reveal>
          <h1 className="cnt-hero__title">
            <SplitWords text={hero.title} stagger={0.07} />
          </h1>
          <Reveal as="p" dir="up" delay={0.2} className="cnt-hero__sub">
            {hero.sub}
          </Reveal>
        </div>
      </section>

      {/* 2 — CONTACT BODY */}
      <section className="cnt-body">
        <div className="container-lg">
          <div className="cnt-grid">
            {/* LEFT — info + socials */}
            <div className="cnt-info">
              <Reveal as="span" dir="up" className="eyebrow cnt-info__eyebrow">
                Studio details
              </Reveal>

              <div className="cnt-info__list">
                {info.map((item, i) => (
                  <Reveal
                    dir="up"
                    delay={0.06 * i}
                    key={item.label}
                    className="cnt-info__item"
                  >
                    <span className="cnt-info__label">{item.label}</span>
                    {item.href ? (
                      <a className="cnt-info__value cnt-info__value--link" href={item.href}>
                        {item.value}
                      </a>
                    ) : (
                      <span className="cnt-info__value">{item.value}</span>
                    )}
                  </Reveal>
                ))}
              </div>

              <Reveal dir="up" delay={0.15} className="cnt-socials">
                <span className="cnt-socials__label">Follow along</span>
                <div className="cnt-socials__row">
                  {socials.map((s) => (
                    <a key={s} className="cnt-social" href="#" aria-label={s}>
                      <span>{s}</span>
                      <ArrowUpRight size={14} />
                    </a>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* RIGHT — form card */}
            <Reveal dir="up" delay={0.1} className="cnt-formwrap">
              <form className="cnt-card" onSubmit={handleSubmit} noValidate={false}>
                <div className="cnt-field">
                  <label className="cnt-field__label" htmlFor="cnt-name">
                    Name
                  </label>
                  <input
                    id="cnt-name"
                    className="cnt-field__input"
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    autoComplete="name"
                    required
                    value={form.name}
                    onChange={update('name')}
                  />
                </div>

                <div className="cnt-field">
                  <label className="cnt-field__label" htmlFor="cnt-email">
                    Email
                  </label>
                  <input
                    id="cnt-email"
                    className="cnt-field__input"
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    autoComplete="email"
                    required
                    value={form.email}
                    onChange={update('email')}
                  />
                </div>

                <div className="cnt-field">
                  <label className="cnt-field__label" htmlFor="cnt-budget">
                    Budget
                  </label>
                  <div className="cnt-select-wrap">
                    <select
                      id="cnt-budget"
                      className="cnt-field__input cnt-field__select"
                      name="budget"
                      required
                      value={form.budget}
                      onChange={update('budget')}
                    >
                      <option value="" disabled>
                        Select your budget…
                      </option>
                      {budgets.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                    <span className="cnt-select-caret" aria-hidden>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M6 9l6 6 6-6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="cnt-field">
                  <label className="cnt-field__label" htmlFor="cnt-message">
                    Message
                  </label>
                  <textarea
                    id="cnt-message"
                    className="cnt-field__input cnt-field__textarea"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your project…"
                    required
                    value={form.message}
                    onChange={update('message')}
                  />
                </div>

                <button type="submit" className="btn btn--accent cnt-submit">
                  <span className="btn-swap" aria-label="Submit">
                    <span aria-hidden>Submit</span>
                    <span aria-hidden>Submit</span>
                  </span>
                  <span className="btn-chip">
                    <ArrowUpRight />
                  </span>
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3 — CTA */}
      <Cta />
    </div>
  )
}
