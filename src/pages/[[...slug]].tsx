import { dehydrate, QueryClient } from '@tanstack/react-query'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { FIND_PRODUCTS_BY_SITE, FIND_PRODUCTS_CLOTHING, FIND_PRODUCTS_FURNITURE, FIND_SITE, GET_SITE, GET_SITES } from '../../graphql'
import { FIND_PAGES_0_BY_SITE, FIND_PAGES_1_BY_SITE, FIND_PAGES_2_BY_SITE, FIND_PAGE_0_BY_SITE, FIND_PAGE_1_BY_SITE, FIND_PAGE_2_BY_SITE } from '../../graphql/query/page.query'
import { graphQLClient } from '../../graphql/reactQuery/graphQLClient'
import { getPathsBySite, getQuery } from '../../utils/function'
import { Login1 } from '../components'
import { LayoutDashboard, LayoutPages } from '../layouts'
import { Routes } from '../routes/routes'
import { Sites } from '../routes/sites.routes'
import { FIND_ALL_PRODUCTS, FIND_PRODUCT_BY_TYPE } from '../../graphql/query/product.query';
import { FIND_ARTICLES } from '../../graphql/query/articles/article.query'
import { findSites } from '../hooks/sites/useSites'
import { findPages0 } from '../hooks/pages0/usePages0'
import { FIND_PAGES_0_BY_PARENT } from '../../graphql/query/pages/page0.query'
import { findPages0ByParent } from '../hooks/pages0/usePages0ByParent'
import { findSitesPaths } from '../hooks/sites/useSitesPaths'
import { findPage0BySlug } from '../hooks/pages0/usePage0BySlug'
import { findPages1 } from '../hooks/pages1/usePages1'
import { findSite } from '../hooks/sites/useSite'
import { findPage1BySlug } from '../hooks/pages1/usePage1BySlug'
import { findArticles } from '../hooks/articles/useFindAllArticles.ts'
import { findArticle } from '../hooks/articles/useFindArticle'
import { findPage2BySlug } from '../hooks/pages2/usePage2BySlug'
import { findSitesSeo } from '../hooks/sites/useSitesSeo'
import { FIND_SITES_SEO, FIND_SITE_ADMIN } from '../../graphql/query/sites/site.query'
import { getProBySites } from '../../utils/function_pro'
import { findAllProducts } from '../hooks/products/useFindAllProducts'
import { findProduct } from '../hooks/products/useFindProduct'
import { findSiteAdmin } from '../hooks/sites/useSiteAdmin'
import { getSlugByPage0, getSlugByPages0, getSlugByPages1, getSlugByPages2, getSlugByPages3, getSlugBySite, getSlugBySites } from '../../utils/functionV1'

const Index: NextPage = () => {
  const { asPath } = useRouter()
  const query = getQuery(asPath)
  const {data:session} = useSession()
  // console.log(session);
  
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
  const { findSites } = await graphQLClient.request(FIND_SITES_SEO);
  const { findSite } = await graphQLClient.request(FIND_SITE_ADMIN, {id: process.env.API_SITE});
  const pathsBySite = [...getSlugBySite(findSite!), ...getSlugByPage0(findSite!), ...getSlugBySites(findSites!), ...getSlugByPages0(findSites!), ...getSlugByPages1(findSites!), ...getSlugByPages2(findSites!), ...getSlugByPages3(findSites!)]
  return {
    paths: pathsBySite.map(data => ({params: {slug: data.asPath === '/' ? [] : data.asPath.slice(1).split('/')}})),
    fallback: 'blocking'
  };
}

export const getStaticProps: GetStaticProps = async (context) => {

  const query = context.params?.slug!
  const siteID = process.env.API_SITE

  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(["find-site-admin", siteID], async () => await findSiteAdmin(siteID!))
  await queryClient.prefetchQuery(["find-sites-paths"], findSitesPaths)
  await queryClient.prefetchQuery(["find-sites-seo"], findSitesSeo)
  await queryClient.prefetchQuery(["find-sites"], findSites)

  // await queryClient.prefetchQuery(["find-pages0"], findPages0)
  // await queryClient.prefetchQuery(["find-pages1"], findPages1)
  await queryClient.prefetchQuery(["find-all-products"], findAllProducts)


  if (query && query.length === 3 && query[1] === 'sites') {
    const siteID = query.at(-1)!
    await queryClient.prefetchQuery(["find-site", siteID], async () => await findSite(siteID))
  } 
  else if (query && query.length === 4 && query[1] === 'sites') {
    const site = query[2]
    const slug = query.at(-1)!
    await queryClient.prefetchQuery(["find-page0-by-slug", site, slug], async () => await findPage0BySlug(site, slug))
  } 
  else if (query && query.length === 5 && query[1] === 'sites' && query[3] === '$articles') {
    const _id = query.at(-1)!
    await queryClient.prefetchQuery(["find-article", _id], async () => await findArticle(_id))
  } 
  else if (query && query.length === 5 && query[1] === 'sites') {
    const site = query[2]
    const slug = query.at(-1)!
    await queryClient.prefetchQuery(["find-page1-by-slug", site, slug], async () => await findPage1BySlug(site, slug))
  } 
  else if (query && query.length === 6 && query[1] === 'sites' && query[3] === '$products') {
    const id = query.at(-1)!
    const type = query.at(-2)!
    await queryClient.prefetchQuery(["find-product-by-type", id, type], async () => await findProduct(id, type))
  } 
  else if (query && query.length === 6 && query[1] === 'sites') {
    const site = query[2]
    const slug = query.at(-1)!
    await queryClient.prefetchQuery(["find-page2-by-slug", site, slug], async () => await findPage2BySlug(site, slug))
  } 

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      revalidate: 86400,
    }
  }
}

export default Index


