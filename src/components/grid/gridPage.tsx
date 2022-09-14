import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { useGetPage, useGetPages, useGetSites } from '../../../graphql/reactQuery/reactQuery';
import { Page, Site } from '../../../interfaces/site.interface';
import { getPage, getPageTitle, getQuery } from '../../../utils/function';
import { CardSite } from '../card';
import { CardPage } from '../card/cardPage';
import { CardProduct } from '../card/cardProduct';
import { HeadingDashboard, HeadingDashboardPage } from '../heading';
import { Pagination } from '../pagination';
interface GridPage {
  sites?: Site[];

}

export const GridPage: FC<GridPage> = ({ sites}) => {
  const { asPath } = useRouter()
  const query = getQuery(asPath)
  const page = getPage(sites!, asPath)!
  const { data: page2 } = useGetPage(page._id!, page.data.type)
  console.log(page2);
  
  const title = getPageTitle(sites!, asPath)!
  console.log(page.data.type);
  console.log(page);
  
  
  return (
    <>
      {page && <HeadingDashboardPage title={title} page={page as Page}/>}
      <div className={`grid grid-cols-2 gap-3 sm:gap-6  sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5`}>
        {page && page.page.map((data, i) => <CardPage key={i} data={data} />)}
        {
          (query.length > 4 && page.data.type === 'clothing') && page2?.product.map((data, i) => <CardProduct key={i} data={data} />)
        }
      </div>
      <Pagination />
    </>
  )
}