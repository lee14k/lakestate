import SecondBorder from "./SecondBorder";

export default function ServiceGridV2({
  mainHead, paraOne, buttonOne,
  headerTwo, paraTwo, buttonTwo, bgImageShred,
  headerThree, paraThree, buttonThree, bgImageClean,  bgImage1,
  bgImage2 
}) {
  return (
    <div>
      <div className="">
      {bgImage1 && <SecondBorder backgroundImage={bgImage1} />}
      {bgImage2 && <SecondBorder backgroundImage={bgImage2} />}     </div>
      <div className="flex flex-col justify-center items-center gridheadline">
        <h1 className="text-8xl text-white gridheadline lakerhead pt-24">
          {headerOne}
        </h1>
        <p className="mx-96 text-center text-white text-xl my-4">
          {paraOne}
        </p>
        <div className="mb-16">
         <span className="rounded-md bg-orange-400 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
>
              <span>Contact Us</span>
              </span>
              </div>
      </div>
      <div className="grid grid-cols-2  mb-16 ">
        <div className="servicewrapper  flex flex-col justify-center items-center ">
          <h1 className='mx-48 text-center text-4xl handcraftheadline '>{headerTwo}</h1>
          <p className="mx-48 my-2 text-center ">{paraTwo}</p>
           <span className="rounded-md bg-orange-400 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
>
              <span>Learn More</span>
              </span>
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
              <span className="rounded-md bg-orange-400 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
>
              <span>Learn More</span>
              </span>
        </div>
      </div>
    </div>
  );
}
