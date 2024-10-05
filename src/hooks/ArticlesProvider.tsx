import { createContext, useContext, useEffect, useState } from "react";

import { Article, Meta } from "../types";
import { getArticles } from "../utils";

type Context = {
  articles: Array<Article>;
  meta?: Meta;
  page: number;
  limit: number;
  setPage: (page: number) => void;
  setLimit: (limit: number) => void;
};

const ArticleContext = createContext<Context | null>(null);

function ArticlesProvider({ children }: { children: React.ReactNode }) {
  const [articles, setArticles] = useState<Array<Article>>([]);
  const [meta, setMeta] = useState<Meta>();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await getArticles(page, limit);
      const result = await response.json();
      setArticles(result.data.data);
      setMeta(result.data.metadata);
      console.log(result);
    };

    fetchArticles();
  }, [articles.length, limit, page]);

  useEffect(() => {
    if (limit > 12) {
      setLimit(12);
    }
    if (limit < 1) {
      setLimit(1);
    }
  }, [limit]);

  return (
    <ArticleContext.Provider
      value={{ articles, meta, page, limit, setPage, setLimit }}
    >
      {children}
    </ArticleContext.Provider>
  );
}

function useArticles() {
  const context = useContext(ArticleContext);

  if (!context) {
    throw new Error("useArticles must be used within an ArticlesProvider");
  }

  return context;
}

export { ArticlesProvider, useArticles };
