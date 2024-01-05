import ImageWithBorder from "./ImageBorder";
export default function ServiceGrid() {
  return (
    <div>
      <ImageWithBorder
        className="pb-16"
        fill="rgba(29, 91, 121, 1)"
        fillOpacity={1}
      />
      <div className="flex flex-col justify-center items-center gridheadline">
        <h1 className="text-6xl text-white gridheadline">
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
          <h1></h1>
          <p></p>
          <button>Call for more information</button>
        </div>
        <div className="servicewrapper bluewrapper">Service 1 blue</div>
        <div className="servicewrapper bluewrapper">Service 1 blue</div>

        <div className="servicewrapper ">Service 1</div>
      </div>
    </div>
  );
}
