import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import ImageBorder from '@/components/ImageBorder'
import Community from '@/components/Community'
import StoreCTA from '@/components/StoreCTA'
import Link from 'next/link'
import Parallax from '@/components/Parallax'
import Parafill from '@/components/Parafill'
import Footer from '@/components/Footer'
import SecondBorder from '@/components/SecondBorder'
import HomeBorder from '@/components/HomeBorder'
import Image from 'next/image'
import Slider from '@/components/Slider'
import HomeOne from '@/components/home-section-1'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Slider />
      <HomeOne/>
    </div>
  )
}
