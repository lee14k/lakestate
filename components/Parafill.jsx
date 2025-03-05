import Link from "next/link"
export default function Parafill() {
    return (
        <div className="paracontainer flex flex-col justify-center items-center ">

            <div className="">
              <span className="z-500 rounded-lg bg-orange-500 text-center px-10 py-20 font-bold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 my-12">
              <Link href="/Donate">
              <span className="text-6xl ">Support our Mission</span>
              </Link>
            </span>
          </div>
        </div>
    )
}