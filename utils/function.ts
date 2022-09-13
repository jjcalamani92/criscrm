import { Site } from "../interfaces/site.interface";

export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};
export const getQuery = (asPath: string) => {
  return asPath.slice(1).split("/");
};
export const getURL = (asPath: string) => {
  let url = asPath.split("/");
  url.length = url.length - 1;
  return url.join("/");
};

//TODO: SITE TODO:
export const getSite = (sites: Site[], asPath: string) => {
  const query = getQuery(asPath);
  return sites.find((site) => site._id === query[2]);
};
//TODO: PAGES TODO:

export const getPages0 = (sites: Site[], asPath: string) => {
  return getSite(sites, asPath)?.page;
};
export const getPages1 = (sites: Site[], asPath: string) => {
  return getPage0(sites, asPath)?.page;
};
export const getPages2 = (sites: Site[], asPath: string) => {
  return getPage1(sites, asPath)?.page;
};
export const getPages3 = (sites: Site[], asPath: string) => {
  return getPage2(sites, asPath)?.page;
};
export const getPages4 = (sites: Site[], asPath: string) => {
  return getPage3(sites, asPath)?.page;
};
export const getPages5 = (sites: Site[], asPath: string) => {
  return getPage4(sites, asPath)?.page;
};

//TODO: PAGE TODO:
export const getPage0 = (sites: Site[], asPath: string) => {
  const query = getQuery(asPath);
  return getPages0(sites, asPath)?.find((data) => data.slug === query[3]);
};
export const getPage1 = (sites: Site[], asPath: string) => {
  const query = getQuery(asPath);
  return getPages1(sites, asPath)?.find((data) => data.slug === query[4]);
};
export const getPage2 = (sites: Site[], asPath: string) => {
  const query = getQuery(asPath);
  return getPages2(sites, asPath)?.find((data) => data.slug === query[5]);
};
export const getPage3 = (sites: Site[], asPath: string) => {
  const query = getQuery(asPath);
  return getPages3(sites, asPath)?.find((data) => data.slug === query[6]);
};
export const getPage4 = (sites: Site[], asPath: string) => {
  const query = getQuery(asPath);
  return getPages4(sites, asPath)?.find((data) => data.slug === query[7]);
};
export const getPage5 = (sites: Site[], asPath: string) => {
  const query = getQuery(asPath);
  return getPages5(sites, asPath)?.find((data) => data.slug === query[8]);
};

export const getPage = (sites: Site[], asPath: string) => {
  const query = getQuery(asPath);
  if (query.length === 3) {
    return getSite(sites, asPath);
    // return {data: getSite(sites, asPath)?.data!, page: getSite(sites, asPath)?.page, slug: "", _id: "", seo:{name: "", description:"", href:"", image:{src: "", alt:""}}, type:"",}
  }
  if (query.length === 4) {
    return getPage0(sites, asPath);
  }
  if (query.length === 5) {
    return getPage1(sites, asPath);
  }
};
export const getPageTitle = (sites: Site[], asPath: string) => {
  const query = getQuery(asPath);
  if (query.length === 3) {
    return getSite(sites, asPath)?.data.name;
    // return {data: getSite(sites, asPath)?.data!, page: getSite(sites, asPath)?.page, slug: "", _id: "", seo:{name: "", description:"", href:"", image:{src: "", alt:""}}, type:"",}
  } else if (query.length === 4) {
    return getPage0(sites, asPath)?.data.seo.title;
  } else if (query.length === 5) {
    return getPage1(sites, asPath)?.data.seo.title;
  }
};

// export const getPages = (sites:Site[], asPath:string) => {
//   const query = getQuery(asPath);
//   if (query.length === 3) {
//     return getPages0(sites, asPath)
//   }
//   // if (query.length === 4) {
//   //   return getPage0(sites, asPath)
//   // }

//   // if (query.length === 4) {
//   //   return getPage0(sites, asPath)
//   // } else
//   // if (query.length === 5) {
//   //   return getPage1(sites, asPath)
//   // } else
//   // if (query.length === 6) {
//   //   return getPage2(sites, asPath)
//   // } else
//   // if (query.length === 7) {
//   //   return getPage3(sites, asPath)
//   // } else
//   // if (query.length === 8) {
//   //   return getPage4(sites, asPath)
//   // } else
//   // if (query.length === 9) {
//   //   return getPage5(sites, asPath)
//   // }
// }
//TODO: PATHS TODO:
export const getSitesAsPaths = (sites: Site[]) => {
  return sites.map((data) => `/dashboard/sites/${data._id}`);
};
export const getPage0AsPaths = (sites: Site[]) => {
  return sites
    .map(
      (data) =>
        data.page &&
        data.page.map((data0) => `/dashboard/sites/${data._id}/${data0.slug}`)
    )
    .flat(1);
};
export const getPage1AsPaths = (sites: Site[]) => {
  return sites
    .map(
      (data) =>
        data.page &&
        data.page.map(
          (data0) =>
            data0.page &&
            data0.page.map(
              (data1) =>
                `/dashboard/sites/${data._id}/${data0.slug}/${data1.slug}`
            )
        )
    )
    .flat(2)
    .filter((data) => data);
};
export const getPage2AsPaths = (sites: Site[]) => {
  return sites
    .map(
      (data) =>
        data.page &&
        data.page.map(
          (data0) =>
            data0.page &&
            data0.page.map(
              (data1) =>
                data1.page &&
                data1.page.map(
                  (data2) =>
                    `/dashboard/sites/${data._id}/${data0.slug}/${data1.slug}/${data2.slug}`
                )
            )
        )
    )
    .flat(3)
    .filter((data) => data);
};

export const getPathsBySite = (site: Site) => {
  return site.page.map((data0) => [
    { slug: data0.slug === 'home' ? [] : [data0.slug] },
    data0.page.length !== 0 &&
      data0.page.map((data1) => ({ slug: [data0.slug, data1.slug] })),
  ]).flat(10).filter(data => data);
};
