export default function HomeFour () {
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
    <div className="flex flex-col justify-center items-center">
      <div className="bg-blue-200 w-full flex flex-col justify-center items-center  h-24"><h4 className="text-3xl">Support our
        individuals</h4>
        <p>Each item we produce is a testament to the creativity, precision, and hard work of our talented
          workforce.</p>
      </div>

      <div className="flex justify-center items-center">
        <div className="grid grid-cols-3 gap-4">
          {products.map((product, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={product.image}
                className="w-64 h-64 object-contain"
                alt={`Product ${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}