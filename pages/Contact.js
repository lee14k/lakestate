import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
import Link from 'next/link'
import PageHeader from '@/components/page-header';
import Modal from '../components/Modal';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Contact() {
  const [agreed, setAgreed] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    country: 'US',
    phoneNumber: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false,
    message: ''
  })
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate form
    if (!agreed) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        message: 'Please agree to our privacy policy before submitting.'
      })
      return
    }

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        message: 'Please fill out all required fields.'
      })
      return
    }

    // Submit form
    setFormStatus({
      isSubmitting: true,
      isSubmitted: false,
      isError: false,
      message: ''
    })

    console.log('Submitting form data:', formData)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      console.log('Response status:', response.status)
      const data = await response.json()
      console.log('Response data:', data)

      if (!response.ok) {
        throw new Error(data.error || data.details || 'Something went wrong')
      }

      // Show success modal
      setSuccessMessage(data.message);
      setShowSuccessModal(true);

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        country: 'US',
        phoneNumber: '',
        message: ''
      })
      setAgreed(false)
      
    } catch (error) {
      console.error('Error submitting form:', error)
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        message: error.message || 'Failed to send message. Please try again later.'
      })
    }
  }

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
                       style={{ boxShadow: 'clamp(40px, 6vw, 23px) clamp(-20px, -4vw, -82px) 0px 0px #e87b35' }}>
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
                  
                  {formStatus.isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                        <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="mt-6 text-xl font-semibold text-gray-900">Thank you!</h3>
                      <p className="mt-2 text-gray-600">Your message has been sent successfully. We'll get back to you soon.</p>
                      <button
                        type="button"
                        onClick={() => setFormStatus(prev => ({ ...prev, isSubmitted: false }))}
                        className="mt-8 inline-flex items-center rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-lakestate-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lakestate-blue transition-colors duration-200"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-8">
                      {formStatus.isError && (
                        <div className="rounded-md bg-red-50 p-4">
                          <div className="flex">
                            <div className="flex-shrink-0">
                              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div className="ml-3">
                              <p className="text-sm text-red-700">{formStatus.message}</p>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                          <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                            First name
                          </label>
                          <div className="mt-2.5">
                            <input
                              type="text"
                              name="firstName"
                              id="first-name"
                              value={formData.firstName}
                              onChange={handleChange}
                              autoComplete="given-name"
                              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lakestate-blue sm:text-sm sm:leading-6"
                              required
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
                              name="lastName"
                              id="last-name"
                              value={formData.lastName}
                              onChange={handleChange}
                              autoComplete="family-name"
                              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lakestate-blue sm:text-sm sm:leading-6"
                              required
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
                              value={formData.company}
                              onChange={handleChange}
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
                              value={formData.email}
                              onChange={handleChange}
                              autoComplete="email"
                              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lakestate-blue sm:text-sm sm:leading-6"
                              required
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
                                value={formData.country}
                                onChange={handleChange}
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
                              name="phoneNumber"
                              id="phone-number"
                              value={formData.phoneNumber}
                              onChange={handleChange}
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
                              value={formData.message}
                              onChange={handleChange}
                              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lakestate-blue sm:text-sm sm:leading-6"
                              required
                            />
                          </div>
                        </div>
                        <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
                          <div className="flex h-6 items-center">
                            <Switch
                              checked={agreed}
                              onChange={setAgreed}
                              className={classNames(
                                agreed ? 'bg-orange-500' : 'bg-gray-200',
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
                          disabled={formStatus.isSubmitting}
                          className={`block w-full rounded-md ${formStatus.isSubmitting ? 'bg-gray-400' : 'bg-orange-500 hover:bg-lakestate-blue'} px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lakestate-blue transition-colors duration-200`}
                        >
                          {formStatus.isSubmitting ? 'Sending...' : 'Let\'s talk'}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
        {/* Success Modal */}
        {showSuccessModal && (
          <Modal onClose={() => setShowSuccessModal(false)}>
            <div className="success-modal">
              <h2>Thank You!</h2>
              <p>{successMessage}</p>
              <button onClick={() => setShowSuccessModal(false)}>Close</button>
            </div>
          </Modal>
        )}
    </div>
  )
}
