import { useEffect } from 'react'
import { useUIStore } from '../../store'

const iconMap = {
  success: '✓',
  error: '✗',
  warning: '⚠',
  info: 'ℹ',
}

const colorMap = {
  success: 'bg-success-500/20 border-success-500/30 text-success-400',
  error: 'bg-danger-500/20 border-danger-500/30 text-danger-400',
  warning: 'bg-warning-500/20 border-warning-500/30 text-warning-400',
  info: 'bg-primary-500/20 border-primary-500/30 text-primary-400',
}

function Toast({ id, type = 'info', message, duration = 3000 }) {
  const { removeNotification } = useUIStore()

  useEffect(() => {
    const timer = setTimeout(() => {
      removeNotification(id)
    }, duration)

    return () => clearTimeout(timer)
  }, [id, duration, removeNotification])

  return (
    <div 
      className={`
        flex items-center gap-3 px-4 py-3 rounded-xl border
        animate-slide-in shadow-lg backdrop-blur-sm
        ${colorMap[type]}
      `}
    >
      <span className="text-lg">{iconMap[type]}</span>
      <span className="text-sm font-medium">{message}</span>
      <button
        onClick={() => removeNotification(id)}
        className="ml-auto text-gray-400 hover:text-white transition-smooth"
      >
        ×
      </button>
    </div>
  )
}

function ToastContainer() {
  const { notifications } = useUIStore()

  if (notifications.length === 0) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2">
      {notifications.map((notification) => (
        <Toast key={notification.id} {...notification} />
      ))}
    </div>
  )
}

export default ToastContainer
