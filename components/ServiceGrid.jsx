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
        <h1 className="text-6xl text-white gridheadline lakerhead">
          {headerOne}
        </h1>
        <p className="mx-48 text-white text-xl my-4">
          {paraOne}
        </p>
      </div>
      <div className="grid grid-cols-2  mb-16 ">
        <div className="servicewrapper  flex flex-col justify-center items-center ">
          <h1 className='mx-48 text-center text-4xl handcraftheadline '>{headerTwo}</h1>
          <p className="mx-48 my-2 text-center ">{paraTwo}</p>
          <button>Call for more information</button>
        </div>
        <div 
          className="servicewrapper shredwrapper"
          style={{ backgroundImage: `url(${bgImageShred})` }}
        >
        </div>
        <div 
          className=" cleanwrapper"
          style={{ backgroundImage: `url(${bgImageClean})` }}
        >
        </div>

        <div className="servicewrapper bluewrapper  flex flex-col justify-center items-center">
          <h1 className='mx-48 text-center text-4xl handcraftheadline '>{headerThree}</h1>
          <p className="mx-48 my-2 text-center text-white ">{paraThree}</p>
          <button>Call for more information</button>
        </div>
      </div>
    </div>
  );
}
