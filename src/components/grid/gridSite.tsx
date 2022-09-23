import { FC, useState } from 'react';
import { Site } from '../../../interfaces';
import useSites from '../../hooks/sites/useSites';
import { CardSite } from '../card';
import { HeadingDashboardSite } from '../heading/headingDashboardSite';
import { Pagination } from '../pagination';

interface GridSite {
  // sites?: Site[];
}

export const GridSite: FC<GridSite> = () => {
  const { data: sites } = useSites();
  // console.log(sites);
  
  return (
    <>
      <HeadingDashboardSite title={'Sites'} />
      <div className={`grid grid-cols-2 gap-3 sm:gap-6  sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5`}>
        {sites?.map((data, i) => <CardSite key={i} data={data} />)
        }
      </div>
      <Pagination />
    </>
  )
}