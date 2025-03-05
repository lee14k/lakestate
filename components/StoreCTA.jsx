import { Handlee } from 'next/font/google'
import Link from 'next/link'
import PictureGrid from './PictureGrid'
const handlee = Handlee({
  weight: ['400'],
  display: 'swap',
  subsets: ['latin'],
})
export default function StoreCTA() {
  return (
    <div className="storehome flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center  py-10">
        <div className>
          <div >
            <div className="flex flex-col justify-center items-center gap-10">
              <h1 className="text-orange-500 text-8xl  my-12  font-bold">
                Michigan Made Products{' '}
              </h1>
            </div>
          </div>
          <p className="sm:mx-60 mb-10 text-3xl  text-white text-center">
          Our products are meticulously crafted with care and dedication, thanks to the collaboration between our valued clients and our dedicated staff. This partnership ensures that each item is made with the utmost attention to detail and quality. If you have a project, idea or need help with a product for an event, please contact us for more details.

          </p>
        </div>
      </div>
      <PictureGrid />
      <div className="my-36">
        <Link href="/Shop">
          <span className="rounded-md bg-orange-500 px-10 py-6 text-5xl font-semibold text-white shadow-sm hover:bg-lakestate-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lakestate-blue">
            <span>Shop now</span>
          </span>
        </Link>
      </div>
    </div>
  )
}
