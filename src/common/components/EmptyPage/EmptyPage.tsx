import React from 'react'
import Typography from '@mui/material/Typography'
import s from 'common/components/EmptyPage/EmptyPage.module.css'

type Props = {
    title: string
    description: string
    image: string
}

export const EmptyPage = ({ title, description, image }: Props) => {
    return (
        <div className={s.notFoundContainer}>
            <div className={s.notFoundTextContainer}>
                <Typography variant="h1">{title}</Typography>
                <Typography variant="h4">{description}</Typography>
            </div>
            <img src={image} alt="" />
        </div>
    )
}
