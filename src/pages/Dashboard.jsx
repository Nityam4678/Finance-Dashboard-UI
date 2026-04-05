import { useState } from 'react'
import { Button } from '../components'
import { useUserStore } from '../store'
import {
  CreditCard,
  BalanceCard,
  IncomeChart,
  TransactionsTable,
  AssetsPanel,
  QuickActions,
  GrowthTarget,
  AddTransactionModal,
  InsightsPanel,
} from '../components/dashboard'
import { balanceData, incomeData, cardData, growthData } from '../data/mockData'

function Dashboard() {
  const { canEdit } = useUserStore()
  const [addModalOpen, setAddModalOpen] = useState(false)

  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col">
      {/* Page Header */}
      <div className="flex items-center justify-between py-2 flex-shrink-0">
        <div>
          <h1 className="text-xl font-semibold text-white">Dashboard</h1>
          <p className="text-xs text-gray-400">
            Take full control of your finances — track, manage, and spend USDT easily.
          </p>
        </div>
        {canEdit() && (
          <Button variant="primary" size="sm" onClick={() => setAddModalOpen(true)}>
            New transfer
          </Button>
        )}
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 flex-1 min-h-0">
        
        {/* Left Column - Cards Section */}
        <div className="lg:col-span-3 flex flex-col gap-2">
          <CreditCard cardData={cardData} compact />
          <QuickActions compact />
          <GrowthTarget 
            percentage={growthData.percentage} 
            yearlyGrowth={growthData.yearlyGrowth}
            compact
          />
        </div>

        {/* Middle Column - Balance & Charts */}
        <div className="lg:col-span-6 flex flex-col gap-2 min-h-0">
          {/* Balance & Income Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 flex-shrink-0">
            <BalanceCard balances={balanceData} compact />
            <IncomeChart data={incomeData} compact />
          </div>

          {/* Transactions Table - Fill remaining space */}
          <div className="flex-1 min-h-0">
            <TransactionsTable onAddNew={() => setAddModalOpen(true)} compact />
          </div>
        </div>

        {/* Right Column - Assets & Insights */}
        <div className="lg:col-span-3 flex flex-col gap-2">
          <AssetsPanel compact />
          <InsightsPanel compact />
        </div>

      </div>

      {/* Add Transaction Modal */}
      <AddTransactionModal 
        isOpen={addModalOpen} 
        onClose={() => setAddModalOpen(false)} 
      />
    </div>
  )
}

export default Dashboard
