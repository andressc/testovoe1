import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { CardActionArea, CardActions } from '@mui/material'
import { useSkeletonProductCard } from 'features/products/ui/lib/useSkeletonProductCard'
import { Link } from 'react-router-dom'
import { ProductEntity } from 'features/products/types/productTypes'

type Props = {
    product: ProductEntity
    isLoading?: boolean
}
export const ProductCard = ({ product, isLoading = false }: Props) => {
    const { image, cost, name, description, button } = useSkeletonProductCard(product, isLoading)

    return (
        <Card sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <CardActionArea component={Link} to={`/product/${product.id}`}>
                {image}
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                        {cost}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions
                sx={{
                    alignSelf: 'stretch',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-end',
                    p: 2,
                }}
            >
                {button}
            </CardActions>
        </Card>
    )
}
