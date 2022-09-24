import { useFindProductsBySite } from "../graphql/reactQuery/query/product.query";
import { Product, Products } from "../interfaces/product.interface";
import { Site } from "../interfaces/site.interface";
import { Article } from '../interfaces/article/article.interface';

export const getPathsBySites = (sites: Site[]) => {
  return sites.map((data) => `/dashboard/sites/${data._id}`);
};
export const getPathsBySite = (sites: Site[], asPath: string) => {
  return getPathsBySites(sites).find(data => data === asPath);
};

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