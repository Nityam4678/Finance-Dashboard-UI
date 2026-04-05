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
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-title">Dashboard</h1>
          <p className="text-body mt-1">
            Take full control of your finances — track, manage, and spend USDT easily.
          </p>
        </div>
        {canEdit() && (
          <Button variant="primary" onClick={() => setAddModalOpen(true)}>
            New transfer
          </Button>
        )}
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column - Cards Section */}
        <div className="lg:col-span-3 space-y-6">
          <CreditCard cardData={cardData} />
          <QuickActions />
          <GrowthTarget 
            percentage={growthData.percentage} 
            yearlyGrowth={growthData.yearlyGrowth} 
          />
        </div>

        {/* Middle Column - Balance & Charts */}
        <div className="lg:col-span-6 space-y-6">
          {/* Balance & Income Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BalanceCard balances={balanceData} />
            <IncomeChart data={incomeData} />
          </div>

          {/* Transactions Table */}
          <TransactionsTable onAddNew={() => setAddModalOpen(true)} />
        </div>

        {/* Right Column - Assets & Insights */}
        <div className="lg:col-span-3 space-y-6">
          <AssetsPanel />
          <InsightsPanel />
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
