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
  appearance: none;
  background-color: var(--bgc_color);
  border-radius: 5px;
  border: 1px solid var(--accent_color);
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  outline: 0;
  padding: 10px;
  width: 100%;
}

select:focus {
  box-shadow: 0 0 0 1px var(--accent_color);
}

.select {
  position: relative;
}

.select::after {
  box-shadow: 1px 1px 0 0 var(--accent_color);
  content: '';
  display: inline-block;
  height: 6px;
  pointer-events: none;
  position: absolute;
  right: 12px;
  top: calc(50% - 5px);
  transform: rotate(45deg);
  width: 6px;
}
</style>
