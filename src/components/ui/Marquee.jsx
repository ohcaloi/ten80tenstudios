/** Seamless CSS marquee. Duplicates children so the -50% translate loops perfectly. */
export function Marquee({ children, duration = 30, reverse = false, gap = '3rem', className = '', pauseOnHover = true }) {
  const track = (
    <div className="marquee__track" style={{ '--dur': `${duration}s`, '--gap': gap, animationPlayState: 'running' }}>
      {children}
      <span aria-hidden style={{ display: 'contents' }}>{children}</span>
    </div>
  )
  return (
    <div className={`marquee ${reverse ? 'marquee--rev' : ''} ${className}`} data-pause={pauseOnHover}>
      {track}
    </div>
  )
}
