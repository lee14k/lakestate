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
            <p className="mx-2 mb-8">
          Lakestate Industries is a vocational training center for individuals with disabilities.Lakestate Industries is dedicated to helping people recognize and maximize their abilities, overcome barriers, and support them in reaching their highest level of employment and community inclusion networks.
            </p>
            </div>
            <ServicesCTA
             topImage1Src="/vcone.jpg"
             topImage2Src="/vctwo.jpg"
            />
        </div>
    )
    
}