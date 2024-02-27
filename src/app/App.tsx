import React, { useEffect } from 'react'
import { Products } from 'features/products/ui/Products/Products'
import { TopBar } from 'features/TopBar/TopBar'
import { Route, Routes } from 'react-router-dom'
import { Cart } from 'features/cart/ui/Cart/Cart'
import { Container } from '@mui/material'
import s from './App.module.css'
import { productActions } from 'features/products/model/productSlice'
import { useAppDispatch } from 'common/hooks/useAppDispatch'
import Product from 'features/products/ui/Product/Product'
import { NotFound } from 'common/components/NotFound/NotFound'

function App() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(productActions.fetchProducts())
    }, [dispatch])

    return (
        <>
            <TopBar />
            <Container maxWidth="xl" className={s.container}>
                <Routes>
                    <Route path="/" element={<Products />} />
                    <Route path="/product/:id" element={<Product />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Container>
        </>
    )
}

export default App
