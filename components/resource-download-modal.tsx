"use client"

import type React from "react"

import { useState } from "react"
import { X, Phone, Lock } from "lucide-react"

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
  const [step, setStep] = useState<"details" | "otp">("details")
  const [formData, setFormData] = useState({ name: "", phone: "" })
  const [otp, setOtp] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [generatedOtp, setGeneratedOtp] = useState("")

  const handleDetailsSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.phone) {
      alert("Please fill all fields")
      return
    }

    setIsLoading(true)
    // Simulate OTP generation and sending
    const mockOtp = Math.floor(100000 + Math.random() * 900000).toString()
    setGeneratedOtp(mockOtp)

    // In production, call your API to send OTP via SMS
    console.log("[v0] Sending OTP to phone:", formData.phone)
    console.log("[v0] Generated OTP:", mockOtp)

    setTimeout(() => {
      setIsLoading(false)
      setStep("otp")
    }, 1000)
  }

  const handleOtpVerify = (e: React.FormEvent) => {
    e.preventDefault()

    if (otp !== generatedOtp) {
      alert("Invalid OTP. Please try again.")
      return
    }

    // OTP verified, trigger download
    console.log("[v0] OTP verified successfully")
    const link = document.createElement("a")
    link.href = resourceUrl
    link.download = resourceTitle
    link.click()

    // Reset and close
    setStep("details")
    setFormData({ name: "", phone: "" })
    setOtp("")
    setGeneratedOtp("")
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-lg shadow-xl max-w-md w-full">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h3 className="font-semibold text-lg">Download Resource</h3>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {step === "details" ? (
            <form onSubmit={handleDetailsSubmit} className="space-y-4">
              <p className="text-sm text-muted-foreground mb-4">
                Enter your details to receive the download link via OTP
              </p>

              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                  <Phone size={16} />
                  Mobile Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="10-digit mobile number"
                  maxLength="10"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 disabled:opacity-50 transition-opacity"
              >
                {isLoading ? "Sending OTP..." : "Send OTP"}
              </button>
            </form>
          ) : (
            <form onSubmit={handleOtpVerify} className="space-y-4">
              <p className="text-sm text-muted-foreground mb-4">Enter the OTP sent to {formData.phone}</p>

              <div>
                <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                  <Lock size={16} />
                  Enter OTP
                </label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.slice(0, 6))}
                  placeholder="6-digit OTP"
                  maxLength="6"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary text-center text-2xl tracking-widest"
                />
              </div>

              <button
                type="submit"
                className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Verify & Download
              </button>

              <button
                type="button"
                onClick={() => {
                  setStep("details")
                  setOtp("")
                }}
                className="w-full px-4 py-2 border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors"
              >
                Back
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
