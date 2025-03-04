export default function PageHeader({ header }) {
  return (
    <div className="grid grid-cols-8 justify-center items-center h-full bg-lakestate-light-blue text-white">
      <div className="col-span-2 h-full flex items-center">
        <div className="bg-lakestate-blue h-full flex-grow"></div>
        <div className="h-full bg-white w-2 flex-shrink-0"></div>
      </div>
      <div className="bg-orange-400 flex-grow w-12 h-full"></div>
      <h1 className="text-6xl font-bold my-8 text-center col-span-5">{header}</h1>
    </div>
  )
}