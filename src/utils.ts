import { URL } from "./contants";

export function getArticle(id: number) {
  return fetch(`${URL}/api/v1/articles/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function getArticles(page = 1, limit = 5) {
  if (limit > 12) limit = 12;
  return fetch(`${URL}/api/v1/articles?page=${page}&limit=${limit}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function getCategories() {
  return fetch(`${URL}/api/v1/categories`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
}
