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
  padding: 10px;
  font-size: inherit;
  font-family: inherit;
  border: 1px solid var(--accent_color);
  border-radius: 5px;
  color: var(--accent_color);
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.cross {
  cursor: pointer;
}
</style>
