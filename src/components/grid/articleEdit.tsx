import dynamic from 'next/dynamic';
import { FC, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useGetPage, useGetPages, useGetSites } from '../../../graphql/reactQuery/reactQuery';
import { Page, Site } from '../../../interfaces/site.interface';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Article5 } from '../blog/article';
import { Article } from '../blog/article/articleEdit5';
import  ArticleEdit5  from '../blog/article/articleEdit5';
import { useArticle } from '../../hooks/articles/useArticle';
import { useRouter } from 'next/router';
import { getQuery } from '../../../utils/functionV0';
// const ArticleEdit5  = dynamic<Article>(() => import('../blog/article/articleEdit5') as any, { ssr: false }) //<- set SSr to false

interface ArticleEdit {

}
interface FormValues {
  title: string;
  description: string;
  category: string;
  content: string
};

export const ArticleEdit: FC<ArticleEdit> = ({ }) => {
  const {asPath} = useRouter()
  const query = getQuery(asPath)
  const { data:article } = useArticle(query.at(-1)!)
  // console.log(article);

  
  const [content, setContent] = useLocalStorage<string>('code', '')
  const { register, handleSubmit, formState: { errors }, getValues, setValue, watch } = useForm<FormValues>({ defaultValues: { title: "", description: 'article description', category: "", content: content } });
  // useEffect(
  //   () => setArticle(article)
  //   , [])

  const onSubmit: SubmitHandler<FormValues> = async (data) => {


  };
  return (
    <>
      <div className={`grid grid-cols-2 gap-3 sm:gap-6 `}>
        <div className='py-24'>
          <form action="#" method="POST" onSubmit={handleSubmit(onSubmit)}>
            <div className="shadow sm:overflow-hidden sm:rounded-md">
              <div className="space-y-6 bg-white px-4 py-5 sm:p-6">

                <div>
                  <label className="block text-sm font-medium text-gray-700">Thumbnail</label>
                  <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 py-10 ">
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
                          <input id="file-upload" name="file-upload" type="file" className="sr-only" />
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
                  // {...register("title")}
                  />
                </div>
                <div className="col-span-6">
                  <label className="block text-sm font-medium text-gray-700">
                    Content
                  </label>
                  <div className="mt-1">
                    <textarea
                      rows={100}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      {...register("content")}
                      // value={article!}
                      // onChange={({target}) => setValue('content', target.value, {shouldValidate: true})}
                      onChange={({ target }) => setContent(target.value)}
                    />
                  </div>
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
        <div className=''>
            <ArticleEdit5 code={content} title={article?.data.title!} />
        </div>
      </div>
    </>
  )
}