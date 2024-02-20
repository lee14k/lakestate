
import ServiceGrid from "@/components/ServiceGrid";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const VocationalTraining = () => {
    return (
        <div>
            <Navbar />
            <div className='homewrapper'>
          <ServiceGrid
          headerOne="Quality Services for Hire"
          headerTwo="Confidential Shredding and Document Destruction"
        headerThree="Janitorial Services"
        bgImage1='/cleaner.jpg'
        header="Vocational Training"
          
        services={[
          {
            header: "Individualized Assessments",
            para: "We conduct comprehensive assessments to identify each individual's strengths, abilities, interests, and support needs.",
            backgroundImage: "/cleaner.jpg"
          },
          {
            header: "Skill Development",
            para: "We offer specialized training in a wide range of vocational skills tailored to the individual's interests and capabilities, such as, job-specific tasks, communication skills, and workplace etiquette.",
            backgroundImage: "/shreds.jpg"
          },
          {
            header: "Job Placement Services",
            para: "We provide assistance with job searches, resume building, interview preparation, and connecting individuals with inclusive employers who value inclusion and diversity..",
            backgroundImage: "/shreds.jpg"
          },
          {
            header: "Job Coaching and Support",
            para: "We offer ongoing support and job coaching to help individuals succeed in their chosen roles, including on-the-job training, and problem-solving assistance.",
            backgroundImage: "/shreds.jpg"
          },
          {
            header: "Social and Life Skills Training",
            para: "We provide opportunities for individuals to develop essential life skills, such as time management, personal hygiene, interpersonal communication, and self-advocacy, to enhance their overall independence and well-being.",
            backgroundImage: "/shreds.jpg"
          },
          {
            header: "Assistive Technology and Accommodations",
            para: "We provide access to assistive devices, adaptive technologies, and reasonable accommodations in the workplace to ensure individuals can perform their job duties effectively and comfortably.",
            backgroundImage: "/shreds.jpg"
          },
        ]}
      />
          </div>
          <Footer/>
        </div>
    );
};

export default VocationalTraining;
