export type Category = {
  id: number;
  name: string;
  articles: Array<Article>;
  created_at: string;
  updated_at: string;
};

export type Article = {
  id: number;
  title: string;
  slug: string;
  content: string;
  created_at: string;
  updated_at: string;
  categories: Array<Category>;
};

export type Meta = {
  page: number;
  limit: number;
  total_docs: number;
  total_pages: number;
  has_next_page: boolean;
};
