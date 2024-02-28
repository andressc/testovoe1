import React from 'react'
import { productSelectors } from 'features/products/model/productSlice'
import { useSelector } from 'react-redux'
import { ProductCard } from 'features/products/ui/Products/ProductCard/ProductCard'
import s from './Products.module.css'

export const Products = () => {
    let products = useSelector(productSelectors.selectProducts)
    let productsIsLoading = useSelector(productSelectors.selectProductsIsLoading)
    const skeletonSize = useSelector(productSelectors.selectSkeletonSize)

    if (productsIsLoading) {
        products = Array(skeletonSize).fill(0)
    }

    const productList = products.map((p, i) => <ProductCard product={p} isLoading={productsIsLoading} key={i} />)

    return <div className={s.products}>{productList}</div>
}
