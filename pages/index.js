import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import ImageBorder from '@/components/ImageBorder'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
<Navbar/>
<div>
<ImageBorder/>
</div>

<div className="flex flex-col">
  Logo
  Lakestate Industries 
</div>
    </div>
  )}
