import Image from 'next/image'
import Navbar from './components/Navbar'
import HeroSec from './components/HeroSec'

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <HeroSec />
    </main>
  )
}
