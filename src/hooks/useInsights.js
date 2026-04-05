import { useMemo } from 'react'
import { useTransactionStore } from '../store'

function useInsights() {
  const { transactions } = useTransactionStore()

  const insights = useMemo(() => {
    // Parse amount from string like "+1000 USD" or "-500 USD"
    const parseAmount = (amountStr) => {
      const num = parseFloat(amountStr.replace(/[^0-9.-]/g, '')) || 0
      return amountStr.startsWith('-') ? -Math.abs(num) : Math.abs(num)
    }

    // Calculate totals by type
    const byType = transactions.reduce((acc, tx) => {
      const amount = Math.abs(parseAmount(tx.usdAmount))
      acc[tx.type] = (acc[tx.type] || 0) + amount
      return acc
    }, {})

    // Calculate totals by status
    const byStatus = transactions.reduce((acc, tx) => {
      acc[tx.status] = (acc[tx.status] || 0) + 1
      return acc
    }, {})

    // Total income (Deposit + Withdraw positive)
    const totalIncome = transactions
      .filter(tx => tx.type === 'Deposit')
      .reduce((sum, tx) => sum + Math.abs(parseAmount(tx.usdAmount)), 0)

    // Total spending
    const totalSpending = transactions
      .filter(tx => tx.type === 'Spend')
      .reduce((sum, tx) => sum + Math.abs(parseAmount(tx.usdAmount)), 0)

    // Total withdrawn
    const totalWithdrawn = transactions
      .filter(tx => tx.type === 'Withdraw')
      .reduce((sum, tx) => sum + Math.abs(parseAmount(tx.usdAmount)), 0)

    // Net balance
    const netBalance = totalIncome - totalSpending

    // Highest spending category
    const highestCategory = Object.entries(byType)
      .sort(([, a], [, b]) => b - a)[0] || ['None', 0]

    // Success rate
    const successRate = transactions.length > 0
      ? ((byStatus['Completed'] || 0) / transactions.length * 100).toFixed(1)
      : 0

    // Average transaction amount
    const avgTransaction = transactions.length > 0
      ? (transactions.reduce((sum, tx) => sum + Math.abs(parseAmount(tx.usdAmount)), 0) / transactions.length).toFixed(2)
      : 0

    // Monthly data (mock comparison)
    const currentMonth = {
      income: totalIncome,
      spending: totalSpending,
    }
    
    // Previous month (simulated as 80% of current for demo)
    const previousMonth = {
      income: totalIncome * 0.8,
      spending: totalSpending * 1.2,
    }

    const monthlyChange = {
      income: currentMonth.income > 0 
        ? (((currentMonth.income - previousMonth.income) / previousMonth.income) * 100).toFixed(1)
        : 0,
      spending: previousMonth.spending > 0
        ? (((currentMonth.spending - previousMonth.spending) / previousMonth.spending) * 100).toFixed(1)
        : 0,
    }

    return {
      totalTransactions: transactions.length,
      totalIncome,
      totalSpending,
      totalWithdrawn,
      netBalance,
      byType,
      byStatus,
      highestCategory: {
        name: highestCategory[0],
        amount: highestCategory[1],
      },
      successRate,
      avgTransaction,
      monthlyChange,
      failedCount: byStatus['Failed'] || 0,
      processingCount: byStatus['Processing'] || 0,
    }
  }, [transactions])

  return insights
}

export default useInsights
