import './Footer.css'
import { Reveal } from '../lib/Reveal'
import { Button } from './ui/Button'
import { footer, brand } from '../content'

/** Site footer: brand + link columns, giant ghost wordmark, legal row. */
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-lg footer-inner">
        <div className="footer-top">
          <Reveal dir="up" className="footer-brand">
            <a className="footer-mark" href="#home" aria-label={brand.name}>
              <img src="/img/ten80ten-mark-512.png" alt="" width={40} height={40} />
              <span className="footer-wordmark-sm">{brand.name}</span>
            </a>
            <p className="footer-blurb">{footer.blurb}</p>
            <Button label={brand.cta.label} href={brand.cta.href} variant="light" className="footer-cta" />
          </Reveal>

          <div className="footer-cols">
            {footer.columns.map((col, i) => (
              <Reveal dir="up" delay={0.06 * i} className="footer-col" key={col.title}>
                <p className="footer-col-title eyebrow">{col.title}</p>
                <ul className="footer-links">
                  {col.links.map(([label, href]) => (
                    <li key={label}>
                      <a className="footer-link" href={href}>{label}</a>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-ghost-wrap" aria-hidden>
        <span className="footer-ghost">{footer.wordmark}</span>
      </div>

      <div className="container-lg">
        <div className="footer-bottom">
          <p className="footer-legal">{footer.legal}</p>
          <div className="footer-social">
            <a className="footer-link" href="#">LinkedIn</a>
            <a className="footer-link" href="#">Instagram</a>
            <a className="footer-link" href="#">X</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
