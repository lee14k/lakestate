import Image from 'next/image'
const navigation = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/lakestateindustries',
    icon: (props) => (
      <svg fill="#ffffff" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },

]

const adddresses = [
  {
    location:'Escanaba',
    street: '1830 N 21st St',
    city: 'Escanaba, MI 49829',
    phone: '(906) 786-9212',
  },
  {
    location:'Marquette',
    street: '401 W Baraga Ave',
    city: 'Marquette, MI 49855',
    phone: '(906) 273-2131',
  }
]

export default function Footer() {
  return (
    <footer className="bg-orange-400 footer text-white">
      <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="grid grid-cols-2 gap-6 col-span-1">
            {adddresses.map((address) => (
              <div key={address.location} className="text-center">
                <div className="text-lg font-semibold">
                  {address.location}
                </div>
                <div className="text-md font-semibold">
                  {address.street}
                </div>
                <div className="text-md font-semibold">
                  {address.city}
                </div>
                <div className="text-md font-semibold">
                  {address.phone}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-2 text-center">
            <img
              className="h-52 w-auto mx-auto"
              src="/lilogo.png"
              alt="Your Company"
            />
            <p className="text-center text-s leading-5 font-bold ">
              &copy; 2025 Lakestate Industries, All rights reserved.
            </p>
          </div>

          <div className="flex justify-center items-center gap-6">
            <Image
              src="/carf.png"
              alt="CARF Accredited"
              width={100}
              height={100}
            />
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-12 w-12" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
