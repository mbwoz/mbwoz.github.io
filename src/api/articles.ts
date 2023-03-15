import type { Article } from '@/model/articles';

export const listArticles = async (): Promise<Array<Article>> => {
  return fetch('/storage/articles.json').then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
};
