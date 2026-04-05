function MainContent({ children }) {
  return (
    <main className="flex-1 p-6 overflow-auto bg-dark-600">
      {children || (
        <div className="text-gray-500">
          Main Content Area
        </div>
      )}
    </main>
  )
}

export default MainContent
