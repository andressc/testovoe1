import Skeleton from '@mui/material/Skeleton'
import CardMedia from '@mui/material/CardMedia'
import { Button } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { cartActions } from 'features/cart/model/cartSlice'
import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { ProductEntity } from 'features/products/types/productTypes'

export const useSkeletonProductCard = (product: ProductEntity, isLoading: boolean) => {
    const dispatch = useAppDispatch()
    const addCartItemHandler = () => {
        dispatch(cartActions.addCartItem({ product }))
    }

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
                onClick={() => addCartItemHandler()}
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
