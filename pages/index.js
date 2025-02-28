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
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="">
      <Parallax imageUrl="/parallaxpic.jpg">
        <Navbar />
        <div>
          <HomeBorder />
        </div>
        <div className="flex flex-col items-center justify-center bg-white py-24 gap-10 ">
          <h1 className="text-8xl font-bold text-lakestate-blue ">
            Lakestate Industries
          </h1>
          <p className="sm:mx-48 my-4 justify-center items-center text-center text-3xl">
            At Lakestate Industries, we are committed to fostering an environment where every individual is empowered to recognize and maximize their unique abilities. We work diligently to help people overcome barriers and support their journey towards achieving their highest level of employment and community inclusion. Our dedication lies in creating opportunities that embrace diversity, promote equality, and enable each person to thrive and contribute meaningfully to their communities.
          </p>
          <Link href="/About">
            <div className="mb-16 my-8">
              <span className="z-500 rounded-md bg-lakestate-blue px-12 py-6 text-5xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mb-48">
                <span>Learn More</span>
              </span>
            </div>
          </Link>
        </div>
        <StoreCTA />
        <Community header="Community & Vocation" />
        <Parafill />
        <Footer />
      </Parallax>
    </div>
  )
}
