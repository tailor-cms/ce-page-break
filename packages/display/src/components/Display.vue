<template>
  <div class="tce-root">
    <VBtn prepend-icon="mdi-chevron-down" variant="tonal" block @click="submit">
      Next
    </VBtn>
  </div>
</template>

<script setup lang="ts">
import type { Element } from '@tailor-cms/ce-page-break-manifest';

defineProps<{ element: Element; userState: any }>();
const emit = defineEmits<{ interaction: [payload: { clickedAt: number }] }>();

const submit = () => emit('interaction', { clickedAt: Date.now() });
</script>

<style scoped>
.tce-root {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
}
</style>
