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

export default function Footer() {
  return (
    <footer className="bg-orange-500 footer text-white">
        <div className="max-w-7xl py-12 md:flex md:items-center md:justify-between ">
        <div className="flex justify-center items-center gap-6 md:order-2">
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
        <div className="grid grid-cols-2">
          <div>
            Address
          </div>
          <div className="text-center text-lg font-semibold">
            Your Company Name
          </div>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <img
            className="h-52 w-auto"
            src="/lilogo.png"
            alt="Your Company"
          />
          <p className="text-center text-xs leading-5 ">
            &copy; 2025 Lakestate Industries, All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
