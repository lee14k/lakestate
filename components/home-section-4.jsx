export default function HomeFour() {
  const products = [
    {
      image: 'Board-0392.jpg'
    },
    {
      image: 'Firestarter-0419.jpg'
    },
    {
      image: 'Medal.jpg'
    }
  ]
  return (
    <div className="flex flex-col justify-center items-center my-10">
      <div className="bg-blue-200 w-full flex flex-col justify-center items-center h-36"><h4 className="text-5xl">Support our
        individuals</h4>
        <p className="text-xl text-center mx-48">Each item we produce is a testament to the creativity, precision, and hard work of our talented
          workforce.</p>
      </div>

      <div className="flex justify-center items-center my-6">
        <div className="grid grid-cols-3 gap-4">
          {products.map((product, index) => (
            <div key={index} className="flex justify-center items-center w-64 h-64 border">
              <img
                src={product.image}
                className="max-w-full max-h-full object-contain"
                alt={`Product ${index}`}
              />
            </div>
          ))}
        </div>
      </div>
      <button className="rounded-md bg-lakestate-blue px-12 py-6 text-xl font-semibold text-white shadow-sm hover:bg-lakestate-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lakestate-blue mb-48">Shop now</button>
    </div>
  )
}