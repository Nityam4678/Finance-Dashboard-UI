import { create } from 'zustand'

const useUIStore = create((set) => ({
  // Sidebar state
  sidebarOpen: true,
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  setSidebarOpen: (open) => set({ sidebarOpen: open }),

  // Active page/tab
  activePage: 'dashboard',
  setActivePage: (page) => set({ activePage: page }),

  // Modal states
  modals: {
    newTransfer: false,
    cardDetails: false,
    settings: false,
  },
  openModal: (modalName) => set((state) => ({
    modals: { ...state.modals, [modalName]: true }
  })),
  closeModal: (modalName) => set((state) => ({
    modals: { ...state.modals, [modalName]: false }
  })),
  closeAllModals: () => set({
    modals: { newTransfer: false, cardDetails: false, settings: false }
  }),

  // Loading states
  isLoading: false,
  setLoading: (loading) => set({ isLoading: loading }),

  // Notifications
  notifications: [],
  addNotification: (notification) => set((state) => ({
    notifications: [
      ...state.notifications,
      { id: Date.now(), ...notification }
    ]
  })),
  removeNotification: (id) => set((state) => ({
    notifications: state.notifications.filter((n) => n.id !== id)
  })),
  clearNotifications: () => set({ notifications: [] }),
}))

export default useUIStore
