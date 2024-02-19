
import ServiceGrid from "@/components/ServiceGrid";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const VocationalTraining = () => {
        return (
        <div>
            <Navbar />
            <div className='homewrapper'>
          <ServiceGrid
          headerOne="Vocational Training"
          headerTwo="Community Employment Program"
        headerThree="Student Services Program"
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
          bgImageShred="/bigabout.jpg"
          bgImageClean="/lsstock2.jpg"
          bgImage2="/lsstock2.jpg"

          />
          </div>
          <Footer/>
        </div>
    );
};

export default VocationalTraining;
