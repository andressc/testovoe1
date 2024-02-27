import React from 'react'
import FormGroup from '@mui/material/FormGroup'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'
import s from 'features/cart/ui/Cart/Card.module.css'
import { useFormik } from 'formik'
import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { cartActions } from 'features/cart/model/cartSlice'
import Box from '@mui/material/Box'

export const CartForm = () => {
    const dispatch = useAppDispatch()
    const formik = useFormik({
        validate: (values) => {
            if (!values.firstname) return { firstname: 'Введите Ваше имя' }
            if (!values.lastname) return { lastname: 'Введите Вашу Фамилию' }
            if (!values.address) return { address: 'Введите Ваш адрес' }
            if (!values.phone) return { phone: 'Введите Ваш телефон' }
        },
        initialValues: {
            firstname: '',
            lastname: '',
            address: '',
            phone: '',
        },
        onSubmit: (values) => {
            dispatch(cartActions.purchase({ formData: values }))
        },
    })

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '40ch' },
                '& .MuiButton-root': { m: 1, width: '41ch', marginBottom: 10 },
            }}
            autoComplete="off"
            onSubmit={formik.handleSubmit}
        >
            <FormControl>
                <FormGroup className={`${s.item} ${s.small}`}>
                    <TextField
                        id="firstname"
                        label="Введите Ваше имя"
                        error={!!formik.errors.firstname}
                        helperText={formik.errors.firstname}
                        {...formik.getFieldProps('firstname')}
                    />
                    <TextField
                        id="lastname"
                        label="Введите Вашу Фамилию"
                        error={!!formik.errors.lastname}
                        helperText={formik.errors.lastname}
                        {...formik.getFieldProps('lastname')}
                    />
                    <TextField
                        id="address"
                        label="Введите Ваш адрес"
                        error={!!formik.errors.address}
                        helperText={formik.errors.address}
                        {...formik.getFieldProps('address')}
                    />
                    <TextField
                        id="phone"
                        label="Введите Ваш телефон"
                        error={!!formik.errors.phone}
                        helperText={formik.errors.phone}
                        {...formik.getFieldProps('phone')}
                    />
                    <Button variant="contained" size="medium" color="primary" type={'submit'}>
                        Оформить заказ
                    </Button>
                </FormGroup>
            </FormControl>
        </Box>
    )
}
