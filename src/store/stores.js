import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { Platform } from 'react-native'


export const useCountStore = create((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set({ count: 0 }),
}))

export const useAuth = create(
  persist(
    (set) => ({

      user: null,
      signIn: () => set({ user: {} }),
      signOut: () => set({ user: null }),
    }),
    {
      name: 'auth-storage',
      ...(Platform.OS != 'web' && { storage: createJSONStorage(() => AsyncStorage) }),
    }
  ))

