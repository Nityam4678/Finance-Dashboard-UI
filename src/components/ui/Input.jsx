function Input({ 
  label,
  type = 'text',
  placeholder = '',
  className = '',
  error = '',
  icon,
  ...props 
}) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm text-gray-400 mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
            {icon}
          </span>
        )}
        <input
          type={type}
          placeholder={placeholder}
          className={`
            w-full
            bg-dark-400
            border border-dark-100/30
            rounded-xl
            px-4 py-2.5
            text-sm text-white
            placeholder:text-gray-500
            focus:outline-none
            focus:border-primary-500
            focus:ring-1 focus:ring-primary-500/30
            transition-smooth
            ${icon ? 'pl-10' : ''}
            ${error ? 'border-danger-500' : ''}
            ${className}
          `}
          {...props}
        />
      </div>
      {error && (
        <p className="mt-1.5 text-xs text-danger-400">{error}</p>
      )}
    </div>
  )
}

export default Input
