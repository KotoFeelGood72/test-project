<script setup lang="ts">
import { ref } from 'vue'
import { useUsersStore, useUsersStoreRefs } from '@/stores/useUsersStore'
import type { SelectInterface } from '@/types/SelectInterface'

const options = ref<SelectInterface[]>([
  { value: 'LDAP', label: 'LDAP' },
  { value: 'Локальная', label: 'Локальная' },
])

const { deleteUser } = useUsersStore()
const { users } = useUsersStoreRefs()
</script>

<template>
  <n-table :bordered="false" :single-line="false">
    <thead>
      <tr>
        <th>Метки</th>
        <th>Тип записи</th>
        <th>Логин</th>
        <th>Пароль</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(user, idx) in users" :key="user.user_id">
        <!-- <td><n-input v-model:value="value" type="text" placeholder="Basic Input" /></td> -->
        <td>
          <n-select v-model:value="user.post_type" :options="options" />
        </td>
        <td>
          <n-input v-model:value="user.user_login" type="text" placeholder="Basic Input" />
        </td>
        <td>
          <n-input
            v-model="user.user_pass"
            type="password"
            show-password-on="mousedown"
            placeholder="Password"
            :maxlength="8"
          />
        </td>
        <td>
          <n-button tertiary type="error" @click="deleteUser(idx)"> 🗑 </n-button>
        </td>
      </tr>
    </tbody>
  </n-table>
</template>
