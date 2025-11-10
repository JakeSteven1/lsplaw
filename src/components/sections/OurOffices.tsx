import Image from 'next/image'
import Lobby from '@/images/lobby.jpg'

export default function OurOffices() {
  const address = '109 Westpark Dr., Suite 220, Brentwood, TN 37027'
  const gmapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`

  return (
    <section id="offices" className="relative bg-white dark:bg-gray-900">
      {/* Left-side image (like template) */}
      <div className="relative h-80 overflow-hidden bg-indigo-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
        <Image
          alt="Office lobby interior"
          src={Lobby}
          fill
          className="object-cover"
          priority
        />
        <svg
          viewBox="0 0 926 676"
          aria-hidden="true"
          className="absolute -bottom-24 left-24 w-[231.5px] transform-gpu blur-[118px]"
        >
          <path
            d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
            fill="url(#office-gradient)"
            fillOpacity=".4"
          />
          <defs>
            <linearGradient
              id="office-gradient"
              x1="926.392"
              x2="-109.635"
              y1=".176"
              y2="321.024"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#776FFF" />
              <stop offset={1} stopColor="#FF4694" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Right-side content */}
      <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="pr-6 pl-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pr-0 lg:pl-24 xl:pl-32">
          <h2 className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">
            Get in Touch
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            Visit Our Offices
          </p>
          <p className="mt-6 text-base/7 text-gray-600 dark:text-gray-300">
            We are available for in-person consultations at our Brentwood office. Our full address is listed below, and
            we invite you to get directions.
          </p>
          <p className="mt-4 text-base/7 text-gray-700 dark:text-gray-100">
            <strong>LeVAN, SPRADER, PATTON, &amp; PLYMIRE</strong>
            <br />
            109 Westpark Dr., Suite 220
            <br />
            Brentwood, TN 37027
          </p>
          <div className="mt-8">
            <a
              href={gmapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:shadow-none"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
