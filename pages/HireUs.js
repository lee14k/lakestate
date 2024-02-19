
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
          
        services={[
          {
            header: "Service One",
            para: "Description for Service One.",
            buttonText: "Learn More",
            backgroundImage: "/cleaner.jpg"
          },
          {
            header: "Service Two",
            para: "Description for Service Two.",
            buttonText: "Discover",
            backgroundImage: "/shreds.jpg"
          },
          // Add more service objects as needed
        ]}
      />
          </div>
          <Footer/>
        </div>
    );
};

export default HireUs;
