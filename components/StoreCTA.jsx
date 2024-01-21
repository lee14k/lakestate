import { Handlee } from "next/font/google";
import Link from "next/link";
import PictureGrid from "./PictureGrid";
const handlee = Handlee({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
});
export default function StoreCTA() {
  return (
    <div className="storehome flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center  py-10">
        <div className>
          <div className={handlee.className}>
            <div className="flex flex-col justify-center items-center">
            <h1 className="handcraftheadline text-6xl my-12 lakerhead">
              Handcrafted Goods
            </h1>
            </div>
            </div>
            <p className="mx-60 mb-10 text-2xl text-white text-center">
                Our products are made with love by our students and staff. We
                offer a wide range of products, from woodwork to sewing, and
                everything in between. We also offer custom orders. If you have
                something in mind, we can make it happen.
            </p>
            
          
        </div>
      </div>
      <PictureGrid />
      <Link href="/Donate">
          <div className="mb-48">
            <Link href="/Shop">
         <span className="rounded-md bg-orange-400 px-10 py-6 text-2xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
>
              <span>Shop now</span>
              </span>
              </Link>
              
          </div>
        </Link>
    </div>
  );
}
