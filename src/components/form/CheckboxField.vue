<script setup lang="ts">
defineProps<{ checked: boolean; label: string }>();
defineEmits<{ (e: 'onChange'): void }>();
</script>

<template>
  <input type="checkbox" :checked="checked" @change="(e) => $emit('onChange')" />
  <label>{{ label }}</label>
</template>
