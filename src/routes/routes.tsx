import { FC } from "react"
import { Hero } from "../components";
import { useGetSite, useGetSites, useGetUser, useGetUserByEmail } from "../../graphql/reactQuery/reactQuery";
import { useRouter } from 'next/router';
import { Dashboard } from "./dashboard.routes";
import { getPage0AsPaths, getPage1AsPaths, getPage2AsPaths, getSitesAsPaths } from "../../utils/function";
import { Pricing } from '../components/pricing';
import { markdownComponent } from "../components/utils/markdown";

interface Routes {

}

export const Routes: FC<Routes> = ({ }) => {
  const { asPath } = useRouter()

  const { data: site } = useGetSite(process.env.API_SITE!);
  const { data: sites } = useGetSites();



  switch (asPath) {
    case '/': return <Hero />
    case '/pricing': return <>{markdownComponent(Pricing)}</>
    
      
    case ['/dashboard', '/dashboard/sites', getSitesAsPaths(sites!), getPage0AsPaths(sites!), getPage1AsPaths(sites!), getPage2AsPaths(sites!)].flat(10).find(data => data === asPath):
      return <Dashboard />
    // case '/pricing':
    //   return <Pricing />
    // case ['/dashboard', '/dashboard/sites', getSitesAsPaths(sites!), getChildren0AsPaths(sites!), getChildren1AsPaths(sites!), getChildren2AsPaths(sites!)].flat(10).find(data => data === asPath):
    //   return <Dashboard />
    // case '/auth/login':
    //   return <Login />
    default:
      return null
  }
}