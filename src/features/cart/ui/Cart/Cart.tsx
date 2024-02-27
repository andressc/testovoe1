import React from 'react'
import { useSelector } from 'react-redux'
import { cartSelectors } from 'features/cart/model/cartSlice'
import s from './Card.module.css'
import cartImage from 'assets/images/cart.png'
import { EmptyPage } from 'common/components/EmptyPage/EmptyPage'
import { CartTable } from 'features/cart/ui/CartTable/CartTable'
import { CartForm } from 'features/cart/ui/CartForm/CartForm'
import Card from '@mui/material/Card'

export const Cart = () => {
    const cartItems = useSelector(cartSelectors.selectCartItems)
    return (
        <>
            {cartItems.length === 0 ? (
                <EmptyPage
                    title="корзина пуста"
                    description="Сделайте заказ и он отобразится в корзине"
                    image={cartImage}
                />
            ) : (
                <Card className={s.card}>
                    <CartTable cartItems={cartItems} />
                    <CartForm />
                </Card>
            )}
        </>
    )
}
