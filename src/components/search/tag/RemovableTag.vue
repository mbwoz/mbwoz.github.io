<script setup lang="ts">
defineProps<{ tag: string }>();
defineEmits<{ (e: 'removeTag', tag: string): void }>();
</script>

<template>
  <div>{{ tag }} <button @click="$emit('removeTag', tag)">x</button></div>
</template>
