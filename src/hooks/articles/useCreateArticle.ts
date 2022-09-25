import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { useRouter } from 'next/router';
import { getQuery } from "../../../utils/function";
import { CreateArticle, UpdateArticle } from "../../../interfaces/article/article.interface";
import { graphQLClient } from "../../../graphql/reactQuery/graphQLClient";
import { CREATE_ARTICLE } from "../../../graphql/mutation";

export const addArticle = async (input: CreateArticle) => {
  const { createArticle } = await graphQLClient.request(CREATE_ARTICLE, {
    input,
  });
  return createArticle;
}

export const useCreateArticle = () => {
  const queryClient = useQueryClient();
  return useMutation(
    addArticle,
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["find-page0-by-slug"]);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
};