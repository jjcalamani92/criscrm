import { FC } from "react"
import { Hero, Hero1, Login1 } from "../components";
import { useRouter } from 'next/router';
import { markdownComponent } from "../components/utils/markdown";
import { FAQS1 } from "../components/faq";
import { Stats1 } from '../components/stats/stats1';
import { Featured1 } from "../components/featured";
import { GridSite } from "../components/grid/gridSite";
import { GridPage0 } from "../components/grid/gridPage0";
import { GridPage1 } from "../components/grid/gridPage1";
import { GridPage2 } from "../components/grid/gridPage2";
import { GridPage3 } from "../components/grid/gridPage3";
import { ProductOverviews1 } from "../components/overviews/productOverviews1";
import { useFindAllArticles } from "../../graphql/reactQuery/query";
import { ArticleEdit } from "../components/grid/articleEdit";
import { getPathsByArticle, getPathsByArticles, getPathsByPage0, getPathsByPage1, getPathsByPage2, getPathsByPages0, getPathsByPages1, getPathsByPages2, getPathsBySite, getPathsBySites, getPathsByProducts, getPathsByProduct, getPathByPages0, getPathByPage0, getPathByPages1, getPathByPage1 } from "../../utils/function_paths";
import useSitesPaths from "../hooks/sites/useSitesPaths";
import { Hooks } from "../components/hooks/hooks";
import useSitesSeo from "../hooks/sites/useSitesSeo";
import { useFindAllProducts } from "../hooks/products/useFindAllProducts";
import useSiteAdmin from "../hooks/sites/useSiteAdmin";
import { GridSites } from "../components/gridV1/gridSites";
import { GridPages0 } from "../components/gridV1/gridPages0";
import { getQuery } from "../../utils/functionV0";
import { GridPages1, GridPages2 } from "../components/gridV1";
import usePages0 from "../hooks/pages0/usePages0";
import usePages1 from "../hooks/pages1/usePages1";

interface Routes {

}
export const Routes: FC<Routes> = ({ }) => {
  const { asPath } = useRouter()
  const query = getQuery(asPath)
  const { data: site } = useSiteAdmin(process.env.API_SITE!);
  const { data: sitesSeo } = useSitesSeo();
  const { data: pages0 } = usePages0();
  const { data: pages1 } = usePages1();
  // console.log(getPathByPages0(pages0!));
  // console.log(getPathByPages1(pages1!));
  
  
  const { data: sitesPaths } = useSitesPaths();
  const { data: products } = useFindAllProducts();
  const { data: articles } = useFindAllArticles();
  // console.log(useRouter());
  
  switch (asPath) {
    case '/': return (
      <>
      {markdownComponent(Hero)}
      {markdownComponent(Featured1)}
      {markdownComponent(FAQS1)}
      {markdownComponent(Stats1)}
      </>
    )

    case '/hooks': return <Hooks />
    

    case '/dashboard/sites': return <> <GridSites /> </>
    case getPathsBySite(sitesPaths!, asPath): return <> <GridPages0 /> </>
    case getPathByPage0(pages0!, asPath): return <GridPages1 />
    case getPathByPage1(pages1!, asPath): return <GridPages2 />


    case getPathsByPage0(sitesPaths!, asPath): return <GridPage1 />
    case getPathsByPage1(sitesPaths!, asPath): return <GridPage2 />
    case getPathsByPage2(sitesPaths!, asPath): return <GridPage3 />
    case getPathsByProduct(products!, asPath): return <ProductOverviews1 />
    case getPathsByArticle(articles!, asPath): return <ArticleEdit/>

    default:
      return null
  }
}