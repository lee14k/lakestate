import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Slider from '@/components/Slider'
import HomeOne from '@/components/home-section-1'
import HomeTwo from '@/components/home-section-2'
import HomeThree from '@/components/home-section-3'
import HomeFour from '@/components/home-section-4'
import HomeSix from '@/components/home-section-6'
import Footer from '@/components/Footer'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Slider />
      <HomeOne/>
      <HomeTwo/>
      <HomeThree header="Vocational Training" bodyText="We offer specialized training in a wide range of vocational skills tailored to the individual's interests and capabilities, such as job-specific tasks, communication skills, and workplace etiquette." photoURL="donate.jpg" reverse={true} color="lakestate-blue" colorTwo="orange-500"  button={{ text: "Learn More", url: "/learn-more" }} />
      <HomeThree header="High Quality Services" bodyText="Our sub-contracting services offer businesses a reliable and high-quality solution for their needs while providing meaningful work opportunities for our participants." photoURL="parallaxpic.jpg" reverse={false} color="orange-500" colorTwo="lakestate-blue" />
      <HomeFour/>
      <HomeSix/>
      <Footer/>
    </div>
  )
}
