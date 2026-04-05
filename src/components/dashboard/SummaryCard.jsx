import { Card } from '../ui'

function SummaryCard({ title, value, change, icon, trend = 'up' }) {
  const isPositive = trend === 'up'
  
  return (
    <Card className="flex items-start justify-between">
      <div>
        <p className="text-body mb-1">{title}</p>
        <p className="text-2xl font-semibold text-white">{value}</p>
        {change && (
          <p className={`text-sm mt-2 ${isPositive ? 'text-success-400' : 'text-danger-400'}`}>
            {isPositive ? '↑' : '↓'} {change}%
          </p>
        )}
      </div>
      {icon && (
        <div className="text-2xl">{icon}</div>
      )}
    </Card>
  )
}

export default SummaryCard
