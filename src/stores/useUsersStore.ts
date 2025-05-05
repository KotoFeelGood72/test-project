import { defineStore, storeToRefs } from 'pinia'
import type { UserInterface } from '@/types/UserInterface'
import type { SelectInterface } from '@/types/SelectInterface'

export const useUsersStore = defineStore('work', {
  state: () => ({
    users: [] as UserInterface[],
  }),
  actions: {
    createUser() {
      this.users.push({
        user_id: Date.now(),
        post_type: {
          label: 'Локальный',
          value: 'Локальный',
        } as SelectInterface,
        user_login: '',
        user_pass: null,
      })
    },
    deleteUser(index: number) {
      this.users.splice(index, 1)
    },
    editUser() {},
    saveUser() {},
  },
})

export const useUsersStoreRefs = () => storeToRefs(useUsersStore())
