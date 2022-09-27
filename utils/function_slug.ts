
import { Site } from "../interfaces/site/site.interface";

export const getSlugBySites = (sites: Site[]) => {
  return sites.map((data) => ({slug: ['dashboard', 'sites', data._id]}));
};