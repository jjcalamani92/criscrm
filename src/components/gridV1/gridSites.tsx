import { FC, useState } from 'react';
import useSites from '../../hooks/sites/useSites';
import { CardSite } from '../card';
import { HeadingDashboard } from '../heading';
interface GridSites {

}

export const GridSites: FC<GridSites> = () => {
  const { data: sites } = useSites();
  return (
    <>
      <HeadingDashboard title={'Sites'} />
      <div className={`grid grid-cols-2 gap-3 sm:gap-6  sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5`}>
        {sites?.map((data, i) => <CardSite key={i} data={data} />)
        }
      </div>
    </>
  )
}