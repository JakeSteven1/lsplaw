import Image from 'next/image'
import { mediators } from '@/data/site'
import { InformationCircleIcon } from '@heroicons/react/24/outline'

export default function Mediation() {
  return (
    <section id="mediation" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Mediation</h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          We conduct mediations <strong>by referral only</strong>. To schedule, please contact one of our mediators below.
        </p>
        <p className="mt-2 inline-flex items-center gap-2 text-sm text-amber-700 dark:text-amber-300">
          <InformationCircleIcon className="size-5" />
          We do not accept direct bookings from the public.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
        {mediators.map((m) => {
          // Route emails per client request
          const email =
            m.name.toLowerCase().startsWith('mark')
              ? 'mhester@lsplaw.net'
              : 'cplymire@lsplaw.net'

          const subject = `Mediation scheduling for ${m.name}`

          const isMark = m.name.toLowerCase().startsWith('mark')
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
                <h3 className="text-lg font-semibold">{m.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{m.role}</p>
                <div className="mt-3 flex flex-wrap items-center gap-4">
                  <a
                    href={`mailto:${email}?subject=${encodeURIComponent(subject)}`}
                    className="text-sm font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
                  >
                    Email to schedule →
                  </a>

                  {scheduleUrl && (
                    <a
                      href={scheduleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
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
