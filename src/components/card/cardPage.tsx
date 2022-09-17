import Link from "next/link"
import { FC } from "react";
import { Page, Site } from "../../../interfaces/site.interface";
import { useRouter } from 'next/router';
import Image from "next/image";
import { graphQLClient } from "../../../graphql/reactQuery/graphQLClient";
import { DELETE_PAGE_0, DELETE_PAGE_1 } from "../../../graphql/mutation/page.mutation";
import { useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { getQuery } from "../../../utils/function";
interface CardPage {
  data: Page
}
export const CardPage: FC<CardPage> = ({ data }) => {
  const { asPath } = useRouter()
  const query = getQuery(asPath)
  const queryClient = useQueryClient()

  const onDelete = async (id: string) => {
    
    Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!'
		}).then( async (result) => {
			if (result.isConfirmed ) {
				Swal.fire({ 
						title: 'Deleted!',
						text: 'Your file has been deleted.',
						icon: 'success',
						timer: 1000,
						showConfirmButton: false,
					})
          let DELETE!: string

          if (query.length === 4) {
            DELETE = DELETE_PAGE_1
          } else 
          if (query.length === 3) {
            DELETE = DELETE_PAGE_0
          }
        await graphQLClient.request(DELETE, {_id: id} )
        queryClient.invalidateQueries(["get-sites"])
			}
		})


  }
  return (
    <div className="max-w-xs rounded-md shadow-lg bg-gray-50 text-gray-800">
      <Link href={`${asPath}/${data.slug}`}>
        <a >
          <Image
            width={400}
            height={400}
            src={"https://res.cloudinary.com/dvcyhn0lj/image/upload/v1655217461/14.1_no-image.jpg_gkwtld.jpg"}
            alt={"description image"}
          />
          {/* <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" /> */}
          <div className="flex flex-col justify-between px-4 space-y-8">
            <div className="space-y-2">
              <h2 className=" font-semibold ">{data.data.seo.title}</h2>
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