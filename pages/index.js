import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Slider from '@/components/Slider'
import HomeOne from '@/components/home-section-1'
import HomeTwo from '@/components/home-section-2'
import HomeThree from '@/components/home-section-3'
import HomeFour from '@/components/home-section-4'
import HomeSix from '@/components/home-section-6'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Slider />
      <HomeOne/>
      <HomeTwo/>
      <HomeThree header="Welcome" bodyText="Some text here" photoURL="donate.jpg" reverse={true} />
      <HomeThree header="Welcome" bodyText="Some text here" photoURL="parallaxpic.jpg" reverse={false} />
      <HomeFour/>
      <HomeSix/>
    </div>
  )
}
