<script setup lang="ts">
import type { SelectInterface } from '@/types/SelectInterface'
import { ref } from 'vue'

const options = ref<SelectInterface[]>([
  { value: 'LDAP', label: 'LDAP' },
  { value: 'Локальная', label: 'Локальная' },
])
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
      <tr>
        <td><n-input v-model:value="value" type="text" placeholder="Basic Input" /></td>
        <td>
          <n-select v-model:value="value" :options="options" />
        </td>
        <td>
          <n-input v-model:value="value" type="text" placeholder="Basic Input" />
        </td>
        <td>
          <n-input
            type="password"
            show-password-on="mousedown"
            placeholder="Password"
            :maxlength="8"
          />
        </td>
      </tr>
    </tbody>
  </n-table>
</template>
