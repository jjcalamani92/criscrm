import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { useFindPage2BySite } from '../../../graphql/reactQuery/query/site.query';
import { getPage, getPageTitle, getQuery } from '../../../utils/function';
import { CardPage } from '../card/cardPage';
import { HeadingDashboard, HeadingDashboardPage } from '../heading';
import { Pagination } from '../pagination';
interface GridPage3 {

}

export const GridPage3: FC<GridPage3> = () => {
  const { asPath } = useRouter()
  const query = getQuery(asPath)
  const { data: page2 } = useFindPage2BySite(query[2], query[5]);
  
  return (
    <>
      <HeadingDashboardPage title={page2?.data.seo.title!} page={page2!}/>
      <div className={`grid grid-cols-2 gap-3 sm:gap-6  sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5`}>
        {page2?.page.map((data, i) => <CardPage key={i} data={data} />)}
      </div>
      <Pagination />
    </>
  )
}