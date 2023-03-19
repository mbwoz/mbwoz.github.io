<script setup lang="ts">
import type { Article } from '@/model/articles';
import LabelValue from '../attributes/LabelValue.vue';

defineProps<{ articles: ReadonlyArray<Article> }>();
</script>

<template>
  <ul>
    <li v-for="{ id, issue, title } in articles" :key="id">
      <div class="dot"></div>
      <LabelValue label="issue:" :value="issue" />
      <LabelValue label="title:" :value="title" />
      <RouterLink :to="`/articles/${id}`" target="_blank">
        <div class="more"></div>
      </RouterLink>
    </li>
  </ul>
</template>

<style scoped>
li {
  align-items: center;
  border-bottom: 1px solid var(--accent_color);
  display: grid;
  grid-template-columns: 10px 2fr 3fr 10px;
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

li .more {
  border-bottom: 5px solid transparent;
  border-left:10px solid var(--accent_color);
  border-top: 5px solid transparent;
  cursor: pointer;
  height: 0;
  width: 0;
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
