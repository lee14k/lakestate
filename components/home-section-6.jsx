export default function HomeSix () {
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
    <div className="flex flex-col justify-center items-center ">
      <h5 className="text-4xl">Our Partners</h5>
      <p className="text-2xl">Lakestate Industries is proud to provide services for the following local agencies:</p>
      <div className="grid grid-cols-7 mx-12 gap-12">
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center items-center">
            <img src={logo.image} width="200px" height="200px" />
          </div>
        ))}
      </div>
    </div>
  )
}