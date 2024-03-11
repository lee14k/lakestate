import ServiceGrid from '@/components/ServiceGrid'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const ResidentialServices = () => {
  return (
    <div>
      <Navbar />
      <div className="homewrapper">
        <ServiceGrid
          headerOne="Quality Services for Hire"
          headerTwo="Confidential Shredding and Document Destruction"
          headerThree="Janitorial Services"
          bgImage1="/donate.jpg"
          header="Residential Services"
          services={[
            {
              header: 'Semi-Independent Living',
              para: "Residents can enjoy the independence of living in their own homes/apartments while benefiting from the peace of mind that comes with having support available whenever it's needed. Our professional staff members are committed to providing personalized assistance to ensure that each resident's unique needs are met while promoting independence and autonomy. ",
              backgroundImage: '/coaching.jpg',
            },
            {
              header: 'Personalized Assistance',
              para: "Whether it's help with daily tasks, medication management, or simply having someone to support the tasks of daily living, our staff is here to ensure that residents can live comfortably and confidently in their own homes.",
              backgroundImage: '/vcthree.jpg',
            },
            {
              header: 'Commmunity Engagement',
              para: "At Lakestate Industries, we understand the importance of community engagement. That's why we actively take our residents out and encourage their involvement in community activities and events. Whether it's attending local gatherings, participating in group outings, or volunteering for worthy causes, we strive to keep our residents connected and engaged with the community around them.",
              backgroundImage: '/vcfour.jpg',
            },
          ]}
        />
      </div>
      <Footer />
    </div>
  )
}

export default ResidentialServices
