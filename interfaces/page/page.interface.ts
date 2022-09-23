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
  _id:string
  input:{
    title: string
    description: string
    src: string
    alt: string
    type: string
  }
}