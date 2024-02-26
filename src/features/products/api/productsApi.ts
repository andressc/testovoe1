import { ref } from '../../../firebase/firebase'

export type Product = {
    id: string
    name: string
    description: string
    cost: number
    image: string
}

export const productsApi = {
    async getProducts(): Promise<{ data: Product[] }> {
        //try {
        const snapshot = await ref.once('value')

        const data = snapshot.val()

        return data
        /*} catch (error) {
            console.error('Ошибка при получении данных:', error)
        }*/
    },
}
