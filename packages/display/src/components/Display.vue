<template>
  <div class="tce-root">
    <VBtn prepend-icon="mdi-chevron-down" variant="tonal" block @click="submit">
      Next
    </VBtn>
  </div>
</template>

<script setup lang="ts">
import type { Element } from '@tailor-cms/ce-page-break-manifest';

const props = defineProps<{ element: Element; userState: any }>();
const emit = defineEmits<{ interaction: [payload: { id: number }] }>();

const submit = () => emit('interaction', { id: props.element.id });
</script>

<style scoped>
.tce-root {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
}
</style>
