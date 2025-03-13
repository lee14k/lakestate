import Image from 'next/image'
import Link from 'next/link'

export default function HomeOne() {
  return (
    <div className="home-section-1 flex flex-col w-full">
      {/* Colored bars - hidden on mobile, visible on md screens and up */}
      <div className="hidden md:flex w-full h-4">
        <div className="bg-lakestate-blue w-5/6"></div>
        <div className="bg-orange-500 w-1/6"></div>
      </div>
      
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl md:text-5xl text-center my-4 font-bold">The Upper Peninsula's Leader in Employment and Training</h1>
          
          <div className="w-full my-4">
            <Image 
              src="/Paper-Sorting-3006.jpg"
              width={900}
              height={900}
              layout="responsive"
              alt="Paper sorting at Lakestate Industries"
              className="rounded-md"
            />
          </div>
          
          <p className="text-center text-lg md:text-2xl my-4">At Lakestate Industries, we are committed to fostering an environment where every individual is empowered to recognize and maximize their unique abilities. We work diligently to help people overcome barriers and support their journey towards achieving their highest level of employment and community inclusion.</p>
          
          <button className="w-full md:w-auto rounded-md bg-orange-500 px-6 py-4 text-lg font-semibold text-white shadow-sm hover:bg-lakestate-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lakestate-blue my-4">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}