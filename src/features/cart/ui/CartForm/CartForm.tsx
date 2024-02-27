import React from 'react'
import FormGroup from '@mui/material/FormGroup'
import TextField from '@mui/material/TextField'
import FormLabel from '@mui/material/FormLabel'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'
import s from '../Cart/Card.module.css'
import { useFormik } from 'formik'
import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { cartActions } from 'features/cart/model/cartSlice'

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
        <form onSubmit={formik.handleSubmit}>
            <FormControl>
                <FormLabel>
                    <p>Введите данные для заказа</p>
                </FormLabel>
                <FormGroup
                    className={`${s.item} ${s.small}`}
                    style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
                >
                    <TextField
                        id="firstname"
                        label="firstname"
                        variant="filled"
                        error={!!formik.errors.firstname}
                        helperText={formik.errors.firstname}
                        {...formik.getFieldProps('firstname')}
                    />
                    <TextField
                        id="lastname"
                        label="lastname"
                        variant="filled"
                        error={!!formik.errors.lastname}
                        helperText={formik.errors.lastname}
                        {...formik.getFieldProps('lastname')}
                    />
                    <TextField
                        id="address"
                        label="address"
                        variant="filled"
                        error={!!formik.errors.address}
                        helperText={formik.errors.address}
                        {...formik.getFieldProps('address')}
                    />
                    <TextField
                        id="phone"
                        label="phone"
                        variant="filled"
                        error={!!formik.errors.phone}
                        helperText={formik.errors.phone}
                        {...formik.getFieldProps('phone')}
                    />
                    <Button variant="contained" size="medium" color="primary" type={'submit'}>
                        Оформить заказ
                    </Button>
                </FormGroup>
            </FormControl>
        </form>
    )
}
