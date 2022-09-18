import { FC, useState } from 'react';
import { useGetPage, useGetPages, useGetSites } from '../../graphql/reactQuery/reactQuery';
import { Page, Site } from '../../interfaces/site.interface';
import { CardSite } from './card';
import { CardPage } from './card/cardPage';
import { CardProduct } from './card/cardProduct';
import { HeadingDashboard } from './heading';
import { Modal } from './modal';
import { Pagination } from './pagination';
interface Grid {
  sites?: Site[];
  page?: Page | Site;
  title: string;
}

export const Grid: FC<Grid> = ({ sites, page, title }) => {
  
  const { data: page2 } = useGetPage(page?._id!, page?.data.type!);

  // console.log(page?._id);
  // console.log(page?.data.type);
  // console.log(page2?.product);
  
  return (
    <>
      {sites && <HeadingDashboard title={'Sites'}  site={page as Site}/> }
      {page && <HeadingDashboard title={title} uid={page._id} page={page as Page}/>}

      <div className={`grid grid-cols-2 gap-3 sm:gap-6  sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5`}>

        {sites && sites.map((data, i) => <CardSite key={i} data={data} />)
        }
        
        {page && page.page.map((data, i) => <CardPage key={i} data={data} />)
        }

        
        {
          // page?.data.type === 'clothing' && page2?.product.map((data, i) => <CardProduct key={i} data={data} />)
        }
        
      </div>
      <Pagination />
    </>
  )
}