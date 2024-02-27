import React from 'react'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import Card from '@mui/material/Card'
import { Product } from 'features/products/api/productsApi'
import { useSkeletonProductCard } from 'features/products/ui/lib/useSkeletonProductCard'

type Props = {
    product: Product
    isLoading: boolean
}
export const ProductPage = ({ product, isLoading }: Props) => {
    const { image, cost, name, description, button } = useSkeletonProductCard(product, isLoading, true)

    return (
        <Card sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '50px' }}>
            {image}
            <Box style={{ maxWidth: 700 }}>
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
            </Box>
        </Card>
    )
}
