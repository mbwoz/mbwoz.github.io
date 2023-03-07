<script setup lang="ts">
defineProps<{ checked: boolean; label: string }>();
defineEmits<{ (e: 'onChange'): void }>();
</script>

<template>
  <div class="field">
    <input type="checkbox" :checked="checked" @change="$emit('onChange')" />
    <label>{{ label }}</label>
  </div>
</template>

<style scoped>
.field {
  align-items: center;
  display: flex;
  gap: 10px;
  justify-content: center;
}

input {
  appearance: none;
  border-radius: 4px;
  border: 1px solid var(--accent_color);
  cursor: pointer;
  height: 20px;
  outline: 0;
  width: 20px;
}

input:checked {
  background: var(--accent_color);
}

input:hover {
  box-shadow: 0 0 0 1px var(--accent_color);
}

label {
  color: var(--accent_color);
}
</style>
