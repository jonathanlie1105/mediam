import { createContext, useContext, useEffect, useState } from "react";

import { Category } from "../types";
import { getCategories } from "../utils";

type Context = {
  categories: Array<Category>;
  setCategories: (articles: Array<Category>) => void;
};

const CategoryContext = createContext<Context | null>(null);

function CategoryProvider({ children }: { children: React.ReactNode }) {
  const [categories, setCategories] = useState<Array<Category>>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await getCategories();
      const result = await response.json();
      setCategories(result.data);
      console.log(result);
    };

    fetchCategories();
  }, []);

  return (
    <CategoryContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategoryContext.Provider>
  );
}

function useCategories() {
  const context = useContext(CategoryContext);

  if (!context) {
    throw new Error("useCategories must be used within an CategoryProvider");
  }

  return context;
}

export { CategoryProvider, useCategories };
