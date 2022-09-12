import { dehydrate, QueryClient } from '@tanstack/react-query'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { GETSITES } from '../../graphql'
import { graphQLClient } from '../../graphql/reactQuery/graphQLClient'
import { getQuery } from '../../utils/function'
import { LayoutDashboard, LayoutPages } from '../layouts'
import { Routes } from '../routes/routes'

const Index: NextPage = () => {
  const { asPath } = useRouter()
  const query = getQuery(asPath)
  // const {data:session, status} = useSession()
  // console.log(session);
  
  switch (true) {
    case query && query[0] === "dashboard":
      return (
        <LayoutDashboard >
          <Routes />
        </LayoutDashboard>)
    case query && query[0] === "auth":
      return (
        <h1>Layout</h1>
        // <LayoutAuth >
        //   <Routes />
        // </LayoutAuth>
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
  // const { siteV2 } = await graphQLClientS.request(SITEV2, { _id: process.env.API_SITE })
  return {
    
    paths: [{ params: { slug: [] } }],
    fallback: 'blocking'
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(["get-sites"], async () => {
    const { getSites } = await graphQLClient.request(
      GETSITES
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
