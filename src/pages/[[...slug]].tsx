import { dehydrate, QueryClient } from '@tanstack/react-query'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { FIND_PRODUCTS_BY_SITE, FIND_PRODUCTS_CLOTHING, FIND_PRODUCTS_FURNITURE, FIND_SITE, GET_SITE, GET_SITES } from '../../graphql'
import { FIND_PAGES_0_BY_SITE, FIND_PAGES_1_BY_SITE, FIND_PAGES_2_BY_SITE, FIND_PAGE_0_BY_SITE, FIND_PAGE_1_BY_SITE, FIND_PAGE_2_BY_SITE } from '../../graphql/query/page.query'
import { graphQLClient } from '../../graphql/reactQuery/graphQLClient'
import { site, sites } from '../../graphql/reactQuery/lib'
import { getPathsBySite, getQuery } from '../../utils/function'
import { Login1 } from '../components'
import { LayoutDashboard, LayoutPages } from '../layouts'
import { Routes } from '../routes/routes'
import { Sites } from '../routes/sites.routes'
import { FIND_ALL_PRODUCTS, FIND_PRODUCT_BY_TYPE } from '../../graphql/query/product.query';
import { FIND_ARTICLES } from '../../graphql/query/article.query'
import { findSites } from '../hooks/sites/useSites'
import { findPages0 } from '../hooks/pages0/usePages0'
import { FIND_PAGES_0_BY_PARENT } from '../../graphql/query/pages/page0.query'
import { findPages0ByParent } from '../hooks/pages0/usePages0ByParent'
import { findSitesPaths } from '../hooks/sites/useSitesPaths'
import { findPage0BySlug } from '../hooks/pages0/usePage0BySlug'
import { findPages1 } from '../hooks/pages1/usePages1'
import { findSite } from '../hooks/sites/useSite'
import { findPage1BySlug } from '../hooks/pages1/usePage1BySlug'

const Index: NextPage = () => {
  const { asPath } = useRouter()
  const query = getQuery(asPath)

  switch (true) {
    case query && query[0] === "dashboard":
      return (
        <LayoutDashboard  >
          <Routes />
        </LayoutDashboard>)
    case query && query[0] === "auth":
      return (
        <Login1 />
      )
    case query && query[0] === "sites":
      return (
        <Sites />
      )

    default:
      return (
        <LayoutPages >
          <Routes />
        </LayoutPages>
      )
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  // const { findSite } = await graphQLClient.request(GET_SITE, { _id: process.env.API_SITE })
  return {
    paths: [{ params: { slug: [] } }],
    // paths: getPathsBySite(findSite).map(data => ({ params: data })),
    fallback: 'blocking'
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  // console.log(context.params);
  const query = context.params?.slug!
  // console.log(query);

  const queryClient = new QueryClient()
  const _id = process.env.API_SITE

  // if (query && query[0] === 'dashboard' && query[1] === 'sites' && query.length === 3 ) {
  //   const _id = query[2]
  //   await queryClient.prefetchQuery(["find-site", _id], async () => {
  //     const { findSite } = await graphQLClient.request(
  //       FIND_SITE,
  //       { _id }
  //     );
  //     return findSite;
  //   })
  // } 
  // else if ( query && query[0] === 'dashboard' && query[3] !== 'products'  && query.length === 4) {
  //   const site = query[2]
  //   const slug = query[3]

  //   await queryClient.prefetchQuery(["find-page0-by-site", site, slug], async () => {
  //     const { findPage0BySite } = await graphQLClient.request(
  //       FIND_PAGE_0_BY_SITE,
  //       { site, slug }
  //     );
  //     return findPage0BySite;
  //   })
  // }
  // else if ((query && query[0] === 'dashboard')  && query.length === 5) {
  //   const site = query[2]
  //   const slug = query[4]
  //   await queryClient.prefetchQuery(["find-page1-by-site", site, slug], async () => {
  //     const { findPage1BySite } = await graphQLClient.request(
  //       FIND_PAGE_1_BY_SITE,
  //       { site, slug }
  //     );
  //     return findPage1BySite;
  //   })
  // }
  // else if (query && query[0] === 'dashboard'  && query[3] !== '$products'   && query.length === 6) {
  //   const site = query[2]
  //   const slug = query[5]
  //   await queryClient.prefetchQuery(["find-page2-by-site", site, slug], async () => {
  //     const { findPage2BySite } = await graphQLClient.request(
  //       FIND_PAGE_2_BY_SITE,
  //       { site, slug }
  //     );
  //     return findPage2BySite;
  //   })
  // }
  // else if (query && query[0] === 'dashboard'  && query[3] === '$products'   && query.length === 6) {
  //   // const site = query[2]
  //   const _id = query[5]
  //   const type = query[4]
  //   await queryClient.prefetchQuery(["find-product", _id, type], async () => {
  //     const { getProduct } = await graphQLClient.request(
  //       FIND_PRODUCT_BY_TYPE,
  //       { _id, type }
  //     );
  //     return getProduct;
  //   })
  // }

  // await queryClient.prefetchQuery(["find-all-articles"], async () => {
  //   const { findBlogs } = await graphQLClient.request(
  //     FIND_ARTICLES
  //   );
  //   return findBlogs;
  // })
  // await queryClient.prefetchQuery(["find-all-products"], async () => {
  //   const { getAllProducts } = await graphQLClient.request(
  //     FIND_ALL_PRODUCTS
  //   );
  //   return getAllProducts;
  // })
  // await queryClient.prefetchQuery(["get-site", _id!], site)

  await queryClient.prefetchQuery(["find-pages0"], findPages0)
  await queryClient.prefetchQuery(["find-pages1"], findPages1)
  await queryClient.prefetchQuery(["find-sites-paths"], findSitesPaths)
  await queryClient.prefetchQuery(["find-sites"], findSites)
  // if (query && query.length === 3 && query[1] === 'sites') {
  //   const parentID = query.at(-1)
  //   await queryClient.prefetchQuery(["find-pages0-by-parent", parentID],  await findPages0ByParent(parentID!))
  // }
  if (query && query.length === 3 && query[1] === 'sites') {
    // const parentID = query.at(-1)
    const siteID = query.at(-1)
    // await queryClient.prefetchQuery(["find-pages0-by-parent", parentID], async () => await findPages0ByParent(parentID!))
    await queryClient.prefetchQuery(["find-site", siteID], async () => await findSite(siteID!))
  } 
  else if (query && query.length === 4 && query[1] === 'sites') {
    const site = query[2]
    const slug = query.at(-1)!
    await queryClient.prefetchQuery(["find-page0-by-slug", site, slug], async () => await findPage0BySlug(site, slug))
  } 
  else if (query && query.length === 5 && query[1] === 'sites') {
    const site = query[2]
    const slug = query.at(-1)!
    await queryClient.prefetchQuery(["find-page1-by-slug", site, slug], async () => await findPage1BySlug(site, slug))
  } 
   
  // if (query && query.length === 3 && query[1] === 'sites') {
  //   const parentID = query.at(-1)
  //   await queryClient.prefetchQuery(["find-pages0-by-parent", parentID!], async () => {
  //     const { findPages0BySite } = await graphQLClient.request(
  //       FIND_PAGES_0_BY_PARENT,
  //       { site: parentID }
  //     );
  //     return findPages0BySite;
  //   })
  // }
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    }
  }
}

export default Index


