"use client"

import React, { type SVGProps } from "react"
import { GradientHeading } from "@/components/ui/gradient-heading"
import { LogoCarousel } from "@/components/ui/logo-carousel"

// Bank and Financial Institution Logos
function HDFCIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg" {...props}>
      <text x="10" y="40" fontSize="32" fontWeight="bold" fill="#004C8F">HDFC</text>
    </svg>
  )
}

function ICICIIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg" {...props}>
      <text x="10" y="40" fontSize="32" fontWeight="bold" fill="#F37021">ICICI</text>
    </svg>
  )
}

function SBIIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg" {...props}>
      <text x="10" y="40" fontSize="32" fontWeight="bold" fill="#22409A">SBI</text>
    </svg>
  )
}

function AxisIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg" {...props}>
      <text x="10" y="40" fontSize="32" fontWeight="bold" fill="#97144D">AXIS</text>
    </svg>
  )
}

function KotakIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg" {...props}>
      <text x="10" y="40" fontSize="28" fontWeight="bold" fill="#ED232A">KOTAK</text>
    </svg>
  )
}

function PNBIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg" {...props}>
      <text x="10" y="40" fontSize="32" fontWeight="bold" fill="#F15A29">PNB</text>
    </svg>
  )
}

function BajajIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg" {...props}>
      <text x="10" y="40" fontSize="28" fontWeight="bold" fill="#0066B2">BAJAJ</text>
    </svg>
  )
}

function TataIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg" {...props}>
      <text x="10" y="40" fontSize="32" fontWeight="bold" fill="#1C4E80">TATA</text>
    </svg>
  )
}

function LICIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg" {...props}>
      <text x="10" y="40" fontSize="32" fontWeight="bold" fill="#FF6B00">LIC</text>
    </svg>
  )
}

function YesIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg" {...props}>
      <text x="10" y="40" fontSize="28" fontWeight="bold" fill="#003DA5">YES BANK</text>
    </svg>
  )
}

function IndusIndIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg" {...props}>
      <text x="10" y="40" fontSize="24" fontWeight="bold" fill="#D71920">INDUSIND</text>
    </svg>
  )
}

function IDFCIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg" {...props}>
      <text x="10" y="40" fontSize="32" fontWeight="bold" fill="#8B1538">IDFC</text>
    </svg>
  )
}

// Array of financial institution logos
const allLogos = [
  { name: "HDFC Bank", id: 1, img: HDFCIcon },
  { name: "ICICI Bank", id: 2, img: ICICIIcon },
  { name: "State Bank of India", id: 3, img: SBIIcon },
  { name: "Axis Bank", id: 4, img: AxisIcon },
  { name: "Kotak Mahindra", id: 5, img: KotakIcon },
  { name: "Punjab National Bank", id: 6, img: PNBIcon },
  { name: "Bajaj Finserv", id: 7, img: BajajIcon },
  { name: "Tata Capital", id: 8, img: TataIcon },
  { name: "LIC Housing Finance", id: 9, img: LICIcon },
  { name: "Yes Bank", id: 10, img: YesIcon },
  { name: "IndusInd Bank", id: 11, img: IndusIndIcon },
  { name: "IDFC First Bank", id: 12, img: IDFCIcon },
]

export default function WorkedWith() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="mx-auto flex w-full max-w-screen-lg flex-col items-center space-y-8 px-4">
        <div className="text-center">
          <GradientHeading variant="secondary" size="sm">
            Trusted Financial Partners
          </GradientHeading>
          <GradientHeading size="xl" className="mt-2">
            We Work With Leading Banks
          </GradientHeading>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Partnered with India's top financial institutions to bring you the best loan solutions
          </p>
        </div>

        <LogoCarousel columnCount={4} logos={allLogos} />
      </div>
    </section>
  )
}
