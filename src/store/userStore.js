import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useUserStore = create(
  persist(
    (set, get) => ({
      // State
      user: {
        name: 'Norman K',
        email: 'norman@example.com',
        avatar: null,
      },
      role: 'Admin', // 'Admin' | 'Viewer'
      preferences: {
        currency: 'USD',
        language: 'ENG',
        theme: 'dark',
      },

      // Actions
      setRole: (role) => set({ role }),

      toggleRole: () => set((state) => ({
        role: state.role === 'Admin' ? 'Viewer' : 'Admin'
      })),

      updateUser: (userData) => set((state) => ({
        user: { ...state.user, ...userData }
      })),

      updatePreferences: (prefs) => set((state) => ({
        preferences: { ...state.preferences, ...prefs }
      })),

      // Computed: Check permissions
      canEdit: () => get().role === 'Admin',
      canDelete: () => get().role === 'Admin',
      canViewReports: () => true, // Both roles can view
      canManageCards: () => get().role === 'Admin',
    }),
    {
      name: 'user-storage', // localStorage key
      partialize: (state) => ({ 
        role: state.role,
        preferences: state.preferences,
      }),
    }
  )
)

export default useUserStore
