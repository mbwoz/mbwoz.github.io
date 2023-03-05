import type { Article } from '@/model/articles';
import articles from '@/storage/articles.json';

export const listArticles = async (): Promise<ReadonlyArray<Article>> => {
  return articles;
};
