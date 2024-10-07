<template>
  <div class="tce-root">
    <VBtn prepend-icon="mdi-chevron-down" variant="tonal" block @click="submit">
      Next
    </VBtn>
  </div>
</template>

<script setup lang="ts">
import { ElementData } from '@tailor-cms/ce-page-break-manifest';

const props = defineProps<{ id: number; data: ElementData; userState: any }>();
const emit = defineEmits(['interaction']);

const submit = () => emit('interaction', { id: props.id });
</script>

<style scoped>
.tce-root {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
}
</style>
