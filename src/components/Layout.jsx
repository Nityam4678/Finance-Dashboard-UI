import Navbar from './Navbar'
import Sidebar from './Sidebar'
import MainContent from './MainContent'

function Layout({ children }) {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Top Navbar */}
      <Navbar />
      
      {/* Content Area: Sidebar + Main */}
      <div className="flex flex-1 min-h-0 overflow-hidden">
        {/* Left Sidebar */}
        <Sidebar />
        
        {/* Right Main Dashboard Area */}
        <MainContent>
          {children}
        </MainContent>
      </div>
    </div>
  )
}

export default Layout
