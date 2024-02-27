import { ThunkDispatch } from 'redux-thunk'
import { configureStore, UnknownAction } from '@reduxjs/toolkit'
import { loadState, saveState } from 'common/utils/localstorage'
import { productReducer } from 'features/products/model/productSlice'
import { appReducer } from 'app/model/appSlice'
import { cartReducer } from 'features/cart/model/cartSlice'

export type AppRootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<AppRootState, unknown, UnknownAction>

export const reducers = {
    app: appReducer,
    products: productReducer,
    cart: cartReducer,
}

const preloadedState = {
    cart: loadState().cart,
}

export const store = configureStore({
    reducer: reducers,
    preloadedState: preloadedState,
})

store.subscribe(() => {
    saveState(store.getState())
})
