import Image from 'next/image'

export default function HomeThree({ header, bodyText, photoURL, color, reverse }) {
  return (
    <div className={`flex ${reverse ? 'flex-row-reverse' : 'flex-row'} items-center`}>
      <div className="flex-1">
        <h1 className="text-6xl font-bold my-8 text-center">{header}</h1>
        <div>
          {bodyText}
        </div>
      </div>
      <div className="flex-1 bg-cover bg-center h-[24rem]" style={{ backgroundImage: `url(${photoURL})` }}>
      </div>
    </div>
  )
}