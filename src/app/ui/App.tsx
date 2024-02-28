import React, { useEffect } from 'react'
import { Products } from 'features/products/ui/Products/Products'
import { TopBar } from 'features/topBar/TopBar'
import { Route, Routes } from 'react-router-dom'
import { Cart } from 'features/cart/ui/Cart/Cart'
import { Container } from '@mui/material'
import s from 'app/ui/App.module.css'
import { productActions } from 'features/products/model/productSlice'
import { useAppDispatch } from 'common/hooks/useAppDispatch'
import Product from 'features/products/ui/Product/Product'
import { NotFound } from 'common/components/NotFound/NotFound'
import { EmptyPage } from 'common/components/EmptyPage/EmptyPage'
import purchaseSuccessfulImage from '../../common/assets/images/purchaseSuccessful.webp'

function App() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(productActions.fetchProducts())
    }, [dispatch])

    return (
        <>
            <Container maxWidth="xl" className={s.container}>
                <TopBar />
                <Routes>
                    <Route path="/" element={<Products />} />
                    <Route path="/product/:id" element={<Product />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route
                        path="/purchase-successful"
                        element={
                            <EmptyPage
                                title="Заказ создан"
                                description="Мы свяжемся с Вами в ближайшее время"
                                image={purchaseSuccessfulImage}
                            />
                        }
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Container>
        </>
    )
}

export default App
