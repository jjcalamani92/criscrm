import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CREATE_SITE, DELETE_SITE, UPDATE_SITE } from "../../mutation/site.mutation";

import { graphQLClient } from "../graphQLClient";
import { CREATE_ARTICLE, CREATE_PRODUCT, DELETE_ARTICLE, UPDATE_ARTICLE } from "../../mutation";
import { useRouter } from 'next/router';
import { getQuery } from "../../../utils/function";
import { CreateArticle, UpdateArticle } from "../../../interfaces/article/article.interface";

export const useCreateArticle = () => {
  const { asPath } = useRouter()
  const query = getQuery(asPath)
  const queryClient = useQueryClient();
  return useMutation(
    async (input: CreateArticle) => {
      const { createArticle } = await graphQLClient.request(CREATE_ARTICLE, {
        input,
      });
      return createArticle;
    },
    {
      onSuccess: () => {
        // if (query.length === 6) {
        //   queryClient.invalidateQueries([`find-page2-by-site`]);
        // } else if (query.length === 5) {
        //   queryClient.invalidateQueries([`find-page1-by-site`]);
        // } else {
        // }
        queryClient.invalidateQueries(["find-page0-by-slug"]);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
};
export const useUpdateArticle = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({_id, input}:UpdateArticle) => {
      const { updateArticle } = await graphQLClient.request(UPDATE_ARTICLE, {
        _id,
        input
      });
      return updateArticle;
    },
    {
      onSuccess: (_id) => {
        queryClient.invalidateQueries(["find-article", _id]);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
};

export const useDeleteArticle = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (_id) => {
      const { deleteArticle } = await graphQLClient.request(DELETE_ARTICLE, {
        _id,
      });
      return deleteArticle;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([`find-page0-by-slug`]);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
};