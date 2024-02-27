import { ProductEntity } from 'features/products/types/productTypes'

export type CartItem = ProductEntity & { quantity: number }

export type CartFormData = {
    firstName: string
    lastName: string
    address: string
    phone: string
}
