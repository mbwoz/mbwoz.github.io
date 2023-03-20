<script setup lang="ts">
import { listArticles } from '@/api/articles';
import ArticlesList from '@/components/search/ArticlesList.vue';
import SearchForm from '@/components/search/tag/SearchForm.vue';
import type { Article } from '@/model/articles';
import { type Ref, ref, computed, type ComputedRef } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const form: Ref<{ selectedTags: ReadonlyArray<string> }> = ref({ selectedTags: [] });
const articles: Ref<ReadonlyArray<Article>> = ref([]);

Promise.resolve(listArticles()).then(
  (data) =>
    (articles.value = data.sort(
      (a, b) => a.title.localeCompare(b.title) || a.issue.localeCompare(b.issue)
    ))
);

const router = useRouter();
const route = useRoute();

const querySelectedTags: (string | null | undefined)[] = Array.isArray(route.query['selectedTags'])
  ? route.query['selectedTags']
  : [route.query['selectedTags']];
form.value.selectedTags = querySelectedTags.filter(
  (tag): tag is Exclude<Exclude<typeof tag, null>, undefined> => tag !== null && tag !== undefined
);

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
  router.replace({ path: route.path, query: { selectedTags: [...form.value.selectedTags] } });
};

const removeTag = (tagToRemove: string) => {
  form.value.selectedTags = form.value.selectedTags.filter((tag) => tag !== tagToRemove);
  router.replace({ path: route.path, query: { selectedTags: [...form.value.selectedTags] } });
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
