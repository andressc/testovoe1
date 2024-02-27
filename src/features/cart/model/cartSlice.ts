import { asyncThunkCreator, buildCreateSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from 'features/products/api/productsApi'

const createAppSlice = buildCreateSlice({
    creators: { asyncThunk: asyncThunkCreator },
})

export type CartItem = Product & { quantity: number }

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
            addCartItem: creators.reducer((state, action: PayloadAction<{ product: Product }>) => {
                const index = state.cartItems.findIndex((i) => i.id === action.payload.product.id)

                if (index === -1) {
                    state.cartItems.push({ ...action.payload.product, quantity: 1 })
                    state.cartAmount += action.payload.product.cost
                    return
                }

                state.cartItems[index].quantity = state.cartItems[index].quantity + 1
                state.cartAmount = state.cartAmount + action.payload.product.cost
            }),
            removeCartItem: creators.reducer((state, action: PayloadAction<{ product: Product }>) => {
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
        }
    },
    extraReducers: (builder) => {
        /*builder.addCase(appActions.initializeApp.fulfilled, (state) => {
            state.isInitialized = true
        })*/
    },
    selectors: {
        selectCartAmount: (sliceState) => sliceState.cartAmount,
        selectCartItems: (sliceState) => sliceState.cartItems,
    },
})

export const cartReducer = slice.reducer
export const cartActions = slice.actions
export const cartSelectors = slice.selectors
