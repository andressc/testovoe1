import React, { useEffect } from 'react'
import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { productActions, productSelectors } from 'features/products/model/productSlice'
import { useSelector } from 'react-redux'
import { ProductCard } from 'features/products/ui/ProductCard/ProductCard'
import s from './Products.module.css'
import { cartActions } from 'features/cart/model/cartSlice'
import { Product } from 'features/products/api/productsApi'

export const Products = () => {
    const dispatch = useAppDispatch()
    let products = useSelector(productSelectors.selectProducts)
    let isLoading = useSelector(productSelectors.selectIsLoading)

    useEffect(() => {
        dispatch(productActions.fetchProducts())
    }, [])

    if (products.length === 0) {
        products = Array(8).fill(0)
    }

    const addCartItemHandler = (product: Product) => {
        dispatch(cartActions.addCartItem({ product }))
    }

    const productList = products.map((p, i) => (
        <ProductCard product={p} isLoading={isLoading} addCartItemHandler={addCartItemHandler} key={i} />
    ))

    return <div className={s.products}>{productList}</div>
}
