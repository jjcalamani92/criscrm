import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";


import { FIND_ARTICLES } from "../../../graphql/query/articles/article.query";
import { graphQLClient } from "../../../graphql/reactQuery/graphQLClient";
import { Article } from "../../../interfaces/article/article.interface";

export const findArticles = async () => {
  const { findArticles } = await graphQLClient.request(
    FIND_ARTICLES,
  );
  return findArticles;

};

export function useFindAllArticles() {
  return useQuery<[Article]>(["find-all-articles"], () => findArticles())
}
