import { Card } from '../ui'

// SVG Icons
const RewardsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5 text-primary-500">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
  </svg>
)

const ReferralIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5 text-gray-400">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
)

const HistoryIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5 text-gray-400">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

function QuickActions({ compact = false }) {
  const actions = [
    { icon: RewardsIcon, label: 'Rewards', active: true },
    { icon: ReferralIcon, label: 'Referral', active: false },
    { icon: HistoryIcon, label: 'History', active: false },
  ]

  return (
    <Card compact={compact}>
      <Card.Content>
        <div className="flex justify-around">
          {actions.map((action) => (
            <button
              key={action.label}
              className={`flex flex-col items-center gap-1 ${compact ? 'p-2' : 'p-3'} rounded-xl hover:bg-dark-300 transition-smooth`}
            >
              <div className={`${compact ? 'w-10 h-10' : 'w-12 h-12'} rounded-xl bg-dark-300 flex items-center justify-center`}>
                <action.icon />
              </div>
              <span className={`text-xs ${action.active ? 'text-primary-500' : 'text-gray-400'}`}>{action.label}</span>
            </button>
          ))}
        </div>
      </Card.Content>
    </Card>
  )
}

export default QuickActions
