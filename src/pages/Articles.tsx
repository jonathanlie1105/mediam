import { ArticlesProvider } from "../hooks/ArticlesProvider";
import ArticlesDataView from "../components/ArticlesDataView";

const Articles = () => {
  return (
    <ArticlesProvider>
      <ArticlesDataView />
    </ArticlesProvider>
  );
};

export default Articles;
