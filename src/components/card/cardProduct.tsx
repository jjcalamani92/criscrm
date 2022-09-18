import Link from "next/link"
import { FC } from "react";
import { useRouter } from 'next/router';
import Image from "next/image";
import Swal from "sweetalert2";
import { graphQLClient } from "../../../graphql/reactQuery/graphQLClient";
import { DELETE_SITE } from "../../../graphql/mutation/site.mutation";
import { useQueryClient } from "@tanstack/react-query";
import { Product } from "../../../interfaces/product.interface";
import { getQuery } from "../../../utils/function";
interface CardProduct {
  data: Product
  type: string
}
export const CardProduct: FC<CardProduct> = ({ data, type }) => {
  const { asPath } = useRouter()
  const query = getQuery(asPath)
  const onDelete = (id:string) => {
    console.log('onDelete');
    
    // Swal.fire({
		// 	title: 'Are you sure?',
		// 	text: "You won't be able to revert this!",
		// 	icon: 'warning',
		// 	showCancelButton: true,
		// 	confirmButtonColor: '#3085d6',
		// 	cancelButtonColor: '#d33',
		// 	confirmButtonText: 'Yes, delete it!'
		// }).then( async (result) => {
		// 	if (result.isConfirmed ) {
		// 		Swal.fire({ 
		// 				title: 'Deleted!',
		// 				text: 'Your file has been deleted.',
		// 				icon: 'success',
		// 				timer: 1500,
		// 				showConfirmButton: false,
		// 			})
          
    //     await graphQLClient.request(DELETE_SITE, {_id: id} )
    //     queryClient.invalidateQueries(["get-sites"])
		// 	}
		// })
  }
  return (
    <div className="max-w-xs rounded-md shadow-lg bg-gray-50 text-gray-800">
      <Link href={`/dashboard/sites/${query[2]}/$products/${type}/${data._id}`}>
        <a >
          <Image
            width={400}
            height={400}
            src={"https://res.cloudinary.com/dvcyhn0lj/image/upload/v1655217461/14.1_no-image.jpg_gkwtld.jpg"}
            alt={"description image"}
          />
          <div className="flex flex-col justify-between px-4 space-y-8">
            <div className="space-y-2">
              <h2 className=" font-semibold tracking-wide">{data.article.name}</h2>
              {/* <p className="text-gray-800">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p> */}
              {/* <button type="button" onClick={() => onDelete()} className="flex items-center justify-center w-full p-2 font-semibold tracking-wide rounded-md bg-indigo-600 text-gray-50">Delete</button> */}
            </div>
          </div>
        </a>
      </Link>
      <div className="flex flex-col justify-between p-4 space-y-8">

        <button type="button" onClick={() => onDelete(data._id)} className="flex items-center justify-center w-full p-2 font-semibold tracking-wide rounded-md bg-indigo-600 text-gray-50">Delete</button>
      </div>
    </div>
  )
}