
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
            para: "Description for Service One.",
            buttonText: "Learn More",
            backgroundImage: "/cleaner.jpg"
          },
          {
            header: "Document Destruction",
            para: "Description for Service Two.",
            buttonText: "Discover",
            backgroundImage: "/shreds.jpg"
          },
          {
            header: "Survey Stakes",
            para: "Description for Service Two.",
            buttonText: "Discover",
            backgroundImage: "/shreds.jpg"
          },
          {
            header: "Pallets and Pallet Stock  ",
            para: "Description for Service Two.",
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
