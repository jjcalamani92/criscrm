import { Article } from "../article/article.interface";
import { Product } from "../product/product.interface";
import { Seo } from "../site/site.interface";

export interface Page {
  _id: string;
  data: Data;
  slug: string;
  parent: string;
  article: Article[];
  page:Page[];
  site: string
  product: Product[]
}

export interface Data {
  type: string;
  seo: Seo;
}

export interface CreatePage {
  title: string
  description: string
  src: string
  alt: string
  type: string
  parent: string
  site: string
}
export interface UpdatePage {
  id:string
  input:{
    title: string
    description: string
    src: string
    alt: string
    type: string
  }
}