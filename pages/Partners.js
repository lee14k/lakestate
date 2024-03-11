import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FormFill from "@/components/FormFill";
import LogoContent from "@/components/LogoContent";
import SecondBorder from "@/components/SecondBorder";
const Forms = () => {
    return (
        <div>
            <Navbar />
            <SecondBorder backgroundImage="/donate.jpg" header={"Our Partners"} />
            <LogoContent/>
           <FormFill/>
            <Footer/>
        </div>
    );
};

export default Forms;
