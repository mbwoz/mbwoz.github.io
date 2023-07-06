<script setup lang="ts">
import { listArticles } from '@/api/articles';
import ArticlesList from '@/components/search/ArticlesList.vue';
import SearchForm from '@/components/search/title/SearchForm.vue';
import type { Article } from '@/model/articles';
import { computed, ref, type ComputedRef, type Ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const form: Ref<{ searchText: string; includeTags: boolean }> = ref({
  searchText: '',
  includeTags: false
});
const articles: Ref<ReadonlyArray<Article>> = ref([]);

listArticles().then(
  (data) =>
    (articles.value = data.sort(
      (a, b) => a.title.localeCompare(b.title) || a.issue.localeCompare(b.issue)
    ))
);

const route = useRoute();
const router = useRouter();

const querySearchText: string = Array.isArray(route.query['searchText'])
  ? ''
  : route.query['searchText'] ?? '';
const queryIncludeTags: boolean = Array.isArray(route.query['includeTags'])
  ? false
  : route.query['includeTags'] === 'true';
form.value.searchText = querySearchText;
form.value.includeTags = queryIncludeTags;

const filtered: ComputedRef<ReadonlyArray<Article>> = computed(() =>
  articles.value.filter(
    (article) =>
      article.title.toLocaleLowerCase().indexOf(form.value.searchText.toLocaleLowerCase()) !== -1 ||
      (form.value.includeTags &&
        article.tags.some(
          (tag) => tag.toLocaleLowerCase().indexOf(form.value.searchText.toLocaleLowerCase()) !== -1
        ))
  )
);

const onSearchChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  form.value.searchText = target.value;
  router.replace({
    path: route.path,
    query: { ...route.query, searchText: form.value.searchText }
  });
};

const onIncludeTags = () => {
  form.value.includeTags = !form.value.includeTags;
  router.replace({
    path: route.path,
    query: { ...route.query, includeTags: form.value.includeTags.toString() }
  });
};
</script>

<template>
  <div>
    <div class="form">
      <SearchForm
        :form="form"
        @on-search-change="onSearchChange"
        @on-include-tags="onIncludeTags"
      />
    </div>
    <ArticlesList :articles="filtered" />
  </div>
</template>

<style scoped>
.form {
  margin-bottom: 30px;
}
</style>
