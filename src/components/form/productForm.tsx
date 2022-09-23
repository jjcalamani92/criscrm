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

interface FormValues {
  name: string;
  mark: string;
  featured: string;
  description: string;
  price: number;
  discountPrice: number;
  inStock: number;
};
interface ProductForm {
  setOpenMCD: React.Dispatch<React.SetStateAction<boolean>>
  uid?: string
  type?: string
  product?: Product
}
export const ProductForm:FC<ProductForm> = ({setOpenMCD, uid, type, product}) => {

  const { asPath, replace } = useRouter()
  const query = getQuery(asPath)

  const { register, handleSubmit } = useForm<FormValues>({defaultValues: product ? {name: product.article.name, mark: product.article.mark, featured: product.article.featured.href, description: product.article.description, price: product.article.price, discountPrice: product.article.discountPrice, inStock: product.article.inStock} : {name: "", mark: 'none', featured:'none', description: 'product description', price: 0, discountPrice:0, inStock:1}});
  
  const queryClient = useQueryClient();
  
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const updateForm ={...data, price: Number(data.price), discountPrice: Number(data.discountPrice), inStock: Number(data.inStock) }
    const form = {...updateForm, site: query[2], parent: uid}

    
    if (product) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Updated Page',
        showConfirmButton: false,
        timer: 1000
      }) 
      await graphQLClient.request(UPDATE_PRODUCT, {_id: product._id, input: updateForm, type: product.type})
      queryClient.invalidateQueries([`find-product`]);
      
    } else {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Created Product',
        showConfirmButton: false,
        timer: 500
      })
      await graphQLClient.request(CREATE_PRODUCT, { input: form, type:type})
      queryClient.invalidateQueries([`find-page2-by-site`]);
    }
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
                { product ? "Edit Product" :"New Product"}
              </h3>
            </div>
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6">
                <label
                  className="block text-sm font-medium text-gray-700">
                  Product name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  {...register("name")}
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                  Mark
                </label>
                <select
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  {...register("mark")}
                >
                  <option value="none" >None</option>
                  <option value="cris" >Cris</option>
                  <option value="terra" >Terra</option>
                </select>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                  Featured
                </label>
                <select
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  {...register("featured")}
                >
                  <option value="none" >None</option>
                  <option value="dos-por-uno" >Dos por Uno</option>
                  <option value="descuentos-de-julio" >Descuentos de Julio</option>
                </select>
              </div>
              {/* <div className="col-span-6">
                <label
                  // htmlFor="company-website" 
                  className="block text-sm font-medium text-gray-700">
                  Website
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                    http://
                  </span>
                  <input
                    type="text"
                    // name="company-website"
                    // id="company-website"
                    className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="example.com"
                    {...register("domain")}

                  />
                </div>
              </div> */}
              <div className="col-span-6">
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <div className="mt-1">
                  <textarea
                    // id="about"
                    // name="about"
                    rows={5}
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
              
              <div className="col-span-6 sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Price [Bs]
                </label>
                <input
                  type="number"
                  // name="numberPhone"
                  // id="last-name"
                  // autoComplete="family-name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  {...register("price", {min:0})}
                />
              </div>
              <div className="col-span-6 sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Discount price [Bs]
                </label>
                <input
                  type="number"
                  // name="numberPhone"
                  // id="last-name"
                  // autoComplete="family-name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  {...register("discountPrice", {min:0})}
                />
              </div>
              <div className="col-span-6 sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Stock [#]
                </label>
                <input
                  type="number"
                  // name="numberPhone"
                  // id="last-name"
                  // autoComplete="family-name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  {...register("inStock", {min:1})}
                />
              </div>

              {/* <div className="col-span-6">
                <fieldset>
                  <legend className="contents text-base font-medium text-gray-900">Type </legend>
                  {/* <p className="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p> 
                  <div className="mt-4 space-y-4">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        value={'ecommerce'}
                        // onBlur={onBlur} 
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        {...register("type")}
                      />
                      <label className="ml-3 block text-sm font-medium text-gray-700">
                        Ecommerce
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        value={'marketing'}

                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        {...register("type")}

                      />
                      <label className="ml-3 block text-sm font-medium text-gray-700">
                        Marketing
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        value={'blog'}
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        {...register("type")}
                      />
                      <label className="ml-3 block text-sm font-medium text-gray-700">
                        Blog
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div> */}

              {/* <div className="col-span-6 sm:col-span-4">
                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  type="text"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div> */}



              {/* <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                  State / Province
                </label>
                <input
                  type="text"
                  name="region"
                  id="region"
                  autoComplete="address-level1"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                  ZIP / Postal code
                </label>
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autoComplete="postal-code"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div> */}
            </div>
          </div>
          {/* <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Save
            </button>
          </div> */}
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