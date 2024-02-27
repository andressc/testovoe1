import { asyncThunkCreator, buildCreateSlice } from '@reduxjs/toolkit'
import { productsApi } from 'features/products/api/productsApi'
import { ProductEntity } from 'features/products/types/productTypes'

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
                try {
                    const result = await productsApi.getProducts()
                    return { products: result.data }

                    //handleServerAppError(result.data.error, dispatch)
                    //return rejectWithValue(null)
                } catch (e) {
                    //handleServerNetworkError(dispatch, e)
                    return rejectWithValue(null)
                }
            }),
            getProductById: createAThunk<{ product: ProductEntity }, { id: string }>(
                async (param, { dispatch, rejectWithValue }) => {
                    try {
                        const result = await productsApi.getProductById(param.id)
                        return { product: result }

                        //handleServerAppError(result.data.error, dispatch)
                        //return rejectWithValue(null)
                    } catch (e) {
                        //handleServerNetworkError(dispatch, e)
                        return rejectWithValue(null)
                    }
                }
            ),
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(productActions.fetchProducts.fulfilled, (state, action) => {
                action.payload.products.forEach((p) => {
                    state.products.push(p)
                })
                state.productsIsLoading = false
            })
            .addCase(productActions.getProductById.fulfilled, (state, action) => {
                state.product = action.payload.product
                state.productIsLoading = false
            })
            .addCase(productActions.getProductById.pending, (state) => {
                state.productIsLoading = true
            })
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
