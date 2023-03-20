import type { Article } from '@/model/articles';

export const listArticles = async (): Promise<Array<Article>> => {
  return fetch('/storage/articles.json').then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
};

export const getArticle = async (id: number): Promise<Article> => {
  return listArticles().then((articles) => {
    const article: Article | undefined = articles.find((article) => article.id === id);
    if (!article) {
      throw new Error(`Article with id: ${id} not found`);
    }
    return article;
  });
};
