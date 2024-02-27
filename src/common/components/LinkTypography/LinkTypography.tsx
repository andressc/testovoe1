import React, { ReactNode } from 'react'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'

interface Props {
    to: string
    children: ReactNode
}

export const LinkTypography = ({ to, children }: Props) => {
    return (
        <Typography variant="h6" component="div" color="inherit" sx={{ flexGrow: 1 }}>
            <Link to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
                {children}
            </Link>
        </Typography>
    )
}
