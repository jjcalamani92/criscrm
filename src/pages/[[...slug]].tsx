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

const Index: NextPage = () => {
  const { asPath } = useRouter()
  const query = getQuery(asPath)
  // const {data:session, status} = useSession()
  // console.log(typeof new Date());
  // console.log(typeof Date.now());
  
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
  const { findSite } = await graphQLClient.request(GET_SITE, { _id: process.env.API_SITE })
  return {
    paths: getPathsBySite(findSite).map(data => ({ params: data })),
    fallback: 'blocking'
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  // console.log(context.params);
  const query = context.params?.slug!
  // console.log(query);
  
  const queryClient = new QueryClient()
  const _id = process.env.API_SITE

  if (query && query[0] === 'dashboard' && query[1] === 'sites' && query.length === 3 ) {
    const _id = query[2]
    await queryClient.prefetchQuery(["find-site", _id], async () => {
      const { findSite } = await graphQLClient.request(
        FIND_SITE,
        { _id }
      );
      return findSite;
    })
  } 
  else if ( query && query[0] === 'dashboard' && query[3] !== 'products'  && query.length === 4) {
    const site = query[2]
    const slug = query[3]

    await queryClient.prefetchQuery(["find-page0-by-site", site, slug], async () => {
      const { findPage0BySite } = await graphQLClient.request(
        FIND_PAGE_0_BY_SITE,
        { site, slug }
      );
      return findPage0BySite;
    })
  }
  else if ((query && query[0] === 'dashboard')  && query.length === 5) {
    const site = query[2]
    const slug = query[4]
    await queryClient.prefetchQuery(["find-page1-by-site", site, slug], async () => {
      const { findPage1BySite } = await graphQLClient.request(
        FIND_PAGE_1_BY_SITE,
        { site, slug }
      );
      return findPage1BySite;
    })
  }
  else if (query && query[0] === 'dashboard'  && query[3] !== '$products'   && query.length === 6) {
    const site = query[2]
    const slug = query[5]
    await queryClient.prefetchQuery(["find-page2-by-site", site, slug], async () => {
      const { findPage2BySite } = await graphQLClient.request(
        FIND_PAGE_2_BY_SITE,
        { site, slug }
      );
      return findPage2BySite;
    })
  }
  else if (query && query[0] === 'dashboard'  && query[3] === '$products'   && query.length === 6) {
    // const site = query[2]
    const _id = query[5]
    const type = query[4]
    await queryClient.prefetchQuery(["find-product", _id, type], async () => {
      const { getProduct } = await graphQLClient.request(
        FIND_PRODUCT_BY_TYPE,
        { _id, type }
      );
      return getProduct;
    })
  }
  await queryClient.prefetchQuery(["find-all-products"], async () => {
    const { getAllProducts } = await graphQLClient.request(
      FIND_ALL_PRODUCTS
    );
    return getAllProducts;
  })
  await queryClient.prefetchQuery(["get-site", _id!], site)
  await queryClient.prefetchQuery(["get-sites"], sites)
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    }
  }
}

export default Index


