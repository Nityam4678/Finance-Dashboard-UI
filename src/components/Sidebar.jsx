import { useUIStore } from '../store'

// SVG Icons
const DashboardIcon = ({ active }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={`w-5 h-5 ${active ? 'text-primary-500' : 'text-current'}`}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v5a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 12a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1v-7z" />
  </svg>
)

const CardsIcon = ({ active }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={`w-5 h-5 ${active ? 'text-primary-500' : 'text-current'}`}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
  </svg>
)

const AnalyticsIcon = ({ active }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={`w-5 h-5 ${active ? 'text-primary-500' : 'text-current'}`}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
)

const ReportsIcon = ({ active }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={`w-5 h-5 ${active ? 'text-primary-500' : 'text-current'}`}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
)

const SettingsIcon = ({ active }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={`w-5 h-5 ${active ? 'text-primary-500' : 'text-current'}`}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

const iconMap = {
  dashboard: DashboardIcon,
  cards: CardsIcon,
  analytics: AnalyticsIcon,
  reports: ReportsIcon,
  settings: SettingsIcon,
}

function Sidebar() {
  const { activePage, setActivePage, sidebarOpen, setSidebarOpen } = useUIStore()
  
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'cards', label: 'Cards' },
    { id: 'analytics', label: 'Analytics' },
    { id: 'reports', label: 'Reports' },
    { id: 'settings', label: 'Settings' },
  ]

  const handleNavClick = (id) => {
    setActivePage(id)
    // Close sidebar on mobile after navigation
    if (window.innerWidth < 1024) {
      setSidebarOpen(false)
    }
  }

  return (
    <>
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:relative inset-y-0 left-0 z-50
        w-64 bg-dark-500 border-r border-dark-100/20 p-4
        transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:block
      `}>
        {/* Close button for mobile */}
        <button 
          onClick={() => setSidebarOpen(false)}
          className="absolute top-4 right-4 p-1 text-gray-400 hover:text-white lg:hidden"
        >
          <CloseIcon />
        </button>

        <nav className="flex flex-col gap-1 mt-8 lg:mt-0">
          {menuItems.map((item, index) => {
            const IconComponent = iconMap[item.id]
            const isActive = activePage === item.id
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`
                  flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-smooth
                  animate-fade-in hover-lift
                  ${isActive 
                    ? 'bg-primary-500/10 text-primary-500 border-l-2 border-primary-500' 
                    : 'text-gray-400 hover:bg-dark-300 hover:text-white'
                  }
                `}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <IconComponent active={isActive} />
                <span className="text-sm font-medium">{item.label}</span>
                {isActive && (
                  <span className="ml-auto w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
                )}
              </button>
            )
          })}
        </nav>
      </aside>
    </>
  )
}

export default Sidebar
