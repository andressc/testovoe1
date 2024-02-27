import React, { useEffect } from 'react'
import { productActions, productSelectors } from 'features/products/model/productSlice'
import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { NotFound } from 'common/components/NotFound/NotFound'
import { ProductPage } from 'features/products/ui/Product/ProductPage/ProductPage'

const Product = () => {
    const dispatch = useAppDispatch()

    const product = useSelector(productSelectors.selectProduct)
    const productIsLoading = useSelector(productSelectors.selectProductIsLoading)

    const { id } = useParams<{ id: string }>()

    useEffect(() => {
        if (id) {
            dispatch(productActions.getProductById({ id }))
        }
    }, [id, dispatch])

    if (!product && !productIsLoading) {
        return <NotFound />
    }

    const u = !(product && !productIsLoading)

    console.log(u)

    return product && <ProductPage product={product} isLoading={!(product && !productIsLoading)} />
}

export default Product
