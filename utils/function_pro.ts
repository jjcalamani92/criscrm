import { useFindProductsBySite } from "../src/hooks/products/product.query";
import { Article } from "../interfaces/article/article.interface";
import { Site } from "../interfaces/site/site.interface";

export const getProBySites = (sites: Site[]) => {
  return sites
    .map((data) =>
      [
        {
          path: `/dashboard/sites/${data._id}`,
          seo: data.data.seo,
          slug: ["dashboard", "sites", data._id],
        },
        data.page &&
          data.page.map((data0) => [{
            path: `/dashboard/sites/${data._id}/${data0.slug}`,
            seo: data0.data.seo,
            slug: ["dashboard", "sites", data._id, data0.slug],
          },
          data0.page && 
          data0.page.map((data1) => [{
            path: `/dashboard/sites/${data._id}/${data0.slug}/${data1.slug}`,
            seo: data1.data.seo,
            slug: ["dashboard", "sites", data._id, data0.slug, data1.slug],
          }
        ])
        ]),
      ].flat(5)
    )
    .flat(1);
};
