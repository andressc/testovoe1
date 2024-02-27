import { asyncThunkCreator, buildCreateSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppRootState } from 'app/model/store'
import { ProductEntity } from 'features/products/types/productTypes'
import { CartFormData, CartItem } from 'features/cart/types/cartTypes'

export type CartInitialState = ReturnType<typeof slice.getInitialState>

const createAppSlice = buildCreateSlice({
    creators: { asyncThunk: asyncThunkCreator },
})

const slice = createAppSlice({
    name: 'cart',
    initialState: {
        cartItems: [] as CartItem[],
        cartAmount: 0,
    },
    reducers: (creators) => {
        const createAThunk = creators.asyncThunk.withTypes<{ rejectValue: null }>()

        return {
            setAmount: creators.reducer((state, action: PayloadAction<{ amount: number }>) => {
                state.cartAmount = action.payload.amount
            }),
            addCartItem: creators.reducer((state, action: PayloadAction<{ product: ProductEntity }>) => {
                const index = state.cartItems.findIndex((i) => i.id === action.payload.product.id)

                if (index === -1) {
                    state.cartItems.push({ ...action.payload.product, quantity: 1 })
                    state.cartAmount += action.payload.product.cost
                    return
                }

                state.cartItems[index].quantity = state.cartItems[index].quantity + 1
                state.cartAmount = state.cartAmount + action.payload.product.cost
            }),
            removeCartItem: creators.reducer((state, action: PayloadAction<{ product: ProductEntity }>) => {
                const index = state.cartItems.findIndex((i) => i.id === action.payload.product.id)

                if (index === -1) {
                    return
                }

                state.cartAmount = state.cartAmount - action.payload.product.cost

                if (state.cartItems[index].quantity === 1) {
                    state.cartItems.splice(index, 1)
                    return
                }

                state.cartItems[index].quantity = state.cartItems[index].quantity - 1
            }),
            clearCart: creators.reducer((state) => {
                state.cartItems = []
                state.cartAmount = 0
            }),
            purchase: createAThunk<undefined, { formData: CartFormData }>(
                async (param, { dispatch, getState, rejectWithValue }) => {
                    try {
                        const state = getState() as AppRootState
                        const cartItems = state.cart.cartItems.map((ci) => ({ id: ci.id, quantity: ci.quantity }))
                        const data = { purchase: cartItems, info: param.formData }
                        dispatch(cartActions.clearCart())
                        console.log(data)
                    } catch (e) {
                        //handleServerNetworkError(dispatch, e)
                        return rejectWithValue(null)
                    }
                }
            ),
        }
    },
    /*extraReducers: (builder) => {
        builder.addCase(cartActions.purchase.fulfilled, (state) => {
            state.cartItems = []
            state.cartAmount = 0
        })
    },*/
    selectors: {
        selectCartAmount: (sliceState) => sliceState.cartAmount,
        selectCartItems: (sliceState) => sliceState.cartItems,
    },
})

export const cartReducer = slice.reducer
export const cartActions = slice.actions
export const cartSelectors = slice.selectors
