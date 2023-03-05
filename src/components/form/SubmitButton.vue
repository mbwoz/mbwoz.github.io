<script setup lang="ts">
defineProps<{ label: string }>();
defineEmits<{ (e: 'onClick'): void }>();
</script>

<template>
  <button @click="$emit('onClick')">{{ label }}</button>
</template>
