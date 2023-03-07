<script setup lang="ts">
defineProps<{ selected: string; options: ReadonlyArray<string> }>();
defineEmits<{ (e: 'onChange', event: Event): void }>();
</script>

<template>
  <div class="select">
    <select :value="selected" @change="(e) => $emit('onChange', e)">
      <option v-for="option in options" :key="option">{{ option }}</option>
    </select>
  </div>
</template>

<style scoped>
select {
  width: 100%;
  padding: 10px;
  border: 1px solid var(--accent_color);
  border-radius: 5px;
  font-size: inherit;
  font-family: inherit;
  background-color: var(--bgc_color);
  appearance: none;
  cursor: pointer;
}

select:focus {
  outline: 1px solid var(--accent_color);
}

.select {
  position: relative;
}

.select::after {
  position: absolute;
  content: '';
  width: 6px;
  height: 6px;
  display: inline-block;
  top: calc(50% - 5px);
  right: 12px;
  box-shadow: 1px 1px 0 0 var(--accent_color);
  transform: rotate(45deg);
  pointer-events: none;
}
</style>
