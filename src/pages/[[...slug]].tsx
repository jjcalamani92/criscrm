import { dehydrate, QueryClient } from '@tanstack/react-query'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { GET_SITE, GET_SITES } from '../../graphql'
import { graphQLClient } from '../../graphql/reactQuery/graphQLClient'
import { getPathsBySite, getQuery } from '../../utils/function'
import { Login1 } from '../components'
import { LayoutDashboard, LayoutPages } from '../layouts'
import { Routes } from '../routes/routes'

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

    default:
      return (
        <LayoutPages >
          <Routes />
        </LayoutPages>
      )
  }
  
}

export const getStaticPaths: any = async () => {
  const { getSite } = await graphQLClient.request(GET_SITE, { _id: process.env.API_SITE })
  return {
    paths: getPathsBySite(getSite).map(data => ({ params: data })),
    fallback: 'blocking'
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const queryClient = new QueryClient()
  const _id = process.env.API_SITE
  await queryClient.prefetchQuery(["get-site", _id], async () => {
    const { getSite } = await graphQLClient.request(
      GET_SITE,
      { _id }
    );
    return getSite;
  })
  await queryClient.prefetchQuery(["get-sites"], async () => {
    const { getSites } = await graphQLClient.request(
      GET_SITES
    );
    return getSites;
  })
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    }
  }
}

export default Index
