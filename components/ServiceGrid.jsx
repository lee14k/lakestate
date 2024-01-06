import ImageWithBorder from "./ImageBorder";
export default function ServiceGrid() {
  return (
    <div>
    <div className="">
      <ImageWithBorder
        headerHeight="500px"
        className=""
        fill="rgba(29, 91, 121, 1)"
        fillOpacity={1}
  waveStyle={{height: '10px',  top:'0px', width: '2000px',
}}
        
      />
      
      </div>
      <div className="flex flex-col justify-center items-center gridheadline">
        <h1 className="text-6xl text-white gridheadline mt-2">
          Quality Services for Hire
        </h1>
        <p className="mx-48 text-white text-xl my-4">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum corrupti
          at ipsum quam debitis eum cumque! Voluptas explicabo illum cupiditate
          accusamus beatae? Iusto facere consequuntur quas, autem nesciunt
          provident blanditiis.{" "}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-16">
        <div className="servicewrapper">
          <h1>Confidential Shredding and Document Destruction</h1>
          <p></p>
          <button>Call for more information</button>
        </div>
        <div className="servicewrapper shredwrapper">Service 1 blue</div>
        <div className="servicewrapper cleanwrapper">Service 1 blue</div>

        <div className="servicewrapper "> <h1>Confidential Shredding and Document Destruction</h1>
          <p></p>
          <button>Call for more information</button></div>
      </div>
    </div>
  );
}
