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
div {
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  min-width: 150px;
  padding: 10px;
  cursor: pointer;
  font-size: inherit;
  font-family: inherit;
  border: 1px solid var(--accent_color);
  border-radius: 5px;
  color: var(--accent_color);
  background-color: var(--bgc_color);
}

button:hover {
  outline: 1px solid var(--accent_color);
}
</style>
