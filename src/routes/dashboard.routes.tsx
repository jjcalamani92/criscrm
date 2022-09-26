import { useRouter } from "next/router"
import { FC } from "react"
import {  getPage0AsPaths, getSitesAsPaths, getPage0, getPage, getPageTitle, getPage1AsPaths, getPage2AsPaths, getPage3AsPaths, getSiteByAsPaths, getPage0ByAsPaths, getPage1ByAsPaths, getPage2ByAsPaths, getPage3ByAsPaths } from "../../utils/function";
import { GridPage } from "../components/grid/gridPage";
import { GridPage0 } from "../components/grid/gridPage0";
import { GridPage1 } from "../components/grid/gridPage1";
import { GridPage2 } from "../components/grid/gridPage2";
import { GridPage3 } from "../components/grid/gridPage3";
import { GridSite } from "../components/grid/gridSite";


interface Dashboard {
}
export const Dashboard: FC<Dashboard> = ({ }) => {
  const { asPath } = useRouter()
  // const { data: sites } = useGetSites();
  // console.log(sites);
  
  // console.log(getPage2ByAsPaths(sites!, asPath));
  // console.log(getPage1AsPaths(sites!));
  // console.log(getPage2AsPaths(sites!));
  
  switch (asPath) {
    // case '/dashboard/sites': return <GridSite sites={sites!} />
    // case getSiteByAsPaths(sites!, asPath): return <GridPage0 />
    // case getPage0ByAsPaths(sites!, asPath): return <GridPage1 />
    // case getPage1ByAsPaths(sites!, asPath): return <GridPage2 />
    // case getPage2ByAsPaths(sites!, asPath): return <GridPage3 />
    // case getPage3ByAsPaths(sites!, asPath): return <GridPage sites={sites!} />

    default:
      return null

  }

}