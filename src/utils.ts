import { URL } from "./contants";

export function getArticle(id: number) {
  return fetch(`${URL}/api/v1/articles/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function getArticles(page = 1, limit = 5, search = "") {
  if (limit > 12) limit = 12;
  let url = `${URL}/api/v1/articles?page=${page}&limit=${limit}`;
  if (search) url += `&search=${search}`;
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function getArticlesByCategory(categoryId: number) {
  return fetch(
    `${URL}/api/v1/articles?page=1&limit=5&category_id=${categoryId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

export function getCategories() {
  return fetch(`${URL}/api/v1/categories`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
}
