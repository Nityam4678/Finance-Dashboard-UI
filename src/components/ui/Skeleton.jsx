function Skeleton({ className = '', variant = 'rectangle' }) {
  const baseClasses = 'animate-pulse bg-dark-300'
  
  const variants = {
    rectangle: 'rounded-lg',
    circle: 'rounded-full',
    text: 'rounded h-4',
  }

  return (
    <div className={`${baseClasses} ${variants[variant]} ${className}`} />
  )
}

function CardSkeleton() {
  return (
    <div className="bg-dark-400 border border-dark-100/20 rounded-2xl p-5 space-y-4">
      <Skeleton className="h-5 w-1/3" />
      <Skeleton className="h-8 w-2/3" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  )
}

function TableRowSkeleton() {
  return (
    <div className="grid grid-cols-7 gap-4 py-4">
      <Skeleton className="h-4" />
      <Skeleton className="h-4" />
      <Skeleton className="h-4" />
      <Skeleton className="h-4" />
      <Skeleton className="h-4" />
      <Skeleton className="h-4" />
      <Skeleton className="h-6 w-20 rounded-lg" />
    </div>
  )
}

function ChartSkeleton() {
  return (
    <div className="bg-dark-400 border border-dark-100/20 rounded-2xl p-5">
      <Skeleton className="h-5 w-1/4 mb-4" />
      <div className="flex gap-2 mb-4">
        {[...Array(6)].map((_, i) => (
          <Skeleton key={i} className="h-6 w-12 rounded-lg" />
        ))}
      </div>
      <div className="h-40 flex items-end gap-2">
        {[...Array(12)].map((_, i) => (
          <Skeleton 
            key={i} 
            className="flex-1 rounded-t"
            style={{ height: `${Math.random() * 80 + 20}%` }}
          />
        ))}
      </div>
    </div>
  )
}

Skeleton.Card = CardSkeleton
Skeleton.TableRow = TableRowSkeleton
Skeleton.Chart = ChartSkeleton

export default Skeleton
