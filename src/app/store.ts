import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { configureStore, UnknownAction } from '@reduxjs/toolkit'
import { saveState } from 'common/utils/localstorage'
import { productReducer } from 'features/products/model/productSlice'
import { appReducer } from 'app/appSlice'
import { cartReducer } from 'features/cart/model/cartSlice'

export type AppRootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootState, unknown, UnknownAction>
export type AppDispatch = ThunkDispatch<AppRootState, unknown, UnknownAction>

export const reducers = {
    app: appReducer,
    products: productReducer,
    cart: cartReducer,
}
export const store = configureStore({
    reducer: reducers,
    //middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend<any>(middlewares),
})

store.subscribe(() => {
    saveState(store.getState())
})
