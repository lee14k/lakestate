import { useEffect, useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [navigation, setNavigation] = useState([
    { name: 'Home', href: '/', current: false },
    { name: 'About', href: '/About', current: false },
    { name: 'Store', href: '/Shop', current: false },
    { name: 'Hire Us', href: '/HireUs', current: false },
    {
      name: 'Our Services',
      href: '/VocationalTraining',
      current: false,
    },
    { name: 'Contact', href: '/Contact', current: false },
  ])

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="px-2 sm:px-6 lg:px-8 bg-white navbarcontainer border-b-orange-500 border-b-4 mb-2">
            <div className="relative flex h-48 items-center justify-between">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="h-48 w-auto"
                  src="/lilogo.png"
                  alt="Your Company"
                />
              </div>
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-center">
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4 ">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        passHref
                        className={classNames(
                          item.current
                            ? 'bg-gray-900 text-white'
                            : 'hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-lg font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              {/* ... (additional navbar content if any) ... */}
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : ' hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
