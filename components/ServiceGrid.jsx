import SecondBorder from "./SecondBorder";

export default function ServiceGrid({
  headerOne, paraOne, buttonOne, services = [], bgImage1, header
}) {
  return (
    <div>
      <SecondBorder backgroundImage={bgImage1} 
      header={header}
      />
<div className="serviceswrapper">
      {services.map((service, index) => (
        <div key={index} className={`serve flex ${index % 2 === 0 ? 'flex-row ' : 'flex-row-reverse bg-sky-900 text-white'} items-center`}>
            <div className="service-image w-1/2">
            {service.backgroundImage && <img src= {service.backgroundImage} style={{ width: '100%', height: 'auto' }}/>}
          </div>
          <div className="service-content sm:w-48 w-1/2  flex flex-col justify-center items-start px-4">
            {service.header && <h2 className="text-4xl mb-4">{service.header}</h2>}
            {service.para && <p className="mb-4">{service.para}</p>}
            {service.buttonText && (
              <button className="rounded-md bg-orange-400 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500">{service.buttonText}</button>
            )}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}