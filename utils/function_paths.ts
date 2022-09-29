import { useFindProductsBySite } from "../src/hooks/products/product.query";

import { Article } from '../interfaces/article/article.interface';
import { Site } from "../interfaces/site/site.interface";
import { Product } from "../interfaces/product/product.interface";
import { Page } from "../interfaces/page/page.interface";

export const getPathsBySites = (sites: Site[]) => {
  return sites.map((data) => `/dashboard/sites/${data._id}`);
};
export const getPathsBySite = (sites: Site[], asPath: string) => {
  return getPathsBySites(sites).find(data => data === asPath);
};

export const getPathByPages0 = (pages: Page[]) => {
  return pages.map((data) => `/dashboard/sites/${data.parent}/page0=${data._id}`)
}
export const getPathByPage0 = (pages: Page[], asPath: string) => {
  return getPathByPages0(pages).find(data => data === asPath);
}
export const getPathByPages1 = (pages: Page[]) => {
  return pages.map((data) => `/dashboard/sites/${data.site}/page1=${data._id}`)
}
export const getPathByPage1 = (pages: Page[], asPath: string) => {
  return getPathByPages1(pages).find(data => data === asPath);
}




export const getPathsByPages0 = (sites: Site[]):string[] => {
  return sites.map((data) => data.page.length !== 0 ? data.page.map(data0 => `/dashboard/sites/${data._id}/${data0.slug}`) : []).flat(1);
};
export const getPathsByPage0 = (sites: Site[], asPath: string ):string => {
  return getPathsByPages0(sites).find(data => data === asPath)!;
};

export const getPathsByPages1 = (sites: Site[]):string[] => {
  return sites.map((data) => data.page.length !== 0 ? data.page.map(data0 => data0.page.length !== 0 ? data0.page.map(data1 => `/dashboard/sites/${data._id}/${data0.slug}/${data1.slug}`): []).flat(1) : []).flat(1);
};
export const getPathsByPage1 = (sites: Site[], asPath: string ):string => {
  return getPathsByPages1(sites).find(data => data === asPath)!;
};

export const getPathsByPages2 = (sites: Site[]):string[] => {
  return sites.map((data) => data.page.length !== 0 ? data.page.map(data0 => data0.page.length !== 0 ? data0.page.map(data1 => data1.page.length !==0  ? data1.page.map(data2 => `/dashboard/sites/${data._id}/${data0.slug}/${data1.slug}/${data2.slug}`): []).flat(1): []).flat(1) : []).flat(1);
};
export const getPathsByPage2 = (sites: Site[], asPath: string ):string => {
  return getPathsByPages2(sites).find(data => data === asPath)!;
};

export const getPathsByArticles = (articles: Article[]):string[] => {
  return articles.map((data) => `/dashboard/sites/${data.site}/$articles/${data._id}`).flat(1);
};
export const getPathsByArticle = (articles: Article[], asPath: string ):string => {
  return getPathsByArticles(articles).find(data => data === asPath)!;
};

export const getPathsByProducts = (products: Product[]):string[] => {
  return products.map((data) => `/dashboard/sites/${data.site}/$products/${data.type}/${data._id}`).flat(1);
};
export const getPathsByProduct = (products: Product[], asPath: string ):string => {
  return getPathsByProducts(products).find(data => data === asPath)!;
};