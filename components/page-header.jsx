export default function PageHeader({ header }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold my-8 text-center">{header}</h1>
    </div>
  )
}