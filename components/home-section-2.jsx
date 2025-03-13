import { AcademicCapIcon, SparklesIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

export default function HomeTwo() {
  const sections = [
    {
      icon: AcademicCapIcon,
      header: "Community",
      text:
        "Lakestate Industries is dedicated to creating opportunities for individuals that embrace diversity, promote equality, and enable each person to thrive and contribute meaningfully to their communities.",
      iconColor: "text-white",
      bgColor: "bg-lakestate-blue"
    },
    {
      icon: SparklesIcon,
      header:"Support",
      text: "Lakestate Industries provides personalized assessments, training, and support to individuals that help them overcome barriers to employment.",
      iconColor: "text-white",
      bgColor: "bg-orange-500"
    },
    {
      icon: CheckCircleIcon,
      header: "Opportunity",
      text: "Lakestate Industries works diligently to help people overcome barriers and support their journey towards achieving their highest level of employment and community inclusion.",
      iconColor: "text-white",
      bgColor: "bg-lakestate-blue"
    },
  ]
  return (
    <div className="flex justify-around items-center mx-4 sm:mx-8 md:mx-12 my-6 md:my-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 w-full">
        {sections.map((section, index) => (
          <div key={index} className="h-full">
            <div className={`px-4 sm:px-8 md:px-12 border-2 border-b-blue-200 flex flex-col h-auto md:h-96 text-white ${section.bgColor} py-6 md:py-0 rounded-lg`}>
              <section.icon className={`h-12 w-12 md:h-16 lg:h-20 md:w-16 lg:w-20 mt-4 md:mt-8 mb-2 md:mb-4 mx-auto ${section.iconColor}`} />
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 md:mb-4">{section.header}</h2>
              <p className="text-base md:text-lg lg:text-xl text-center font-semibold flex-grow">{section.text}</p>
              <div className="h-4 md:h-8"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}