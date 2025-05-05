<template>
  <div class="headingAdd">
    <h1>Учетные записи</h1>
    <n-button tertiary circle @click="handleCreateUser()">
      <template #icon>
        <Icon icon="ic:baseline-plus" />
      </template>
    </n-button>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { useUsersStore } from "@/stores/useUsersStore";
import { useMessage } from "naive-ui";

const { createUser } = useUsersStore();
const message = useMessage();

const handleCreateUser = () => {
  createUser();
  message.success("Пользователь успешно добавлен");
};
</script>

<style scoped>
.headingAdd {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
}
</style>
