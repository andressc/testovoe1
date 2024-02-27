import { Product } from 'features/products/api/productsApi'
import Skeleton from '@mui/material/Skeleton'
import CardMedia from '@mui/material/CardMedia'
import { Button } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { cartActions } from 'features/cart/model/cartSlice'
import { useAppDispatch } from 'common/hooks/useAppDispatch'

export const useSkeletonProductCard = (product: Product, isLoading: boolean, isImg: boolean = false) => {
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
        !isImg ? (
            <CardMedia component="img" height="200" image={product.image} alt={product.name} />
        ) : (
            <img src={product.image} alt={product.name} style={{ height: 200 }} />
        )
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
