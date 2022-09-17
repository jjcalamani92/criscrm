import { FC } from "react"
import { Hero, Hero1, Login1 } from "../components";
import { useGetPages, useGetSite, useGetSites, useGetUser, useGetUserByEmail } from "../../graphql/reactQuery/reactQuery";
import { useRouter } from 'next/router';
import { Dashboard } from "./dashboard.routes";
import { getPage0AsPaths, getPage0ByAsPaths, getPage1AsPaths, getPage1ByAsPaths, getPage2AsPaths, getPage2ByAsPaths, getPage3AsPaths, getSiteByAsPaths, getSitesAsPaths } from "../../utils/function";
// import { Pricing } from '../components/pricing';
import { markdownComponent } from "../components/utils/markdown";
import { Pricing, Pricing1, Pricing2 } from "../components/pricing";
import { FAQS1 } from "../components/faq";
import { Stats1 } from '../components/stats/stats1';
import { Featured1 } from "../components/featured";
import { GridSite } from "../components/grid/gridSite";
import { GridPage0 } from "../components/grid/gridPage0";
import { GridPage1 } from "../components/grid/gridPage1";
import { GridPage2 } from "../components/grid/gridPage2";
import { GridPage3 } from "../components/grid/gridPage3";


interface Routes {

}

export const Routes: FC<Routes> = ({ }) => {
  const { asPath } = useRouter()

  // const {data: user} = useGetUser("631e998bf2cf8b50ee989601");
  // console.log(user);
  // const { data: site } = useGetSite(process.env.API_SITE!);
  // console.log(site);
  
  const { data: sites } = useGetSites();
  // console.log(sites);
  // console.log(pages2);
  


  switch (asPath) {
    case '/': return (
      <>
      {/* {markdownComponent(Hero1)} */}
      {markdownComponent(Hero)}
      {markdownComponent(Featured1)}
      {markdownComponent(FAQS1)}
      {markdownComponent(Stats1)}
      </>
    )
    case '/pricing': return (
    <>
    {markdownComponent(Pricing)}
    {markdownComponent(Pricing1)}
    {markdownComponent(Pricing2)}
    </>
    )
    case '/dashboard/sites': return <GridSite sites={sites!} />
    case getSiteByAsPaths(sites!, asPath): return <GridPage0 />
    case getPage0ByAsPaths(sites!, asPath): return <GridPage1 />
    case getPage1ByAsPaths(sites!, asPath): return <GridPage2 />
    case getPage2ByAsPaths(sites!, asPath): return <GridPage3 />

    case ['/dashboard', getPage3AsPaths(sites!)].flat(10).find(data => data === asPath):
      return <Dashboard />
    // case '/pricing':
    //   return <Pricing />
    // case ['/dashboard', '/dashboard/sites', getSitesAsPaths(sites!), getChildren0AsPaths(sites!), getChildren1AsPaths(sites!), getChildren2AsPaths(sites!)].flat(10).find(data => data === asPath):
    //   return <Dashboard />
    case '/auth/login':
      return <Login1 />
    default:
      return null
  }
}