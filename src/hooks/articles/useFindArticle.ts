import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { FIND_ARTICLE, FIND_ARTICLES } from "../../../graphql/query/article.query";
import { graphQLClient } from "../../../graphql/reactQuery/graphQLClient";
import { Article } from "../../../interfaces/article/article.interface";

export const findArticle = async (articleID:string) => {
  const { findArticle } = await graphQLClient.request(
    FIND_ARTICLE, {_id: articleID}
  );
  return findArticle;
};

export function useFindArticle(articleID:string) {
  return useQuery<Article>(["find-article", articleID], () => findArticle(articleID))
}
