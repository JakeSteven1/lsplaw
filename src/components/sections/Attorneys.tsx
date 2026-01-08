// src/components/sections/Attorneys.tsx
import Image from 'next/image'
import { attorneys } from '@/data/site'

// concise bios for each attorney — KEYS MATCH site.ts NAMES
const bios: Record<string, string> = {
  'Mark S. LeVan':
    'Mark S. LeVan is a founding partner of the firm and a 1986 honors graduate of the University of Tennessee School of Law. His practice focuses on Insurance Defense Litigation and Products Liability Defense. Mr. LeVan is also a highly experienced Tennessee Supreme Court Rule 31 listed mediator, having conducted over one thousand mediations.',
  'Paul L. Sprader':
    'Paul L. Sprader is a founding partner and a 1990 graduate of The University of Notre Dame Law School. He is admitted to practice in both Tennessee and Alabama state courts. His diverse practice includes Insurance Defense, Premises Liability, Wrongful Death, Trucking Litigation, and Construction Litigation.',
  'C. Benton Patton':
    "C. Benton Patton is a founding partner who graduated from the University of Memphis School of Law in 1992 after attending Vanderbilt University. He is admitted to practice in the U.S. District Courts for the Middle and Western Districts of Tennessee. Mr. Patton's practice areas include Insurance Defense Litigation, Coverage, Premises Liability, and Trucking Litigation.",
  'Cynthia D. Plymire':
    'Cynthia D. Plymire brings extensive industry experience to the firm, having worked as a claims adjuster while attending the Nashville School of Law. Admitted to the bar in 1994, her practice focuses on Civil Litigation, Uninsured Motorist Defense, Premises Liability, and Large Loss Subrogation. Ms. Plymire has handled thousands of cases to their conclusion and is also a Tennessee Supreme Court Rule 31 Mediator.',
  'Chris Jones':
    'Christopher M. Jones is a partner from Nashville who graduated from the Nashville School of Law in 2002. He is admitted to practice in the U.S. District Courts for the Middle and Western Districts of Tennessee. His practice focuses on a range of areas including Insurance Defense, Construction Litigation, Bad Faith Claims, and Appellate Practice.',
  // NEW ADDITION
  'Summer O. Robinson':
    'Summer O. Robinson is an associate attorney at the firm who graduated from Nashville School of Law in May 2021. She is admitted to practice in Tennessee State Courts and her practice focuses on Civil Litigation, Uninsured Motorist Defense, Premises Liability, and Wrongful Death.',
  'Jamie A. Leaver':
    'Jamie A. Leaver is an associate attorney at the firm who graduated from Belmont University College of Law in 2016. She is admitted to practice in Tennessee State Courts and the U.S. District Court for the Middle District of Tennessee. Her practice focuses on Insurance Defense, Construction Litigation, Premises Liability, Wrongful Death, and Trucking Litigation.',
}

export default function Attorneys() {
  return (
    <section
      id="attorneys"
      className="bg-white py-24 sm:py-32 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl dark:text-white">
            Our Attorneys
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-400">
            We’re a team of practical, trial-tested advocates dedicated to delivering efficient, favorable outcomes for
            our clients.
          </p>
        </div>

        {/* Attorney list */}
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
        >
          {attorneys.map((person) => (
            <li key={person.name} className="flex flex-col gap-6 xl:flex-row">
              <div className="relative w-52 flex-none aspect-[4/5] overflow-hidden rounded-2xl outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10">
                <Image
                  alt={person.name}
                  src={person.image}
                  fill
                  sizes="208px"
                  className="object-cover object-top"
                />
              </div>
              <div className="flex-auto">
                <h3 className="text-lg/8 font-semibold tracking-tight text-gray-900 dark:text-white">
                  {person.name}
                </h3>
                {person.role && (
                  <p className="text-base/7 text-gray-600 dark:text-gray-400">{person.role}</p>
                )}
                {bios[person.name] && (
                  <p className="mt-6 text-base/7 text-gray-600 dark:text-gray-400">
                    {bios[person.name]}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}