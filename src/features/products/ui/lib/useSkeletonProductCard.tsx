import { Product } from 'features/products/api/productsApi'
import Skeleton from '@mui/material/Skeleton'
import CardMedia from '@mui/material/CardMedia'
import { Button } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import React from 'react'

export const useSkeletonProductCard = (
    product: Product,
    addCartItemHandler: (product: Product) => void,
    isLoading: boolean
) => {
    const cost = !isLoading ? `${product.cost} ₽` : <Skeleton width="50%" height={60} />

    const name = !isLoading ? product.name : <Skeleton />

    const description = !isLoading ? (
        product.description
    ) : (
        <>
            <Skeleton />
            <Skeleton />
            <Skeleton width="60%" />
        </>
    )

    const image = !isLoading ? (
        <CardMedia component="img" height="200" image={product.image} alt={product.name} />
    ) : (
        <Skeleton variant="rectangular" width={345} height={200} />
    )

    const button = !isLoading ? (
        <>
            <Button
                variant="contained"
                size="medium"
                color="primary"
                startIcon={<ShoppingCartIcon />}
                onClick={() => addCartItemHandler(product)}
            >
                Купить
            </Button>
        </>
    ) : (
        <Skeleton variant="rectangular" width={110} height={40} />
    )

    return {
        cost,
        name,
        description,
        image,
        button,
    }
}
