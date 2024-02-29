import React from 'react'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import AppBar from '@mui/material/AppBar'
import { useSelector } from 'react-redux'
import { cartSelectors } from 'features/cart/model/cartSlice'
import { Link } from 'react-router-dom'
import { LinkTypography } from 'common/components/LinkTypography/LinkTypography'

export const TopBar = () => {
    const cartAmount = useSelector(cartSelectors.selectCartAmount)

    return (
        <AppBar position="fixed">
            <Toolbar sx={{ position: 'relative' }}>
                <LinkTypography to="/"> Apple Shop</LinkTypography>
                <Button
                    startIcon={<ShoppingCartIcon />}
                    endIcon={cartAmount !== 0 ? `${cartAmount} ₽` : ''}
                    color="inherit"
                    component={Link}
                    to="/cart"
                >
                    Корзина
                </Button>
            </Toolbar>
        </AppBar>
    )
}
