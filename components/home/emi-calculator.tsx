"use client"

import { useState, useMemo } from "react"
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts"

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(259000)
  const [interestRate, setInterestRate] = useState(11)
  const [tenure, setTenure] = useState(5)

  const calculations = useMemo(() => {
    const principal = loanAmount
    const monthlyRate = interestRate / 12 / 100
    const months = tenure * 12

    let monthlyEMI = 0
    if (monthlyRate > 0) {
      monthlyEMI =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1)
    } else {
      monthlyEMI = principal / months
    }

    const totalAmount = monthlyEMI * months
    const totalInterest = totalAmount - principal

    return {
      monthlyEMI: Math.round(monthlyEMI),
      totalInterest: Math.round(totalInterest),
      totalAmount: Math.round(totalAmount),
      principal: Math.round(principal),
    }
  }, [loanAmount, interestRate, tenure])

  const chartData = [
    { name: "Principal", value: calculations.principal, fill: "#E5E7EB" },
    { name: "Interest", value: calculations.totalInterest, fill: "#6366F1" },
  ]

  const formatCurrency = (value) => `₹${value.toLocaleString("en-IN")}`

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">EMI Calculator</h2>
          <p className="text-lg text-muted-foreground">Calculate your monthly EMI instantly</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Calculator Controls */}
          <div className="space-y-8 bg-card p-8 rounded-lg border border-border">
            {/* Loan Amount */}
            <div>
              <label className="block text-sm font-medium mb-4 text-foreground">
                <span className="text-muted-foreground">Loan Amount</span>
                <span className="text-accent ml-2 text-lg font-bold">{formatCurrency(loanAmount)}</span>
              </label>
              <input
                type="range"
                min="100000"
                max="10000000"
                step="10000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>₹1L</span>
                <span>₹1Cr</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div>
              <label className="block text-sm font-medium mb-4 text-foreground">
                <span className="text-muted-foreground">Rate of Interest (p.a)</span>
                <span className="text-accent ml-2 text-lg font-bold">{interestRate.toFixed(1)}%</span>
              </label>
              <input
                type="range"
                min="5"
                max="20"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>5%</span>
                <span>20%</span>
              </div>
            </div>

            {/* Loan Tenure */}
            <div>
              <label className="block text-sm font-medium mb-4 text-foreground">
                <span className="text-muted-foreground">Loan Tenure</span>
                <span className="text-accent ml-2 text-lg font-bold">{tenure}Yr</span>
              </label>
              <input
                type="range"
                min="1"
                max="30"
                step="0.5"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>1 Yr</span>
                <span>30 Yr</span>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-3 pt-6 border-t border-border">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Monthly EMI</span>
                <span className="font-bold text-lg text-accent">{formatCurrency(calculations.monthlyEMI)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Principal Amount</span>
                <span className="font-semibold">{formatCurrency(calculations.principal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Interest</span>
                <span className="font-semibold">{formatCurrency(calculations.totalInterest)}</span>
              </div>
              <div className="flex justify-between pt-3 border-t border-border">
                <span className="font-semibold">Total Amount Payable</span>
                <span className="font-bold text-lg">{formatCurrency(calculations.totalAmount)}</span>
              </div>
            </div>
          </div>

          {/* Pie Chart */}
          <div className="flex items-center justify-center bg-card p-8 rounded-lg border border-border">
            <div className="w-full">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={120}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => formatCurrency(value)} />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex gap-6 justify-center mt-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                  <span className="text-sm text-muted-foreground">Principal</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <span className="text-sm text-muted-foreground">Interest</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
