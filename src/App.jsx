import { useLenis } from './lib/useLenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Partners from './components/Partners'
import About from './components/About'
import Services from './components/Services'
import Feature from './components/Feature'
import Work from './components/Work'
import Capabilities from './components/Capabilities'
import Reviews from './components/Reviews'
import Pricing from './components/Pricing'
import Faq from './components/Faq'
import Cta from './components/Cta'
import Footer from './components/Footer'

export default function App() {
  useLenis()
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <About />
        <Services />
        <Feature />
        <Work />
        <Capabilities />
        <Reviews />
        <Pricing />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  )
}
