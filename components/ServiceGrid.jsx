import SecondBorder from './SecondBorder'

export default function ServiceGrid({
  headerOne,
  paraOne,
  buttonOne,
  services = [],
  bgImage1,
  header,
}) {
  return (
    <div>
      <div className="serviceswrapper">
        {services.map((service, index) => (
          <div
            key={index}
            className={`serve flex ${index % 2 === 0 ? 'flex-row ' : 'flex-row-reverse bg-lakestate-blue text-white blueguy '} items-center`}
          >
            <div className="service-image w-1/2">
              {service.backgroundImage && (
                <img
                  src={service.backgroundImage}
                  style={{ width: '100%', height: 'auto' }}
                />
              )}
            </div>
            <div className="service-content w-1/2 flex flex-col justify-center items-start px-4">
              {service.header && (
                <h2 className="text-7xl font-bold mb-4 serviceheadlinetwo mx-24">
                  {service.header}
                </h2>
              )}
              {service.para && (
                <p className="mb-4 mx-24 text-2xl">{service.para}</p>
              )}
              {service.buttonText && (
                <button className="rounded-md bg-orange-500 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-lakestate-blue">
                  {service.buttonText}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
