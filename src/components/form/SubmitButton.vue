<script setup lang="ts">
defineProps<{ label: string }>();
defineEmits<{ (e: 'onClick'): void }>();
</script>

<template>
  <div>
    <button @click="$emit('onClick')">{{ label }}</button>
  </div>
</template>

<style scoped>
button {
  background-color: var(--bgc_color);
  border-radius: 5px;
  border: 1px solid var(--accent_color);
  color: var(--accent_color);
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  min-width: 135px;
  padding: 10px;
}

button:hover {
  box-shadow: 0 0 0 1px var(--accent_color);
}
</style>
