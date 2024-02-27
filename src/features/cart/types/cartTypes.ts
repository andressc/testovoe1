import { ProductEntity } from 'features/products/types/productTypes'

export type CartItem = ProductEntity & { quantity: number }

export type CartFormData = {
    firstname: string
    lastname: string
    address: string
    phone: string
}
