import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/title-search'
    },
    {
      path: '/title-search',
      name: 'title-search',
      component: () => import('@/views/TitleSearch.vue')
    },
    {
      path: '/tag-search',
      name: 'tag-search',
      component: () => import('@/views/TagSearch.vue')
    },
    {
      path: '/articles/:id',
      name: 'articles',
      component: () => import('@/views/ArticleDetails.vue')
    }
  ]
});

export default router;
