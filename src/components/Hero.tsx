import Image from 'next/image'
import SupremeCourt from '@/images/supreme_court.jpg'

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden pt-16">
      {/* Background image (dark) */}
      <div className="absolute inset-0 -z-10 hidden dark:block">
        <Image
          src={SupremeCourt}
          alt=""
          fill
          priority
          className="object-cover opacity-70 mix-blend-multiply"
        />
      </div>
      {/* Background image (light) */}
      <div className="absolute inset-0 -z-10 dark:hidden">
        <Image
          src={SupremeCourt}
          alt=""
          fill
          priority
          className="object-cover opacity-10"
        />
      </div>

      {/* Decorative gradients (from Salient example) */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72rem]"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl py-28 sm:py-40 lg:py-52">
          <div className="text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl dark:text-white">
              LeVAN, SPRADER, PATTON &amp; PLYMIRE, PLLC
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-700 sm:text-xl/8 dark:text-gray-300">
              The AV rated LeVan, Sprader firm has provided quality legal services in Nashville and Middle Tennessee
              since 1998. Its attorneys are recognized as competent, ethical, and zealous advocates, handling general
              civil litigation in all Tennessee State and Federal Courts. The firm&apos;s practice focuses on defending
              corporations and insurance carriers in a wide range of areas, including Insurance Defense, Products
              Liability, and Governmental Tort Liability.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#mediation"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
              >
                Mediation
              </a>
              <a href="#contact" className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                Contact <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72rem]"
        />
      </div>
    </section>
  )
}
