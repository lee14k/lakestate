export default function HomeSix() {
  const logos = [
    {
      image: 'chamber.png'
    },
    {
      image: 'fox-valley-logo.png'
    },
    {
      image: 'dsisd.png'
    },
    {
      image: 'rrn.png'
    },
    {
      image: 'pathways_community_mental_health_logo.jpeg'
    },
    {
      image: 'Pufahl-Pallet-Logo.png'
    },
    {
      image: 'mirehab.png'
    },
  ]
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full grid grid-cols-8 bg-lakestate-light-blue">
        <div className="col-span-1 h-full flex items-center justify-end">
          <div className="bg-lakestate-blue h-full flex-grow"></div>
          <div className="h-full bg-white w-2 flex-shrink-0"></div>
          <div className="bg-orange-400 w-12 h-full flex-shrink-0"></div>
        </div>
        
        <div className="col-span-6 flex justify-center items-center text-white flex-col text-center py-6">
          <h5 className="text-5xl font-bold">Our Partners</h5>
          <p className="text-2xl">Lakestate Industries is proud to provide services for the following local agencies:</p>
        </div>
        
        <div className="col-span-1 h-full flex items-center">
          <div className="bg-orange-400 w-12 h-full flex-shrink-0"></div>
          <div className="h-full bg-white w-2 flex-shrink-0"></div>
          <div className="bg-lakestate-blue h-full flex-grow"></div>
        </div>
      </div>

      <div className="grid grid-cols-7 mx-12 gap-12 my-8">
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center items-center">
            <img src={logo.image} width="200px" height="200px" alt={`Partner logo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  )
}