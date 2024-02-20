
import ServiceGrid from "@/components/ServiceGrid";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HireUs = () => {
    return (
        <div>
            <Navbar />
            <div className='homewrapper'>
          <ServiceGrid
          headerOne="Quality Services for Hire"
          headerTwo="Confidential Shredding and Document Destruction"
        headerThree="Janitorial Services"
        bgImage1='/cleaner.jpg'
        header="Hire Us!"
          
        services={[
          {
            header: "Janitorial Services",
            para: "Janitorial services are essential for maintaining a clean and healthy environment in commercial buildings, offices, schools, healthcare facilities, and other public spaces. ",
            buttonText: "Learn More",
            backgroundImage: "/cleaner.jpg"
          },
          {
            header: "Document Destruction",
            para: "We secure and confidentially dispose of sensitive information by shredding your documents with industrial -grade shredding equipment into unreadable fragments. ",
            buttonText: "Discover",
            backgroundImage: "/shreds.jpg"
          },
          {
            header: "Survey Stakes",
            para: "Survey stakes come in a range of prices depending on the size and quantity. Contact us for current pricing.",
            buttonText: "Discover",
            backgroundImage: "/shreds.jpg"
          },
          {
            header: "Pallets and Pallet Stock  ",
            para: "We provide premium pallets and pallet stock, where quality meets sustainability. Our pallets and pallet stock are expertly crafted to meet the demands of various industries, offering durability, reliability, and eco-friendliness.",
            buttonText: "Discover",
            backgroundImage: "/shreds.jpg"
          },
        ]}
      />
          </div>
          <Footer/>
        </div>
    );
};

export default HireUs;
