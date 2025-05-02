<script setup lang="ts">
import { RouterView } from 'vue-router'
import DefaultHeader from '@/shared/DefaultHeader.vue'
import DefaultFooter from '@/shared/DefaultFooter.vue'
import HeadingAdd from '@/components/heading/HeadingAdd.vue'
</script>

<template>
  <n-flex vertical>
    <DefaultHeader />
    <n-layout content-style="max-width: 1320px; margin: 0 auto;">
      <n-layout-header>
        <n-space vertical size="small">
          <HeadingAdd />

          <n-alert
            title="Для указания нескольких меток для одной пары логин/пароль используйте разделитель ;"
            type="info"
          ></n-alert>
        </n-space>
      </n-layout-header>
      <n-layout-content content-style="padding: 30px 0; width: 100%;">
        <RouterView />
      </n-layout-content>
    </n-layout>
    <DefaultFooter />
  </n-flex>
</template>
