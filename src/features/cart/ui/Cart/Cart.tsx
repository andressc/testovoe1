import React from 'react'
import { useSelector } from 'react-redux'
import { cartSelectors } from 'features/cart/model/cartSlice'
import s from './Card.module.css'
import emptyCartImage from 'common/assets/images/emptyCart.webp'
import { InformationPage } from 'common/components/InformationPage/InformationPage'
import { CartTable } from 'features/cart/ui/Cart/CartTable/CartTable'
import { CartForm } from 'features/cart/ui/Cart/CartForm/CartForm'
import Card from '@mui/material/Card'

export const Cart = () => {
    const cartItems = useSelector(cartSelectors.selectCartItems)
    return (
        <>
            {cartItems.length === 0 ? (
                <InformationPage
                    title="корзина пуста"
                    description="Сделайте заказ и он отобразится в корзине"
                    image={emptyCartImage}
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
