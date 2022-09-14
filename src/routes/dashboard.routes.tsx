import { useRouter } from "next/router"
import { FC } from "react"

import { useGetSites } from "../../graphql/reactQuery/reactQuery";
import {  getPage0AsPaths, getSitesAsPaths, getPage0, getPage, getPageTitle, getPage1AsPaths, getPage2AsPaths, getPage3AsPaths, getSiteByAsPaths, getPage0ByAsPaths, getPage1ByAsPaths, getPage2ByAsPaths, getPage3ByAsPaths } from "../../utils/function";
import { Grid } from "../components/grid";
import { GridPage } from "../components/grid/gridPage";
import { GridSite } from "../components/grid/gridSite";


interface Dashboard {

}
export const Dashboard: FC<Dashboard> = ({ }) => {
  const { asPath } = useRouter()
  const { data: sites } = useGetSites();
  switch (asPath) {
    case '/dashboard/sites': return <GridSite sites={sites!} />
    case getSiteByAsPaths(sites!, asPath): return <GridPage sites={sites!}  />
    case getPage0ByAsPaths(sites!, asPath): return <GridPage sites={sites!} />
    case getPage1ByAsPaths(sites!, asPath): return <GridPage sites={sites!} />
    case getPage2ByAsPaths(sites!, asPath): return <GridPage sites={sites!} />
    case getPage3ByAsPaths(sites!, asPath): return <GridPage sites={sites!} />

    default:
      return null

  }

}