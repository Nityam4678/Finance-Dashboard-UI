import { useUIStore } from '../store'

function Sidebar() {
  const { activePage, setActivePage, sidebarOpen } = useUIStore()
  
  const menuItems = [
    { id: 'dashboard', icon: '📊', label: 'Dashboard' },
    { id: 'cards', icon: '💳', label: 'Cards' },
    { id: 'analytics', icon: '📈', label: 'Analytics' },
    { id: 'reports', icon: '📋', label: 'Reports' },
    { id: 'settings', icon: '⚙️', label: 'Settings' },
  ]

  return (
    <aside className={`
      w-64 bg-dark-500 border-r border-dark-100/20 p-4 
      hidden lg:block
      transition-all duration-300
      ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
    `}>
      <nav className="flex flex-col gap-1">
        {menuItems.map((item, index) => (
          <button
            key={item.id}
            onClick={() => setActivePage(item.id)}
            className={`
              flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-smooth
              animate-fade-in hover-lift
              ${activePage === item.id 
                ? 'bg-primary-500/10 text-primary-500 border-l-2 border-primary-500' 
                : 'text-gray-400 hover:bg-dark-300 hover:text-white'
              }
            `}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <span className="text-lg">{item.icon}</span>
            <span className="text-sm font-medium">{item.label}</span>
            {activePage === item.id && (
              <span className="ml-auto w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
            )}
          </button>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
