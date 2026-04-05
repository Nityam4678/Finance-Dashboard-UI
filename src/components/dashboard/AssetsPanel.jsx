import { Card } from '../ui'

// Tether (USDT) Logo Icon
const USDTIcon = () => (
  <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center">
    <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3h5v2h-4v2h4v2H7v-2h4V7H7V5h5zm0 12c-2.76 0-5-1.12-5-2.5V14h2v.5c0 .55 1.35 1 3 1s3-.45 3-1V14h2v.5c0 1.38-2.24 2.5-5 2.5z"/>
    </svg>
  </div>
)

// Credit Card Chip Icon
const CardChipIcon = () => (
  <div className="w-8 h-5 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 rounded-sm flex items-center justify-center">
    <div className="grid grid-cols-3 gap-0.5 w-5 h-3">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="bg-yellow-600/40 rounded-sm"></div>
      ))}
    </div>
  </div>
)

// Contactless Payment Icon
const ContactlessIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5 text-gray-400">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
  </svg>
)

// Arrow Icon for swap
const SwapIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5 text-primary-500">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
  </svg>
)

function AssetsPanel({ assets, cardBalance, compact = false }) {
  return (
    <div className={compact ? 'space-y-2' : 'space-y-4'}>
      {/* My Asset Card */}
      <Card compact={compact}>
        <div className="flex items-center justify-between mb-3">
          <span className="text-gray-400 text-sm">My asset</span>
          <span className="text-xs text-gray-500">≈ $51,820 USDT</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <USDTIcon />
            <div className="flex items-center gap-1">
              <span className="text-white font-medium text-sm">USDT</span>
              <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          <div className="text-right">
            <p className="text-white font-semibold text-sm">1,900</p>
            <p className="text-xs text-gray-500">≈1,900 USD</p>
          </div>
        </div>
        <div className="flex justify-center mt-3">
          <button className="p-2 hover:bg-dark-300 rounded-lg transition-smooth">
            <SwapIcon />
          </button>
        </div>
      </Card>

      {/* My Card */}
      <Card compact={compact}>
        <div className="flex items-center justify-between mb-3">
          <span className="text-gray-400 text-sm">My card</span>
          <span className="text-xs text-gray-500">≈ $68,402 USD</span>
        </div>
        <div className="bg-gradient-to-br from-dark-300 to-dark-400 rounded-lg p-3 mb-3">
          <div className="flex justify-between items-start mb-4">
            <CardChipIcon />
            <ContactlessIcon />
          </div>
          <div className="text-white font-mono text-sm tracking-widest mb-2">
            1233 •••• •••• 1234
          </div>
          <div className="text-gray-500 text-xs">Nityam Pal</div>
        </div>
        <div className="text-right">
          <p className="text-white font-semibold text-lg">15,500</p>
          <p className="text-xs text-gray-500">≈15,500 USDT</p>
        </div>
      </Card>
    </div>
  )
}

export default AssetsPanel
