import { database } from '../../../firebase/firebase'
import { ref, get } from 'firebase/database'

export type Product = {
    id: string
    name: string
    description: string
    cost: number
    image: string
}

const db = 'products'

export const productsApi = {
    async getProducts(): Promise<{ data: Product[] }> {
        const dataRef = ref(database, db)
        const snapshot = await get(dataRef)
        return snapshot.val()
    },

    async getProductById(productId: string): Promise<Product> {
        const dataRef = ref(database, `${db}/data/${productId}`)
        const snapshot = await get(dataRef)
        return snapshot.val()
    },
}
