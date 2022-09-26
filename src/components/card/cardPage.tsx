import Link from "next/link"
import { FC } from "react";
import { Page, } from "../../../interfaces/page/page.interface";
import { useRouter } from 'next/router';
import Image from "next/image";
import { graphQLClient } from "../../../graphql/reactQuery/graphQLClient";
import { DELETE_PAGE_0, DELETE_PAGE_1 } from "../../../graphql/mutation/page.mutation";
import { useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { getQuery } from "../../../utils/function";
import { useDeletePage0, useDeletePage1, useDeletePage2 } from "../../../graphql/reactQuery/mutation/page.mutate";
interface CardPage {
  data: Page
}
export const CardPage: FC<CardPage> = ({ data }) => {
  // console.log(data);
  
  const { asPath } = useRouter()
  const query = getQuery(asPath)
  const { mutate: deletePage0 } = useDeletePage0()
  const { mutate: deletePage1 } = useDeletePage1()
  const { mutate: deletePage2 } = useDeletePage2()

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
          if (query.length === 5) { deletePage2(id) } 
          else if (query.length === 4) { deletePage1(id) }
          else if (query.length === 3) { deletePage0(id) }
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
          <div className="flex flex-col justify-between px-4 space-y-8">
            <div className="space-y-2">
              <h2 className="text-sm font-semibold ">{data.data.seo.title}</h2>

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