import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { getPage, getPageTitle, getQuery } from '../../../utils/function';
import { CardPage } from '../card/cardPage';
import { HeadingDashboard, HeadingDashboardPage } from '../heading';
import { Pagination } from '../pagination';
import { Blogs4 } from '../blog/listArticle/blogs4';
import usePage0BySlug from '../../hooks/pages0/usePage0BySlug';
interface GridPage1 {
}

export const GridPage1: FC<GridPage1> = () => {
  const { asPath } = useRouter()
  const query = getQuery(asPath)
  
  const { data: pages1 } = usePage0BySlug(query[2] ,query.at(-1)!);
  console.log(pages1);
  console.log(pages1?.data.type);

  

  return (
    <>
      <HeadingDashboardPage title={pages1?.slug!} page={pages1}/>
      <div className={`grid grid-cols-2 gap-3 sm:gap-6  sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5`}>
        {pages1?.page.map((data, i) => <CardPage key={i} data={data} />)}
      </div>

      {
        pages1?.data.type === "article" && <Blogs4 articles={pages1?.article}  />
      } 
      <Pagination />
    </>
  )
}