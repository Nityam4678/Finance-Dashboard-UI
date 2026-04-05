import { Card } from '../ui'

function QuickActions() {
  const actions = [
    { icon: '🎁', label: 'Rewards', color: 'text-primary-500' },
    { icon: '👥', label: 'Referral', color: 'text-gray-400' },
    { icon: '🕐', label: 'History', color: 'text-gray-400' },
  ]

  return (
    <Card>
      <Card.Content>
        <div className="flex justify-around">
          {actions.map((action) => (
            <button
              key={action.label}
              className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-dark-300 transition-smooth"
            >
              <div className="w-12 h-12 rounded-xl bg-dark-300 flex items-center justify-center text-xl">
                {action.icon}
              </div>
              <span className={`text-xs ${action.color}`}>{action.label}</span>
            </button>
          ))}
        </div>
      </Card.Content>
    </Card>
  )
}

export default QuickActions
