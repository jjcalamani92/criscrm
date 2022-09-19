import { FC } from "react"
import { Hero, Hero1, Login1 } from "../components";
import { useGetPages, useGetSite, useGetSites, useGetUser, useGetUserByEmail } from "../../graphql/reactQuery/reactQuery";
import { useRouter } from 'next/router';
import { Dashboard } from "./dashboard.routes";
import { getAllProductAsPaths, getPage0AsPaths, getPage0ByAsPaths, getPage1AsPaths, getPage1ByAsPaths, getPage2AsPaths, getPage2ByAsPaths, getPage3AsPaths, getProductsAsPaths, getQuery, getSiteByAsPaths, getSitesAsPaths, getSitesByProductAsPaths } from "../../utils/function";
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
import { Article5 } from "../components/blog/article/article5";
import { Article6 } from "../components/blog/article/article6";
import { Article7 } from "../components/blog/article/article7";
import { useFindAllProducts } from '../../graphql/reactQuery/query/product.query';


interface Routes {
}

export const Routes: FC<Routes> = ({ }) => {
  const { asPath } = useRouter()
  const query = getQuery(asPath)
  const { data: sites } = useGetSites();
  const { data: products } = useFindAllProducts()
  // console.log(products);
  switch (asPath) {
    case '/': return (
      <>
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
    case '/blog':
      return ( <>
      <Blogs1 /> <Blogs2 /> <Blogs3 /> <Blogs4 />
      </>
      )
    case '/blog/article-1':
      return ( <>
      <Article7 /> 
      <br />
      <Article6 /> 
      <br />
      <Article5 /> 
      <br />
      <Article4 /> 
      <br />
      <Article3 /> 
      <br />
      <Article2 /> 
      <br />
      <Article1 /> 
      <br />
      <Article0 /> 
      </>
      )
    case '/dashboard/sites': return <GridSite sites={sites!} />
    case getSiteByAsPaths(sites!, asPath): return <GridPage0 />
    case getPage0ByAsPaths(sites!, asPath): return <GridPage1 />
    case getPage1ByAsPaths(sites!, asPath): return <GridPage2 />
    case getPage2ByAsPaths(sites!, asPath): return <GridPage3 />
    case getAllProductAsPaths(products!, asPath): return <ProductOverviews />
    
    case '/auth/login':
      return <Login1 />
    default:
      return null
  }
}