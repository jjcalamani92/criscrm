import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Article, Page, Site, User } from "../../../interfaces";

import { FIND_ARTICLES } from "../../query/article.query";
import { graphQLClient } from "../graphQLClient";

export function useFindAllArticles() {
  return useQuery<[Article]>(["find-all-articles"], async () => {
    const { findArticles } = await graphQLClient.request(
      FIND_ARTICLES,
    );
    return findArticles;
  });
}
