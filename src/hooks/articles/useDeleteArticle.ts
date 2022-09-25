import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { graphQLClient } from "../../../graphql/reactQuery/graphQLClient";
import { CREATE_ARTICLE, DELETE_ARTICLE, UPDATE_ARTICLE } from "../../../graphql/mutation";

export const deleteArticle = async (_id:string) => {
  const { deleteArticle } = await graphQLClient.request(DELETE_ARTICLE, {
    _id,
  });
  return deleteArticle;
}

export const useDeleteArticle = () => {
  const queryClient = useQueryClient();
  return useMutation(
    deleteArticle,
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