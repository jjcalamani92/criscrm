import { Image, Seo } from "../site/site.interface"

export interface Products {
  clothings?: Product[]
  furnituries?: Product[]
}
export interface Product {
  _id: string
  data: Article
  site: string
  type: string
  page: string
}
export interface Article {
  name: string;
  slug: string;
  mark: string;
  inStock: number;
  price: number;
  discountPrice: number;
  description: string;
  image: Image[];
  seo: Seo;
  featured: Featured
}

// export interface Page {
//   _id: string;
//   data: Data;
//   // blogs: Blog[];
//   slug: string;
//   page:Page[];
// }

export interface Featured {
  name: string;
  href: string;
}
export interface Data {
  type: string;
  seo: Seo;
}
// interface Seo {
//   title: string;
//   href: string;
//   description: string;
//   image: Image
// }
// export interface DataBase {
//   uid: string
//   name: string;
//   type: string;
//   image: Image
// }

// export interface Timestamps {
//   created: number;
//   updated?: number;
// }
// export interface SiteForm {
//   _id?: string
//   title: string;
//   domain: string;
//   logo: string;
//   icon: string;
//   imageSrc: string;
//   imageAlt: string;
//   numberPhone: number;
//   address: string;
//   location: string;
//   description: string;
//   type: string;
//   client: string;
// }
// export interface ChildrenForm {
//   uid?: string
//   name: string;
//   description: string;
//   imageSrc: string;
//   imageAlt: string;
// }
// export interface Domain {
//   name: string;
//   dlt: string;
// }
// export interface ImageProduct {
//   uid: string
//   src: string;
//   alt: string;
// }
export interface ImageProduct extends Image {}
