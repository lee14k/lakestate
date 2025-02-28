export default function PageHeader({ header }) {
  return (
    <div className="grid grid-cols-7 justify-center items-center h-full bg-blue-100">
      <div className="bg-lakestate-blue mr-2 h-full"></div>
      <div className="bg-orange-500 w-12 flex-grow h-full"></div>
      <h1 className="text-6xl font-bold my-8 text-center col-span-5">{header}</h1>
    </div>
  )
}