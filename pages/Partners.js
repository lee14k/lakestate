import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FormFill from "@/components/FormFill";
import LogoContent from "@/components/LogoContent";
import SecondBorder from "@/components/SecondBorder";
import WaveOther from "@/components/WaveOther";
const Forms = () => {
    return (
        <div>
            <Navbar />
            <WaveOther imageUrl="/Firestarter-3071.jpg" header={"Our Partners"}/>
            <LogoContent/>
           <FormFill/>
            <Footer/>
        </div>
    );
};

export default Forms;
