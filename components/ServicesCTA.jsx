import Link from 'next/link'
export default function ServicesCTA({ topImage1Src, topImage2Src }) {
  return (
    <div className="grid ml-6 lg:ml-0 lg:grid-cols-2 gap-24 mb-56  bg-white">
      <div
        className="topimage h-80  w-11/12"
        style={{ backgroundImage: `url(${topImage1Src})` }}
      >
        <div className="gradient-overlay flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center mt-4">
            <h1 className="text-white text-center text-4xl mb-6 bg-black bg-opacity-10">
              Interested in our vocational training?
            </h1>
            <Link href="/VocationalTraining">
              <button className="rounded-md bg-orange-500 px-6 py-2 text-2xl font-semibold text-white shadow-sm hover:bg-lakestate-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lakestate-blue">
                {' '}
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div
        className="topimage  h-80  w-11/12"
        style={{ backgroundImage: `url(${topImage2Src})` }}
      >
        <div className="gradient-overlay flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center mt-4">
            <h1 className="text-white text-4xl mb-6 bg-black bg-opacity-10 text-center">Looking to hire us?</h1>
            <Link href="/HireUs">
              <button className="rounded-md bg-orange-500 px-6 py-2 text-2xl font-semibold text-white shadow-sm hover:bg-lakestate-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lakestate-blue">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
