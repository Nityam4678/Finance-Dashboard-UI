import { Card } from '../ui'
import { useInsights } from '../../hooks'

function InsightsPanel({ compact = false }) {
  const insights = useInsights()

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  if (compact) {
    return (
      <div className="space-y-2">
        {/* Combined Stats Card */}
        <Card compact>
          <Card.Header compact>Insights</Card.Header>
          <Card.Content>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Transactions</span>
                <span className="text-white font-medium">{insights.totalTransactions}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Success</span>
                <span className="text-success-400 font-medium">{insights.successRate}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Avg</span>
                <span className="text-white font-medium">{formatCurrency(insights.avgTransaction)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Top</span>
                <span className="text-primary-400 font-medium">{insights.highestCategory.name}</span>
              </div>
            </div>
          </Card.Content>
        </Card>

        {/* Balance Summary */}
        <Card compact>
          <Card.Header compact>Balance</Card.Header>
          <Card.Content>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Income</span>
                <span className="text-success-400 font-medium">{formatCurrency(insights.totalIncome)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Spending</span>
                <span className="text-danger-400 font-medium">{formatCurrency(insights.totalSpending)}</span>
              </div>
              <div className="border-t border-dark-100/20 pt-2">
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium">Net</span>
                  <span className={`font-bold ${insights.netBalance >= 0 ? 'text-success-400' : 'text-danger-400'}`}>
                    {formatCurrency(insights.netBalance)}
                  </span>
                </div>
              </div>
            </div>
          </Card.Content>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* Quick Stats */}
      <Card>
        <Card.Header>Quick Stats</Card.Header>
        <Card.Content className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-sm">Total Transactions</span>
            <span className="text-white font-semibold">{insights.totalTransactions}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-sm">Success Rate</span>
            <span className="text-success-400 font-semibold">{insights.successRate}%</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-sm">Avg. Transaction</span>
            <span className="text-white font-semibold">{formatCurrency(insights.avgTransaction)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-sm">Processing</span>
            <span className="text-warning-400 font-semibold">{insights.processingCount}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-sm">Failed</span>
            <span className="text-danger-400 font-semibold">{insights.failedCount}</span>
          </div>
        </Card.Content>
      </Card>

      {/* Highest Category */}
      <Card>
        <Card.Header>Top Category</Card.Header>
        <Card.Content>
          <div className="text-center py-2">
            <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-primary-500/20 flex items-center justify-center">
              {insights.highestCategory.name === 'Deposit' && (
                <svg className="w-6 h-6 text-success-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              )}
              {insights.highestCategory.name === 'Spend' && (
                <svg className="w-6 h-6 text-danger-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              )}
              {insights.highestCategory.name === 'Withdraw' && (
                <svg className="w-6 h-6 text-warning-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              )}
              {insights.highestCategory.name === 'None' && (
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              )}
            </div>
            <p className="text-white font-semibold text-lg">{insights.highestCategory.name}</p>
            <p className="text-primary-400 text-xl font-bold mt-1">
              {formatCurrency(insights.highestCategory.amount)}
            </p>
          </div>
        </Card.Content>
      </Card>

      {/* Monthly Comparison */}
      <Card>
        <Card.Header>Monthly Change</Card.Header>
        <Card.Content className="space-y-4">
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-gray-400 text-sm">Income</span>
              <span className={`text-sm font-medium ${
                parseFloat(insights.monthlyChange.income) >= 0 
                  ? 'text-success-400' 
                  : 'text-danger-400'
              }`}>
                {parseFloat(insights.monthlyChange.income) >= 0 ? '↑' : '↓'} {Math.abs(insights.monthlyChange.income)}%
              </span>
            </div>
            <div className="h-2 bg-dark-300 rounded-full overflow-hidden">
              <div 
                className="h-full bg-success-500 rounded-full transition-all duration-500"
                style={{ width: `${Math.min(100, Math.abs(insights.monthlyChange.income))}%` }}
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-gray-400 text-sm">Spending</span>
              <span className={`text-sm font-medium ${
                parseFloat(insights.monthlyChange.spending) <= 0 
                  ? 'text-success-400' 
                  : 'text-danger-400'
              }`}>
                {parseFloat(insights.monthlyChange.spending) >= 0 ? '↑' : '↓'} {Math.abs(insights.monthlyChange.spending)}%
              </span>
            </div>
            <div className="h-2 bg-dark-300 rounded-full overflow-hidden">
              <div 
                className="h-full bg-danger-500 rounded-full transition-all duration-500"
                style={{ width: `${Math.min(100, Math.abs(insights.monthlyChange.spending))}%` }}
              />
            </div>
          </div>
        </Card.Content>
      </Card>

      {/* Balance Summary */}
      <Card>
        <Card.Header>Balance Summary</Card.Header>
        <Card.Content className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-sm">Total Income</span>
            <span className="text-success-400 font-semibold">{formatCurrency(insights.totalIncome)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-sm">Total Spending</span>
            <span className="text-danger-400 font-semibold">{formatCurrency(insights.totalSpending)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-sm">Withdrawn</span>
            <span className="text-warning-400 font-semibold">{formatCurrency(insights.totalWithdrawn)}</span>
          </div>
          <div className="border-t border-dark-100/20 pt-3 mt-3">
            <div className="flex justify-between items-center">
              <span className="text-white font-medium">Net Balance</span>
              <span className={`text-lg font-bold ${
                insights.netBalance >= 0 ? 'text-success-400' : 'text-danger-400'
              }`}>
                {formatCurrency(insights.netBalance)}
              </span>
            </div>
          </div>
        </Card.Content>
      </Card>
    </div>
  )
}

export default InsightsPanel
