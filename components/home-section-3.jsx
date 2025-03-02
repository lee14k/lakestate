import Image from 'next/image'
import Link from 'next/link'

export default function HomeThree({ header, bodyText, photoURL, color, reverse, button, colorTwo }) {
  return (
    <div className={`flex  ${reverse ? 'flex-row-reverse' : 'flex-row'} items-center gap-24  px-4 md:px-0 my-10 mx-16`}>
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

      <div className=" flex-1 flex justify-center items-center w-full md:w-auto">
        <div className="h-96 w-full">
          
          <div 
            className="h-full w-full"
            style={{ 
              backgroundImage: `url(${photoURL})`,
              backgroundSize: '100%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              boxShadow: `clamp(40px, 6vw, 23px) clamp(-20px, -4vw, -82px) 0px 0px ${color || 'rgba(28,70,138,1)'}`
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}