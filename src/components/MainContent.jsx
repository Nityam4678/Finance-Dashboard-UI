function MainContent({ children }) {
  return (
    <main className="flex-1 p-4 overflow-hidden bg-dark-600">
      {children || (
        <div className="text-gray-500">
          Main Content Area
        </div>
      )}
    </main>
  )
}

export default MainContent
