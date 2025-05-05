import { defineStore, storeToRefs } from 'pinia'
import type { UserInterface } from '@/types/UserInterface'

export const useUsersStore = defineStore('work', {
  state: () => ({
    users: [] as UserInterface[],
  }),
  actions: {
    createUser() {
      this.users.push({
        user_id: Date.now(),
        post_type: 'Локальная',
        user_login: '',
        user_pass: null,
        raw_tags: '',
        tags: [],
      })
    },
    deleteUser(userId: number | string) {
      this.users = this.users.filter((user) => user.user_id !== userId)
    },
    saveUser(updatedUser: UserInterface) {
      const index = this.users.findIndex((u) => u.user_id === updatedUser.user_id)
      if (index !== -1) {
        this.users[index] = { ...updatedUser }
      }
    },
  },
  persist: [{ paths: ['users'], storage: localStorage }],
})

export const useUsersStoreRefs = () => storeToRefs(useUsersStore())
