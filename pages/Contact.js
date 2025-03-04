import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
import Link from 'next/link'
import PageHeader from '@/components/page-header';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Contact() {
  const [agreed, setAgreed] = useState(false)

  return (
    <div>
        <Navbar/>
        <PageHeader header="Contact Us"/>
        <div>
          <div className="isolate bg-white px-6 py-16 sm:py-24 lg:px-8 gap-12">
            <div className="mx-auto max-w-7xl">
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                {/* Maps Section */}
                <div className="grid gap-16">
                  <div className="rounded-xl overflow-hidden shadow-lg border-2 border-lakestate-blue" 
                       style={{ boxShadow: 'clamp(40px, 6vw, 23px) clamp(-20px, -4vw, -82px) 0px 0px #1c468a' }}>
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11132.1631751363!2d-87.0771579!3d45.7703727!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d4dbc6944e3be2d%3A0x2b03faa53618cc2!2sLakestate%20Industries!5e0!3m2!1sen!2sus!4v1719305765691!5m2!1sen!2sus" 
                      width="100%" 
                      height="300" 
                      allowFullScreen="" 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-lg border-2 border-lakestate-blue"  
                       style={{ boxShadow: 'clamp(40px, 6vw, 23px) clamp(-20px, -4vw, -82px) 0px 0px #ffa726' }}>
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2744.3177938934655!2d-87.40362158782384!3d46.54139997099154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d4e3f95be03295d%3A0x2da50d69ef4cfb79!2sLakeState%20Industries!5e0!3m2!1sen!2sus!4v1719305816060!5m2!1sen!2sus" 
                      width="100%" 
                      height="300" 
                      allowFullScreen="" 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                  </div>
                </div>
                
                {/* Form Section */}
                <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-lakestate-blue" 
                     style={{ boxShadow: 'clamp(40px, 6vw, 23px) clamp(-20px, -4vw, -82px) 0px 0px #1c468a' }}>
                  <form action="#" method="POST" className="space-y-8">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                          First name
                        </label>
                        <div className="mt-2.5">
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lakestate-blue sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                          Last name
                        </label>
                        <div className="mt-2.5">
                          <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lakestate-blue sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                          Company
                        </label>
                        <div className="mt-2.5">
                          <input
                            type="text"
                            name="company"
                            id="company"
                            autoComplete="organization"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lakestate-blue sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                          Email
                        </label>
                        <div className="mt-2.5">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="email"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lakestate-blue sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                          Phone number
                        </label>
                        <div className="relative mt-2.5">
                          <div className="absolute inset-y-0 left-0 flex items-center">
                            <label htmlFor="country" className="sr-only">
                              Country
                            </label>
                            <select
                              id="country"
                              name="country"
                              className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lakestate-blue sm:text-sm"
                            >
                              <option>US</option>
                              <option>CA</option>
                              <option>EU</option>
                            </select>
                            <ChevronDownIcon
                              className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </div>
                          <input
                            type="tel"
                            name="phone-number"
                            id="phone-number"
                            autoComplete="tel"
                            className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lakestate-blue sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                          Message
                        </label>
                        <div className="mt-2.5">
                          <textarea
                            name="message"
                            id="message"
                            rows={4}
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lakestate-blue sm:text-sm sm:leading-6"
                            defaultValue={''}
                          />
                        </div>
                      </div>
                      <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
                        <div className="flex h-6 items-center">
                          <Switch
                            checked={agreed}
                            onChange={setAgreed}
                            className={classNames(
                              agreed ? 'bg-orange-400' : 'bg-gray-200',
                              'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lakestate-blue'
                            )}
                          >
                            <span className="sr-only">Agree to policies</span>
                            <span
                              aria-hidden="true"
                              className={classNames(
                                agreed ? 'translate-x-3.5' : 'translate-x-0',
                                'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                              )}
                            />
                          </Switch>
                        </div>
                        <Switch.Label className="text-sm leading-6 text-gray-600">
                          By selecting this, you agree to our{' '}
                          <Link href="/Privacy" className="font-semibold text-lakestate-blue hover:text-lakestate-light-blue">
                            privacy&nbsp;policy
                          </Link>
                          .
                        </Switch.Label>
                      </Switch.Group>
                    </div>
                    <div className="mt-10">
                      <button
                        type="submit"
                        className="block w-full rounded-md bg-orange-400 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-lakestate-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lakestate-blue transition-colors duration-200"
                      >
                        Let's talk
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
    </div>
  )
}
