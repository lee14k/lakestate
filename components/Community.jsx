import { Handlee, Leckerli_One } from "next/font/google"
import ServicesCTA from "./ServicesCTA"
const leckerli = Leckerli_One({weight: ["400"],   
  display: "swap",
  subsets: ["latin"],
  })
  const handlee = Handlee({weight: ["400"],
    display: "swap",
    subsets: ["latin"],
    })

export default function Community({header}) {
    return (
        <div className="flex flex-col justify-center items-center bg-white">
            <div className="flex flex-col justify-center mx-48 px-24 text-center">
            <h1 className="text-6xl my-8">{header}</h1>
            <p className="mx-2">
            <span className="font-bold ">Lake State Cleaning</span> is a division of <span className="font-bold">Lake State Industries</span>, a 501(c)(3) non-profit organization. Lake State Industries is a vocational training center for adults with disabilities. Our mission is to provide vocational training and employment opportunities for adults with disabilities. We do this by providing a variety of services to businesses and individuals in the community. We are a proud member of the <span className="font-bold">Michigan Rehabilitation Services (MRS)</span> and <span className="font-bold">Michigan Works!</span> networks.
            </p>
            </div>
            <ServicesCTA
             topImage1Src="/lakestateplaceholder.jpg"
             topImage2Src="/lakestateplaceholder.jpg"
            />
        </div>
    )
    
}