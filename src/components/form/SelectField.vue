<script setup lang="ts">
defineProps<{ selected: string; options: ReadonlyArray<string> }>();
defineEmits<{ (e: 'onChange', event: Event): void }>();
</script>

<template>
  <select :value="selected" @change="(e) => $emit('onChange', e)">
    <option v-for="option in options" :key="option">{{ option }}</option>
  </select>
</template>
