import { useLenis } from './lib/useLenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

export default function App() {
  useLenis()
  return (
    <>
      <Navbar />
      <main>
        <Hero />
      </main>
    </>
  )
}
