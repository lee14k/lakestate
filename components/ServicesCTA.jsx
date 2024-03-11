import Link from 'next/link'
export default function ServicesCTA({ topImage1Src, topImage2Src }) {
  return (
    <div className="grid  sm:grid-cols-2 gap-24 mb-36 servicectacontainer bg-white">
      <div
        className="topimage h-72  w-auto"
        style={{ backgroundImage: `url(${topImage1Src})` }}
      >
        <div className="gradient-overlay flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center mt-4">
            <h1 className="text-white text-xl mb-6">
              Interested in our vocational training?
            </h1>
            <Link href="/VocationalTraining">
              <button className="rounded-md bg-orange-400 px-6 py-2 text-l font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                {' '}
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div
        className="topimage "
        style={{ backgroundImage: `url(${topImage2Src})` }}
      >
        <div className="gradient-overlay flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center mt-4">
            <h1 className="text-white text-xl mb-6">Looking to hire us?</h1>
            <Link href="/HireUs">
              <button className="rounded-md bg-orange-400 px-6 py-2 text-l font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
