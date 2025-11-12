'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ScaleIcon } from '@heroicons/react/24/outline'
import { navigation, FIRM_NAME } from '@/data/site'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>('#home')

  useEffect(() => {
    const ids = navigation.map((n) => n.href.replace('#', ''))
    const observers = ids.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive('#' + id)
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: [0, 1] }
      )
      obs.observe(el)
      return obs
    })
    return () => {
      observers.forEach((o) => o?.disconnect())
    }
  }, [])

  const linkCls = (href: string) =>
    `text-sm font-semibold ${
      active === href
        ? 'text-indigo-600 dark:text-indigo-400'
        : 'text-gray-900 dark:text-white'
    } hover:text-indigo-600 dark:hover:text-indigo-400`

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md dark:bg-gray-900/80 border-b border-gray-900/10 dark:border-white/10">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8"
      >
        <div className="flex items-center gap-2">
          <ScaleIcon className="size-6 text-indigo-600 dark:text-indigo-400" />
          {/* Make firm name dark-mode safe */}
          <a
            href="#home"
            className="text-base font-semibold text-gray-900 dark:text-white"
          >
            {FIRM_NAME}
          </a>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className={linkCls(item.href)}>
              {item.name}
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen(true)}
          className="lg:hidden p-2 rounded-md hover:bg-gray-50 dark:hover:bg-white/5"
        >
          <Bars3Icon className="size-6 text-gray-900 dark:text-white" />
        </button>
      </nav>

      <Dialog open={open} onClose={setOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50 bg-black/20" aria-hidden="true" />
        <DialogPanel className="fixed right-0 top-0 z-50 h-full w-80 overflow-y-auto bg-white p-6 dark:bg-gray-900">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ScaleIcon className="size-6 text-indigo-600 dark:text-indigo-400" />
              {/* Make firm name dark-mode safe in the drawer too */}
              <span className="font-semibold text-gray-900 dark:text-white">
                {FIRM_NAME}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="p-2 rounded-md hover:bg-gray-50 dark:hover:bg-white/5"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="size-6 text-gray-900 dark:text-white" />
            </button>
          </div>

          <div className="mt-6 space-y-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
              >
                {item.name}
              </a>
            ))}
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
