import { useRouter } from "next/router"
import { FC } from "react"

import { useGetSites } from "../../graphql/reactQuery/reactQuery";
import {  getPage0AsPaths, getSitesAsPaths, getPage0, getPage, getPageTitle, getPage1AsPaths, getPage2AsPaths, getPage3AsPaths } from "../../utils/function";
import { Grid } from "../components/grid";


interface Dashboard {

}
export const Dashboard: FC<Dashboard> = ({ }) => {
  const { asPath } = useRouter()
  const { data: sites } = useGetSites();
  const page = getPage(sites!, asPath)!
  const title = getPageTitle(sites!, asPath)!
  // console.log(page);
  
  switch (asPath) {
    case '/dashboard/sites': return <Grid title={'sites'} sites={sites!} />
    case getSitesAsPaths(sites!).find(data => data === asPath): return <Grid page={page} title={title} />
    case getPage0AsPaths(sites!).find(data => data === asPath): return <Grid page={page} title={title} />
    case getPage1AsPaths(sites!).find(data => data === asPath): return <Grid page={page} title={title} />
    case getPage2AsPaths(sites!).find(data => data === asPath): return <Grid page={page} title={title} />
    case getPage3AsPaths(sites!).find(data => data === asPath): return <Grid page={page} title={title} />

    default:
      return null

  }

}