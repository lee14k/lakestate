
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
           paraOne="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum corrupti
          at ipsum quam debitis eum cumque! Voluptas explicabo illum cupiditate
          accusamus beatae? Iusto facere consequuntur quas, autem nesciunt
          provident blanditiis."
          paraTwo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum corrupti
          at ipsum quam debitis eum cumque! Voluptas explicabo illum cupiditate
          accusamus beatae? Iusto facere consequuntur quas, autem nesciunt
          provident blanditiis."
          paraThree="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum corrupti
          at ipsum quam debitis eum cumque! Voluptas explicabo illum cupiditate
          accusamus beatae? Iusto facere consequuntur quas, autem nesciunt
          provident blanditiis."
          bgImageShred="/shredded.png"
          bgImageClean="/cleaning.png"
          />
          </div>
          <Footer/>
        </div>
    );
};

export default HireUs;
