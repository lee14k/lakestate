import Image from 'next/image'
import Link from 'next/link'

export default function HomeThree({ header, bodyText, photoURL, color, reverse, button }) {
  return (
    <div className={`flex ${reverse ? 'flex-row-reverse' : 'flex-row'} items-center`}>
      <div className="flex-1 flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold my-8 text-center">{header}</h1>
        <p>{bodyText}</p>
        {button && (
          <Link href={button.url}>
            <span className="mt-4 inline-block rounded-md bg-blue-500 px-6 py-3 text-white font-semibold hover:bg-blue-600">
              {button.text}
            </span>
          </Link>
        )}
      </div>
      <div className={`bg-${color} w-20 h-52`}></div>
      <div className="flex-1 aspect-square bg-cover bg-center h-[24rem]" style={{ backgroundImage: `url(${photoURL})` }}>
      </div>
    </div>
  )
}