import { Leckerli_One } from "next/font/google"
const leckerli = Leckerli_One({weight: ["400"],   
  display: "swap",
  subsets: ["latin"],
  })

export default function Community({header}) {
    return (
        <div className="my-24 flex flex-col justify-center items-center">
            <div className={leckerli.className}>
            <h1 className="text-4xl">{header}</h1>
            </div>
        </div>
    )
    
}