import { useState } from 'react'
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

function TransactionsTable({ onAddNew }) {
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
  
  const transactions = getFilteredTransactions()

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

  const SortIcon = ({ column }) => (
    <span className="ml-1 text-gray-500">
      {sortBy === column ? (sortOrder === 'asc' ? '↑' : '↓') : '↕'}
    </span>
  )

  return (
    <>
      <Card hover={false}>
        <Card.Header 
          action={
            <div className="flex items-center gap-2">
              <span className={`
                text-xs px-2 py-1 rounded-lg
                ${role === 'Admin' ? 'bg-primary-500/20 text-primary-400' : 'bg-dark-300 text-gray-500'}
              `}>
                {role}
              </span>
            </div>
          }
        >
          Transactions
        </Card.Header>
        <Card.Content>
          {/* Filters Row */}
          <div className="flex flex-wrap gap-3 mb-4">
            {/* Search */}
            <div className="flex-1 min-w-[200px]">
              <Input
                placeholder="Search transactions..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="py-2"
              />
            </div>

            {/* Status Filter */}
            <select
              value={filters.status}
              onChange={(e) => setFilter('status', e.target.value)}
              className="bg-dark-400 border border-dark-100/30 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-primary-500"
            >
              {statusOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt === 'all' ? 'All Status' : opt}
                </option>
              ))}
            </select>

            {/* Type Filter */}
            <select
              value={filters.type}
              onChange={(e) => setFilter('type', e.target.value)}
              className="bg-dark-400 border border-dark-100/30 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-primary-500"
            >
              {typeOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt === 'all' ? 'All Types' : opt}
                </option>
              ))}
            </select>

            {/* Clear Filters */}
            <Button variant="ghost" size="sm" onClick={clearFilters}>
              Clear
            </Button>
          </div>

          {/* Table Header */}
          <div className={`grid gap-4 text-xs text-gray-500 pb-3 border-b border-dark-100/20 ${canEdit() ? 'grid-cols-8' : 'grid-cols-7'}`}>
            <button 
              onClick={() => handleSort('date')} 
              className="text-left hover:text-white transition-smooth flex items-center"
            >
              Time <SortIcon column="date" />
            </button>
            <button 
              onClick={() => handleSort('type')} 
              className="text-left hover:text-white transition-smooth flex items-center"
            >
              Type <SortIcon column="type" />
            </button>
            <span>Crypto amount</span>
            <button 
              onClick={() => handleSort('amount')} 
              className="text-left hover:text-white transition-smooth flex items-center"
            >
              USD amount <SortIcon column="amount" />
            </button>
            <span>Fee</span>
            <span>Total amount</span>
            <span>Status</span>
            {canEdit() && <span>Actions</span>}
          </div>

          {/* Table Body */}
          <div className="divide-y divide-dark-100/10">
            {transactions.length === 0 ? (
              <EmptyState
                icon="📋"
                title="No transactions found"
                description={search || filters.status !== 'all' || filters.type !== 'all' 
                  ? "Try adjusting your filters or search terms."
                  : "Start by adding your first transaction."
                }
                action={canEdit() && !search ? onAddNew : undefined}
                actionLabel="Add Transaction"
              />
            ) : (
              transactions.map((tx, index) => (
                <div 
                  key={tx.id} 
                  className={`grid gap-4 py-4 text-sm items-center hover:bg-dark-300/30 transition-smooth animate-fade-in ${canEdit() ? 'grid-cols-8' : 'grid-cols-7'}`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <span className="text-gray-400">{tx.date}</span>
                  <span className="text-gray-300">{tx.type}</span>
                  <span className="text-gray-300">{tx.cryptoAmount}</span>
                  <span className={tx.usdAmount.startsWith('+') ? 'text-success-400' : 'text-danger-400'}>
                    {tx.usdAmount}
                  </span>
                  <span className="text-gray-400">{tx.fee}</span>
                  <span className={tx.totalAmount.startsWith('+') ? 'text-success-400' : 'text-danger-400'}>
                    {tx.totalAmount}
                  </span>
                  <Badge variant={statusVariants[tx.status]} size="sm">
                    {tx.status}
                  </Badge>
                  {canEdit() && (
                    <div className="flex items-center gap-2">
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

          {/* Pagination */}
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-dark-100/20">
            <span className="text-xs text-gray-500">Showing {transactions.length} results</span>
            <div className="flex items-center gap-2">
              <button className="text-gray-500 hover:text-white transition-smooth">&lt;</button>
              <button className="w-6 h-6 rounded bg-primary-500 text-white text-xs">1</button>
              <button className="w-6 h-6 rounded text-gray-500 hover:text-white text-xs">2</button>
              <span className="text-gray-500">...</span>
              <button className="w-6 h-6 rounded text-gray-500 hover:text-white text-xs">5</button>
              <button className="text-gray-500 hover:text-white transition-smooth">&gt;</button>
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
