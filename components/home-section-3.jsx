import Image from 'next/image'
import Link from 'next/link'

export default function HomeThree({ header, bodyText, photoURL, color, reverse, button, colorTwo }) {
  return (
    <div className={`flex flex-col md:${reverse ? 'flex-row-reverse' : 'flex-row'} items-center gap-8 md:gap-0 px-4 md:px-0`}>
      <div className="flex-1 flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-6xl font-bold my-4 md:my-8 text-center">{header}</h1>
        <p className="mx-4 md:mx-20 text-center">{bodyText}</p>
        {button && (
          <Link href={button.url}>
            <span className="mt-4 inline-block rounded-md bg-lakestate-blue px-6 py-3 text-white font-semibold hover:bg-blue-600">
              {button.text}
            </span>
          </Link>
        )}
      </div>

      <div className="relative flex-1 flex justify-center items-center w-full md:w-auto" style={{ zIndex: 2 }}>
        <div className="relative w-full h-[18rem] md:h-[24rem]">
          <div className="absolute inset-0 -left-3 -top-3 -bottom-3 flex" style={{ width: 'calc(100% + 6px)', zIndex: 1 }}>
            <div className={`bg-${color} w-full h-full flex-1`}></div>
            <div className={`bg-${color} w-full h-full flex-1`}></div>
            <div className={`bg-${color} w-full h-full flex-1`}></div>
          </div>
          
          <div 
            className="absolute inset-[3px] bg-cover bg-center z-10" 
            style={{ 
              backgroundImage: `url(${photoURL})`
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}