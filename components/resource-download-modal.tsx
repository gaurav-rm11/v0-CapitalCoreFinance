"use client"

import type React from "react"

import { useState } from "react"
import { X, Phone } from "lucide-react"

interface ResourceDownloadModalProps {
  isOpen: boolean
  onClose: () => void
  resourceTitle: string
  resourceUrl: string
}

export default function ResourceDownloadModal({
  isOpen,
  onClose,
  resourceTitle,
  resourceUrl,
}: ResourceDownloadModalProps) {
  const [phone, setPhone] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleVerifyAndDownload = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!phone || phone.length !== 10) {
      alert("Please enter a valid 10-digit mobile number")
      return
    }

    setIsLoading(true)

    // Simulate verification delay
    setTimeout(() => {
      // Trigger download
      const link = document.createElement("a")
      link.href = resourceUrl
      link.download = resourceTitle
      link.click()

      // Reset and close
      setPhone("")
      setIsLoading(false)
      onClose()
    }, 1000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-lg shadow-xl max-w-md w-full">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h3 className="font-semibold text-lg">Verify to Download</h3>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <form onSubmit={handleVerifyAndDownload} className="space-y-4">
            <p className="text-sm text-muted-foreground mb-4">
              Enter your mobile number to verify and download <strong>{resourceTitle}</strong>
            </p>

            <div>
              <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                <Phone size={16} />
                Mobile Number
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                placeholder="Enter 10-digit mobile number"
                maxLength={10}
                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading || phone.length !== 10}
              className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 disabled:opacity-50 transition-opacity"
            >
              {isLoading ? "Verifying..." : "Verify & Download"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
