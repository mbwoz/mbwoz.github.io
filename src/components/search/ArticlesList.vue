<script setup lang="ts">
import type { Article } from '@/model/articles';

defineProps<{ articles: ReadonlyArray<Article> }>();
</script>

<template>
  <ul>
    <li v-for="{ issue, title } in articles" :key="`${issue}:${title}`">
      <div class="dot"></div>
      <div class="issue">
        <p class="label">issue:</p>
        <p class="value">{{ issue }}</p>
      </div>
      <div class="title">
        <p class="label">title:</p>
        <p class="value">{{ title }}</p>
      </div>
    </li>
  </ul>
</template>

<style scoped>
li {
  align-items: center;
  border-bottom: 1px solid var(--accent_color);
  display: grid;
  grid-template-columns: 10px 2fr 3fr;
  gap: 15px;
  list-style-type: none;
  padding: 8px;
}

li .dot {
  background-color: var(--accent_color);
  border-radius: 100%;
  height: 10px;
  width: 10px;
}

li .label {
  color: var(--accent_color);
  display: inline-block;
  font-weight: 700;
  margin-right: 1ex;
}

li .value {
  display: inline-block;
  font-style: italic;
}
</style>
