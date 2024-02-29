import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import s from 'common/components/InformationPage/InformationPage.module.css'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

type Props = {
    title: string
    description: string
    image: string
}

export const InformationPage = ({ title, description, image }: Props) => {
    const [imageLoaded, setImageLoaded] = useState(false)

    useEffect(() => {
        const img = new Image()
        img.onload = () => {
            setImageLoaded(true)
        }
        img.src = image
    }, [image])

    return (
        <Card className={s.emptyPageContainer} sx={{ p: 10 }}>
            <div className={s.emptyPageTextContainer}>
                <Typography variant="h1">{title}</Typography>
                <Typography variant="h4">{description}</Typography>
                <Button size="large" variant={'contained'} component={Link} to={'/'}>
                    Продолжить покупки
                </Button>
            </div>
            {imageLoaded ? (
                <img src={image} alt="" />
            ) : (
                <div
                    style={{
                        width: 400,
                        height: 400,
                    }}
                ></div>
            )}
        </Card>
    )
}
