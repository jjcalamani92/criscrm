import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { useFindPages0, useFindSite } from '../../../graphql/reactQuery/reactQuery';
import { useFindPage0BySite } from '../../../graphql/reactQuery/query/site.query';
import { getPage, getPageTitle, getQuery } from '../../../utils/function';
import { CardPage } from '../card/cardPage';
import { HeadingDashboard, HeadingDashboardPage } from '../heading';
import { Pagination } from '../pagination';
interface GridPage1 {

}

export const GridPage1: FC<GridPage1> = () => {
  const { asPath } = useRouter()
  const query = getQuery(asPath)
  const { data: page0 } = useFindPage0BySite(query[2], query[3]);
  // console.log(page0);
  // console.log(page0?.data.seo.title);
  
  return (
    <>
      <HeadingDashboardPage title={page0?.data.seo.title!} page={page0} />
      <div className={`grid grid-cols-2 gap-3 sm:gap-6  sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5`}>
        {page0?.page.map((data, i) => <CardPage key={i} data={data} />)}
      </div>
      <Pagination />
    </>
  )
}