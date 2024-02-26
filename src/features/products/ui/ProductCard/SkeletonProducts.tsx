import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { CardActionArea, CardActions } from '@mui/material'
import Skeleton from '@mui/material/Skeleton'

type Props = {
    count: number
}
export const SkeletonProducts = ({ count }: Props) => {
    const skeleton = Array(count)
        .fill(0)
        .map((v, i) => (
            <Card
                sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                key={i}
            >
                <CardActionArea>
                    <Skeleton variant="rectangular" width={345} height={200} animation="wave" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            <Skeleton width="60%" />
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <Skeleton />
                            <Skeleton width="60%" />
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
                    <Skeleton variant="rectangular" width={110} height={40} />
                </CardActions>
            </Card>
        ))

    return <>{skeleton}</>
}
