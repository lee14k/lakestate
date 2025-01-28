import Link from 'next/link'
export default function LogoContent() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold leading-8 text-gray-900">
        Lakestate Industries is proud to provide services for the following local agencies:</h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-14 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <Link href="https://deltami.org/">

            <img
              className="col-span-2 max-h-32 w-full object-contain lg:col-span-1"
              src="/chamber.png"
              alt="Reform"
              width={158}
              height={48}
            />
          </Link>
<Link href="https://www.dsisd.net/">
          <img
            className="col-span-2 max-h-32 w-full object-contain lg:col-span-1"
            src="/dsisd.png"
            alt="Tuple"
            width={158}
            height={48}
          />
</Link>
          <Link href="https://www.michigan.gov/leo/bureaus-agencies/mrs">
          <img
            className="col-span-2 max-h-32 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="/mirehab.png"
            alt="SavvyCal"
            width={158}
            height={48}
          />
          </Link>
          <Link href="https://www.radioresultsnetwork.com/">
            <img
              className="col-span-2 max-h-32 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="/rrn.png"
              alt="SavvyCal"
              width={158}
              height={48}
            />
          </Link>
          <Link href="https://www.foxvalleywoodproducts.com/">
            <img
              className="col-span-2 max-h-32 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="/fox-valley-logo.png"
              alt="SavvyCal"
              width={158}
              height={48}
            />
          </Link>
          <Link href="https://pufahlpallet.com/">
            <img
              className="col-span-2 max-h-32 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="/Pufahl-Pallet-Logo.png"
              alt="SavvyCal"
              width={158}
              height={48}
            />
          </Link>
          <Link href="https://www.pathwaysup.org/">
            <img
              className="col-span-2 max-h-32 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="/pathways_community_mental_health_logo.jpeg"
              alt="SavvyCal"
              width={158}
              height={48}
            />
          </Link>
        </div>
      </div>
    </div>
  )
}
