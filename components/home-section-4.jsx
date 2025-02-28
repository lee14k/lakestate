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
      <h4>Support our individuals</h4>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-3">
          {products.map((product, index) => (
            <div key={index} className="flex justify-center items-center">
              <img src={product.image} width="500px" height="500px" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}