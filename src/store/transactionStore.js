import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { transactions as initialTransactions } from '../data/mockData'

const useTransactionStore = create(
  persist(
    (set, get) => ({
      // State
      transactions: initialTransactions,
      filters: {
        status: 'all',
        type: 'all',
        dateRange: 'all',
      },
      search: '',
      sortBy: 'date',
      sortOrder: 'desc',
      isLoading: false,

      // Actions
      setLoading: (isLoading) => set({ isLoading }),

      setSearch: (search) => set({ search }),
      
      setFilter: (filterKey, value) => set((state) => ({
        filters: { ...state.filters, [filterKey]: value }
      })),

      clearFilters: () => set({
        filters: { status: 'all', type: 'all', dateRange: 'all' },
        search: '',
      }),

      setSortBy: (sortBy) => set({ sortBy }),
      
      setSortOrder: (sortOrder) => set({ sortOrder }),

      toggleSortOrder: () => set((state) => ({
        sortOrder: state.sortOrder === 'asc' ? 'desc' : 'asc'
      })),

      // Add new transaction
      addTransaction: (transaction) => set((state) => ({
        transactions: [
          { ...transaction, id: Date.now() },
          ...state.transactions
        ]
      })),

      // Update transaction status
      updateTransactionStatus: (id, status) => set((state) => ({
        transactions: state.transactions.map((tx) =>
          tx.id === id ? { ...tx, status } : tx
        )
      })),

      // Delete transaction
      deleteTransaction: (id) => set((state) => ({
        transactions: state.transactions.filter((tx) => tx.id !== id)
      })),

      // Reset to initial data
      resetTransactions: () => set({ transactions: initialTransactions }),

      // Computed: Get filtered & sorted transactions
      getFilteredTransactions: () => {
        const { transactions, filters, search, sortBy, sortOrder } = get()
        
        let filtered = [...transactions]

        // Apply status filter
        if (filters.status !== 'all') {
          filtered = filtered.filter((tx) => tx.status === filters.status)
        }

        // Apply type filter
        if (filters.type !== 'all') {
          filtered = filtered.filter((tx) => tx.type === filters.type)
        }

        // Apply search
        if (search.trim()) {
          const searchLower = search.toLowerCase()
          filtered = filtered.filter((tx) =>
            tx.type.toLowerCase().includes(searchLower) ||
            tx.cryptoAmount.toLowerCase().includes(searchLower) ||
            tx.usdAmount.toLowerCase().includes(searchLower) ||
            tx.status.toLowerCase().includes(searchLower)
          )
        }

        // Apply sorting
        filtered.sort((a, b) => {
          let comparison = 0
          
          switch (sortBy) {
            case 'date':
              comparison = new Date(a.date) - new Date(b.date)
              break
            case 'amount':
              const amountA = parseFloat(a.usdAmount.replace(/[^0-9.-]/g, '')) || 0
              const amountB = parseFloat(b.usdAmount.replace(/[^0-9.-]/g, '')) || 0
              comparison = amountA - amountB
              break
            case 'type':
              comparison = a.type.localeCompare(b.type)
              break
            default:
              comparison = 0
          }

          return sortOrder === 'asc' ? comparison : -comparison
        })

        return filtered
      },

      // Get transaction stats
      getStats: () => {
        const { transactions } = get()
        
        const completed = transactions.filter((tx) => tx.status === 'Completed').length
        const processing = transactions.filter((tx) => tx.status === 'Processing').length
        const failed = transactions.filter((tx) => tx.status === 'Failed').length

        return { total: transactions.length, completed, processing, failed }
      },
    }),
    {
      name: 'transactions-storage',
      partialize: (state) => ({ 
        transactions: state.transactions,
      }),
    }
  )
)

export default useTransactionStore
