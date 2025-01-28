import Image from "next/image";

const WaveOther = ({ imageUrl, header }) => {
  return (
    <div className="w-full relative lg:mb-0 mb-2">
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
          {/* Image pattern */}
          <pattern
            id="imgPattern"
            patternUnits="userSpaceOnUse"
            width="900"
            height="600"
          >
            <image
              href={imageUrl}
              x="0"
              y="0"
              width="1100"
              height="600"
              preserveAspectRatio="xMidYMid slice"
            />
          </pattern>

          {/* Black gradient overlay */}
          <linearGradient id="gradientOverlay" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(0, 0, 0, 0.4)" />
            <stop offset="100%" stopColor="rgba(0, 0, 0, 0.9)" />
          </linearGradient>
        </defs>

        {/* Background image */}
        <rect width="900" height="600" fill="url(#imgPattern)" />

        {/* Gradient overlay */}
        <rect
          width="900"
          height="600"
          fill="url(#gradientOverlay)"
          opacity="1"
        />

        {/* Wave paths */}

        <path
          d="M0 600L25 600C50 600 100 600 150 600C200 600 250 600 300 600C350 600 400 600 450 600C500 600 550 600 600 600C650 600 700 600 750 600C800 600 850 600 875 600L900 600L900 421L875 434C850 447 800 473 750 467C700 461 650 423 600 419C550 415 500 445 450 469C400 493 350 513 300 517C250 521 200 509 150 508C100 507 50 517 25 522L0 527Z"
          fill="#3c80ff"
        ></path>
        <path
          d="M0 600L25 600C50 600 100 600 150 600C200 600 250 600 300 600C350 600 400 600 450 600C500 600 550 600 600 600C650 600 700 600 750 600C800 600 850 600 875 600L900 600L900 493L875 511C850 529 800 565 750 559C700 553 650 505 600 495C550 485 500 513 450 537C400 561 350 581 300 585C250 589 200 577 150 576C100 575 50 585 25 590L0 595Z"
          fill="#0066ff"
        ></path>
      </svg>
      <div className="absolute top-24 lg:top-80 left-1/2 transform -translate-x-1/2 z-10 rounded-2xl text-center ">
        <h1 className="mb-4 text-9xl text-white font-bold">{header}</h1>
      </div>
    </div>
  );
};

export default WaveOther;