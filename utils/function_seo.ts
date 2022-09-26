import { useFindProductsBySite } from "../graphql/reactQuery/query/product.query";
import { Product, Products } from "../interfaces/product.interface";
import { Site } from "../interfaces/site.interface";
import { Article } from '../interfaces/article/article.interface';

export const getPathsBySites = (sites: Site[]) => {
  return sites.map((data) => `/dashboard/sites/${data._id}`);
};