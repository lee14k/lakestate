import Image from 'next/image'
import Link from 'next/link'


export default function HomeOne () {
  return (
    <div className="home-section-1 grid grid-cols-7 h-full">
      <div className="bg-lakestate-blue mr-2"></div>
      <div className="bg-orange-400 w-12 flex-grow"></div>
      <div className="container col-span-3 flex-grow">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-5xl text-center my-4">The Upper Peninsula's Leader in Employment and Training</h1>
          <Image src="/Paper-Sorting-3006.jpg"       width={900}
                 height={900} />
          <p className="text-center text-2xl my-4">At Lakestate Industries, we are committed to fostering an environment where every individual is empowered to recognize and maximize their unique abilities. We work diligently to help people overcome barriers and support their journey towards achieving their highest level of employment and community inclusion. By focusing on the strengths and capabilities of each individual, Lakestate Industries aims to bridge the gap between talented disabled individuals and the needs of businesses.</p>
          <button className="rounded-md bg-orange-400 px-10 py-6 text-xl font-semibold text-white shadow-sm hover:bg-lakestate-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lakestate-blue">Learn More</button>
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  );
}