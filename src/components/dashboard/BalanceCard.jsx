import { Card } from '../ui'

function BalanceCard({ balances, compact = false }) {
  const timeFilters = ['1 year', '6m', '3m', '1m', '7d', '1d']
  
  return (
    <Card compact={compact}>
      <Card.Header compact={compact}>Current balance</Card.Header>
      <Card.Content>
        {/* Time Filters */}
        <div className="flex gap-1 mb-3">
          {timeFilters.map((filter, index) => (
            <button
              key={filter}
              className={`
                px-2 py-0.5 text-xs rounded-md transition-smooth
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
        <div className={compact ? 'space-y-2' : 'space-y-4'}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-green-400 text-sm">$</span>
              <span className="text-white text-sm">$ {balances.usd.toLocaleString()}</span>
            </div>
            <span className="text-success-400 text-xs">{balances.changes.usd}% ↑</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-orange-400 text-sm">₿</span>
              <span className="text-white text-sm">BTC {balances.btc}</span>
            </div>
            <span className="text-success-400 text-xs">{balances.changes.btc}% ↑</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-teal-400 text-sm">T</span>
              <span className="text-white text-sm">USDT {balances.usdt}</span>
            </div>
            <span className="text-danger-400 text-xs">{balances.changes.usdt}% ↓</span>
          </div>
        </div>
      </Card.Content>
    </Card>
  )
}

export default BalanceCard
