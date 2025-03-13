import Image from 'next/image'
import Link from 'next/link'


export default function HomeOne () {
  return (
    <div className="home-section-1 grid grid-cols-7 h-full">
      <div className="bg-lakestate-blue mr-2 hidden md:block"></div>
      <div className="bg-orange-400 w-12 flex-grow hidden md:block"></div>
      <div className="container col-span-7 md:col-span-4 flex-grow px-4 md:px-0">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl md:text-5xl text-center font-bold py-8">The Upper Peninsula's Leader in Employment and Training</h1>
          <div className="w-full">
            <Image 
              src="/3005-hero-smiling.jpg"
              width={900}
              height={900}
              alt="Paper sorting at Lakestate Industries"
              className="rounded-md"
            />
          </div>
          <p className="text-center text-lg md:text-2xl my-4">At Lakestate Industries, we are committed to fostering an environment where every individual is empowered to recognize and maximize their unique abilities. We work diligently to help people overcome barriers and support their journey towards achieving their highest level of employment and community inclusion. By focusing on the strengths and capabilities of each individual, Lakestate Industries aims to bridge the gap between talented disabled individuals and the needs of businesses.</p>
          <Link href='/About'>
          <button className="w-full md:w-auto rounded-md bg-orange-400 px-6 md:px-10 py-4 md:py-6 text-lg md:text-xl font-semibold text-white shadow-sm hover:bg-lakestate-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lakestate-blue my-2">Learn More</button></Link>
        </div>
        <div className="col-span-1 hidden md:block"></div>
      </div>
    </div>
  );
}