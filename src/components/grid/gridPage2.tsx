import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { useFindPage1BySite } from '../../../graphql/reactQuery/query/site.query';
import { typeProduct } from '../../../utils/const';
import { getPage, getPageTitle, getQuery } from '../../../utils/function';
import usePage1BySlug from '../../hooks/pages1/usePage1BySlug';
import { CardProduct } from '../card';
import { CardPage } from '../card/cardPage';
import { HeadingDashboard, HeadingDashboardPage } from '../heading';
import { Pagination } from '../pagination';
interface GridPage2 {

}

export const GridPage2: FC<GridPage2> = () => {
  const { asPath } = useRouter()
  const query = getQuery(asPath)
  // const { data: page1 } = useFindPage1BySite(query[2], query[4]);
  const { data: pages2 } = usePage1BySlug(query[2] ,query.at(-1)!);

  // console.log(pages2);
  // console.log(page1?.data.seo.title);
  // console.log('hi');
  
  
  return (
    <>
      <HeadingDashboardPage title={pages2?.data.seo.title!} page={pages2} />
      <div className={`grid grid-cols-2 gap-3 sm:gap-6  sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5`}>
        {pages2?.page.map((data, i) => <CardPage key={i} data={data} />)}
        
      </div>
      
      {
        typeProduct.map(data => data.value).includes(pages2?.data.type!) &&
        <div className={`grid grid-cols-2 gap-3 sm:gap-6  sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5`}>
          {pages2?.product.map((data, i) => <CardProduct key={i} data={data} type={pages2?.data.type!} />)}
        </div>
      } 

      <Pagination />
    </>
  )
}