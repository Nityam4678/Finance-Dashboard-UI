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
  SpendingPieChart,
} from '../components/dashboard'
import { balanceData, incomeData, cardData, growthData } from '../data/mockData'

function Dashboard() {
  const { canEdit } = useUserStore()
  const [addModalOpen, setAddModalOpen] = useState(false)

  return (
    <div className="h-full lg:h-[calc(100vh-4rem)] flex flex-col lg:overflow-hidden overflow-y-auto">
      {/* Page Header */}
      <div className="flex items-center justify-between py-2 md:py-3 flex-shrink-0">
        <div>
          <h1 className="text-lg md:text-xl font-semibold text-white">Dashboard</h1>
          <p className="text-xs text-gray-400 hidden sm:block">
            Take full control of your finances — track, manage, and spend USDT easily.
          </p>
        </div>
        {canEdit() && (
          <Button variant="primary" size="sm" onClick={() => setAddModalOpen(true)}>
            <span className="hidden sm:inline">New transfer</span>
            <span className="sm:hidden">+</span>
          </Button>
        )}
      </div>

      {/* Main Grid Layout - Responsive */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-2 md:gap-3 flex-1 lg:min-h-0 lg:overflow-hidden pb-3">
        
        {/* Left Column - Cards Section */}
        <div className="md:col-span-1 lg:col-span-3 flex flex-col gap-2 lg:min-h-0 lg:overflow-hidden order-1 md:order-1">
          <CreditCard cardData={cardData} compact />
          <SpendingPieChart compact />
          <div className="hidden md:block">
            <QuickActions compact />
          </div>
          <div className="hidden lg:block">
            <GrowthTarget 
              percentage={growthData.percentage} 
              yearlyGrowth={growthData.yearlyGrowth}
              compact
            />
          </div>
        </div>

        {/* Middle Column - Balance & Charts */}
        <div className="md:col-span-1 lg:col-span-6 flex flex-col gap-2 lg:min-h-0 lg:overflow-hidden order-2 md:order-2">
          {/* Balance & Income Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 flex-shrink-0">
            <BalanceCard balances={balanceData} compact />
            <IncomeChart data={incomeData} compact />
          </div>

          {/* Quick Actions - Mobile Only */}
          <div className="md:hidden">
            <QuickActions compact />
          </div>

          {/* Transactions Table - Responsive */}
          <div className="flex-1 lg:min-h-0 lg:overflow-hidden">
            <TransactionsTable onAddNew={() => setAddModalOpen(true)} compact />
          </div>
        </div>

        {/* Right Column - Assets & Insights */}
        <div className="md:col-span-2 lg:col-span-3 flex flex-col sm:flex-row md:flex-row lg:flex-col gap-2 lg:min-h-0 lg:overflow-hidden order-3">
          <div className="flex-1">
            <AssetsPanel compact />
          </div>
          <div className="flex-1">
            <InsightsPanel compact />
          </div>
        </div>

        {/* Growth Target - Tablet/Mobile */}
        <div className="md:col-span-2 lg:hidden order-4">
          <GrowthTarget 
            percentage={growthData.percentage} 
            yearlyGrowth={growthData.yearlyGrowth}
            compact
          />
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
