import Image from 'next/image'
import Link from 'next/link'

export default function HomeThree({ header, bodyText, photoURL, color, reverse, button, colorTwo, actionElement }) {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-24 px-4 md:px-0 my-6 md:my-10 mx-4 md:mx-16`}>
      <div className="flex-1 flex flex-col justify-center items-center">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold my-4 md:my-8 text-center">{header}</h1>
        <p className="mx-2 md:mx-20 text-center">{bodyText}</p>
        {button && (
          <Link href={button.url}>
            <span className="mt-4 inline-block rounded-md bg-lakestate-blue px-6 py-3 text-white font-semibold hover:bg-blue-600">
              {button.text}
            </span>
          </Link>
        )}
        {actionElement && (
          <div className="mt-6">
            {actionElement}
          </div>
        )}
      </div>

      <div className="flex-1 flex justify-center items-center w-full mt-6 md:mt-0">
        <div className="h-64 md:h-96 w-full">
          <div 
            className="h-full w-full"
            style={{ 
              backgroundImage: `url(${photoURL})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              boxShadow: `clamp(20px, 6vw, 23px) clamp(-10px, -4vw, -82px) 0px 0px ${color || 'rgba(28,70,138,1)'}`
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}