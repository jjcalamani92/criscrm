import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { useFindPage1BySite } from '../../../graphql/reactQuery/query/site.query';
import { getPage, getPageTitle, getQuery } from '../../../utils/function';
import { CardPage } from '../card/cardPage';
import { HeadingDashboard, HeadingDashboardPage } from '../heading';
import { Pagination } from '../pagination';
interface GridPage2 {

}

export const GridPage2: FC<GridPage2> = () => {
  const { asPath } = useRouter()
  const query = getQuery(asPath)
  const { data: page1 } = useFindPage1BySite(query[2], query[4]);
  // console.log(page1);
  // console.log(page1?.data.seo.title);
  // console.log('hi');
  
  
  return (
    <>
      <HeadingDashboardPage title={page1?.data.seo.title!} page={page1!} />
      <div className={`grid grid-cols-2 gap-3 sm:gap-6  sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5`}>
        {page1?.page.map((data, i) => <CardPage key={i} data={data} />)}
      </div>
      
      <Pagination />
    </>
  )
}