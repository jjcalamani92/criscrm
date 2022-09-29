import { FC, useState } from 'react';
import usePages0ByParent from '../../hooks/pages0/usePages0ByParent';
import useSites from '../../hooks/sites/useSites';
import { CardPage, CardPage1, CardSite } from '../card';
import { useRouter } from 'next/router';
import { getQuery } from '../../../utils/functionV0';
import usePages1ByParent from '../../hooks/pages1/usePages1ByParent';
import { HeadingDashboard } from '../heading';
import usePage0 from '../../hooks/pages0/usePage0';
interface GridPages1 {
}

export const GridPages1: FC<GridPages1> = () => {
  const { asPath } = useRouter()
  const { data: page0 } = usePage0(asPath)
  const { data: pages1 } = usePages1ByParent(asPath)
  return (
    <>
      <HeadingDashboard title={page0?.data.seo.title!} />
      <div className={`grid grid-cols-2 gap-3 sm:gap-6  sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5`}>
        {pages1?.map((data, i) => <CardPage1 key={i} data={data} />)}
      </div>
    </>
  )
}