import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { FC, useRef } from 'react';
import { useForm, Resolver, SubmitHandler, PathString } from 'react-hook-form';
import Swal from 'sweetalert2';
import { CREATE_PAGE_0, CREATE_PAGE_1, CREATE_PAGE_2, UPDATE_PAGE_0, UPDATE_PAGE_1, UPDATE_PAGE_2 } from '../../../graphql/mutation/page.mutation';
import { graphQLClient } from '../../../graphql/reactQuery/graphQLClient';
import { Page } from '../../../interfaces';
import { typePage, typeSite } from '../../../utils/const';
import { getQuery, getURL } from '../../../utils/function';

interface PageForm {
  setOpenMCD: React.Dispatch<React.SetStateAction<boolean>>
  uid: string
  page?: Page
}

interface FormValues {
  title: string;
  description: string;
  type: string;
};
export const PageForm:FC<PageForm> = ({setOpenMCD, uid, page}) => {
  
  const queryClient = useQueryClient()
  const { asPath, replace } = useRouter()
  // console.log(getURL(asPath));
  const query = getQuery(asPath)
  const { register, formState: { errors }, handleSubmit, setValue } = useForm<FormValues>({mode: "onChange", defaultValues:{title: page?.data.seo.title, description: page?.data.seo.description, type: page?.data.type}});
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const form = {...data, src:"https://res.cloudinary.com/dvcyhn0lj/image/upload/v1655217461/14.1_no-image.jpg_gkwtld.jpg", alt:"image description", site: query[2], page: uid}
    const formUpdate = {...data, src:"https://res.cloudinary.com/dvcyhn0lj/image/upload/v1655217461/14.1_no-image.jpg_gkwtld.jpg", alt:"image description"} 
    if (page) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Updated Page',
        showConfirmButton: false,
        timer: 2000
      })  
      let QUERY!: PathString
      if( query.length === 6) {
        QUERY = UPDATE_PAGE_2
      } else
      if( query.length === 5) {
        QUERY = UPDATE_PAGE_1
      } else
      if( query.length === 4) {
        QUERY = UPDATE_PAGE_0
      } 
      await graphQLClient.request(QUERY, { _id: uid, input: formUpdate })
      replace(getURL(asPath))
    } else {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Created Page',
        showConfirmButton: false,
        timer: 1000
      })  
      let QUERY!: PathString
      if( query.length === 5) {
        QUERY = CREATE_PAGE_2
      } else
      if( query.length === 4) {
        QUERY = CREATE_PAGE_1
      } else
      if( query.length === 3) {
        QUERY = CREATE_PAGE_0
      } 
      await graphQLClient.request(QUERY, { input: form })
    }
    queryClient.invalidateQueries(["get-sites"])
    setOpenMCD(false)

  }
    const cancelButtonRef = useRef(null)

  // const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <div className="mt-5 md:col-span-2 md:mt-0">
      <form onSubmit={handleSubmit(onSubmit)} action="#" method="POST">
        <div className="overflow-hidden shadow sm:rounded-md">
          <div className="bg-white px-4 py-5 sm:p-6">
            <div className="my-3 text-center sm:mt-0 sm:text-left">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                New Page
              </h3>
            </div>
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6">
                <label
                  className="block text-sm font-medium text-gray-700">
                  Page title
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
                    // id="about"
                    // name="about"
                    rows={3}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    // placeholder="you@example.com"
                    // defaultValue={''}
                    {...register("description")}
                  />
                </div>
                {/* <p className="mt-2 text-sm text-gray-500">
                  Brief description for your profile. URLs are hyperlinked.
                </p> */}
              </div>


              <div className="col-span-6">
                <fieldset>
                  <legend className="contents text-base font-medium text-gray-900">Type </legend>
                  {/* <p className="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p> */}
                  <div className="mt-4 space-y-4">
                    {
                      typePage.map(data => (
                        <div className="flex items-center" key={data.label}>
                      <input
                        type="radio"
                        value={data.value}
                        // onBlur={onBlur} 
                        {...register('type')}
                        onChange={({target}) => setValue('type', target.value, {shouldValidate: true})}
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        // {...register("type", {required:true, onChange: (e) => {setValue("type", e.target.value, {shouldValidate: true});}, onBlur: (e) => {},})}
                      />
                      {/* {errors.type && <p>This is required</p>} */}
                      <label className="ml-3 block text-sm font-medium text-gray-700">
                        {data.label}
                      </label>
                    </div>)
                        )
                    }
                    
                  </div>
                </fieldset>
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
            Create
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