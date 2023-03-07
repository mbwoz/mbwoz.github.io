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
  width: 100%;
  padding: 10px;
  border: 1px solid var(--accent_color);
  border-radius: 5px;
  font-size: inherit;
  font-family: inherit;
}

input:focus {
  outline: 1px solid var(--accent_color);
}
</style>
