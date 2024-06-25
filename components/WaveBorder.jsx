import Image from 'next/image'

const WaveBorder = () => {
  return (
    <div className="w-full relative">
      <svg
        id="visual"
        viewBox="0 0 900 600"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="imgPattern"
            patternUnits="userSpaceOnUse"
            width="900"
            height="600"
          >
            <image
              href="/Paper-Sorting-3005.jpg"
              x="0"
              y="0"
              width="1100"
              height="600"
              preserveAspectRatio="xMidYMid slice"
            />
          </pattern>
        </defs>
        <rect width="900" height="600" fill="url(#imgPattern)" />
        <path
          d="M0 600L25 600C50 600 100 600 150 600C200 600 250 600 300 600C350 600 400 600 450 600C500 600 550 600 600 600C650 600 700 600 750 600C800 600 850 600 875 600L900 600L900 315L875 319C850 323 800 331 750 335C700 339 650 335 600 347C550 359 500 379 450 395C400 411 350 423 300 419C250 415 200 399 150 395C100 391 50 399 25 403L0 407Z"
          fill="url(#imgPattern)"
        ></path>
        <path
          d="M0 600L25 600C50 600 100 600 150 600C200 600 250 600 300 600C350 600 400 600 450 600C500 600 550 600 600 600C650 600 700 600 750 600C800 600 850 600 875 600L900 600L900 421L875 434C850 447 800 473 750 467C700 461 650 423 600 419C550 415 500 445 450 469C400 493 350 513 300 517C250 521 200 509 150 508C100 507 50 517 25 522L0 527Z"
          fill="#3c80ff"
        ></path>
        <path
          d="M0 600L25 600C50 600 100 600 150 600C200 600 250 600 300 600C350 600 400 600 450 600C500 600 550 600 600 600C650 600 700 600 750 600C800 600 850 600 875 600L900 600L900 493L875 511C850 529 800 565 750 559C700 553 650 505 600 495C550 485 500 513 450 537C400 561 350 581 300 585C250 589 200 577 150 576C100 575 50 585 25 590L0 595Z"
          fill="#0066ff"
        ></path>
      </svg>

      <div className="absolute top-6 left-1/3 transform -translate-x-1/2 z-10 bg-white bg-opacity-30 rounded-2xl">
        <Image
          src="/lilogo.png"
          alt="Logo"
          width={800}
          height={800}
          // Adjust width and height as needed
        />
      </div>
    </div>
  )
}

export default WaveBorder
