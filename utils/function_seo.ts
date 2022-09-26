import { useFindProductsBySite } from "../graphql/reactQuery/query/product.query";
import { Article } from '../interfaces/article/article.interface';
import { Site } from "../interfaces/site/site.interface";

export const getPathsBySites = (sites: Site[]) => {
  return sites.map((data) => `/dashboard/sites/${data._id}`);
};