import dynamic from 'next/dynamic';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Article5 } from '../blog/article';
import { Article } from '../blog/article/articleEdit5';
import ArticleEdit5 from '../blog/article/articleEdit5';
import { useFindArticle } from '../../hooks/articles/useFindArticle';
import { useRouter } from 'next/router';
import { getQuery } from '../../../utils/functionV0';
import { ScrollContainer } from '../swiper';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import { useQueryClient } from '@tanstack/react-query';
import { graphQLClient } from '../../../graphql/reactQuery/graphQLClient';
import { uuidv3 } from '../../../utils/uuid';

import Swal from 'sweetalert2';
import { useUpdateArticle } from '../../hooks/articles/useUpdateArticle';
import { HeadingDashboard, HeadingDashboardPage } from '../heading';


interface ArticleEdit {

}
export interface FormValues {
  title: string;
  description: string;
  category: string;
  content: string
  src: string
  alt: string
  meta: string
  tags: string
};

export const ArticleEdit: FC<ArticleEdit> = ({ }) => {
  const { asPath } = useRouter()
  const query = getQuery(asPath)
  const { data: article } = useFindArticle(query.at(-1)!)
  const {data:session } = useSession()
  // console.log(article);
  
    
  
  const { register, handleSubmit, formState: { errors }, getValues, setValue, watch } = useForm<FormValues>({ defaultValues: { title: article?.data.title, description: article?.data.description, category: article?.data.category, content: article?.data.content, meta: article?.data.meta, tags: article?.data.tags.map(data => data.text).join(', '), src: article?.data.thumbnail.src  } });
  
  const [ image, setImage ] = useState(getValues('src'))
  const [content, setContent] = useLocalStorage<string>(article?.data.slug!, getValues('content'))

  // console.log('CSS, Tailwind, javascript, React Hooks'.split(','));
  

  const { mutate: updateArticle } = useUpdateArticle()
  

  const onFileSelected = async ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (!target.files || target.files.length === 0) {
      return;
    }
    try {
      for (const file of target.files) {
        const formData = new FormData();
        formData.append('file', file )
        formData.append('site', query[2] )

        const { data } = await axios.post(`${process.env.API_URL}/upload/file`, formData)
        setImage(data.url)
        setValue('src', data.url, { shouldValidate: true })
        // console.log(getValues('article.image'));
        // await graphQLClient.request(UPDATE_PRODUCT_IMAGE, {_id: product!._id, input: getValues('article.image'), type: query.at(-2)})
        // queryClient.invalidateQueries([`find-product`]);
        
      }
    } catch (error) {
      console.log({ error })
    }
  }
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const documentUpdate = {...data, author: session?.user.sid!, src: image!, alt: data.description, tags: data.tags.split(',').map(data => data.trim())}
    // console.log(documentUpdate);
    
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Updated Article',
      showConfirmButton: false,
      timer: 1000
    })
    updateArticle({ _id: query.at(-1)!, input: documentUpdate })
  };

  return (
    <>
      <HeadingDashboardPage title='Article Edit' />
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-6 `}>
        <div className=''>
          <form action="#" method="POST" onSubmit={handleSubmit(onSubmit)}>
            <div className="shadow sm:overflow-hidden sm:rounded-md">
              <div className="space-y-6 bg-white px-4 py-5 sm:p-6">

                <div>
                  <label className="block text-sm font-medium text-gray-700">Thumbnail</label>
                  <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 py-6 ">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input id="file-upload" name="file-upload" accept=".png, .jpeg, .jpg, .webp" type="file" className="sr-only" onChange={onFileSelected} />

                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                </div>
                <div className="col-span-6">
                  <label
                    className="block text-sm font-medium text-gray-700">
                    Article name
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    {...register("title", {
                      required: 'Title required!!',
                      minLength: { value: 2, message: 'min 2 characters' }
                    })}
                    onChange={({ target }) => setValue('title', target.value, {shouldValidate: true})}

                  />
                </div>
                
                
                <div className="col-span-6">
                  <label className="block text-sm font-medium text-gray-700">
                    Content
                  </label>
                  <div className="mt-1">
                    <textarea
                      rows={15}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-base"
                      {...register("content")}
                      value={content!}
                      // onChange={({target}) => setValue('content', target.value, {shouldValidate: true})}
                      onChange={({ target }) => setContent(target.value)}
                    />
                  </div>
                </div>
                <div className="col-span-6">
                  <label
                    className="block text-sm font-medium text-gray-700">
                    Meta
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    {...register("meta")}
                  />
                </div>
                <div className="col-span-6">
                  <label
                    className="block text-sm font-medium text-gray-700">
                    Tags
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    {...register("tags")}
                    onChange={({ target }) => setValue('tags', target.value, {shouldValidate: true})}

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
              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className='py-2'>
          <ScrollContainer>
            <div className='overflow-auto h-screen'>
              <ArticleEdit5 code={content} values={getValues()}/>
            </div>
          </ScrollContainer>
        </div>
      </div>
    </>
  )
}