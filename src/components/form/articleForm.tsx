import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { FC, useRef } from 'react';
import { useForm, Resolver, SubmitHandler } from 'react-hook-form';
import Swal from 'sweetalert2';
import { CREATE_PRODUCT, UPDATE_PRODUCT } from '../../../graphql/mutation';
import { graphQLClient } from '../../../graphql/reactQuery/graphQLClient';
import { useCreateProduct } from '../../../graphql/reactQuery/mutation/product.mutate';
import { Product } from '../../../interfaces/product.interface';
import { getQuery } from '../../../utils/function';
import { useSession } from 'next-auth/react';
import { CREATE_ARTICLE } from '../../../graphql/mutation/article.mutation';
import { useCreateArticle } from '../../hooks/articles/useCreateArticle';

interface FormValues {
  title: string;
  description: string;
  category: string;
};
interface ArticleForm {
  setOpenMCD: React.Dispatch<React.SetStateAction<boolean>>
  uid?: string
  type?: string
  product?: Product
}
export const ArticleForm: FC<ArticleForm> = ({ setOpenMCD, uid, type, product }) => {

  const { asPath, replace } = useRouter()
  const query = getQuery(asPath)
  const { data: session } = useSession()

  const { mutate: createArticle } = useCreateArticle()
  

  const { register, handleSubmit } = useForm<FormValues>({ defaultValues: { title: "", description: 'article description', category:"" } });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const updateDocument = {...data, author: session?.user.sid!, site: query[2], parent: uid!}
    const createDocument = {...updateDocument}
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Created Article',
      showConfirmButton: false,
      timer: 1000
    }) 
    createArticle(createDocument)
    setOpenMCD(false)
  };
  const cancelButtonRef = useRef(null)

  return (
    <div className="mt-5 md:col-span-2 md:mt-0">
      <form onSubmit={handleSubmit(onSubmit)} action="#" method="POST">
        <div className="overflow-hidden shadow sm:rounded-md">
          <div className="bg-white px-4 py-5 sm:p-6">
            <div className="my-3 text-center sm:mt-0 sm:text-left">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                {/* { product ? "Edit Product" :"New Product"} */}
                New Article
              </h3>
            </div>
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6">
                <label
                  className="block text-sm font-medium text-gray-700">
                  Article name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  {...register("title")}
                />
              </div>
              
              <div className="col-span-6">
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <div className="mt-1">
                  <textarea
                    rows={5}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    {...register("description")}
                  />
                </div>
              </div>
              <div className="col-span-6">
                <label
                  className="block text-sm font-medium text-gray-700">
                  Category
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  {...register("category")}
                />
              </div>

              

              
            </div>
          </div>

        </div>
        <div className="bg-gray-50 px-4 py-6 sm:flex sm:flex-row-reverse sm:px-6">
          <button
            type="submit"
            className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
          // onClick={() => setOpen(false)}
          >
            {product ? "Update" : "Create"}
          </button>
          <button
            type="button"
            className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            // onClick={() => setOpen(false)}
            ref={cancelButtonRef}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}