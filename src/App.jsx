import { Layout, ToastContainer } from './components'
import { Dashboard } from './pages'

function App() {
  return (
    <>
      <Layout>
        <Dashboard />
      </Layout>
      <ToastContainer />
    </>
  )
}

export default App
