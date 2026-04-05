import Navbar from './Navbar'
import Sidebar from './Sidebar'
import MainContent from './MainContent'

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navbar */}
      <Navbar />
      
      {/* Content Area: Sidebar + Main */}
      <div className="flex flex-1">
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
