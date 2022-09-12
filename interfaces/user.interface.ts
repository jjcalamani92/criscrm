export interface User {
  _id: string
  data: DataUser
  email: string
  password: string
  site: string
}
export interface DataUser {
  name: string
  role: string
  image: string
  status: boolean
  google: boolean
}