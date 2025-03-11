import Link from 'next/link'
export default function HomeFour() {
  const products = [
    {
      image: 'Board-0392.jpg'
    },
    {
      image: 'Firestarter-0419.png'
    },
    {
      image: 'Medal.jpg'
    },
    {
      image: 'Box.jpg'
    }
  ]
  return (
    <div className="flex flex-col justify-center items-center mt-8 text-white">
      <div className="w-full grid grid-cols-8 bg-lakestate-light-blue">
        <div className="col-span-1 h-full flex items-center justify-end">
          <div className="bg-lakestate-blue h-full flex-grow"></div>
          <div className="h-full bg-white w-2 flex-shrink-0"></div>
          <div className="bg-orange-500 w-12 h-full flex-shrink-0"></div>
        </div>
        
        <div className="col-span-6 flex justify-center items-center flex-col text-center py-6">
          <h4 className="text-5xl font-bold">Support our individuals</h4>
          <p className="text-xl text-center mx-12">Each item we produce is a testament to the creativity, precision, and hard work of our talented workforce.</p>
        </div>
        
        <div className="col-span-1 h-full flex items-center">
          <div className="bg-orange-500 w-12 h-full flex-shrink-0"></div>
          <div className="h-full bg-white w-2 flex-shrink-0"></div>
          <div className="bg-lakestate-blue h-full flex-grow"></div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-4">
        <div className="grid lg:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <div key={index} className="flex justify-center items-center w-64 h-64 border-lakestate-light-blue border-2">
              <img
                src={product.image}
                className="max-w-full max-h-full object-contain"
                alt={`Product ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
      <Link href="/Shop">
        <button
          className="rounded-md bg-lakestate-blue px-12 py-6 text-xl font-semibold text-white shadow-sm hover:bg-lakestate-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lakestate-blue my-12">Shop
          now
        </button>
      </Link>
    </div>
  )
}