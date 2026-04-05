import { Card } from '../ui'

function AssetsPanel({ assets, cardBalance }) {
  return (
    <div className="space-y-4">
      {/* My Asset Card */}
      <Card>
        <div className="flex items-center justify-between mb-4">
          <span className="text-body">My asset</span>
          <span className="text-xs text-gray-500">≈ $1,920 USDT</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center">
              <span className="text-teal-400 text-lg">T</span>
            </div>
            <div>
              <span className="text-white font-medium">USDT</span>
              <span className="text-gray-500 ml-1">▼</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-white font-semibold">1,900</p>
            <p className="text-xs text-gray-500">≈1,900 USD</p>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button className="text-primary-500 text-xl">⇅</button>
        </div>
      </Card>

      {/* My Card */}
      <Card>
        <div className="flex items-center justify-between mb-4">
          <span className="text-body">My card</span>
          <span className="text-xs text-gray-500">≈ $68,402 USD</span>
        </div>
        <div className="bg-gradient-to-br from-dark-300 to-dark-500 rounded-xl p-4 mb-3">
          <div className="flex justify-between items-start mb-8">
            <div className="w-8 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded"></div>
            <span className="text-gray-400 text-xs">💳</span>
          </div>
          <div className="text-white font-mono text-sm tracking-wider">
            •••• •••• •••• ••••
          </div>
        </div>
        <div className="text-right">
          <p className="text-white font-semibold text-xl">15,500</p>
          <p className="text-xs text-gray-500">≈15,500 USDT</p>
        </div>
      </Card>
    </div>
  )
}

export default AssetsPanel
