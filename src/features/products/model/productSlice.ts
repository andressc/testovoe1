import { asyncThunkCreator, buildCreateSlice } from '@reduxjs/toolkit'
import { Product, productsApi } from 'features/products/api/productsApi'
import { AppStatuses } from 'app/appSlice'

type ProductDomain = Product & { status: AppStatuses }

const createAppSlice = buildCreateSlice({
    creators: { asyncThunk: asyncThunkCreator },
})

const slice = createAppSlice({
    name: 'products',
    initialState: {
        products: [] as ProductDomain[],
        isLoading: true,
    },
    reducers: (creators) => {
        const createAThunk = creators.asyncThunk.withTypes<{ rejectValue: null }>()

        return {
            clearProducts: creators.reducer((state) => {
                state.products = []
            }),
            fetchProducts: createAThunk<{ products: Product[] }, undefined>(
                async (_, { dispatch, rejectWithValue }) => {
                    try {
                        const result = await productsApi.getProducts()
                        return { products: result.data }

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
        builder.addCase(productActions.fetchProducts.fulfilled, (state, action) => {
            action.payload.products.forEach((p) => {
                state.products.push({ ...p, status: 'idle' })
            })
            state.isLoading = false
        })
    },
    selectors: {
        selectProducts: (sliceState) => sliceState.products,
        selectIsLoading: (sliceState) => sliceState.isLoading,
    },
})

export const productReducer = slice.reducer
export const productActions = slice.actions
export const productSelectors = slice.selectors
