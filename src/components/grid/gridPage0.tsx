import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { useFindPages0, useFindSite } from '../../../graphql/reactQuery/reactQuery';
import { getPage, getPageTitle, getQuery } from '../../../utils/function';
import usePages0 from '../../hooks/pages0/usePages0';
import usePages0ByParent from '../../hooks/pages0/usePages0ByParent';
import useSite from '../../hooks/sites/useSite';
import { CardPage } from '../card/cardPage';
import { HeadingDashboard, HeadingDashboardPage, HeadingDashboardSite } from '../heading';
import { Pagination } from '../pagination';
interface GridPage0 {

}

export const GridPage0: FC<GridPage0> = () => {
  const { asPath } = useRouter()
  const query = getQuery(asPath)
  const { data: pages0 } = useSite(query.at(-1)!);
  
  
  return (
    <>
      <HeadingDashboardSite title={pages0?.data.name!} uid={pages0?._id} site={pages0!} />
      <div className={`grid grid-cols-2 gap-3 sm:gap-6  sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5`}>
        {pages0?.page.map((data, i) => <CardPage key={i} data={data} />)}
      </div>
      <Pagination />
      {/* {
        site?.data.type ==='ecommerce' && <h1>Ecommerce</h1>
      } */}

    </>
  )
}