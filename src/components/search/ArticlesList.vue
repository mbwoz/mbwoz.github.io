<script setup lang="ts">
import type { Article } from '@/model/articles';

defineProps<{ articles: ReadonlyArray<Article> }>();
</script>

<template>
  <ul>
    <li v-for="{ issue, title } in articles" :key="`${issue}:${title}`">
      issue: {{ issue }} title: {{ title }}
    </li>
  </ul>
</template>
