import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { Card } from '../ui'

const spendingData = [
  { name: 'Food', value: 400 },
  { name: 'Bills', value: 300 },
  { name: 'Shopping', value: 300 },
  { name: 'Crypto', value: 200 },
  { name: 'Others', value: 100 },
]

const COLORS = ['#f97316', '#22c55e', '#3b82f6', '#a855f7', '#6b7280']

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0]
    return (
      <div className="bg-dark-300 border border-dark-100/30 rounded-lg px-2 py-1">
        <p className="text-xs text-white">{data.name}</p>
        <p className="text-xs text-primary-400">${data.value}</p>
      </div>
    )
  }
  return null
}

function SpendingPieChart({ compact = false }) {
  const total = spendingData.reduce((sum, item) => sum + item.value, 0)

  return (
    <Card compact={compact} className="flex-1 flex flex-col min-h-0">
      <Card.Header compact={compact}>Spending Breakdown</Card.Header>
      <Card.Content className="flex-1 flex items-center gap-2 min-h-0">
        {/* Pie Chart */}
        <div className="w-20 h-20 flex-shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={spendingData}
                cx="50%"
                cy="50%"
                innerRadius={22}
                outerRadius={38}
                paddingAngle={2}
                dataKey="value"
              >
                {spendingData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="flex-1 grid grid-cols-2 gap-x-2 gap-y-1">
          {spendingData.map((item, index) => {
            const percentage = ((item.value / total) * 100).toFixed(0)
            return (
              <div key={item.name} className="flex items-center gap-1">
                <div 
                  className="w-2 h-2 rounded-full flex-shrink-0" 
                  style={{ backgroundColor: COLORS[index] }}
                />
                <span className="text-xs text-gray-400 truncate">{item.name}</span>
                <span className="text-xs text-white font-medium ml-auto">{percentage}%</span>
              </div>
            )
          })}
        </div>
      </Card.Content>
    </Card>
  )
}

export default SpendingPieChart
