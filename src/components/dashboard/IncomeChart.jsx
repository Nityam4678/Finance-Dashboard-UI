import { useState, useMemo } from 'react'
import { XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts'
import { Card } from '../ui'

// Different data sets for each time filter
const chartDataByFilter = {
  '1 year': [
    { month: 'Jan', amount: 8000 },
    { month: 'Mar', amount: 15000 },
    { month: 'May', amount: 22000 },
    { month: 'Jul', amount: 35000 },
    { month: 'Sep', amount: 48000 },
    { month: 'Nov', amount: 62000 },
  ],
  '6m': [
    { month: 'Oct', amount: 25000 },
    { month: 'Nov', amount: 32000 },
    { month: 'Dec', amount: 28000 },
    { month: 'Jan', amount: 38000 },
    { month: 'Feb', amount: 45000 },
    { month: 'Mar', amount: 52000 },
  ],
  '3m': [
    { month: 'Jan', amount: 2000 },
    { month: 'Feb', amount: 5500 },
    { month: 'Mar', amount: 12000 },
  ],
  '1m': [
    { month: 'Week 1', amount: 3200 },
    { month: 'Week 2', amount: 5800 },
    { month: 'Week 3', amount: 7500 },
    { month: 'Week 4', amount: 9200 },
  ],
  '7d': [
    { month: 'Mon', amount: 1200 },
    { month: 'Tue', amount: 1800 },
    { month: 'Wed', amount: 2200 },
    { month: 'Thu', amount: 3100 },
    { month: 'Fri', amount: 4500 },
    { month: 'Sat', amount: 5200 },
    { month: 'Sun', amount: 6800 },
  ],
  '1d': [
    { month: '6AM', amount: 500 },
    { month: '9AM', amount: 1200 },
    { month: '12PM', amount: 2800 },
    { month: '3PM', amount: 3500 },
    { month: '6PM', amount: 4200 },
    { month: '9PM', amount: 4800 },
  ],
}

function IncomeChart({ data, compact = false }) {
  const [activeFilter, setActiveFilter] = useState('7d')
  const timeFilters = ['1 year', '6m', '3m', '1m', '7d', '1d']

  // Get data based on selected filter
  const chartData = useMemo(() => {
    return chartDataByFilter[activeFilter] || data
  }, [activeFilter, data])

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-dark-300 border border-dark-100/30 rounded-lg px-2 py-1">
          <p className="text-xs text-white">{label}</p>
          <p className="text-xs text-success-400">${payload[0].value.toLocaleString()}</p>
        </div>
      )
    }
    return null
  }

  return (
    <Card compact={compact}>
      <Card.Header compact={compact}>Income</Card.Header>
      <Card.Content>
        {/* Time Filters */}
        <div className="flex gap-1 mb-2">
          {timeFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`
                px-2 py-0.5 text-xs rounded-md transition-smooth
                ${activeFilter === filter 
                  ? 'bg-dark-300 text-white border border-dark-100/50' 
                  : 'text-gray-500 hover:text-gray-300'
                }
              `}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Chart */}
        <div className={compact ? 'h-24' : 'h-40'}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="month" 
                axisLine={false} 
                tickLine={false}
                tick={{ fill: '#6b7280', fontSize: 10 }}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false}
                tick={{ fill: '#6b7280', fontSize: 10 }}
                tickFormatter={(value) => `${value / 1000}k`}
                width={30}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="amount"
                stroke="#22c55e"
                strokeWidth={2}
                fill="url(#incomeGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card.Content>
    </Card>
  )
}

export default IncomeChart
