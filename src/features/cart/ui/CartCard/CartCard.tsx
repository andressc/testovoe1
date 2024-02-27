import React from 'react'
import TableCell from '@mui/material/TableCell'
import Avatar from '@mui/material/Avatar'
import TableRow from '@mui/material/TableRow'
import { CartItem } from 'features/cart/model/cartSlice'
import IconButton from '@mui/material/IconButton'
import AddCircleIcon from '@mui/icons-material/Add'
import RemoveCircleIcon from '@mui/icons-material/Remove'
import { Product } from 'features/products/api/productsApi'

type Props = {
    cartItem: CartItem
    addCartItemHandler: (product: Product) => void
    removeCartItemHandler: (product: Product) => void
}
export const CartCard = ({ cartItem, addCartItemHandler, removeCartItemHandler }: Props) => {
    const { image, name, cost, quantity } = cartItem

    return (
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell align="right">
                <Avatar alt="Remy Sharp" src={image} sx={{ width: 100, height: 100 }} variant={'square'} />
            </TableCell>
            <TableCell>
                {name}
                <br />
                {cost} ₽
            </TableCell>
            <TableCell>
                <IconButton aria-label="delete" size="small" onClick={() => removeCartItemHandler(cartItem)}>
                    <RemoveCircleIcon fontSize="small" />
                </IconButton>
                {quantity}
                <IconButton aria-label="delete" size="medium" onClick={() => addCartItemHandler(cartItem)}>
                    <AddCircleIcon fontSize="small" />
                </IconButton>
            </TableCell>
        </TableRow>
    )
}
