import Image from 'next/image'
import Navbar from './components/Navbar'
import HeroSec from './components/HeroSec'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <HeroSec />
      <Footer />
    </main>
  )
}
