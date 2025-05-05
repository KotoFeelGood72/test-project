<script setup lang="ts">
import { ref } from "vue";
import { useUsersForm } from "@/composables/useUsersForm";
import { Icon } from "@iconify/vue";

const { users, options, v$, trySave, onTagInput, handleDeleteUser } = useUsersForm();
const TheadList = ref<string[]>(["Метки", "Тип записи", "Логин", "Пароль"]);
</script>

<template>
  <n-table :bordered="false" :single-line="false">
    <thead>
      <tr>
        <th v-for="(item, i) in TheadList" :key="'thead-item-' + i">{{ item }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(user, idx) in users" :key="user.user_id">
        <td style="width: 25%">
          <n-input
            v-model:value="user.raw_tags"
            @update:value="onTagInput(user, $event)"
            @blur="trySave(user, 'raw_tags')"
            placeholder="Введите метки через ;"
            :maxlength="100"
            type="textarea"
            :autosize="{ minRows: 1, maxRows: 5 }"
          />
        </td>
        <td style="width: 25%">
          <n-select v-model:value="user.post_type" :options="options" />
        </td>
        <td style="width: 25%">
          <n-input
            v-model:value="user.user_login"
            :status="v$[idx].user_login.$error ? 'error' : undefined"
            placeholder="Введите логин"
            @blur="trySave(user, 'login')"
          />
        </td>
        <td style="width: 25%">
          <n-input
            v-if="user.post_type === 'Локальная'"
            v-model:value="user.user_pass"
            type="password"
            show-password-on="click"
            :maxlength="100"
            :status="v$[idx].user_pass?.$error ? 'error' : undefined"
            placeholder="Пароль"
            @blur="trySave(user, 'pass')"
          />
        </td>
        <td>
          <n-button tertiary type="error" @click="handleDeleteUser(user.user_id)">
            <Icon icon="openmoji:wastebasket" :width="20" />
          </n-button>
        </td>
      </tr>
    </tbody>
  </n-table>
</template>
