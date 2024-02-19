import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import ImageBorder from "@/components/ImageBorder";
import Community from "@/components/Community";
import StoreCTA from "@/components/StoreCTA";
import Link from "next/link";
import Parallax from "@/components/Parallax";
import Parafill from "@/components/Parafill";
import Footer from "@/components/Footer";
import SecondBorder from "@/components/SecondBorder";
import HomeBorder from "@/components/HomeBorder";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className='homewrapper'>
      <Parallax imageUrl="/parallaxpic.jpg">

        <Navbar />
        <div>
       
        <HomeBorder/>
        </div>

        <div className="flex flex-col items-center justify-center bg-white py-24">
          <h1 className=" text-8xl font-bold handcraftheadline">
            Lakestate Industries
          </h1>
          <p className="mx-48 my-4 text-xl justify-center items-center text-center">
            Lakestate Industries is a private, non-profit agency that serves
            people in our community with intellectual disabilities to enhance
            their lives and the lives of the families who love them. Lakestate
            Industries provides vocational career exploration, job development,
            work training and job services to adult and student populations. We
            provide contracted services to businesses that make a significant
            impact on our community.
          </p>
          <Link href="/Donate">

            <div className="mb-16 my-8">
              <span className="z-500 rounded-md bg-sky-900  px-10 py-6 text-xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mb-48">

                <span>Support our Mission</span>

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
  );
}
