<script setup lang="ts">
defineProps<{ value: string }>();
defineEmits<{ (e: 'onInput', event: Event): void }>();
</script>

<template>
  <input type="text" :value="value" @input="(e) => $emit('onInput', e)" />
</template>
