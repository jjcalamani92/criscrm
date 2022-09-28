import { gql } from "graphql-request";
import {
  SITE_FRAGMENT,
  SITE_FRAGMENT_PATHS,
  SITE_FRAGMENT_SEO,
} from "../../fragment/site.fragment";

const ARTICLE_FRAGMENT = gql`
  fragment article on Article {
    _id
    data{
      seo{
      ...seo
      }
    }
  }
`;
const PRODUCT_FRAGMENT = gql`
  fragment product on Product {
    _id
    type
    data{
      seo{

      ...seo
      }
    }
  }
`;
const SEO_FRAGMENT = gql`
  fragment seo on Seo {
    title
    description
    image {
      src
      alt
    }
  }
`;


const PAGE2_FRAGMENT = gql`
  fragment page2 on Page2 {
    slug
    article {
      ...article
    }
    product {
      ...product
    }
    data {
      type
      seo {
        ...seo
      }
    }
  }
`;
const PAGE1_FRAGMENT = gql`
  fragment page1 on Page1 {
    slug
    article {
      ...article
    }
    product {
      ...product
    }
    data {
      type
      seo {
        ...seo
      }
    }
  }
`;
const PAGE0_FRAGMENT = gql`
  fragment page0 on Page0 {
    slug
    article {
      ...article
    }
    product {
      ...product
    }
    data {
      type
      seo {
        ...seo
      }
    }
  }
  ${PRODUCT_FRAGMENT}
  ${ARTICLE_FRAGMENT}
`;
export const FIND_SITES_SEO = gql`
  query FindSites {
    findSites {
      _id
      data {
        seo{
          ...seo
        }
      }
      page {
        ...page0
        page {
          ...page1
          page{
            ...page2
          }
        }
      }
    }
  }
  ${PAGE0_FRAGMENT}
  ${PAGE1_FRAGMENT}
  ${PAGE2_FRAGMENT}
  ${SEO_FRAGMENT}
`;
export const FIND_SITES_PATHS = gql`
  query FindSites {
    findSites {
      ...site
    }
  }
  ${SITE_FRAGMENT_PATHS}
`;
export const FIND_SITES = gql`
  query FindSites {
    findSites {
      ...site
    }
  }
  ${SITE_FRAGMENT}
`;
export const FIND_SITE = gql`
  query FindSite($id: ID!) {
    findSite(id: $id) {
      ...site
    }
  }
  ${SITE_FRAGMENT}
`;
export const FIND_SITE_ADMIN = gql`
  query FindSite($id: ID!) {
    findSite(id: $id) {
      _id
      data {
        seo{
          ...seo
        }
      }
      page {
        ...page0
        page {
          ...page1
          page{
            ...page2
          }
        }
      }
    }
  }
  ${PAGE0_FRAGMENT}
  ${PAGE1_FRAGMENT}
  ${PAGE2_FRAGMENT}
  ${SEO_FRAGMENT}
`;
