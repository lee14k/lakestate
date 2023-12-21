import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import ImageBorder from '@/components/ImageBorder'
import Community from '@/components/Community'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
<Navbar/>
<div>
<ImageBorder/>
</div>

<div className="flex flex-col mt-24 items-center justify-center">
<h1 className="text-6xl font-bold text-sky-700">Lakesate Industries</h1>
<p className="mx-24 my-4 text-xl">Lakestate Industries is a private, non-profit agency that serves people in our community with intellectual disabilities to enhance their lives and the lives of the families who love them. Lakestate Industries provides vocational career exploration, job development, work training and job services to adult and student populations. We provide contracted services to businesses that make a significant impact on our community.</p>
<button>Support our Mission</button>
</div>
<Community header="Community & Vocation"/>
    </div>
  )}
