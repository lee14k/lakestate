import AboutFill from "@/components/AboutFill";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/page-header";
import HomeThree from '@/components/home-section-3'
import Link from 'next/link'
import { CheckCircleIcon } from '@heroicons/react/20/solid'
const About = () => {
  const benefits = [
    'Cash or Check Donations',
    'Online Donations',
    'Gifts in memory or honor of a loved one',
    'Charitable Bequests',

  ]
    return (
      <div>
        <Navbar/>
        <div>
         <PageHeader header="About Us"/>
        </div>
        <div className="">
          <HomeThree header="Our Story" bodyText="Founded in 1969, Lakestate Industries began as an outgrowth of a parents group concerned with the lack of opportunities available for individuals with disabilities. Thus, Lakestate Industries' focus has been giving individuals with disabilities the opportunity to experience the rewards of working for pay while removing barriers to employment and promoting community inclusion." photoURL="/ls-sign-crop.jpg" reverse={true} color="#1c468a" />
        </div>
        <div className="">
          <HomeThree  bodyText=" Lakestate Industries serves individuals and gives them the opportunity to work either at Lakestate Industries or in the community with supports, which enables them to earn a paycheck, gain self-worth and live richer, more meaningful lives. As part of our work training and job placement, we have developed many community-based training sites. Work training helps develop employable work skills, as an individual is exposed to more work opportunities, they will also develop more work skills to bring with them to an employment site. We base many of our work opportunities in the community in order for our individuals to experience working alongside of individuals without barriers to employment. We have developed mobile crews and they have many benefits." photoURL="/3085-wood-worker.jpg" reverse={false} color="#e87b35" />
        </div>
        <div className="w-full grid grid-cols-8 bg-lakestate-light-blue text-white">
          <div className="col-span-1 h-full flex items-center justify-end">
            <div className="bg-lakestate-blue h-full flex-grow"></div>
            <div className="h-full bg-white w-2 flex-shrink-0"></div>
            <div className="bg-orange-500 w-12 h-full flex-shrink-0"></div>
          </div>
          
          <div className="col-span-6 flex flex-col justify-center items-center py-12 px-4 space-y-4">
            <h2 className="text-5xl font-bold">Learn More</h2>
            <Link href="/VocationalTraining">
              <button
                className="bg-orange-500 hover:bg-orange-500 text-white font-semibold py-2 px-6 rounded-md transition-colors text-2xl">Our
                Services
              </button>
            </Link>
          </div>

          <div className="col-span-1 h-full flex items-center">
            <div className="bg-orange-500 w-12 h-full flex-shrink-0"></div>
            <div className="h-full bg-white w-2 flex-shrink-0"></div>
            <div className="bg-lakestate-blue h-full flex-grow"></div>
          </div>
        </div>
        <div className="py-8 flex flex-col items-center">
          <HomeThree 
            header="Help Our Cause"
            bodyText="100% of your generous donation goes directly to help individuals with disabilities become independent, productive members in our community. We want to ensure they will be able to provide vocational services for individuals with barriers to employment long into the future."
            photoURL="/3011-thumb-up.jpg"
            reverse={true} 
            color="#e87b35"
            actionElement={
              <form 
                method="post" 
                action="https://www.paypal.com/cgi-bin/webscr" 
                target="_blank"
                className="flex justify-center"
              >
                <input name="cmd" value="_s-xclick" type="hidden" />
                <input name="hosted_button_id" value="UKXPGZ4NBG5EC" type="hidden" />
                <button 
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-md transition-colors text-2xl"
                >
                  Donate
                </button>
                <img 
                  alt="" 
                  src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" 
                  width="1" 
                  height="1" 
                  border="0"
                />
              </form>
            }
          />
          
          <ul
            role="list"
            className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8 text-base leading-7 max-w-3xl mx-auto px-4"
          >
            {benefits.map((benefit) => (
              <li key={benefit} className="flex gap-x-3 items-center">
                <CheckCircleIcon className="h-6 w-6 flex-none text-orange-500" aria-hidden="true" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-lakestate-blue w-full h-6"></div>
        <div className="py-12 px-4">
          <h6 className="text-xl md:text-2xl font-bold text-center mb-8">Helpful Forms and Links</h6>
          <div className="mx-auto grid w-full max-w-4xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="h-full">
              <Link href="http://pathwaysup.org/" className="h-full">
                <button className="w-full h-full rounded-md bg-orange-500 px-4 py-6 text-lg font-semibold text-white shadow-sm hover:bg-lakestate-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lakestate-blue transition-colors flex items-center justify-center">
                  Pathways Health
                </button>
              </Link>
            </div>
            
            <div className="h-full">
              <Link href="https://www.michigan.gov/leo/bureaus-agencies/mrs" className="h-full">
                <button className="w-full h-full rounded-md bg-orange-500 px-4 py-6 text-lg font-semibold text-white shadow-sm hover:bg-lakestate-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lakestate-blue transition-colors flex items-center justify-center">
                  Michigan Rehab Services
                </button>
              </Link>
            </div>
            
            <div className="h-full">
              <Link href="https://cdn.shopify.com/s/files/1/0680/3210/2648/files/RESPITE_SERVICES_Time_Sheet_-_HBH_1.docx?v=1741885468" className="h-full">
                <button className="w-full h-full rounded-md bg-orange-500 px-4 py-6 text-lg font-semibold text-white shadow-sm hover:bg-lakestate-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lakestate-blue transition-colors flex items-center justify-center">
                  Hiawatha Respite
                </button>
              </Link>
            </div>
            
            <div className="h-full">
              <Link href="https://cdn.shopify.com/s/files/1/0680/3210/2648/files/NEW_RESPITE_FORM_717.pdf?v=1741885468" className="h-full">
                <button className="w-full h-full rounded-md bg-orange-500 px-4 py-6 text-lg font-semibold text-white shadow-sm hover:bg-lakestate-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lakestate-blue transition-colors flex items-center justify-center">
                  Respite
                </button>
              </Link>
            </div>
            
            <div className="h-full">
              <Link href="https://cdn.shopify.com/s/files/1/0680/3210/2648/files/New_Employment_Application.pdf?v=1741885468" className="h-full">
                <button className="w-full h-full rounded-md bg-orange-500 px-4 py-6 text-lg font-semibold text-white shadow-sm hover:bg-lakestate-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lakestate-blue transition-colors flex items-center justify-center">
                  Employment Application
                </button>
              </Link>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
};
export default About;
