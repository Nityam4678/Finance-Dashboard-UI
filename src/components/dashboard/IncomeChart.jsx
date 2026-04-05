import { useState } from 'react'
import { XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts'
import { Card } from '../ui'

function IncomeChart({ data }) {
  const [activeFilter, setActiveFilter] = useState('3m')
  const timeFilters = ['1 year', '6m', '3m', '1m', '7d', '1d']

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-dark-300 border border-dark-100/30 rounded-lg px-3 py-2">
          <p className="text-sm text-white">{label}</p>
          <p className="text-sm text-primary-400">${payload[0].value.toLocaleString()}</p>
        </div>
      )
    }
    return null
  }

  return (
    <Card>
      <Card.Header>Income</Card.Header>
      <Card.Content>
        {/* Time Filters */}
        <div className="flex gap-2 mb-4">
          {timeFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`
                px-3 py-1 text-xs rounded-lg transition-smooth
                ${activeFilter === filter 
                  ? 'bg-dark-300 text-white border-b-2 border-primary-500' 
                  : 'text-gray-500 hover:text-gray-300'
                }
              `}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Chart */}
        <div className="h-40">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
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
                tick={{ fill: '#6b7280', fontSize: 12 }}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false}
                tick={{ fill: '#6b7280', fontSize: 12 }}
                tickFormatter={(value) => `${value / 1000}k`}
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
