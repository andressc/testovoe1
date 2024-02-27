import { database } from '../../../firebase/firebase'
import { ref, get } from 'firebase/database'
import { ProductEntity } from 'features/products/types/productTypes'
const db = 'products'

export const productsApi = {
    async getProducts(): Promise<{ data: ProductEntity[] }> {
        const dataRef = ref(database, db)
        const snapshot = await get(dataRef)
        return snapshot.val()
    },

    async getProductById(productId: string): Promise<ProductEntity> {
        const dataRef = ref(database, `${db}/data/${productId}`)
        const snapshot = await get(dataRef)
        return snapshot.val()
    },
}
