import AboutFill from "@/components/AboutFill";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/page-header";
import HomeThree from '@/components/home-section-3'
const About = () => {
    return (
      <div>
        <Navbar/>
        <div>
         <PageHeader header="About Us"/>
        </div>
        <div className="py-8">
          <HomeThree header="Our Story" bodyText="Some text here" photoURL="donate.jpg" reverse={true} color="lakestate-blue" />
        </div>
        <div className="py-8">
          <HomeThree header="Welcome" bodyText="Some text here" photoURL="parallaxpic.jpg" reverse={false} color="orange-500" />
        </div>
        <div className="bg-lakestate-blue text-white flex flex-col justify-center items-center py-12 px-4 space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">Learn More</h2>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-md transition-colors">Our Services</button>
        </div>
        <div className="py-8">
          <HomeThree header="Help Our Cause" bodyText="100% of your generous donation goes directly to help individuals with disabilities become independent, productive members in our community. Lakestate Industries wants to ensure they will be able to provide vocational services for individuals with barriers to employment long into the future." photoURL="vcthree.jpg" reverse={true} color="orange-500" />
        </div>
        <div className="bg-lakestate-blue w-full h-6"></div>
        <div className="py-12 px-4">
          <h6 className="text-xl md:text-2xl font-bold text-center mb-8">Helpful Forms</h6>
          <div className="mx-auto grid w-full max-w-xl sm:grid-cols-3 items-center gap-6">
            <button
              className="max-h-52 w-full object-contain object-left rounded-md bg-orange-400  px-2 py-6 text-xl font-semibold text-white shadow-sm hover:bg-lakestate-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lakestate-blue">
              Pathways Community Mental Health
            </button>
            <button
              className="max-h-52 w-full object-contain object-left rounded-md bg-orange-400  px-2 py-6 text-xl font-semibold text-white shadow-sm hover:bg-lakestate-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lakestate-blue ">
              {' '}
              Michigan Rehabilitation Services (MRS)
            </button>
            <button
              className="max-h-52 w-full object-contain object-left rounded-md bg-orange-400  px-2 py-8 text-xl font-semibold text-white shadow-sm hover:bg-lakestate-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lakestate-blue">
              {' '}
              Respite <br />
              Form
            </button>
            <button
              className="max-h-52 w-full object-contain object-left rounded-md bg-orange-400  px-2 py-6 text-xl font-semibold text-white shadow-sm hover:bg-lakestate-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lakestate-blue">
              {' '}
              Hiawatha Respite Form
            </button>
            <button
              className="max-h-52 w-full object-contain object-left rounded-md bg-orange-400  px-2 py-6 text-xl font-semibold text-white shadow-sm hover:bg-lakestate-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lakestate-blue ">
              {' '}
              Employment Application
            </button>
          </div>
        </div>
      </div>
    );
};
export default About;
