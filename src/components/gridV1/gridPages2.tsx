import { FC, useState } from 'react';
import usePages0ByParent from '../../hooks/pages0/usePages0ByParent';
import useSites from '../../hooks/sites/useSites';
import { CardPage, CardPage1, CardPage2, CardSite } from '../card';
import { useRouter } from 'next/router';
import { getQuery } from '../../../utils/functionV0';
import usePages1ByParent from '../../hooks/pages1/usePages1ByParent';
import { HeadingDashboard } from '../heading';
import usePage0 from '../../hooks/pages0/usePage0';
import usePage1 from '../../hooks/pages1/usePage1';
import usePages2ByParent from '../../hooks/pages2/usePages2ByParent';
interface GridPages2 {
}

export const GridPages2: FC<GridPages2> = () => {
  const { asPath } = useRouter()
  const { data: page1 } = usePage1(asPath)
  const { data: pages2 } = usePages2ByParent(asPath)
  return (
    <>
        <HeadingDashboard title={page1?.data.seo.title!} />
      <div className={`grid grid-cols-2 gap-3 sm:gap-6  sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5`}>
        {pages2?.map((data, i) => <CardPage2 key={i} data={data} />)}
      </div>
    </>
  )
}