<script setup lang="ts">
import { getArticle } from '@/api/articles';
import LabelValue from '@/components/attributes/LabelValue.vue';
import SubmitButton from '@/components/form/SubmitButton.vue';
import type { Article } from '@/model/articles';
import { ref, type Ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const article: Ref<Article> = ref({ id: -1, issue: '', title: '', tags: [] });

getArticle(Number(route.params.id)).then((data) => (article.value = data));
</script>

<template>
  <div>
    <LabelValue label="issue:" :value="article.issue" />
    <LabelValue label="title:" :value="article.title" />
    <LabelValue label="tags:" :value="article.tags.join(', ')" />
    <div class="btn">
      <SubmitButton label="Back" @on-click="$router.back()" />
    </div>
  </div>
</template>

<style scoped>
.btn {
  margin-top: 50px;
}
</style>
