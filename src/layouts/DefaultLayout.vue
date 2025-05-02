<script setup lang="ts">
import { RouterView } from 'vue-router'
import DefaultHeader from '@/shared/DefaultHeader.vue'
import DefaultFooter from '@/shared/DefaultFooter.vue'
</script>

<template>
  <DefaultHeader />
  <main>
    <RouterView />
  </main>
  <DefaultFooter />
</template>
