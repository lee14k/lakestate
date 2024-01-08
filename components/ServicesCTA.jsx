export default function ServicesCTA({ topImage1Src, topImage2Src }) {
  return (
    <div className="grid grid-cols-2 gap-24 mb-16 servicectacontainer">
      <div
        className="topimage"
        style={{ backgroundImage: `url(${topImage1Src})` }}
      >
        <div className="gradient-overlay flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-white text-xl">Looking to use our services?</h1>
            <button className="text-l font-semibold shadow-sm border-solid border-white border-2 text-white">
              Learn More
            </button>
          </div>
        </div>
      </div>
     <div
        className="topimage"
        style={{ backgroundImage: `url(${topImage1Src})` }}
      >
        <div className="gradient-overlay flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-white text-xl">Looking to use our services?</h1>
            <button className="text-l font-semibold shadow-sm border-solid border-white border-2 text-white">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
