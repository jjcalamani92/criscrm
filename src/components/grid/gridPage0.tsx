import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { useFindPages0, useFindSite } from '../../../graphql/reactQuery/reactQuery';
import { getPage, getPageTitle, getQuery } from '../../../utils/function';
import { CardPage } from '../card/cardPage';
import { HeadingDashboard, HeadingDashboardPage, HeadingDashboardSite } from '../heading';
import { Pagination } from '../pagination';
interface GridPage0 {

}

export const GridPage0: FC<GridPage0> = () => {
  const { asPath } = useRouter()
  const query = getQuery(asPath)
  const { data: site } = useFindSite(query[2]);
  // const { data: pages0 } = useFindPages0(query[2]);
  console.log(site);
  
  return (
    <>
      <HeadingDashboardSite title={site?.data.name!} site={site}/>
      <div className={`grid grid-cols-2 gap-3 sm:gap-6  sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5`}>
        {site?.page.map((data, i) => <CardPage key={i} data={data} />)}
      </div>
      <Pagination />
    </>
  )
}