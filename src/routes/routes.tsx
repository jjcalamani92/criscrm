import { FC } from "react"
import { Hero, Hero1, Login1 } from "../components";
import { useRouter } from 'next/router';
import { Dashboard } from "./dashboard.routes";
import { getAllArticleAsPaths, getAllProductAsPaths, getPage0AsPaths, getPage0ByAsPaths, getPage1AsPaths, getPage1ByAsPaths, getPage2AsPaths, getPage2ByAsPaths, getPage3AsPaths, getProductsAsPaths, getQuery, getSiteByAsPaths, getSitesAsPaths, getSitesByProductAsPaths } from "../../utils/function";
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
import { ProductOverviews } from "../components/overviews/productOverviews";
import { Blogs1 } from "../components/blog/listArticle/blogs1";
import { Blogs2, Blogs3, Blogs4 } from "../components/blog/listArticle";
import { Article0, Article1, Article2, Article3 } from "../components/blog/article";
import { Article4 } from "../components/blog/article/article4";
import { Article5 } from '../components/blog/article/article5';
import { Article6 } from "../components/blog/article/article6";
import { Article7 } from "../components/blog/article/article7";
import { useFindAllProducts } from '../../graphql/reactQuery/query/product.query';
import { ProductOverviews1 } from "../components/overviews/productOverviews1";
import { useFindAllArticles } from "../../graphql/reactQuery/query";
import { ArticleEdit } from "../components/grid/articleEdit";
import useSites from "../hooks/sites/useSites";
import usePages0 from "../hooks/pages0/usePages0";
import useSite from "../hooks/sites/useSite";
import { getPathsByArticle, getPathsByArticles, getPathsByPage0, getPathsByPage1, getPathsByPage2, getPathsByPages0, getPathsByPages1, getPathsByPages2, getPathsBySite, getPathsBySites } from "../../utils/function_paths";
import { getSeoBySites } from "../../utils/function_seo";
import useSitesPaths from "../hooks/sites/useSitesPaths";
import { Hooks } from "../components/hooks/hooks";
import useSitesSeo from "../hooks/sites/useSitesSeo";
import { getProBySites } from "../../utils/function_pro";


interface Routes {
}

export const Routes: FC<Routes> = ({ }) => {
  const { asPath } = useRouter()
  const query = getQuery(asPath)
  const { data: sitesPaths } = useSitesPaths();
  const { data: sitesSeo } = useSitesSeo();
  // console.log(getPathsBySites(sitesPaths!));
  // console.log(sitesSeo);
  
  // console.log(getSeoBySites(sitesSeo!));
  // console.log(getProBySites(sitesSeo!));
  console.log([...getProBySites(sitesSeo!).map(data => ({params: {slug: data.slug}})), {params: {slug: []}}].flat(1));
  

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
    case '/dashboard/sites': return <GridSite />
    case getPathsBySite(sitesPaths!, asPath): return <GridPage0 />
    case getPathsByPage0(sitesPaths!, asPath): return <GridPage1 />
    case getPathsByPage1(sitesPaths!, asPath): return <GridPage2 />
    case getPathsByPage2(sitesPaths!, asPath): return <GridPage3 />
    // case getPathsByArticle(articles!, asPath): return <ArticleEdit/>

    default:
      return null
  }
}