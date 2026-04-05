import { Card, Button } from '../ui'

function CreditCard({ cardData, compact = false }) {
  return (
    <Card compact={compact}>
      <Card.Header compact={compact} action={<Button variant="secondary" size="sm">Manage</Button>}>
        My cards
      </Card.Header>
      <Card.Content>
        {/* Credit Card Visual */}
        <div className="bg-gradient-to-br from-orange-600 via-orange-500 to-red-500 rounded-xl p-3 mb-2 relative overflow-hidden hover:shadow-glow transition-all duration-300 cursor-pointer hover:scale-[1.02] group">
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer"></div>
          
          {/* WiFi/NFC Icon */}
          <div className="absolute top-2 right-2 w-5 h-5">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white/70 w-full h-full">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
            </svg>
          </div>
          
          {/* Card Number */}
          <div className="mt-6 mb-3">
            <p className="text-white text-sm tracking-widest font-mono">
              {cardData.number}
            </p>
          </div>
          
          {/* Card Details */}
          <div className="flex gap-4 text-xs">
            <div>
              <p className="text-white/60 text-[10px] uppercase">Valid Thru</p>
              <p className="text-white text-xs font-medium">{cardData.validThru}</p>
            </div>
            <div>
              <p className="text-white/60 text-[10px] uppercase">CVV</p>
              <p className="text-white text-xs font-medium">{cardData.cvv}</p>
            </div>
          </div>

          {/* Toggle Switch */}
          <div className="absolute bottom-2 right-2">
            <div className="w-8 h-4 bg-teal-400 rounded-full relative shadow-inner">
              <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-md transition-all"></div>
            </div>
          </div>
        </div>

        {/* Card Indicators */}
        <div className="flex justify-center gap-1 mb-1">
          <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
        </div>

        {/* Balance & Currency */}
        <div className="flex justify-between items-center mb-2">
          <div>
            <p className="text-[10px] text-gray-500">Balance</p>
            <p className="text-white font-semibold text-sm">$ {cardData.balance.toLocaleString()}</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-gray-500">Currency</p>
            <p className="text-white text-xs">{cardData.currency}</p>
          </div>
        </div>

        {/* Apply Button */}
        <Button variant="outline" size="sm" className="w-full text-xs py-1.5">
          Apply for Card
        </Button>
      </Card.Content>
    </Card>
  )
}

export default CreditCard
