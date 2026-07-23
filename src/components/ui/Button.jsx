import { Link } from 'react-router-dom'
import { ArrowUpRight } from './Icons'

/** Pill button with sliding dual-label + rotating icon chip (template signature). */
export function Button({ label, href = '/', variant = '', className = '', icon = <ArrowUpRight /> }) {
  const cls = ['btn', variant && `btn--${variant}`, className].filter(Boolean).join(' ')
  const inner = (
    <>
      <span className="btn-swap" aria-label={label}>
        <span aria-hidden>{label}</span>
        <span aria-hidden>{label}</span>
      </span>
      <span className="btn-chip">{icon}</span>
    </>
  )
  const isInternal = href.startsWith('/') && !href.startsWith('//')
  if (isInternal) {
    return <Link className={cls} to={href}>{inner}</Link>
  }
  return <a className={cls} href={href}>{inner}</a>
}
