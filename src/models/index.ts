export interface ProductType{
  _id : string,
  name: string,
  avatar: string,
  category: string,
  developerEmail:string,
  description: string,
  updatedAt: string,
  createdAt: string,
  _v: number,
  price: number
}

export interface AddProductType{
  name: string,
  avatar: string,
  category: string,
  developerEmail:string,
  description: string,
  price: number
}

export interface Category{
  _id : string,
  name: string,
  updatedAt: string,
  createdAt: string,
  _v: number
}

export interface FavoritesType {
  total: number,
  favorites: ProductType[]
}

export interface ProductSResponse {
  message: string,
  products: ProductType[]
}

export interface ProductResponse {
  message: string,
  product: ProductType
}

export interface ErrorResponse {
  message: string,
  stack: string
}