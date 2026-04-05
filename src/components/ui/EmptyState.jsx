function EmptyState({ 
  icon = '📭', 
  title = 'No data found', 
  description = 'There is nothing to display here yet.',
  action,
  actionLabel = 'Get Started'
}) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      <div className="text-5xl mb-4 animate-bounce-slow">{icon}</div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm max-w-xs mb-4">{description}</p>
      {action && (
        <button
          onClick={action}
          className="px-4 py-2 bg-primary-500 text-white rounded-xl text-sm font-medium hover:bg-primary-600 transition-smooth"
        >
          {actionLabel}
        </button>
      )}
    </div>
  )
}

export default EmptyState
