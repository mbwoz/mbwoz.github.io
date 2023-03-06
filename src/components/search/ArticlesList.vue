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
  list-style-type: none;
  padding: 8px;
  border-bottom: 1px solid var(--dark_color);

  display: flex;
  align-items: center;
  gap: 15px;
}

li .dot {
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: var(--accent_color);
}

li .issue {
  flex-grow: 2;
}

li .title {
  flex-grow: 3;
}

li .label {
  display: inline-block;
  font-weight: 700;
  color: var(--accent_color);
  margin-right: 1ex;
}

li .value {
  display: inline-block;
  font-style: italic;
}
</style>
