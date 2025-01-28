import Image from 'next/image'
import Link from 'next/link'

const WaveBorder = () => {
  return (
    <div className="w-full bg-white">
      <div className="flex flex-col justify-center items-center gap-10">
        <Image
          src="/lilogo.png"
          alt="Logo"
          width={1000}
          height={1000}
          className="w-auto h-auto"
        />
        <p className="text-6xl text-center lg:mx-72 font-bold pb-12">The Upper Peninsula's Leader in Employment and Training
        </p>

      </div>

      <svg
        id="visual"
        viewBox="0 0 900 300"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        preserveAspectRatio="none"
        className="-mt-20"
      >
        <path
          d="M0 300L25 300C50 300 100 300 150 300C200 300 250 300 300 300C350 300 400 300 450 300C500 300 550 300 600 300C650 300 700 300 750 300C800 300 850 300 875 300L900 300L900 121L875 134C850 147 800 173 750 167C700 161 650 123 600 119C550 115 500 145 450 169C400 193 350 213 300 217C250 221 200 209 150 208C100 207 50 217 25 222L0 227Z"
          fill="#3c80ff"
        ></path>
        <path
          d="M0 300L25 300C50 300 100 300 150 300C200 300 250 300 300 300C350 300 400 300 450 300C500 300 550 300 600 300C650 300 700 300 750 300C800 300 850 300 875 300L900 300L900 193L875 211C850 229 800 265 750 259C700 253 650 205 600 195C550 185 500 213 450 237C400 261 350 281 300 285C250 289 200 277 150 276C100 275 50 285 25 290L0 295Z"
          fill="#0066ff"
        ></path>
      </svg>
    </div>
  )
}

export default WaveBorder