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
      bgColor: "bg-orange-400"
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
    <div className="flex justify-around items-center mx-12 my-12">
      <div className="grid grid-cols-3 gap-12 w-full">
        {sections.map((section, index) => (
          <div key={index} className="h-full">
            <div className={`px-12 border-2 border-b-blue-200 flex flex-col h-96 text-white ${section.bgColor}`}>
              <section.icon className={`h-20 w-20 mt-8 mb-4 mx-auto ${section.iconColor}`} />
              <h2 className="text-3xl font-bold text-center mb-4">{section.header}</h2>
              <p className="text-xl text-center font-semibold flex-grow">{section.text}</p>
              <div className="h-8"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}