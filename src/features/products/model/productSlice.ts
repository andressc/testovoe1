import { asyncThunkCreator, buildCreateSlice, isAnyOf } from '@reduxjs/toolkit'
import { productsApi } from 'features/products/api/productsApi'
import { ProductEntity } from 'features/products/types/productTypes'

export type ProductsInitialState = ReturnType<typeof slice.getInitialState>

const createAppSlice = buildCreateSlice({
    creators: { asyncThunk: asyncThunkCreator },
})

const slice = createAppSlice({
    name: 'products',
    initialState: {
        products: [] as ProductEntity[],
        product: null as ProductEntity | null,
        productsIsLoading: true,
        productIsLoading: true,
        skeletonSize: 8,
    },
    reducers: (creators) => {
        const createAThunk = creators.asyncThunk.withTypes<{ rejectValue: null }>()

        return {
            clearProducts: creators.reducer((state) => {
                state.products = []
            }),
            fetchProducts: createAThunk<{ products: ProductEntity[] }, undefined>(async (_, { rejectWithValue }) => {
                const result = await productsApi.getProducts()
                if (result.data.length !== 0) {
                    return { products: result.data }
                }
                return rejectWithValue(null)
            }),
            getProductById: createAThunk<{ product: ProductEntity | null }, { id: string }>(async (param) => {
                const result = await productsApi.getProductById(param.id)
                return { product: result }
            }),
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(productActions.fetchProducts.fulfilled, (state, action) => {
                action.payload.products.forEach((p) => {
                    state.products.push(p)
                })
            })
            .addCase(productActions.getProductById.fulfilled, (state, action) => {
                state.product = action.payload.product
            })
            .addCase(productActions.getProductById.pending, (state) => {
                state.productIsLoading = true
            })
            .addMatcher(
                isAnyOf(
                    productActions.getProductById.fulfilled,
                    productActions.getProductById.rejected,
                    productActions.fetchProducts.fulfilled,
                    productActions.fetchProducts.rejected
                ),
                (state) => {
                    state.productIsLoading = false
                    state.productsIsLoading = false
                }
            )
    },
    selectors: {
        selectProducts: (sliceState) => sliceState.products,
        selectProduct: (sliceState) => sliceState.product,
        selectProductsIsLoading: (sliceState) => sliceState.productsIsLoading,
        selectProductIsLoading: (sliceState) => sliceState.productIsLoading,
        selectSkeletonSize: (sliceState) => sliceState.skeletonSize,
    },
})

export const productReducer = slice.reducer
export const productActions = slice.actions
export const productSelectors = slice.selectors
