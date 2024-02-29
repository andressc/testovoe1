import React, { useEffect } from 'react'
import { productActions, productSelectors } from 'features/products/model/productSlice'
import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { NotFound } from 'common/components/NotFound/NotFound'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import Card from '@mui/material/Card'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Button from '@mui/material/Button'
import { cartActions } from 'features/cart/model/cartSlice'
import CircularProgress from '@mui/material/CircularProgress'
import { ProductFullDescription } from 'features/products/ui/Product/ProductFullDescription/ProductFullDescription'

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

    const addCartItemHandler = () => {
        if (product) {
            dispatch(cartActions.addCartItem({ product }))
        }
    }

    if (!product && !productIsLoading) {
        return <NotFound />
    }

    return product && !productIsLoading ? (
        <Card sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '50px' }}>
            <img src={product.image} alt={product.name} style={{ height: 350, margin: 50 }} />
            <Box style={{ maxWidth: 700 }}>
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                        {product.cost} ₽
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        {product.description}
                    </Typography>
                </CardContent>
                <ProductFullDescription productFullDescription={product.fullDescription} />
                <CardActions
                    sx={{
                        alignSelf: 'stretch',
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-end',
                        p: 2,
                    }}
                >
                    <Button
                        variant="contained"
                        size="medium"
                        color="primary"
                        startIcon={<ShoppingCartIcon />}
                        onClick={() => addCartItemHandler()}
                    >
                        Купить
                    </Button>
                </CardActions>
            </Box>
        </Card>
    ) : (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <CircularProgress />
        </Box>
    )
}

export default Product
