import Image from 'next/image'

// Local logos
import Geico from '@/images/logos/Geico_logo.svg.png'
import StateFarm from '@/images/logos/1920_logo-pressrelease-2.png'
import Progressive from '@/images/logos/Logo_of_the_Progressive_Corporation.svg.webp'
import PizzaHut from '@/images/logos/Pizza_Hut_2025.svg'
import BWW from '@/images/logos/bufallo_wild_wings.jpg'

// Lightly faded + grayscale by default for uniform appearance.
const logos = [
  { alt: 'GEICO', src: Geico },
  { alt: 'State Farm', src: StateFarm },
  { alt: 'Progressive', src: Progressive },
  { alt: 'Pizza Hut', src: PizzaHut },
  { alt: 'Buffalo Wild Wings', src: BWW },
]

export default function LogoCloud() {
  return (
    <section aria-label="Client logos" className="bg-white py-12 sm:py-16 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12
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
                  className="object-contain opacity-80 grayscale hover:opacity-100 hover:grayscale-0 transition"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
