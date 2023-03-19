<script setup lang="ts">
defineProps<{ label: string, value: string }>();
</script>

<template>
  <div>
    <p class="label">{{ label }}</p>
    <p class="value">{{ value }}</p>
  </div>
</template>

<style scoped>
.label {
  color: var(--accent_color);
  display: inline-block;
  font-weight: 700;
  margin-right: 1ex;
}

.value {
  display: inline-block;
  font-style: italic;
}
</style>