import { clients } from '@/data/site'

export default function Clients() {
  return (
    <section id="clients" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Clients</h2>
      <p className="mt-3 text-gray-600 dark:text-gray-300">Representative past and present clients include:</p>

      <ul className="mt-8 columns-1 gap-6 sm:columns-2 lg:columns-3 [column-fill:_balance]">
        {clients.map((c) => (
          <li key={c} className="mb-3 break-inside-avoid text-gray-800 dark:text-gray-200">{c}</li>
        ))}
      </ul>
    </section>
  )
}
