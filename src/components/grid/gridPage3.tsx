import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { useFindPage2BySite } from '../../../graphql/reactQuery/query/site.query';
import { typeProduct } from '../../../utils/const';
import { getPage, getPageTitle, getQuery } from '../../../utils/function';
import usePage2BySlug from '../../hooks/pages2/usePage2BySlug';
import { CardProduct1 } from '../card';
import { CardPage } from '../card/cardPage';
import { CardProduct } from '../card/cardProduct';
import { CardProductQuickviews } from '../card/cardProductQuickviews';
import { HeadingDashboard, HeadingDashboardPage } from '../heading';
import { Pagination } from '../pagination';
interface GridPage3 {

}

export const GridPage3: FC<GridPage3> = () => {
  const { asPath } = useRouter()
  const query = getQuery(asPath)
  const { data: pages3 } = usePage2BySlug(query[2] ,query.at(-1)!);
  
  return (
    <>
      <HeadingDashboardPage title={pages3?.data.seo.title!} page={pages3!} />
      
      {
        typeProduct.map(data => data.value).includes(pages3?.data.type!) &&
        <div className={`grid grid-cols-2 gap-3 sm:gap-6  sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5`}>
          {pages3?.product.map((data, i) => <CardProduct key={i} data={data} type={pages3?.data.type!} />)}
          {/* <CardProductQuickviews /> */}
        </div>
      } 
      <Pagination />
    </>
  )
}