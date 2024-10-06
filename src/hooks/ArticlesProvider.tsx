import { createContext, useContext, useEffect, useState } from "react";

import { Article, Meta } from "../types";
import { getArticles } from "../utils";

type Context = {
  articles: Array<Article>;
  meta: Meta | null;
  page: number;
  limit: number;
  setPage: (page: number) => void;
  setLimit: (limit: number) => void;
  setSearch: (search: string) => void;
};

const ArticleContext = createContext<Context | null>(null);

function ArticlesProvider({ children }: { children: React.ReactNode }) {
  const [articles, setArticles] = useState<Array<Article>>([]);
  const [meta, setMeta] = useState<Meta | null>(null);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await getArticles(page, limit, search);
      const result = await response.json();
      setArticles(result.data.data);
      setMeta(result.data.metadata);
      console.log(result);
    };

    fetchArticles();
  }, [limit, page, search]);

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
      value={{
        articles,
        meta,
        page,
        limit,
        setPage,
        setLimit,
        setSearch,
      }}
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
