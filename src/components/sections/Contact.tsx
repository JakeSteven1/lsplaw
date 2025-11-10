import { EnvelopeIcon } from '@heroicons/react/24/outline'

export default function Contact() {
  const contactEmail = 'hcurtis@lsplaw.net'

  return (
    <section id="contact" className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16 dark:bg-gray-800 dark:shadow-none dark:after:pointer-events-none dark:after:absolute dark:after:inset-0 dark:after:inset-ring dark:after:inset-ring-white/10 dark:after:sm:rounded-3xl">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
            Get in Touch
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-gray-300">
            Can’t find the office or need to reschedule? Contact us and we’ll assist you as soon as possible!
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href={`mailto:${contactEmail}`}
              className="inline-flex items-center gap-2 rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white dark:bg-white/10 dark:text-white dark:shadow-none dark:ring-1 dark:ring-white/10 dark:hover:bg-white/15 dark:focus-visible:outline-white"
            >
              <EnvelopeIcon className="size-5" />
              Get in Touch
            </a>
          </div>

          {/* Subtle gradient background glow */}
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 size-[256px] -translate-x-1/2 mask-[radial-gradient(closest-side,white,transparent)]"
          >
            <circle
              r={512}
              cx={512}
              cy={512}
              fill="url(#contact-gradient)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="contact-gradient">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  )
}
