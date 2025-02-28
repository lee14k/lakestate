import { AcademicCapIcon, SparklesIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

export default function HomeTwo() {
  const sections = [
    {
      icon: AcademicCapIcon,
      header: "Header 1",
      text: "Text 1",
    },
    {
      icon: SparklesIcon,
      header: "Header 2",
      text: "Text 2",
    },
    {
      icon: CheckCircleIcon,
      header: "Header 3",
      text: "Text 3",
    },
  ]
  return (
    <div className="flex justify-around items-center">
    <div className="grid grid-cols-3">
      {sections.map((section, index) => (
        <div key={index}>
          <div>
            <section.icon className="h-6 w-6 text-gray-500" />
            <h2>{section.header}</h2>
            <p>{section.text}</p>
          </div>
          <div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}