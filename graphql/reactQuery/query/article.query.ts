import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Blog, Page, Site, User } from "../../../interfaces";

import { FIND_ARTICLES } from "../../query/article.query";
import { graphQLClient } from "../graphQLClient";

export function useFindAllArticles() {
  return useQuery<[Blog]>(["find-all-articles"], async () => {
    const { getBlogs } = await graphQLClient.request(
      FIND_ARTICLES,
    );
    return getBlogs;
  });
}
