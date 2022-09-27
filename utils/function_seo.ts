import { useFindProductsBySite } from "../graphql/reactQuery/query/product.query";
import { Article } from '../interfaces/article/article.interface';
import { Site } from "../interfaces/site/site.interface";

export const getSeoBySites = (sites: Site[]) => {
  return sites.map((data) => ({seo: data.data.seo}));
};