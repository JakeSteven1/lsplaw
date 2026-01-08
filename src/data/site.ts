// src/data/site.ts
import Benton from '@/images/attorneys/Benton_Patton.jpg'
// REMOVED: import Britney from '@/images/attorneys/Britney_Pope.jpg'
import Chris from '@/images/attorneys/Chris_Jones.jpg'
import Cindy from '@/images/attorneys/Cindy_Plymire.jpg'
import Mark from '@/images/attorneys/Mark_Levan.jpg'
import Paul from '@/images/attorneys/Paul_Sprader.jpg'
import Leaver from '@/images/Leaver.jpg'
// ADDED:
import Summer from '@/images/attorneys/summer.jpg'


export const FIRM_NAME = 'LeVan, Sprader, Patton & Plymire'
export const CONTACT_EMAIL = 'info@examplelaw.com'

export const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'Mediation', href: '#mediation' },
  { name: 'Attorneys', href: '#attorneys' },
  { name: 'Practice Areas', href: '#practice-areas' },
  { name: 'Our Offices', href: '#offices' },
  { name: 'Contact', href: '#contact' },
]

export const mediators = [
  {
    name: 'Mark Levan',
    role: 'Mediator',
    email: 'mlevan@lsplaw.net',
    image: Mark,
  },
  {
    name: 'Cynthia D. Plymire',
    role: 'Mediator',
    email: 'cplymire@lsplaw.net',
    image: Cindy,
  },
]

// ***** ATTORNEYS WITH BIOS *****
export const attorneys = [
  {
    name: 'Mark S. LeVan',
    role: 'Partner',
    image: Mark,
    email: 'mlevan@lsplaw.net',
    bio: `Founding partner. Born in Jackson, MS; in Nashville since the early 1960s. B.A., University of Mississippi (1983); J.D. with Honors, University of Tennessee College of Law (1986). Admitted in Tennessee State Courts and U.S. District Court, Middle District of Tennessee. Practice: Insurance Defense Litigation; Products Liability Defense. Tennessee Supreme Court Rule 31 listed mediator since 2005 with 1,000+ mediations conducted. For mediation scheduling contact Melinda Hester at 615-843-0301 or mhester@lsplaw.net. Direct: 615-843-0308.`,
  },
  {
    name: 'Paul L. Sprader',
    role: 'Partner',
    image: Paul,
    email: 'psprader@lsplaw.net',
    bio: `Founding partner from Huntsville, AL. B.A., University of Alabama (1986); J.D., University of Notre Dame (1990). Admitted in Tennessee & Alabama State Courts; U.S. District Courts for the Middle, Eastern, and Western Districts of Tennessee. Practice: Insurance Defense, Premises Liability, Wrongful Death, Insurance Coverage, Trucking, Construction Litigation. Direct: 615-843-0306.`,
  },
  {
    name: 'C. Benton Patton',
    role: 'Partner',
    image: Benton,
    email: 'bpatton@lsplaw.net',
    bio: `Founding partner from Nashville, TN. B.A., Vanderbilt University (1986, Vanderbilt Baseball); J.D., University of Memphis School of Law (1992). Admitted in Tennessee State Courts; U.S. District Courts for the Middle & Western Districts of Tennessee. Practice: Insurance Defense, Coverage, Premises Liability, Wrongful Death, Trucking Litigation. Direct: 615-843-0309.`,
  },
  {
    name: 'Cynthia D. Plymire',
    role: 'Partner / Mediator',
    image: Cindy,
    email: 'cplymire@lsplaw.net',
    bio: `Born Kansas City, KS (Apr. 22, 1966). Bar (1994, Tennessee); U.S. District Court, Middle District of Tennessee (1996). B.S., Middle Tennessee State University (1988). Worked as claims adjuster while attending Nashville School of Law (J.D. 1994). Prior: Safeco Adjuster; CNA Legal Liability Specialist; Ortale, Kelly, Herbert & Crawford (Associate then Partner, 1995–2011). Practice: Civil Litigation (insurance, auto, etc.), UM Defense, Premises Liability, Commercial Litigation, Large Loss Subrogation, some Personal Injury. Tennessee Supreme Court Rule 31 Mediator since 2014. For mediations: 615-481-4972 or cplymire@lsplaw.net.`,
  },
  {
    name: 'Chris Jones',
    role: 'Partner',
    image: Chris,
    email: '',
    bio: `Attorney at the firm (bio details forthcoming).`,
  },
  // REPLACED BRITNEY WITH SUMMER HERE
  {
    name: 'Summer O. Robinson',
    role: 'Associate Attorney',
    image: Summer,
    email: '',
    bio: `Summer O. Robinson is an associate attorney at the firm who graduated from Nashville School of Law in May 2021.`,
  },
  {
    name: 'Jamie A. Leaver',
    role: 'Associate Attorney',
    image: Leaver,
    email: '',
  },
]

export const practiceAreas = [
  { name: 'Motor vehicle accidents', icon: 'Truck' },
  { name: 'Premises liability', icon: 'BuildingOffice' },
  { name: 'Products liability', icon: 'Cube' },
  { name: 'Wrongful death claims', icon: 'Heart' },
  { name: 'Pedestrian accidents', icon: 'User' },
  { name: 'Catastrophic trucking accidents', icon: 'Truck' },
  { name: 'Construction defects', icon: 'Wrench' },
  { name: 'Defamation / Libel', icon: 'Megaphone' },
  { name: 'Insurance contract disputes', icon: 'DocumentText' },
]

export const clients = [
  'Alfa Vision Insurance Company',
  'American Commerce Insurance Company (“MAPRE”)',
  'American Indemnity Company',
  'American International Group (AIG) & affiliates, incl. AIG Claims Services, Inc.',
  'American National Property & Casualty Co.',
  'American Reliable Insurance Co.',
  'Auto Owners Insurance Co.',
  'AXA Global Risks',
  'Berkshire Hathaway Companies',
  'Berkley Risk Administrators Co.',
  'Bituminous Insurance Co.',
  'Blazin’ Wings dba Buffalo Wild Wings',
  'CAN Insurance Co.',
  'Carolina Casualty Company',
  'Clarendon National Ins. Co.',
  'Consolidated Freightways',
  'Consumers Continental Western Insurance Co.',
  'Conway Transportation',
  'Country Insurance & Financial Services',
  'Crum & Forster Insurance',
  'Empire Fire & Marine',
  'Erie Insurance Group',
  'Esurance',
  'First Mercury Insurance',
  'Gallagher Bassett Services',
  'Global Risk Holdings',
  'Government Employees Insurance Company (“GEICO”)',
]