import Image from 'next/image'
import Link from 'next/link'


export default function HomeOne () {
  return (
    <div className="home-section-1 grid grid-cols-7 h-full">
      <div className="bg-lakestate-blue col-span-2 flex-grow"></div>
      <div className="bg-white w-0.5"></div>
      <div className="bg-orange-500 flex-grow w-24"></div>
      <div className="container col-span-3 flex-grow">
        <div className="flex flex-col justify-center items-center">
          <h1>The Upper Peninsula's Leader in Employment and Training</h1>
          <Image src="/new-pic-1-8-2025.jpg"       width={500}
                 height={500} />
          <p>At Lakestate Industries, we are committed to fostering an environment where every individual is empowered to recognize and maximize their unique abilities. We work diligently to help people overcome barriers and support their journey towards achieving their highest level of employment and community inclusion. Our dedication lies in creating opportunities that embrace diversity, promote equality, and enable each person to thrive and contribute meaningfully to their communities.</p>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
}