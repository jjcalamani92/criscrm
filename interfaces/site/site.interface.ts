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