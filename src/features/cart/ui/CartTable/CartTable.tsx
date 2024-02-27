import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import { cartActions, CartItem } from 'features/cart/model/cartSlice'
import { CartCard } from 'features/cart/ui/CartCard/CartCard'
import { Product } from 'features/products/api/productsApi'
import { useAppDispatch } from 'common/hooks/useAppDispatch'
import s from '../Cart/Card.module.css'

type Props = {
    cartItems: CartItem[]
}
export const CartTable = ({ cartItems }: Props) => {
    const dispatch = useAppDispatch()

    const addCartItemHandler = (product: Product) => {
        dispatch(cartActions.addCartItem({ product }))
    }

    const removeCartItemHandler = (product: Product) => {
        dispatch(cartActions.removeCartItem({ product }))
    }

    const cartList = cartItems.map((ci) => (
        <CartCard
            key={ci.id}
            cartItem={ci}
            addCartItemHandler={addCartItemHandler}
            removeCartItemHandler={removeCartItemHandler}
        />
    ))

    return (
        <Table aria-label="simple table" className={`${s.item} ${s.large}`}>
            <TableBody>{cartList}</TableBody>
        </Table>
    )
}
