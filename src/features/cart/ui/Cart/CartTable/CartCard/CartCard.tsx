import React from 'react'
import TableCell from '@mui/material/TableCell'
import Avatar from '@mui/material/Avatar'
import TableRow from '@mui/material/TableRow'
import IconButton from '@mui/material/IconButton'
import AddCircleIcon from '@mui/icons-material/Add'
import RemoveCircleIcon from '@mui/icons-material/Remove'
import { Link } from 'react-router-dom'
import { FixedTableCell } from 'common/components/FixedTableCell/FixedTableCell'
import { ProductEntity } from 'features/products/types/productTypes'
import { CartItem } from 'features/cart/types/cartTypes'
import { CurrencyText } from 'common/components/CurrencyText/CurrencyText'

type Props = {
    cartItem: CartItem
    addCartItemHandler: (product: ProductEntity) => void
    removeCartItemHandler: (product: ProductEntity) => void
}
export const CartCard = ({ cartItem, addCartItemHandler, removeCartItemHandler }: Props) => {
    const { image, name, cost, quantity } = cartItem

    return (
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell align="right">
                <Avatar
                    alt="Remy Sharp"
                    src={image}
                    sx={{ width: 100, height: 100 }}
                    variant={'square'}
                    component={Link}
                    to={`/product/${cartItem.id}`}
                />
            </TableCell>
            <TableCell>
                {name}
                <br />
                <CurrencyText>{cost}</CurrencyText>
            </TableCell>
            <FixedTableCell>
                <IconButton aria-label="delete" size="small" onClick={() => removeCartItemHandler(cartItem)}>
                    <RemoveCircleIcon fontSize="small" />
                </IconButton>
                {quantity}
                <IconButton aria-label="delete" size="medium" onClick={() => addCartItemHandler(cartItem)}>
                    <AddCircleIcon fontSize="small" />
                </IconButton>
            </FixedTableCell>
        </TableRow>
    )
}
