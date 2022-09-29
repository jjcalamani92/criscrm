import { dehydrate, QueryClient } from '@tanstack/react-query'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { graphQLClient } from '../../graphql/reactQuery/graphQLClient'
import { getPathsBySite, getQuery } from '../../utils/function'
import { Login1 } from '../components'
import { LayoutDashboard, LayoutPages } from '../layouts'
import { Routes } from '../routes/routes'
import { Sites } from '../routes/sites.routes'
import { findSites } from '../hooks/sites/useSites'
import { findSitesPaths } from '../hooks/sites/useSitesPaths'
import { findPage0BySlug } from '../hooks/pages0/usePage0BySlug'
import { findSite } from '../hooks/sites/useSite'
import { findPage1BySlug } from '../hooks/pages1/usePage1BySlug'
import { findArticles } from '../hooks/articles/useFindAllArticles.ts'
import { findArticle } from '../hooks/articles/useFindArticle'
import { findPage2BySlug } from '../hooks/pages2/usePage2BySlug'
import { findSitesSeo } from '../hooks/sites/useSitesSeo'
import { FIND_SITES_SEO, FIND_SITE_ADMIN } from '../../graphql/query/sites/site.query'
import { findAllProducts } from '../hooks/products/useFindAllProducts'
import { findProduct } from '../hooks/products/useFindProduct'
import { findSiteAdmin } from '../hooks/sites/useSiteAdmin'
import { getSlugByPage0, getSlugByPages0, getSlugByPages1, getSlugByPages2, getSlugByPages3, getSlugBySite, getSlugBySites } from '../../utils/functionV1'
import { findPages0ByParent } from '../hooks/pages0/usePages0ByParent'
import { findPages0 } from '../hooks/pages0/usePages0'
import { findPages1 } from '../hooks/pages1/usePages1'
import { findPages1ByParent } from '../hooks/pages1/usePages1ByParent'
import { findPages2ByParent } from '../hooks/pages2/usePages2ByParent'
import { findPage0 } from '../hooks/pages0/usePage0'
import { findPage1 } from '../hooks/pages1/usePage1'

const Index: NextPage = () => {
  const { asPath } = useRouter()
  const query = getQuery(asPath)
  const { data: session } = useSession()

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
  const { findSite } = await graphQLClient.request(FIND_SITE_ADMIN, { id: process.env.API_SITE });
  const pathsBySite = [...getSlugBySite(findSite!), ...getSlugByPage0(findSite!), ...getSlugBySites(findSites!), ...getSlugByPages0(findSites!), ...getSlugByPages1(findSites!), ...getSlugByPages2(findSites!), ...getSlugByPages3(findSites!)]
  return {
    paths: pathsBySite.map(data => ({ params: { slug: data.asPath === '/' ? [] : data.asPath.slice(1).split('/') } })),
    fallback: 'blocking'
  };
}

export const getStaticProps: GetStaticProps = async (context) => {

  // console.log('ctx', context);

  const query = context.params?.slug!

  const siteID = process.env.API_SITE

  const queryClient = new QueryClient()
  
  await queryClient.prefetchQuery(["find-site-admin", siteID], async () => await findSiteAdmin(siteID!))
  await queryClient.prefetchQuery(["find-sites-paths"], findSitesPaths)
  await queryClient.prefetchQuery(["find-sites-seo"], findSitesSeo)

  await queryClient.prefetchQuery(["find-sites"], findSites)
  await queryClient.prefetchQuery(["find-pages0"], findPages0)
  await queryClient.prefetchQuery(["find-pages1"], findPages1)
  // await queryClient.prefetchQuery(["find-all-products"], findAllProducts)
  // await queryClient.prefetchQuery(["find-all-articles"], findArticles)

  if (query) {
    if (query.length === 3) {
      const parentId = query[2]; const siteId = query[2];
      await queryClient.prefetchQuery(["find-site", siteId], async () => await findSite(siteId))
      await queryClient.prefetchQuery(["find-pages0-by-parent", parentId], async () => await findPages0ByParent(parentId))

    } else if (query.length === 4) {
      const parentId = query[3].split('=')[1]; const pageId = query[3].split('=')[1]
      query[3].split('=')[0] === 'page0' ?
        (
          await queryClient.prefetchQuery(["find-page0", pageId], async () => await findPage0(pageId)),
          await queryClient.prefetchQuery(["find-pages1-by-parent", parentId], async () => await findPages1ByParent(parentId))
        )
        :
        query[3].split('=')[0] === 'page1' ?
        (
          await queryClient.prefetchQuery(["find-page1", pageId], async () => await findPage1(pageId)),
          await queryClient.prefetchQuery(["find-pages2-by-parent", parentId], async () => await findPages2ByParent(parentId))
        )
          :
          null
    }
  } 



  // if (query && query.length === 3 && query[1] === 'sites') {
  //   const siteId = query.at(-1)!
  //   const parentId = query.at(-1)!
  //   // await queryClient.prefetchQuery(["find-site", siteId], async () => await findSite(siteId))
  //   // await queryClient.prefetchQuery(["find-pages0-by-parent", parentId], async () => await findPages0ByParent(parentId))
  // }
  // else if (query && query.length === 4 && query[1] === 'sites') {
  //   const site = query[2]
  //   const slug = query.at(-1)!
  //   await queryClient.prefetchQuery(["find-page0-by-slug", site, slug], async () => await findPage0BySlug(site, slug))
  // }
  // else if (query && query.length === 5 && query[1] === 'sites' && query[3] === '$articles') {
  //   const id = query.at(-1)!
  //   await queryClient.prefetchQuery(["find-article", id], async () => await findArticle(id))
  // }
  // else if (query && query.length === 5 && query[1] === 'sites') {
  //   const site = query[2]
  //   const slug = query.at(-1)!
  //   await queryClient.prefetchQuery(["find-page1-by-slug", site, slug], async () => await findPage1BySlug(site, slug))
  // }
  // else if (query && query.length === 6 && query[1] === 'sites' && query[3] === '$products') {
  //   const id = query.at(-1)!
  //   const type = query.at(-2)!
  //   await queryClient.prefetchQuery(["find-product-by-type", id, type], async () => await findProduct(id, type))
  // }
  // else if (query && query.length === 6 && query[1] === 'sites') {
  //   const site = query[2]
  //   const slug = query.at(-1)!
  //   await queryClient.prefetchQuery(["find-page2-by-slug", site, slug], async () => await findPage2BySlug(site, slug))
  // }



  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      revalidate: 86400,
    }
  }
}

export default Index


