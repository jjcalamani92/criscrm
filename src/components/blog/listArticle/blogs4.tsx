import Link from "next/link"
import { FC } from "react"
import { useRouter } from 'next/router';
import { getQuery } from "../../../../utils/function";
import { Article } from "../../../../interfaces/article/article.interface";
import Image from "next/image";
import Swal from "sweetalert2";
import { useDeleteArticle } from "../../../hooks/articles/useDeleteArticle";

interface Blogs4 {
  articles: Article[]
}
export const Blogs4: FC<Blogs4> = ({ articles }) => {
  const { asPath } = useRouter()
  const query = getQuery(asPath)
  const { mutate: deleteArticle } = useDeleteArticle()
  const onDelete = async (id: string) => {
    console.log('delete', id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success',
          timer: 1000,
          showConfirmButton: false,
        })
        deleteArticle(id)
      }
    })

  }
  return (
    <section className="px-4 py-10 mx-auto max-w-7xl">
      <h2 className="pb-8 mb-12 text-2xl font-extrabold leading-tight text-gray-900 border-b border-gray-200 md:text-4xl">All Articles</h2>
      <div className="w-full xl:w-4/6">
        <div className="flex flex-col space-y-16">
          {
            articles.map(data => (

              <div className="grid grid-cols-1 gap-6 md:grid-cols-4" key={data._id}>
                <Image src="https://res.cloudinary.com/dqsbh2kn0/image/upload/v1663014890/zawkgpyjvvxrfwp9j7w1.jpg" className="object-cover w-full h-40 col-span-1 bg-center"
                  width={100}
                  height={100}
                  alt="Kutty" loading="lazy" />
                <div className="col-span-1 md:col-span-3">
                  <p className="mb-2 -mt-1 text-sm font-normal text-gray-500">{data.updateDate.createdAt.toString()}</p>
                  <Link href={`/dashboard/sites/${query[2]}/$articles/${data._id}`}>
                    <h2 className="mb-2 text-xl font-extrabold leading-snug text-gray-800">
                      <a href="#" className="text-gray-900 hover:text-purple-700">{data.data.title}</a>
                    </h2>
                  </Link>
                  <p className="mb-3 text-sm font-normal text-gray-500">
                    Earlier RPA bots used to have some limitations like it would take structured data for processing from excel, database, on these data. But with advancements in technology like OCR (Optical
                    Character Recognition) and Machine Learning, RPA bots are capable of extracting these data …
                  </p>
                  <div className="flex p-4  gap-3">
                    <Link href={`/dashboard/sites/${query[2]}/$articles/${data._id}`}>
                      <a className="btn btn-light ">Read More</a>
                    </Link>

                    <button type="button" onClick={() => onDelete(data._id)} className="flex items-center justify-center  p-2 font-semibold tracking-wide rounded-md bg-indigo-600 text-gray-50">Delete</button>
                  </div>

                </div>
              </div>
            ))
          }
        </div>
        <div className="pt-10 mt-10 border-t border-gray-200">
          <a href="#" className="w-full btn btn-light btn-lg md:w-auto">Load More</a>
        </div>
      </div>
    </section>
  )
}