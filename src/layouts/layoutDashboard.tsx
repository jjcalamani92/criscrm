/* This example requires Tailwind CSS v2.0+ */
import { FC, Fragment } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head';
import { HeaderDashboard, Main } from '../components';
import { HeadingDashboard } from '../components/heading';
import useSitesSeo from '../hooks/sites/useSitesSeo';
import { getProBySites } from '../../utils/function_pro';


interface LayoutDashboard {
  children: React.ReactNode;
}

export const LayoutDashboard: FC<LayoutDashboard> = ({ children }) => {
  const { query, asPath } = useRouter()
  const { data: sitesSeo } = useSitesSeo();
  const seo = getProBySites(sitesSeo!).find(data => data.path === asPath)?.seo
  // console.log(seo);
  
  return (
    <>
      <div className="min-h-full">
        <Head>
          <title>{seo?.title}</title>
          <meta name="description" content={seo?.description} />
          <meta name="og:title" content={seo?.title} />
          <meta name="og:description" content={seo?.description} />
          <meta name="og:image" content={seo?.image.src} />

          {/* <title>{seo ? seo?.title : 'dashboard'}</title>
          <meta name="keywords" />
          <meta name="description" content={seo ? seo?.description : 'description'} />
          <meta property="og:title" content={seo ? seo?.title : 'criscrm'} />
          <meta property="og:description" content={seo ? seo?.description : 'description'} />
          <meta property="og:type" content="og:product" />
          {seo && seo?.image && <meta property="og:image" content={seo ? seo?.image.src : "https://res.cloudinary.com/dqsbh2kn0/image/upload/v1662447369/qgy7hht1b12tfc8tyrx8.jpg"} />}
          <link rel="icon" href={"https://res.cloudinary.com/dqsbh2kn0/image/upload/v1662447369/qgy7hht1b12tfc8tyrx8.jpg"} /> */}
        </Head>
        <HeaderDashboard />
        <Main>
          {children}
        </Main>
      </div>
    </>
  )
}
