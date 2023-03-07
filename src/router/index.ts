import { createRouter, createWebHistory } from 'vue-router';
import TitleSearch from '@/views/TitleSearch.vue';

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
      component: TitleSearch
    },
    {
      path: '/tag-search',
      name: 'tag-search',
      component: () => import('@/views/TagSearch.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
});

export default router;
