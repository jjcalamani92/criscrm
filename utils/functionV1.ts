import { Site } from "../interfaces/site/site.interface";
import { typePageEcommerceCategory } from "./constv0";

export const getSlugBySite = (site:Site) => 
  site.page.map(data0 => ({asPath: data0.slug === 'home' ? '/' : `/${data0.slug}`, seo: data0.data.seo}))
export const getSlugByPage0 = (site:Site) => 
  site.page.map(data0 => data0.page.map(data1 => ({asPath: `/${data0.slug}/${data1.slug}`, seo: data1.data.seo}))).flat(1)


export const getSlugBySites = (sites: Site[]) =>
  sites.map((data) => ({asPath:`/dashboard/sites/${data._id}`, seo: data.data.seo}));

export const getSlugByPages0 = (sites: Site[]) =>
  sites
    .map((data) =>
      data.page.map((data0) => ({asPath:`/dashboard/sites/${data._id}/${data0.slug}`, seo: data0.data.seo}))
    )
    .flat(1);

export const getSlugByPages1 = (sites: Site[]) =>
  sites
    .map((data) =>
      data.page.map((data0) => ['page', 'category'].includes(data0.data.type)
        ? data0.page.map(
          (data1) => ({asPath: `/dashboard/sites/${data._id}/${data0.slug}/${data1.slug}`, seo: data1.data.seo})
        )
        : data0.data.type === 'article'
        ? data0?.article.map(
          (article) => ({asPath:`/dashboard/sites/${data._id}/$articles/${article._id}`, seo: article.data.seo})
        )
        : typePageEcommerceCategory.map(data => data.value).includes(data0.data.type)
          ? data0?.product.map(
            (product) => ({asPath:`/dashboard/sites/${data._id}/$products/${product.type}/${product._id}`, seo: product.data.seo})
          )
          : []
      )
    )
    .flat(2);

export const getSlugByPages2 = (sites: Site[]) =>
  sites
    .map((data) =>
      data.page.map((data0) =>
        data0.page.map((data1) => ['page', 'category'].includes(data1.data.type)
          ? data1.page.map(
            (data2) =>
              ({asPath:`/dashboard/sites/${data._id}/${data0.slug}/${data1.slug}/${data2.slug}`, seo: data2.data.seo})
          )
          : data1.data.type === 'article'
          ? data1?.article.map(
            (article) => ({asPath:`/dashboard/sites/${data._id}/$articles/${article._id}`, seo: article.data.seo})
          )
          : typePageEcommerceCategory.map(data => data.value).includes(data1.data.type)
          ? data1?.product.map(
            (product) => ({asPath:`/dashboard/sites/${data._id}/$products/${product.type}/${product._id}`, seo: product.data.seo})
          )
          : []
        )
      )
    )
    .flat(3);
export const getSlugByPages3 = (sites: Site[]) =>
  sites
    .map((data) =>
      data.page.map((data0) =>
        data0.page.map((data1) => 
          data1.page.map((data2) => ['page', 'category'].includes(data2.data.type)
          ? data2.page.map(
            (data3) =>
              ({asPath: `/dashboard/sites/${data._id}/${data0.slug}/${data1.slug}/${data2.slug}/${data3.slug}`, seo: data3.data.seo})
          )
          : data2.data.type === 'article'
          ? data2?.article.map(
            (article) => ({asPath:`/dashboard/sites/${data._id}/$articles/${article._id}`, seo: article.data.seo})
          )
          : typePageEcommerceCategory.map(data => data.value).includes(data2.data.type)
          ? data2?.product.map(
            (product) => ({asPath:`/dashboard/sites/${data._id}/$products/${product.type}/${product._id}`, seo: product.data.seo})
          )
          : []
          )
        )
      )
    )
    .flat(4);
