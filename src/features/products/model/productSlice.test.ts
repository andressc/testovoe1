import { productReducer, productActions } from './productSlice'
import { ProductEntity } from 'features/products/types/productTypes'

describe('productReducer', () => {
    let initialState: {
        products: ProductEntity[]
        product: ProductEntity | null
        productsIsLoading: boolean
        productIsLoading: boolean
        skeletonSize: number
    }

    beforeEach(() => {
        initialState = {
            products: [{ id: '1', name: 'Product 1', cost: 10, description: '', fullDescription: '', image: '' }],
            product: null,
            productsIsLoading: true,
            productIsLoading: true,
            skeletonSize: 8,
        }
    })

    it('should clear products', () => {
        const state = productReducer(initialState, productActions.clearProducts())
        expect(state.products.length).toBe(0)
    })
})
