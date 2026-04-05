function Card({ children, className = '', hover = true, animate = true, compact = false, ...props }) {
  return (
    <div
      className={`
        bg-dark-400 
        border border-dark-100/20 
        rounded-xl
        ${compact ? 'p-3' : 'p-5'}
        shadow-card
        ${hover ? 'hover:border-dark-100/40 hover:shadow-lg hover-lift' : ''}
        ${animate ? 'animate-fade-in' : ''}
        transition-smooth
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  )
}

function CardHeader({ children, className = '', action, compact = false }) {
  return (
    <div className={`flex items-center justify-between ${compact ? 'mb-2' : 'mb-4'} ${className}`}>
      <h3 className={compact ? 'text-sm font-medium text-gray-300' : 'text-subtitle'}>{children}</h3>
      {action && <div>{action}</div>}
    </div>
  )
}

function CardContent({ children, className = '' }) {
  return <div className={className}>{children}</div>
}

Card.Header = CardHeader
Card.Content = CardContent
export default Card