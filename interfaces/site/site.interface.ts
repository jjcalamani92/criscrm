import { Page } from "../page/page.interface"
import { Product } from "../product/product.interface"

export interface Site {
  _id: string
  data: Data
  page: Page[]
  product: Product[]
  client: string
  url: string
}

export interface Data {
  name: string;
  description: string;
  dataBase: DataBase[]
  numberPhone: number;
  address: string;
  domain: string;
  location: string;
  type: string
  seo: Seo;
}

export interface Seo {
  title: string;
  href: string;
  description: string;
  image: Image
}

export interface Image {
  uid: string
  src: string;
  alt: string;
}


export interface DataBase {
  uid: string
  label: string;
  value: string;
}





export interface Tags {
  uid: string;
  text: string;
  href:string;
}

export interface Register {
  uid: string;
  change: string;
  updatedAt: Date;
}
export interface UpdateDate {
  createdAt: Date;
  register: Register[];
}




export interface Timestamps {
  created: number;
  updated?: number;
}
export interface SiteForm {
  _id?: string
  title: string;
  domain: string;
  logo: string;
  icon: string;
  imageSrc: string;
  imageAlt: string;
  numberPhone: number;
  address: string;
  location: string;
  description: string;
  type: string;
  client: string;
}
// export interface ChildrenForm {
//   uid?: string
//   name: string;
//   description: string;
//   imageSrc: string;
//   imageAlt: string;
// }
export interface Domain {
  name: string;
  dlt: string;
}


export interface CreateSite {
  name: string
  domain: string
  description: string
  type: string
  client: string
  change: string
  uid: string
}
export interface UpdateSite {
  id:string
  input:{
    name: string
    domain: string
    description: string
    type: string
    change: string
    uid: string
  }
}
