import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { useFindPages0 } from '../../../graphql/reactQuery/reactQuery';
import { Page, Site } from '../../../interfaces/site.interface';
import { typeProduct } from '../../../utils/const';
import { getPage, getPageTitle, getQuery } from '../../../utils/function';
import { CardPage } from '../card/cardPage';
import { HeadingDashboard, HeadingDashboardPage } from '../heading';
import { Pagination } from '../pagination';
import { Products } from './products';
interface GridPage {
  sites?: Site[];
}

export const GridPage: FC<GridPage> = ({ sites }) => {
  const { asPath } = useRouter()
  const query = getQuery(asPath)
  const page = getPage(sites!, asPath)!
  const title = getPageTitle(sites!, asPath)!

  // console.log(pages0);

  return (
    <>
      {page && <HeadingDashboardPage title={title} page={page as Page} />}
      <div className={`grid grid-cols-2 gap-3 sm:gap-6  sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5`}>
        {page && page.page.map((data, i) => <CardPage key={i} data={data} />)}
      </div>
      {
        typeProduct.map(data => data.value).includes(page.data.type!) && <Products page={page as Page} />
      }
      <Pagination />
    </>
  )
}