<template>
  <div class="headingAdd">
    <h1>Учетные записи</h1>
    <n-button tertiary circle @click="createUser()">
      <template #icon>
        <Icon icon="ic:baseline-plus" />
      </template>
    </n-button>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useUsersStore } from '@/stores/useUsersStore'
const { createUser } = useUsersStore()
</script>

<style scoped>
.headingAdd {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
}
</style>
