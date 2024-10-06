import { memo, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import ArticlesDataView from "../components/ArticlesDataView";
import { ArticlesProvider, useArticles } from "../hooks/ArticlesProvider";

function Articles() {
  return (
    <ArticlesProvider>
      <ArticleList />
    </ArticlesProvider>
  );
}

function ArticleList() {
  const navigate = useNavigate();

  const { articles, meta, page, setPage, limit, setLimit, setSearch } =
    useArticles();

  const [searchMode, setSearchMode] = useState(false);

  const toggleSearch = useCallback(() => {
    setSearchMode((prev) => !prev);
  }, []);

  const nextPage = useCallback(() => {
    if (meta?.has_next_page) {
      setPage(page + limit);
    }
  }, [limit, meta?.has_next_page, page, setPage]);

  const prevPage = useCallback(() => {
    if (page > 1) {
      setPage(page - limit);
    }
  }, [limit, page, setPage]);

  const handleClick = useCallback(
    (id: number) => {
      navigate(`/article/${id}`); // Navigate to the article details page
    },
    [navigate]
  );

  const handleClickLimit = useCallback(
    (limit: number) => {
      setLimit(limit);
    },
    [setLimit]
  );

  return (
    <ArticlesDataView
      articles={articles}
      meta={meta}
      page={page}
      setSearch={setSearch}
      searchMode={searchMode}
      toggleSearch={toggleSearch}
      handleClick={handleClick}
      handleClickLimit={handleClickLimit}
      nextPage={nextPage}
      prevPage={prevPage}
    />
  );
}

export default memo(Articles);
