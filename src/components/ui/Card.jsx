function Card({ children, className = '', hover = true, animate = true, ...props }) {
  return (
    <div
      className={`
        bg-dark-400 
        border border-dark-100/20 
        rounded-2xl 
        p-5
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

function CardHeader({ children, className = '', action }) {
  return (
    <div className={`flex items-center justify-between mb-4 ${className}`}>
      <h3 className="text-subtitle">{children}</h3>
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