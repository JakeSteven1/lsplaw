import Image, { type StaticImageData } from 'next/image'

// Local logos
import Geico from '@/images/logos/Geico_logo.svg.png'
import StateFarm from '@/images/logos/1920_logo-pressrelease-2.png'
import Progressive from '@/images/logos/Logo_of_the_Progressive_Corporation.svg.webp'
import PizzaHut from '@/images/logos/Pizza_Hut_2025.svg'
import BWW from '@/images/logos/bufallo_wild_wings.jpg'
import Berkshire from '@/images/logos/Berkshire-Hathaway-Symbol.png'
import Zurich from '@/images/logos/Zurich_Insurance_Group_Logo_Horizontal.svg.png'

type Logo = { alt: string; src: StaticImageData }

const logos: Logo[] = [
  { alt: 'GEICO', src: Geico },
  { alt: 'State Farm', src: StateFarm },
  { alt: 'Progressive', src: Progressive },
  { alt: 'Berkshire Hathaway', src: Berkshire },
  { alt: 'Zurich', src: Zurich },
  { alt: 'Pizza Hut', src: PizzaHut },
  { alt: 'Buffalo Wild Wings', src: BWW },
]

export default function LogoCloud() {
  // Duplicate for seamless marquee
  const track = [...logos, ...logos]

  return (
    <section aria-label="Client logos" className="bg-white py-16 sm:py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg/8 font-semibold text-gray-900 dark:text-white">
          Trusted by some of the world’s largest businesses
        </h2>

        <div className="mt-10">
          {/* Marquee container */}
          <div className="pause-on-hover relative overflow-hidden">
            {/* Optional subtle edge fade */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white dark:from-gray-900" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white dark:from-gray-900" />

            {/* Track */}
            <div
              className="
                flex w-max items-center gap-10 py-2
                motion-reduce:animate-none animate-logo-marquee
              "
            >
              {track.map((logo, idx) => (
                <div key={`${logo.alt}-${idx}`} className="flex-none">
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

          {/* Still allow manual scrolling on small screens if you want */}
          {/* If you prefer purely auto, leave as-is. */}
        </div>
      </div>
    </section>
  )
}
