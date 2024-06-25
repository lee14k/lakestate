import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {
  AcademicCapIcon,
  CheckCircleIcon,
  HandRaisedIcon,
  RocketLaunchIcon,
  SparklesIcon,
  SunIcon,
  UserGroupIcon,
} from '@heroicons/react/20/solid'
import Footer from './Footer'
import Navbar from './Navbar'
const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]
const stats = [
  { label: 'Business was founded', value: '1969' },
  { label: 'People on the team', value: '50+' },
  { label: 'individuals served', value: '250k' },
  { label: 'Wages earned', value: '$70M' },
]
const values = [
  {
    name: 'Provide high quality employees to our business community.',
    description: 'By focusing on the strengths and capabilities of each individual, we aim to bridge the gap between talented disabled individuals and the needs of businesses.',
    icon: SparklesIcon,
  },


    {
    name: 'Produce quality hand-crafted specialty products.',
    description: 'Each item we produce is a testament to the creativity, precision, and hard work of our talented workforce. ',
    icon: SparklesIcon,
  },

  {
    name: 'Provide vocational rehabilitation services.',
    description: 'Through personalized assessment, training, and support, we help our participants overcome barriers to employment. ',
    icon: SparklesIcon,
  },
  {
    name: 'Provide sub-contracting services',
    description: 'Our sub-contracting services offer businesses a reliable and high-quality solution for their needs while providing meaningful work opportunities for our participants.',
    icon: SparklesIcon,
  },
]

const benefits = [
  'Cash or Check Donations',
  'Online Donations',
  'Gifts in memory or honor of a loved one',
  'Charitable Bequests',
 
]

export default function AboutFill() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className>
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav >
        <Navbar/>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/25">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text hover:bg-gray-800"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7  hover:bg-gray-800"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <main className="relative isolate">
        {/* Background */}
        <div
          className="absolute inset-x-0 top-4 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#eb8334] to-[#ffffff] opacity-25"
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}
          />
        </div>

        {/* Header section */}
        <div className="px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl pt-24 text-center sm:pt-40">
            <h2 className="text-4xl font-bold tracking-tight text sm:text-6xl">We are dedicated to helping people maximize their abilities</h2>
            <p className="mt-6 text-lg leading-8 ">
            Founded in 1969, Lakestate began as an outgrowth of a parents group concerned with the lack of opportunities available for people with disabilities. Thus, Lakestate's focus has been giving persons with disabilities the opportunity to experience the rewards of working for "real pay" while removing barriers to employment and promoting community inclusion.


            </p>
          </div>
        </div>

        {/* Content section */}
        <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 text-base leading-7  lg:max-w-none lg:grid-cols-2">
              <div>
                <p>
                 Lakestate Industries provides vocational career exploration, job development, work training and job services to adult and student populations. We provide contracted services to businesses that make a significant impact on our community.
                </p>
                <p className="mt-8">
                 Many people in our area (8-10% of our population) experience difficulties getting and/or keeping employment because of their disability. Lakestate Industries serves individuals and gives them the opportunity to work either at Lakestate Industries or in the community with supports, which enables them to earn a paycheck, gain self-worth and live richer, more meaningful lives.
                </p>
              </div>
              <div>
                <p>
                 As part of our Work Training and Job Placement, we have developed many community-based training sites. Work Training helps develop employable work skills, as an individual is exposed to more work opportunities, they will also develop more work skills to bring with them to an employment site.


                </p>
                <p className="mt-8">
                 We base many of our work opportunities in the community in order for our employees to experience working alongside of individuals without barriers to employment. We have developed Mobile Crews and it has many benefits.
                </p>
              </div>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4">
              {stats.map((stat, statIdx) => (
                <div key={statIdx} className="flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6">
                  <dt className="text-base leading-7 ">{stat.label}</dt>
                  <dd className="text-3xl font-semibold tracking-tight ">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Image section */}
        <div className="mt-32 flex justify-center items-center ">
          <img
            src="/aboutlong.jpg"
            alt=""
            className="sm:h-3/5 sm:w-3/5"
          />
        </div>

        {/* Values section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our goals</h2>
           
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7  sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
            {values.map((value) => (
              <div key={value.name} className="relative pl-9">
                <dt className="inline font-semibold ">
                  <value.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-500" aria-hidden="true" />
                  {value.name}
                </dt>{' '}
                <dd className="inline">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Team section */}
       

        {/* CTA section */}
        <div className="relative isolate -z-10 mt-32 sm:mt-40">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
              <img
                className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
                src="/vcthree.jpg"
                alt=""
              />
              <div className="w-full flex-auto">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Help Our Cause</h2>
                <p className="mt-6 text-lg leading-8 ">
                  100% of your generous donation goes directly to help people with disabilities become independent, productive members in our community. Lakestate Industries wants to ensure they will be able to provide vocational services for persons with barriers to employment (people with cognitive, emotional, and/or physical disabilities) long into the future.
                </p>
                <ul
                  role="list"
                  className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7  sm:grid-cols-2"
                >
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-x-3">
                      <CheckCircleIcon className="h-7 w-5 flex-none" aria-hidden="true" />
                      {benefit}
                    </li>
                  ))}
                </ul>
               
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
              style={{
                clipPath:
                  'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
              }}
            />
          </div>
        </div>
      </main>
<Footer/>
    </div>
  )
}
