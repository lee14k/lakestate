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
      <HomeThree header="Vocational Training" bodyText="We offer specialized training in a wide range of vocational skills tailored to the individual's interests and capabilities, such as job-specific tasks, communication skills, and workplace etiquette." photoURL="new-pic-1-8-2025.jpg " reverse={true}  button={{ text: "Learn More", url: "/VocationalTraining" }} />
      <HomeThree header="High Quality Services" bodyText="Our sub-contracting services offer businesses a reliable and high-quality solution for their needs while providing meaningful work opportunities for our participants." photoURL="survey.jpg" reverse={false} color="#e87b35"  button={{ text: "Learn More", url: "/HireUs" }} />
      <HomeFour/>
      <HomeSix/>
      <Footer/>
    </div>
  )
}
