"use client"

import { useEffect, createContext, useContext, type ReactNode } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register GSAP plugins only once
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const GSAPContext = createContext<typeof gsap | null>(null)

export function useGSAP() {
  return useContext(GSAPContext)
}

export default function GSAPProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Global GSAP defaults for smooth animations
    gsap.defaults({
      ease: "power3.out",
      duration: 0.6,
    })

    // Configure ScrollTrigger for better performance
    ScrollTrigger.config({
      limitCallbacks: true,
      syncInterval: 150,
    })

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return <GSAPContext.Provider value={gsap}>{children}</GSAPContext.Provider>
}
