<script setup lang="ts">
defineProps<{ tag: string }>();
defineEmits<{ (e: 'removeTag', tag: string): void }>();
</script>

<template>
  <div class="tag">
    <p>{{ tag }}</p>
    <p class="cross" @click="$emit('removeTag', tag)">&#x2715;</p>
  </div>
</template>

<style scoped>
.tag {
  border-radius: 5px;
  border: 1px solid var(--accent_color);
  color: var(--accent_color);
  display: flex;
  font-family: inherit;
  font-size: inherit;
  gap: 20px;
  justify-content: space-between;
  padding: 10px;
}

.cross {
  cursor: pointer;
}
</style>
