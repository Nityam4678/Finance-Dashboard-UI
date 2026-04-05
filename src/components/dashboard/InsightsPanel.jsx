import { Card } from '../ui'
import { useInsights } from '../../hooks'

function InsightsPanel() {
  const insights = useInsights()

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
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
            <div className="text-3xl mb-2">
              {insights.highestCategory.name === 'Deposit' && '💰'}
              {insights.highestCategory.name === 'Spend' && '💸'}
              {insights.highestCategory.name === 'Withdraw' && '🏦'}
              {insights.highestCategory.name === 'None' && '📊'}
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
