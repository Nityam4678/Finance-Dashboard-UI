import { Card } from '../ui'

function BalanceCard({ balances }) {
  const timeFilters = ['1 year', '6m', '3m', '1m', '7d', '1d']
  
  return (
    <Card>
      <Card.Header>Current balance</Card.Header>
      <Card.Content>
        {/* Time Filters */}
        <div className="flex gap-2 mb-6">
          {timeFilters.map((filter, index) => (
            <button
              key={filter}
              className={`
                px-3 py-1 text-xs rounded-lg transition-smooth
                ${index === 0 
                  ? 'bg-dark-300 text-white' 
                  : 'text-gray-500 hover:text-gray-300'
                }
              `}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Balance Items */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-green-400">$</span>
              <span className="text-white">$ {balances.usd.toLocaleString()}</span>
            </div>
            <span className="text-success-400">{balances.changes.usd}% ↑</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-orange-400">₿</span>
              <span className="text-white">BTC {balances.btc}</span>
            </div>
            <span className="text-success-400">{balances.changes.btc}% ↑</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-teal-400">T</span>
              <span className="text-white">USDT {balances.usdt}</span>
            </div>
            <span className="text-danger-400">{balances.changes.usdt}% ↓</span>
          </div>
        </div>
      </Card.Content>
    </Card>
  )
}

export default BalanceCard
