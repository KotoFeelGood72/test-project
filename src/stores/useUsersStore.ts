import { defineStore, storeToRefs } from 'pinia'
import type { UserInterface } from '@/types/UserInterface'

export const useUsersStore = defineStore('work', {
  state: () => ({
    users: [] as UserInterface[],
  }),
  actions: {
    createUser() {},
    deleteUser() {},
    editUser() {},
    saveUser() {},
  },
})

export const useUsersStoreRefs = () => storeToRefs(useUsersStore())
