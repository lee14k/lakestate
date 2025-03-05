export default function FormFill() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:flex flex-col">
          <div className="mx-auto w-full max-w-xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Helpful Links and Forms
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Click on the links below to access the forms or assistance you
              need. If you have any questions, please contact us.
            </p>
          </div>
          <div className="mx-auto grid w-full max-w-xl sm:grid-cols-3 items-center gap-6">
            <button className="max-h-52 w-full object-contain object-left rounded-md bg-orange-500  px-2 py-6 text-xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Pathways Community Mental Health
            </button>
            <button className="max-h-52 w-full object-contain object-left rounded-md bg-orange-500  px-2 py-6 text-xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ">
              {' '}
              Michigan Rehabilitation Services (MRS)
            </button>
            <button className="max-h-52 w-full object-contain object-left rounded-md bg-orange-500  px-2 py-8 text-xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              {' '}
              Respite <br />
              Form
            </button>
            <button className="max-h-52 w-full object-contain object-left rounded-md bg-orange-500  px-2 py-6 text-xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              {' '}
              Hiawatha Respite Form
            </button>
            <button className="max-h-52 w-full object-contain object-left rounded-md bg-orange-500  px-2 py-6 text-xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ">
              {' '}
              Employment Application
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
