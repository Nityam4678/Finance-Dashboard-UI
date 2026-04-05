import { Card, Button } from '../ui'

function CreditCard({ cardData }) {
  return (
    <Card>
      <Card.Header action={<Button variant="secondary" size="sm">Manage</Button>}>
        My cards
      </Card.Header>
      <Card.Content>
        {/* Credit Card Visual */}
        <div className="bg-gradient-to-br from-orange-600 via-orange-500 to-red-500 rounded-2xl p-5 mb-4 relative overflow-hidden hover:shadow-glow transition-all duration-300 cursor-pointer hover:scale-[1.02] group">
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer"></div>
          
          {/* Decorative circles */}
          <div className="absolute top-4 right-4 w-12 h-12 border-2 border-white/20 rounded-full flex items-center justify-center">
            <span className="text-white/60 text-xl">📶</span>
          </div>
          
          {/* Card Number */}
          <div className="mt-12 mb-6">
            <p className="text-white text-lg tracking-widest font-mono">
              {cardData.number}
            </p>
          </div>
          
          {/* Card Details */}
          <div className="flex gap-8 text-xs">
            <div>
              <p className="text-white/60">VALID THRU</p>
              <p className="text-white">{cardData.validThru}</p>
            </div>
            <div>
              <p className="text-white/60">CVV</p>
              <p className="text-white">{cardData.cvv}</p>
            </div>
          </div>

          {/* Toggle */}
          <div className="absolute bottom-5 right-5">
            <div className="w-12 h-6 bg-teal-500 rounded-full relative">
              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Card Indicators */}
        <div className="flex justify-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <div className="w-2 h-2 rounded-full bg-gray-600"></div>
          <div className="w-2 h-2 rounded-full bg-gray-600"></div>
        </div>

        {/* Balance & Currency */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-xs text-gray-500">Balance</p>
            <p className="text-white font-semibold">$ {cardData.balance.toLocaleString()}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-500">Currency</p>
            <p className="text-white text-sm">{cardData.currency}</p>
          </div>
        </div>

        {/* Apply Button */}
        <Button variant="outline" className="w-full">
          Apply for Card
        </Button>
      </Card.Content>
    </Card>
  )
}

export default CreditCard
