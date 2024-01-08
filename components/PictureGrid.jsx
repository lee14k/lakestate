import Link from "next/link";
export default function PictureGrid() {
  return (
    <div className="flex flex-col justify-center items-center">
    <div className="grid grid-cols-3 ml-24">
      <div className="productwrapper">
        <img className="w-2/3 h-2/3" src="/lakestateproducttwo.png"></img>
      </div>
      <div className="productwrapper">
        <img className="w-3/4 h-2/3" src="/firestarters.jpg"></img>
      </div>
      <div className="productwrapper">
        <img className="w-3/4 h-2/3" src="/crate.png"></img>
      </div>
       
    </div>
    </div>
  );
}
