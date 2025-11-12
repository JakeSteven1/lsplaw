import {
  BuildingOfficeIcon, CubeIcon, HeartIcon, MegaphoneIcon,
  TruckIcon, UserIcon, WrenchScrewdriverIcon, DocumentTextIcon, ScaleIcon
} from '@heroicons/react/24/outline'
import { practiceAreas } from '@/data/site'

const iconMap: Record<string, any> = {
  BuildingOffice: BuildingOfficeIcon,
  Cube: CubeIcon,
  Heart: HeartIcon,
  Megaphone: MegaphoneIcon,
  Truck: TruckIcon,
  User: UserIcon,
  Wrench: WrenchScrewdriverIcon,
  DocumentText: DocumentTextIcon,
}

export default function PracticeAreas() {
  return (
    <section id="practice-areas" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      {/* Add dark text color to the section heading */}
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
        Practice Areas
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {practiceAreas.map((item) => {
          const Icon = iconMap[item.icon] ?? ScaleIcon
          return (
            <div
              key={item.name}
              className="rounded-2xl border border-gray-200 p-6 shadow-sm bg-white/70
                         dark:border-white/10 dark:bg-white/5"
            >
              <Icon className="size-6 text-indigo-600 dark:text-indigo-400" />
              {/* Ensure the card title flips to light in dark mode */}
              <h3 className="mt-3 font-semibold text-gray-900 dark:text-white">
                {item.name}
              </h3>
            </div>
          )
        })}
      </div>
    </section>
  )
}
