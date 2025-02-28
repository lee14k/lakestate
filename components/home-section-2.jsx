import { AcademicCapIcon, SparklesIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

export default function HomeTwo() {
  const sections = [
    {
      icon: AcademicCapIcon,
      header: "Community",
      text:
        "Lakestate Industries is dedicated to creating opportunities for individuals that embrace diversity, promote equality, and enable each person to thrive and contribute meaningfully to their communities.",
    },
    {
      icon: SparklesIcon,
      header:"Support",
      text: "Lakestate Industries provides personalized assessments, training, and support to individuals that help them overcome barriers to employment.",
    },
    {
      icon: CheckCircleIcon,
      header: "Opportunity",
      text: "Lakestate Industries works diligently to help people overcome barriers and support their journey towards achieving their highest level of employment and community inclusion.",
    },
  ]
  return (
    <div className="flex  justify-around items-center mx-12 my-12">
    <div className="grid grid-cols-3 gap-12">
      {sections.map((section, index) => (
        <div key={index}>
          <div className="px-12 border-2 border-b-blue-200 flex flex-col justify-center items-center">
            <section.icon className="h-20 w-20 text-lakestate-blue " />
            <h2 className="text-2xl">{section.header}</h2>
            <p className="text-xl">{section.text}</p>
          </div>
          <div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}