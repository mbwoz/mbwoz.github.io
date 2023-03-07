<script setup lang="ts">
defineProps<{ value: string; placeholder: string }>();
defineEmits<{ (e: 'onInput', event: Event): void }>();
</script>

<template>
  <input
    type="text"
    :placeholder="placeholder"
    :value="value"
    @input="(e) => $emit('onInput', e)"
  />
</template>

<style scoped>
input {
  appearance: none;
  border-radius: 5px;
  border: 1px solid var(--accent_color);
  font-family: inherit;
  font-size: inherit;
  outline: 0;
  padding: 10px;
  width: 100%;
}

input:focus {
  box-shadow: 0 0 0 1px var(--accent_color);
}
</style>
