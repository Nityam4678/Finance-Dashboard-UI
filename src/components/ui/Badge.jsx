const variants = {
  default: 'bg-dark-300 text-gray-300',
  primary: 'bg-primary-500/20 text-primary-400 border border-primary-500/30',
  success: 'bg-success-500/20 text-success-400 border border-success-500/30',
  warning: 'bg-warning-500/20 text-warning-400 border border-warning-500/30 animate-pulse',
  danger: 'bg-danger-500/20 text-danger-400 border border-danger-500/30',
}

const sizes = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-xs',
  lg: 'px-3 py-1.5 text-sm',
}

function Badge({ 
  children, 
  variant = 'default', 
  size = 'md', 
  className = '',
  ...props 
}) {
  return (
    <span
      className={`
        inline-flex items-center justify-center
        font-medium
        rounded-lg
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </span>
  )
}

export default Badge
