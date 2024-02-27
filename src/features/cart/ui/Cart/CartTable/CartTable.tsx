import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import { cartActions } from 'features/cart/model/cartSlice'
import { CartCard } from 'features/cart/ui/Cart/CartTable/CartCard/CartCard'
import { useAppDispatch } from 'common/hooks/useAppDispatch'
import s from 'features/cart/ui/Cart/Card.module.css'
import { ProductEntity } from 'features/products/types/productTypes'
import { CartItem } from 'features/cart/types/cartTypes'

type Props = {
    cartItems: CartItem[]
}
export const CartTable = ({ cartItems }: Props) => {
    const dispatch = useAppDispatch()

    const addCartItemHandler = (product: ProductEntity) => {
        dispatch(cartActions.addCartItem({ product }))
    }

    const removeCartItemHandler = (product: ProductEntity) => {
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
