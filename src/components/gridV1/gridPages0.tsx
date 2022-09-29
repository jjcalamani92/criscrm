import { FC, useState } from 'react';
import usePages0ByParent from '../../hooks/pages0/usePages0ByParent';
import useSites from '../../hooks/sites/useSites';
import { CardPage, CardPage0, CardSite } from '../card';
import { useRouter } from 'next/router';
import { getQuery, getQueryOptional } from '../../../utils/functionV0';
import usePage0 from '../../hooks/pages0/usePage0';
import { HeadingDashboard } from '../heading';
import useSite from '../../hooks/sites/useSite';
interface GridPages0 {
}

export const GridPages0: FC<GridPages0> = () => {
  const { asPath } = useRouter()
  const { data: site } = useSite(asPath)
  const { data: pages0 } = usePages0ByParent(asPath)
  console.log(site);
  console.log(pages0);
  
  return (
    <>
      <HeadingDashboard title={site?.data.name!} />
    <div className={`grid grid-cols-2 gap-3 sm:gap-6  sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5`}>
      {pages0?.map((data, i) => <CardPage0 key={i} data={data} />)}
      
    </div>
    </>
    
  )
}