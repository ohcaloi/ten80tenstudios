import { Button } from '../components/ui/Button'
import './NotFound.css'

export default function NotFound() {
  return (
    <section className="nf">
      <div className="container-lg nf__inner">
        <span className="nf__code">404</span>
        <h1 className="nf__title">This page took a creative detour</h1>
        <p className="nf__lead">The page you’re looking for doesn’t exist or has been moved.</p>
        <Button label="Back to home" href="/" variant="accent" />
      </div>
    </section>
  )
}
