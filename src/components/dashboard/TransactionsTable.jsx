import { useState, useMemo } from 'react'
import { useTransactionStore, useUserStore } from '../../store'
import { Card, Badge, Button, Input, EmptyState } from '../ui'
import ConfirmModal from './ConfirmModal'

const statusVariants = {
  'Completed': 'success',
  'Processing': 'warning',
  'Failed': 'danger',
}

const statusOptions = ['all', 'Completed', 'Processing', 'Failed']
const typeOptions = ['all', 'Deposit', 'Spend', 'Withdraw']

const ROWS_PER_PAGE = 6

function TransactionsTable({ onAddNew, compact = false }) {
  const { 
    filters, 
    search, 
    sortBy,
    sortOrder,
    setSearch, 
    setFilter, 
    clearFilters,
    setSortBy,
    toggleSortOrder,
    getFilteredTransactions,
    updateTransactionStatus,
    deleteTransaction,
  } = useTransactionStore()
  
  const { role, canEdit, canDelete } = useUserStore()
  
  const allTransactions = getFilteredTransactions()
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(allTransactions.length / ROWS_PER_PAGE)
  
  // Get paginated transactions
  const paginatedTransactions = useMemo(() => {
    const startIndex = (currentPage - 1) * ROWS_PER_PAGE
    const endIndex = startIndex + ROWS_PER_PAGE
    return allTransactions.slice(startIndex, endIndex)
  }, [allTransactions, currentPage])

  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [selectedTxId, setSelectedTxId] = useState(null)

  const handleSort = (column) => {
    if (sortBy === column) {
      toggleSortOrder()
    } else {
      setSortBy(column)
    }
  }

  const handleDeleteClick = (id) => {
    setSelectedTxId(id)
    setDeleteModalOpen(true)
  }

  const handleDeleteConfirm = () => {
    if (selectedTxId) {
      deleteTransaction(selectedTxId)
    }
    setDeleteModalOpen(false)
    setSelectedTxId(null)
  }

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  const getPageNumbers = () => {
    const pages = []
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i)
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, '...', totalPages)
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages)
      } else {
        pages.push(1, '...', currentPage, '...', totalPages)
      }
    }
    return pages
  }

  const SortIcon = ({ column }) => (
    <span className="ml-1 text-gray-500">
      {sortBy === column ? (sortOrder === 'asc' ? '↑' : '↓') : '↕'}
    </span>
  )

  return (
    <>
      <Card hover={false} compact={compact} className="h-full flex flex-col">
        <Card.Header 
          compact={compact}
          action={
            <div className="flex items-center gap-2">
              <span className={`
                text-xs px-2 py-0.5 rounded-lg
                ${role === 'Admin' ? 'bg-primary-500/20 text-primary-400' : 'bg-dark-300 text-gray-500'}
              `}>
                {role}
              </span>
            </div>
          }
        >
          Transactions
        </Card.Header>
        <Card.Content className="flex-1 flex flex-col min-h-0">
          {/* Filters Row - Responsive */}
          <div className="flex flex-wrap gap-2 mb-2 flex-shrink-0">
            {/* Search */}
            <div className="flex-1 min-w-[120px] sm:min-w-[150px]">
              <Input
                placeholder="Search..."
                value={search}
                onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
                className="py-1.5 text-xs"
              />
            </div>

            {/* Status Filter */}
            <select
              value={filters.status}
              onChange={(e) => { setFilter('status', e.target.value); setCurrentPage(1); }}
              className="bg-dark-400 border border-dark-100/30 rounded-lg px-2 py-1.5 text-xs text-white focus:outline-none focus:border-primary-500"
            >
              {statusOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt === 'all' ? 'All Status' : opt}
                </option>
              ))}
            </select>

            {/* Type Filter - Hidden on very small screens */}
            <select
              value={filters.type}
              onChange={(e) => { setFilter('type', e.target.value); setCurrentPage(1); }}
              className="hidden sm:block bg-dark-400 border border-dark-100/30 rounded-lg px-2 py-1.5 text-xs text-white focus:outline-none focus:border-primary-500"
            >
              {typeOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt === 'all' ? 'All Types' : opt}
                </option>
              ))}
            </select>

            {/* Clear Filters */}
            <Button variant="ghost" size="sm" onClick={() => { clearFilters(); setCurrentPage(1); }}>
              Clear
            </Button>
          </div>

          {/* Table Wrapper - Horizontal scroll on mobile */}
          <div className="flex-1 overflow-x-auto overflow-y-auto min-h-0">
            {/* Table Header */}
            <div className={`grid gap-2 text-xs text-gray-500 pb-2 border-b border-dark-100/20 flex-shrink-0 min-w-[600px] ${canEdit() ? 'grid-cols-8' : 'grid-cols-7'}`}>
              <button 
                onClick={() => handleSort('date')} 
                className="text-left hover:text-white transition-smooth flex items-center text-xs"
              >
                Time <SortIcon column="date" />
              </button>
              <button 
                onClick={() => handleSort('type')} 
                className="text-left hover:text-white transition-smooth flex items-center text-xs"
              >
                Type <SortIcon column="type" />
              </button>
              <span className="hidden sm:block">Crypto</span>
              <button 
                onClick={() => handleSort('amount')} 
                className="text-left hover:text-white transition-smooth flex items-center"
              >
                USD <SortIcon column="amount" />
              </button>
              <span className="hidden md:block">Fee</span>
              <span>Total</span>
              <span>Status</span>
              {canEdit() && <span>Actions</span>}
            </div>

            {/* Table Body */}
            <div className="divide-y divide-dark-100/10 min-w-[600px]">
              {paginatedTransactions.length === 0 ? (
                <EmptyState
                  icon="clipboard"
                  title="No transactions found"
                  description={search || filters.status !== 'all' || filters.type !== 'all' 
                    ? "Try adjusting your filters or search terms."
                    : "Start by adding your first transaction."
                  }
                  action={canEdit() && !search ? onAddNew : undefined}
                actionLabel="Add Transaction"
              />
            ) : (
              paginatedTransactions.map((tx, index) => (
                <div 
                  key={tx.id} 
                  className={`grid gap-2 py-2.5 text-xs items-center hover:bg-dark-300/30 transition-smooth animate-fade-in ${canEdit() ? 'grid-cols-8' : 'grid-cols-7'}`}
                  style={{ animationDelay: `${index * 0.03}s` }}
                >
                  <span className="text-gray-400 truncate">{tx.date}</span>
                  <span className="text-gray-300">{tx.type}</span>
                  <span className="text-gray-300 truncate hidden sm:block">{tx.cryptoAmount}</span>
                  <span className={tx.usdAmount.startsWith('+') ? 'text-success-400' : 'text-danger-400'}>
                    {tx.usdAmount}
                  </span>
                  <span className="text-gray-400 hidden md:block">{tx.fee}</span>
                  <span className={tx.totalAmount.startsWith('+') ? 'text-success-400' : 'text-danger-400'}>
                    {tx.totalAmount}
                  </span>
                  <Badge variant={statusVariants[tx.status]} size="sm">
                    {tx.status}
                  </Badge>
                  {canEdit() && (
                    <div className="flex items-center gap-1">
                      {tx.status === 'Processing' && (
                        <button
                          onClick={() => updateTransactionStatus(tx.id, 'Completed')}
                          className="text-success-400 hover:text-success-300 transition-smooth"
                          title="Mark as Completed"
                        >
                          ✓
                        </button>
                      )}
                      {tx.status !== 'Failed' && (
                        <button
                          onClick={() => updateTransactionStatus(tx.id, 'Failed')}
                          className="text-warning-400 hover:text-warning-300 transition-smooth"
                          title="Mark as Failed"
                        >
                          ✗
                        </button>
                      )}
                      {canDelete() && (
                        <button
                          onClick={() => handleDeleteClick(tx.id)}
                          className="text-danger-400 hover:text-danger-300 transition-smooth"
                          title="Delete"
                        >
                          🗑
                        </button>
                      )}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>

          {/* Pagination - Fixed at bottom */}
          <div className="flex items-center justify-between pt-2 border-t border-dark-100/20 flex-shrink-0">
            <span className="text-xs text-gray-500">
              Showing {((currentPage - 1) * ROWS_PER_PAGE) + 1}-{Math.min(currentPage * ROWS_PER_PAGE, allTransactions.length)} of {allTransactions.length}
            </span>
            <div className="flex items-center gap-1">
              {/* Previous */}
              <button 
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-2 py-1 text-xs rounded transition-smooth ${
                  currentPage === 1 
                    ? 'text-gray-600 cursor-not-allowed' 
                    : 'text-gray-400 hover:text-white hover:bg-dark-300'
                }`}
              >
                ‹ Prev
              </button>
              
              {/* Page Numbers */}
              {getPageNumbers().map((page, idx) => (
                page === '...' ? (
                  <span key={`ellipsis-${idx}`} className="text-gray-500 text-xs px-1">...</span>
                ) : (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`w-6 h-6 rounded text-xs transition-smooth ${
                      currentPage === page 
                        ? 'bg-primary-500 text-white' 
                        : 'text-gray-400 hover:text-white hover:bg-dark-300'
                    }`}
                  >
                    {page}
                  </button>
                )
              ))}
              
              {/* Next */}
              <button 
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages || totalPages === 0}
                className={`px-2 py-1 text-xs rounded transition-smooth ${
                  currentPage === totalPages || totalPages === 0
                    ? 'text-gray-600 cursor-not-allowed' 
                    : 'text-gray-400 hover:text-white hover:bg-dark-300'
                }`}
              >
                Next ›
              </button>
            </div>
          </div>
        </Card.Content>
      </Card>

      {/* Delete Confirmation Modal */}
      <ConfirmModal
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleDeleteConfirm}
        title="Delete Transaction"
        message="Are you sure you want to delete this transaction? This action cannot be undone."
      />
    </>
  )
}

export default TransactionsTable
