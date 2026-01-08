// src/components/sections/Mediation.tsx
import Image from 'next/image'
import { mediators } from '@/data/site'
// Removed InformationCircleIcon since the warning text is gone

export default function Mediation() {
  return (
    <section id="mediation" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        {/* Heading now dark-mode safe */}
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Mediation
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          To schedule a Mediation, please contact one of our mediators below.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
        {mediators.map((m) => {
          const isMark = m.name.toLowerCase().startsWith('mark')
          
          const email = isMark ? 'mhester@lsplaw.net' : 'cplymire@lsplaw.net'
          const subject = `Mediation scheduling for ${m.name}`
          
          // Only Mark gets the online scheduler link
          const scheduleUrl = isMark ? 'https://tennesseemediators.org/mark-levan' : undefined

          return (
            <div
              key={m.name}
              className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white/70 p-4 shadow-sm dark:border-white/10 dark:bg-white/5"
            >
              <div className="relative h-20 w-20 overflow-hidden rounded-xl ring-1 ring-black/5 dark:ring-white/10">
                <Image src={m.image} alt={m.name} fill className="object-cover" />
              </div>
              <div className="flex-1">
                {/* Mediator name now flips to white in dark mode */}
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{m.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{m.role}</p>
                <div className="mt-3 flex flex-wrap items-center gap-4">
                  {/* Logic: If it is Mark, DO NOT show email link. If it is NOT Mark, show email link. */}
                  {!isMark && (
                    <a
                      href={`mailto:${email}?subject=${encodeURIComponent(subject)}`}
                      className="text-sm font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
                    >
                      Email to schedule →
                    </a>
                  )}
                  
                  {/* Logic: Only shows if scheduleUrl exists (Mark) */}
                  {scheduleUrl && (
                    <a
                      href={scheduleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
                    >
                      Schedule online →
                    </a>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}