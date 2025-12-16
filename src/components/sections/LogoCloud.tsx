import Image from 'next/image'

// Local logos
import Geico from '@/images/logos/Geico_logo.svg.png'
import StateFarm from '@/images/logos/1920_logo-pressrelease-2.png'
import Progressive from '@/images/logos/Logo_of_the_Progressive_Corporation.svg.webp'
import PizzaHut from '@/images/logos/Pizza_Hut_2025.svg'
import BWW from '@/images/logos/bufallo_wild_wings.jpg'
import Berkshire from '@/images/logos/Berkshire-Hathaway-Symbol.png'
import Zurich from '@/images/logos/Zurich_Insurance_Group_Logo_Horizontal.svg.png'

// Single-row logo strip (scroll + snap)
const logos = [
  { alt: 'GEICO', src: Geico },
  { alt: 'State Farm', src: StateFarm },
  { alt: 'Progressive', src: Progressive },
  { alt: 'Berkshire Hathaway', src: Berkshire },
  { alt: 'Zurich', src: Zurich },
  { alt: 'Pizza Hut', src: PizzaHut },
  { alt: 'Buffalo Wild Wings', src: BWW },
]

export default function LogoCloud() {
  return (
    <section aria-label="Client logos" className="bg-white py-16 sm:py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg/8 font-semibold text-gray-900 dark:text-white">
          Trusted by some of the world’s largest businesses
        </h2>

        <div className="mt-10">
          {/* Horizontal, scrollable, snap-to-logo */}
          <div
            className="
              flex items-center gap-10
              overflow-x-auto
              snap-x snap-mandatory
              pb-3
              [-ms-overflow-style:none] [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {logos.map((logo) => (
              <div
                key={logo.alt}
                className="snap-center flex-none"
              >
                <div className="relative h-12 w-[158px]">
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
      </div>
    </section>
  )
}
