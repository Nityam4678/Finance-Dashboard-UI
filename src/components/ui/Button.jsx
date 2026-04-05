const variants = {
  primary: `
    bg-primary-500 
    text-white 
    hover:bg-primary-600 
    shadow-glow
    hover:shadow-lg
    animate-pulse-glow
  `,
  secondary: `
    bg-dark-300 
    text-gray-300 
    border border-dark-100/30
    hover:bg-dark-200 
    hover:text-white
    hover:border-dark-100/50
  `,
  outline: `
    bg-transparent 
    text-primary-500 
    border border-primary-500
    hover:bg-primary-500/10
    hover:shadow-glow
  `,
  ghost: `
    bg-transparent 
    text-gray-400 
    hover:bg-dark-300 
    hover:text-white
  `,
  danger: `
    bg-danger-500 
    text-white 
    hover:bg-danger-600
    hover:shadow-lg
  `,
}

const sizes = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
}

function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  disabled = false,
  ...props 
}) {
  return (
    <button
      className={`
        inline-flex items-center justify-center gap-2
        font-medium
        rounded-xl
        transition-smooth
        cursor-pointer
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
