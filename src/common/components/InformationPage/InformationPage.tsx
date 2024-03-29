import React from 'react'
import Typography from '@mui/material/Typography'
import s from 'common/components/InformationPage/InformationPage.module.css'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import { Preloader } from 'common/components/Preloader/Preloader'
import { useImageLoaded } from 'common/hooks/useImageLoaded'

type Props = {
    title: string
    description: string
    image: string
}

export const InformationPage = ({ title, description, image }: Props) => {
    const { imageLoaded } = useImageLoaded(image)

    if (!imageLoaded) {
        return <Preloader />
    }

    return (
        <Card className={s.emptyPageContainer} sx={{ p: 10 }}>
            <div className={s.emptyPageTextContainer}>
                <Typography variant="h1">{title}</Typography>
                <Typography variant="h4">{description}</Typography>
                <Button size="large" variant={'contained'} component={Link} to={'/'}>
                    Продолжить покупки
                </Button>
            </div>
            <img src={image} alt={title} />
        </Card>
    )
}
