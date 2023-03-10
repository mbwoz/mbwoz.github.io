<script setup lang="ts">
import { listArticles } from '@/api/articles';
import ArticlesList from '@/components/search/ArticlesList.vue';
import SearchForm from '@/components/search/tag/SearchForm.vue';
import type { Article } from '@/model/articles';
import { type Ref, ref, computed, type ComputedRef } from 'vue';

const form: Ref<{ selectedTags: ReadonlyArray<string> }> = ref({ selectedTags: [] });
const articles: Ref<ReadonlyArray<Article>> = ref([]);

Promise.resolve(listArticles()).then((data) => (articles.value = data));

const tags: ComputedRef<ReadonlyArray<string>> = computed(() => {
  const tags = new Set<string>();
  articles.value.forEach((article) =>
    article.tags.forEach((tag) => tags.add(tag.toLocaleLowerCase()))
  );
  return Array.from(tags).sort((a, b) => a.localeCompare(b));
});

const filtered: ComputedRef<ReadonlyArray<Article>> = computed(() => {
  return articles.value.filter((article) => {
    const lowerCaseArticleTags = article.tags.map((tag) => tag.toLocaleLowerCase());
    return form.value.selectedTags.every((tag) => lowerCaseArticleTags.indexOf(tag) !== -1);
  });
});

const addTag = (tagToAdd: string) => {
  form.value.selectedTags = [...form.value.selectedTags, tagToAdd];
};

const removeTag = (tagToRemove: string) => {
  form.value.selectedTags = form.value.selectedTags.filter((tag) => tag !== tagToRemove);
};
</script>

<template>
  <div>
    <div class="form">
      <SearchForm :form="form" :tags="tags" @add-tag="addTag" @remove-tag="removeTag" />
    </div>
    <ArticlesList :articles="filtered" />
  </div>
</template>

<style scoped>
.form {
  margin-bottom: 30px;
}
</style>
