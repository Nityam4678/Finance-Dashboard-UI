import { useUserStore, useUIStore } from '../store'

function Navbar() {
  const { user, role, toggleRole, preferences } = useUserStore()
  const { toggleSidebar } = useUIStore()

  return (
    <nav className="h-14 md:h-16 bg-dark-500 border-b border-dark-100/20 flex items-center justify-between px-3 md:px-6">
      <div className="flex items-center gap-4 md:gap-8">
        {/* Hamburger Menu - Mobile Only */}
        <button 
          onClick={toggleSidebar}
          className="lg:hidden p-2 text-gray-400 hover:text-white transition-smooth"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <span className="text-primary-500 font-semibold text-base md:text-lg">Dashboard</span>
        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="text-gray-400 hover:text-white transition-smooth text-sm">Card management</a>
          <a href="#" className="text-gray-400 hover:text-white transition-smooth text-sm">FAQ</a>
        </div>
      </div>
      <div className="flex items-center gap-2 md:gap-4">
        {/* Role Selector */}
        <button
          onClick={toggleRole}
          className={`
            px-2 md:px-3 py-1 text-xs rounded-lg border transition-smooth
            ${role === 'Admin' 
              ? 'border-primary-500 text-primary-500 bg-primary-500/10' 
              : 'border-gray-600 text-gray-400 bg-dark-400'
            }
          `}
        >
          {role}
        </button>

        {/* Language - Hidden on mobile */}
        <div className="hidden sm:flex items-center gap-2 text-gray-400 text-sm">
          <span>{preferences.language}</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-primary-500 flex items-center justify-center text-white text-xs md:text-sm font-medium">
            {user.name.charAt(0)}
          </div>
          <span className="text-sm text-gray-300 hidden md:block">{user.name}</span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
