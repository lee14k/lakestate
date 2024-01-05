import { Handlee } from "next/font/google";
import PictureGrid from "./PictureGrid";
const handlee = Handlee({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
});
export default function StoreCTA() {
  return (
    <div className="storehome">
      <div className="flex flex-col justify-center items-center">
        <div className>
          <div className={handlee.className}>
            <div className="flex flex-col justify-center items-center">
            <h1 className="handcraftheadline text-6xl my-12">
              Handcrafted Goods
            </h1>
            </div>
            </div>
            <p className="mx-24 text-2xl text-white">
                Our products are made with love by our students and staff. We
                offer a wide range of products, from woodwork to sewing, and
                everything in between. We also offer custom orders. If you have
                something in mind, we can make it happen.
            </p>
            
          
        </div>
      </div>
      <PictureGrid />
    </div>
  );
}
