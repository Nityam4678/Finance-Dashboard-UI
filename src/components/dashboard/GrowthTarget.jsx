import { Card } from '../ui'

function GrowthTarget({ percentage, yearlyGrowth, compact = false }) {
  return (
    <Card compact={compact}>
      <Card.Header compact={compact}>Annual growth target</Card.Header>
      <Card.Content>
        {/* Progress Bar */}
        <div className="mb-1">
          <div className="h-2 bg-dark-300 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary-500 to-green-500 rounded-full transition-all duration-500"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
          <div className="flex justify-end mt-1">
            <span className="text-xs text-gray-500">{percentage}%</span>
          </div>
        </div>

        {/* Yearly Growth */}
        <p className="text-success-400 text-xs">{yearlyGrowth}</p>
      </Card.Content>
    </Card>
  )
}

export default GrowthTarget
