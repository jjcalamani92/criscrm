import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { useFindPages0, useFindSite } from '../../../graphql/reactQuery/reactQuery';
import { useFindPage0BySite } from '../../../graphql/reactQuery/query/site.query';
import { getPage, getPageTitle, getQuery } from '../../../utils/function';
import { CardPage } from '../card/cardPage';
import { HeadingDashboard, HeadingDashboardPage } from '../heading';
import { Pagination } from '../pagination';
import { Blogs1 } from '../blog/listArticle/blogs1';
import { Blogs2, Blogs3 } from '../blog/listArticle';
import { Blogs4 } from '../blog/listArticle/blogs4';
import usePages1ByParent from '../../hooks/pages1/usePages1ByParent';
import usePage0 from '../../hooks/pages0/usePage0';
import usePage0BySlug from '../../hooks/pages0/usePage0BySlug';
import usePages1 from '../../hooks/pages1/usePages1';
interface GridPage1 {
}

export const GridPage1: FC<GridPage1> = () => {
  const { asPath } = useRouter()
  const query = getQuery(asPath)
  // const {data} = usePage0('6324d42f132d462bc1c57b68')
  
  const { data: pages1 } = usePage0BySlug(query[2] ,query.at(-1)!);
  // console.log(pages1);
  // const { data: pages1 } = usePages1ByParent(pages0BySlug?._id!);
  // // console.log(pages1);
  // const { data: pages11 } = usePages1();
  // console.log(pages11);
  

  return (
    <>
      <HeadingDashboardPage title={pages1?.slug!} page={pages1}/>
      <div className={`grid grid-cols-2 gap-3 sm:gap-6  sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5`}>
        {pages1?.page.map((data, i) => <CardPage key={i} data={data} />)}
      </div>
      {/* {
        page0?.data.type === "page" &&
      }
      {
        page0?.data.type === "blog" && <Blogs4 blog={page0?.blog}  />
      } */}
      <Pagination />
    </>
  )
}