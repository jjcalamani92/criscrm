export interface CreateArticle {
  title: string
  author: string
  description: string
  site: string
  parent: string
  category: string
}
export interface UpdateArticle {
  _id:string
  input:{
    title: string
    author: string
    description: string
    category: string
    src: string
    alt: string
    content: string
    meta: string
    tags: string
  }
}