import ServiceGrid from '@/components/ServiceGrid'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WaveOther from '@/components/WaveOther'
import PageHeader from '@/components/page-header'
import HomeThree from '@/components/home-section-3'

const HireUs = () => {
  return (
    <div>
      <div>
        <Navbar />
        <div>
          <PageHeader header="Hire Us" />
        </div>
        <div className="py-8">
          <HomeThree header="Document Destruction" bodyText="We secure and confidentially dispose of sensitive information by shredding your documents with industrial-grade shredding equipment into unreadable fragments. For over 25 years, we have been providing document destruction services to area medical facilities, financial institutions, law firms, accounting firms, area businesses, as well as individuals with personal documents. Price: Drop off at our Escanaba or Marquette location $.35 per pound. We pick up at your business $.40 per pound ($25 minimum)" photoURL="shreds.jpg" reverse={true}
                     color="lakestate-blue" />
        </div>
        <div className="py-8">
          <HomeThree header="Janitorial Services" bodyText="Janitorial services are essential for maintaining a clean and healthy environment in commercial buildings, offices, schools, healthcare facilities, and other public spaces. Our janitorial crews will keep your building clean by sweeping, mopping, vacuuming, dusting, trash removal, restroom cleaning, and surface disinfecting. We can provide services on a regular schedule or as needed, tailored to the specific needs and requirements of each facility. Let us help you with your cleaning needs by contacting us in Escanaba at (906) 786-9212 or Marquette at (906) 273-2131 for a free quote." photoURL="cleaner.jpg" reverse={false}
                     color="orange-500" />
        </div>
        <div className="py-8">
          <HomeThree header="Survey Stakes" bodyText="Survey stakes are essential tools used in land surveying to mark boundaries, property lines, specific points on a piece of land or for personal use such as gardening, crafts, etc. We can customize your order to various lengths and types of stakes. We have the ability to make all types of stakes i.e. lathe, hub, survey, slope. Survey stakes come in a range of prices depending on the size and quantity. Contact us for current pricing." photoURL="survey.jpg" reverse={true}
                     color="lakestate-blue" />
        </div>
        <div className="py-8">
          <HomeThree header="Pallets and Pallet Stock" bodyText="We provide premium pallets and pallet stock, where quality meets sustainability. We understand that different businesses have unique requirements. Our pallets adhere to industry standards and regulations for safety and compliance. You can trust that our products meet the highest quality and safety requirements. Whether you are looking to streamline your supply chain, optimize storage space, or enhance efficiency in material handling, our premium pallets and pallet stock is the ideal choice. Contact us today to discuss your requirements and experience the difference quality pallets and pallet stock can make for your business.

" photoURL="pallet.jpg" reverse={false}
                     color="orange-500" />
        </div>
      </div>
      <Footer/>
    </div>
  )
}
export default HireUs
