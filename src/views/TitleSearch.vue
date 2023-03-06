<script setup lang="ts">
import { listArticles } from '@/api/articles';
import ArticlesList from '@/components/search/ArticlesList.vue';
import SearchForm from '@/components/search/title/SearchForm.vue';
import type { Article } from '@/model/articles';
import { computed, ref, type ComputedRef, type Ref } from 'vue';

const form: Ref<{ searchText: string; includeTags: boolean }> = ref({
  searchText: '',
  includeTags: false
});

const articles: Ref<ReadonlyArray<Article>> = ref([]);

Promise.resolve(listArticles()).then((data) => {
  articles.value = data;
});

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
};

const onIncludeTags = () => {
  form.value.includeTags = !form.value.includeTags;
};
</script>

<template>
  <div>
    <SearchForm
      class="form"
      :form="form"
      @on-search-change="onSearchChange"
      @on-include-tags="onIncludeTags"
    />
    <ArticlesList :articles="filtered" />
  </div>
</template>

<style scoped>
.form {
  margin-bottom: 30px;
}
</style>
