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
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

input {
  cursor: pointer;
  appearance: none;
  outline: 0;
  height: 20px;
  width: 20px;
  border: 1px solid var(--accent_color);
  border-radius: 4px;
}

input:checked {
  background: var(--accent_color);
}

input:hover {
  outline: 1px solid var(--accent_color);
}

label {
  color: var(--accent_color);
}
</style>
