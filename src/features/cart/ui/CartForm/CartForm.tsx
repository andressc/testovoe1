import React from 'react'
import FormGroup from '@mui/material/FormGroup'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'
import s from '../Cart/Card.module.css'

export const CartForm = () => {
    return (
        <FormGroup className={`${s.item} ${s.small}`}>
            <TextField id="standard-basic" label="Standard" variant="standard" />
            <TextField id="standard-basic" label="Standard" variant="standard" />
            <TextField id="standard-basic" label="Standard" variant="standard" />
            <TextField id="standard-basic" label="Standard" variant="standard" />
            <Button variant="contained" size="medium" color="primary" onClick={() => alert('wefwefwf')}>
                Оформить заказ
            </Button>
        </FormGroup>
    )
}
