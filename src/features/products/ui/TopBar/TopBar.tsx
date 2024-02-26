import React from 'react'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import AppBar from '@mui/material/AppBar'
import { useSelector } from 'react-redux'
import { cartSelectors } from 'features/cart/model/cartSlice'

export const TopBar = () => {
    const cartAmount = useSelector(cartSelectors.selectCartAmount)

    return (
        <AppBar position="fixed">
            <Toolbar sx={{ position: 'relative' }}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                     Apple Shop
                </Typography>
                <Button
                    startIcon={<ShoppingCartIcon />}
                    endIcon={cartAmount !== 0 ? `${cartAmount} ₽` : ''}
                    color="inherit"
                >
                    Корзина
                </Button>
            </Toolbar>
        </AppBar>
    )
}
