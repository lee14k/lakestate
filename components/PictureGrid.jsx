import Link from "next/link";

export default function PictureGrid() {
  return (
    <div className="flex flex-col justify-center items-center container mx-auto">
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="productwrapper">
          <img className="w-full h-full object-cover" src="/Board-0392.jpg"></img>
        </div>
        <div className="productwrapper">
          <img className="w-full h-full object-cover" src="/Firestarter-0419.jpg"></img>
        </div>
        <div className="productwrapper">
          <img className="w-full h-full object-cover" src="/Books--3.jpg"></img>
        </div>
      </div>
    </div>
  );
}

