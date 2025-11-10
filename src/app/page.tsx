import Header from '@/components/site/Header'
import Hero from '@/components/sections/Hero'
import LogoCloud from '@/components/sections/LogoCloud'
import Mediation from '@/components/sections/Mediation'
import Attorneys from '@/components/sections/Attorneys'
import PracticeAreas from '@/components/sections/PracticeAreas'
import OurOffices from '@/components/sections/OurOffices'
import Contact from '@/components/sections/Contact'

export default function Page() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <Header />
      <main>
        <Hero />
        <LogoCloud />
        <Mediation />
        <Attorneys />
        <PracticeAreas />
        <OurOffices />
        <Contact />
      </main>
      <footer className="mx-auto max-w-7xl px-6 py-10 lg:px-8 border-t border-gray-900/10 dark:border-white/10">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Levan, Sprader & Plymire. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
