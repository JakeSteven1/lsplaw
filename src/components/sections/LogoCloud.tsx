import Image from 'next/image'

// Local logos
import Geico from '@/images/logos/Geico_logo.svg.png'
import StateFarm from '@/images/logos/1920_logo-pressrelease-2.png'
import Progressive from '@/images/logos/Logo_of_the_Progressive_Corporation.svg.webp'
import PizzaHut from '@/images/logos/Pizza_Hut_2025.svg'
import BWW from '@/images/logos/bufallo_wild_wings.jpg'

// Light desktop grayscale hover reveal; in dark mode we show color by default.
const logos = [
  { alt: 'GEICO', src: Geico },
  { alt: 'State Farm', src: StateFarm },
  { alt: 'Progressive', src: Progressive },
  { alt: 'Pizza Hut', src: PizzaHut },
  { alt: 'Buffalo Wild Wings', src: BWW },
]

export default function LogoCloud() {
  return (
    <section aria-label="Client logos" className="bg-white py-16 sm:py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading like the template (dark-mode safe) */}
        <h2 className="text-center text-lg/8 font-semibold text-gray-900 dark:text-white">
          Trusted by some of the world’s largest businesses
        </h2>

        <div
          className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12
                     sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14
                     lg:mx-0 lg:max-w-none lg:grid-cols-5"
        >
          {logos.map((logo, i) => (
            <div
              key={logo.alt}
              className={[
                'col-span-2 w-full max-h-12 lg:col-span-1',
                i === 3 ? 'sm:col-start-2' : '',
              ].join(' ')}
            >
              <div className="relative mx-auto h-12 w-[158px]">
                <Image
                  alt={logo.alt}
                  src={logo.src}
                  fill
                  sizes="158px"
                  className="
                    object-contain
                    opacity-90
                    grayscale md:hover:opacity-100 md:hover:grayscale-0 transition
                    dark:opacity-100 dark:grayscale-0
                  "
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
