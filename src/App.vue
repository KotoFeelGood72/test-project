<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed } from "vue";
import DefaultLayout from "./layouts/DefaultLayout.vue";
const route = useRoute();

const islayoutName = computed(() => {
  const layoutName = route.meta.layout || "default";
  switch (layoutName) {
    case "default":
      return DefaultLayout;
    default:
      return DefaultLayout;
  }
});
</script>

<template>
  <n-message-provider>
    <component :is="islayoutName"></component>
  </n-message-provider>
</template>
