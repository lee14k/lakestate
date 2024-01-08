import SecondBorder from "./SecondBorder";

export default function ServiceGrid({
  headerOne, paraOne, buttonOne,
  headerTwo, paraTwo, buttonTwo, bgImageShred,
  headerThree, paraThree, buttonThree, bgImageClean
}) {
  return (
    <div>
      <div className="">
        <SecondBorder/>
      </div>
      <div className="flex flex-col justify-center items-center gridheadline">
        <h1 className="text-6xl text-white gridheadline">
          {headerOne}
        </h1>
        <p className="mx-48 text-white text-xl my-4">
          {paraOne}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-16 ">
        <div className="servicewrapper flex flex-col justify-center items-center mx-24">
          <h1 className='text-2xl'>{headerTwo}</h1>
          <p>{paraTwo}</p>
          <button>Call for more information</button>
        </div>
        <div 
          className="servicewrapper shredwrapper"
          style={{ backgroundImage: `url(${bgImageShred})` }}
        >
          Service 1 blue
        </div>
        <div 
          className=" cleanwrapper"
          style={{ backgroundImage: `url(${bgImageClean})` }}
        >
          Service 1 blue
        </div>

        <div className="servicewrapper">
          <h1>{headerThree}</h1>
          <p>{paraThree}</p>
          <button>Call for more information</button>
        </div>
      </div>
    </div>
  );
}
