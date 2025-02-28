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
    <div>
      <h5>Our Partners</h5>
      <div>
        {logos.map((logo, index) => (
          <div key={index}>
            <img src={logo.image} width="200px" height="200px" />
          </div>
        ))}
      </div>
    </div>
  )
}