import {
    productReducer,
    productActions,
    ProductsInitialState,
    productSelectors,
} from 'features/products/model/productSlice'
import { ProductEntity } from 'features/products/types/productTypes'

// Тесты для reducers
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

// Тесты для selectors
describe('productsSelectors', () => {
    let initialState: { products: ProductsInitialState }
    const product = {
        id: '1',
        name: 'name',
        description: 'description',
        fullDescription: 'fullDescription',
        cost: 500,
        image: 'image',
    }

    beforeEach(() => {
        initialState = {
            products: {
                products: [product],
                product: product,
                productsIsLoading: true,
                productIsLoading: false,
                skeletonSize: 8,
            },
        }
    })

    it('should select products', () => {
        const selectProducts = productSelectors.selectProducts(initialState)
        expect(selectProducts).toEqual(initialState.products.products)
    })

    it('should select product', () => {
        const selectProduct = productSelectors.selectProduct(initialState)
        expect(selectProduct).toEqual(product)
    })

    it('should select products is loading', () => {
        const selectProductsIsLoading = productSelectors.selectProductsIsLoading(initialState)
        expect(selectProductsIsLoading).toBeTruthy()
    })

    it('should select product is loading', () => {
        const selectProductIsLoading = productSelectors.selectProductIsLoading(initialState)
        expect(selectProductIsLoading).toBeFalsy()
    })

    it('should select skeleton size', () => {
        const selectSkeletonSize = productSelectors.selectSkeletonSize(initialState)
        expect(selectSkeletonSize).toBe(8)
    })
})
