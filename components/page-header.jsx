export default function PageHeader({ header }) {
  return (
    <div className="grid grid-cols-3 justify-center items-center bg-blue-200">
      <div className="bg-lakestate-blue w-64 h-12"></div>
      <div className="bg-orange-500 w-12 h-12"></div>
      <h1 className="text-6xl font-bold my-8 text-center ">{header}</h1>
    </div>
  )
}