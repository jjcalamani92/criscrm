import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  CreatePage,
  UpdatePage,
} from "../../../interfaces/page/page.interface";
import {
  CREATE_PAGE_0,
  CREATE_PAGE_1,
  CREATE_PAGE_2,
  DELETE_PAGE_0,
  DELETE_PAGE_1,
  DELETE_PAGE_2,
  UPDATE_PAGE_0,
  UPDATE_PAGE_1,
  UPDATE_PAGE_2,
} from "../../mutation";
import { graphQLClient } from "../graphQLClient";

export const useCreatePage0 = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (input: CreatePage) => {
      const { createPage0 } = await graphQLClient.request(CREATE_PAGE_0, {
        input,
      });
      return createPage0;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([`find-site`]);
      },
      onError: (error) => {
        console.log("error", error);
      },
    }
  );
};
export const useUpdatePage0 = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ id, input }: UpdatePage) => {
      const { updatePage0 } = await graphQLClient.request(UPDATE_PAGE_0, {
        id,
        input,
      });
      return updatePage0;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([`get-sites`]);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
};
export const useDeletePage0 = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (id: string) => {
      const { deletePage0 } = await graphQLClient.request(DELETE_PAGE_0, {
        id,
      });
      return deletePage0;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([`find-site`]);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
};

export const useCreatePage1 = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (input: CreatePage) => {
      const { createPage1 } = await graphQLClient.request(CREATE_PAGE_1, {
        input,
      });
      return createPage1;
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

export const useUpdatePage1 = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async ({ id, input }: UpdatePage) => {
      const { updatePage1 } = await graphQLClient.request(UPDATE_PAGE_1, {
        id,
        input,
      });
      return updatePage1;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([`get-sites`]);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
};
export const useDeletePage1 = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (id: string) => {
      const { deletePage1 } = await graphQLClient.request(DELETE_PAGE_1, {
        id,
      });
      return deletePage1;
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

export const useCreatePage2 = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (input: CreatePage) => {
      const { createPage2 } = await graphQLClient.request(CREATE_PAGE_2, {
        input,
      });
      return createPage2;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([`find-page1-by-slug`]);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
};
export const useUpdatePage2 = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async ({ id, input }: UpdatePage) => {
      const { updatePage2 } = await graphQLClient.request(UPDATE_PAGE_2, {
        id,
        input,
      });
      return updatePage2;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([`get-sites`]);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
};

export const useDeletePage2 = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (id: string) => {
      const { deletePage2 } = await graphQLClient.request(DELETE_PAGE_2, {
        id,
      });
      return deletePage2;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([`find-page1-by-site`]);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
};
