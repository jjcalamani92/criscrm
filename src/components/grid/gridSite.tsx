import { FC, useState } from 'react';
import { Site } from '../../../interfaces';
import { CardSite } from '../card';
import { HeadingDashboard } from '../heading';
import { Pagination } from '../pagination';

interface Grid {
  sites?: Site[];
  title: string;
}

export const GridSite: FC<Grid> = ({ sites, title }) => {
  
  return (
    <>
      <HeadingDashboard title={'Sites'} />

      <div className={`grid grid-cols-2 gap-3 sm:gap-6  sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5`}>

        {sites && sites.map((data, i) => <CardSite key={i} data={data} />)
        }
        
        
        
      </div>
      <Pagination />
    </>
  )
}