import ServiceGrid from '@/components/ServiceGrid'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WaveOther from '@/components/WaveOther'
import PageHeader from '@/components/page-header'
import HomeThree from '@/components/home-section-3'

const VocationalTraining = () => {
  return (
    <div>
      <Navbar />
      <PageHeader header="Our Services"/>
      <div>
        <div className="py-8">
          <HomeThree header="Individualized Assessments & Skill Development" bodyText="We conduct comprehensive assessments to identify each individual's strengths, abilities, interests, and support needs. We offer specialized training in a wide range of vocational skills tailored to the individual's interests and capabilities, such as, job-specific tasks, communication skills, and workplace etiquette."
                     photoURL="ls-sand-crop.jpg" reverse={true}
                     color="#1c468a" />
        </div>
        <div className="py-8">
          <HomeThree header="Job Placement, Coaching, and Support" bodyText="We provide assistance with job searches, resume building, interview preparation, and connecting individuals with inclusive employers who value inclusion and diversity. We offer ongoing support and job coaching to help individuals succeed in their chosen roles, including on-the-job training, and problem-solving assistance." photoURL="helping.jpg"
                     reverse={false}
                     color="#e87b35" />
        </div>
        <div className="py-8">
          <HomeThree header="Residential Services" bodyText="Residents can enjoy the independence of living in their own homes/apartments while benefiting from the peace of mind that comes with having support available whenever it is needed. Our professional staff members are committed to providing personalized assistance to ensure that each resident's unique needs are met while promoting independence. At Lakestate Industries, we understand the importance of community engagement. That's why we actively take our residents out and encourage their involvement in community activities and events. Whether it is attending local gatherings, participating in group outings, or volunteering in their community, we strive to keep our residents connected and engaged with the community around them." photoURL="ls-rez.jpg"
                     reverse={true}
                     color="#1c468a" />
        </div>
        <div className="py-8">
          <HomeThree header="Social Skills & Life Training" bodyText="We provide opportunities for individuals to develop essential life skills, such as time management, interpersonal communication, and self-advocacy, to enhance their overall independence and well-being." photoURL="Sorting-Paper.jpg" reverse={false}
                     color="#e87b35" />
        </div>
        <div className="py-8">
          <HomeThree header="Assistive Technology & Accommodations" bodyText="We provide access to assistive devices, adaptive technologies, and reasonable accommodations in the workplace to ensure individuals can perform their job duties effectively and comfortably." photoURL="Lumber-3096.jpg" reverse={true}
                     color="#1c468a" />
        </div>

      </div>
      <Footer />
    </div>
  )
}
export default VocationalTraining
