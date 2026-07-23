import { ArrowUpRight } from './Icons'

/** Pill button with sliding dual-label + rotating icon chip (template signature). */
export function Button({ label, href = '#', variant = '', className = '', icon = <ArrowUpRight /> }) {
  const cls = ['btn', variant && `btn--${variant}`, className].filter(Boolean).join(' ')
  return (
    <a className={cls} href={href}>
      <span className="btn-swap" aria-label={label}>
        <span aria-hidden>{label}</span>
        <span aria-hidden>{label}</span>
      </span>
      <span className="btn-chip">{icon}</span>
    </a>
  )
}
