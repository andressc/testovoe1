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
import * as Yup from 'yup'
import { minMaxRequiredStringField, PhoneNumberField } from 'common/utils/validations'
import { useNavigate } from 'react-router-dom'

const CartFormSchema = Yup.object().shape({
    firstName: minMaxRequiredStringField(2, 20),
    lastName: minMaxRequiredStringField(2, 20),
    address: minMaxRequiredStringField(10, 50),
    phone: PhoneNumberField(),
})

export const CartForm = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const formik = useFormik({
        validationSchema: CartFormSchema,
        initialValues: {
            firstName: '',
            lastName: '',
            address: '',
            phone: '',
        },
        onSubmit: (values) => {
            dispatch(cartActions.purchase({ formData: values }))
            navigate('/purchase-successful')
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
                        id="firstName"
                        label="Имя"
                        error={!!formik.errors.firstName && formik.touched.firstName}
                        helperText={formik.touched.firstName && formik.errors.firstName}
                        {...formik.getFieldProps('firstName')}
                    />
                    <TextField
                        id="lastName"
                        label="Фамилия"
                        error={!!formik.errors.lastName && formik.touched.lastName}
                        helperText={formik.touched.lastName && formik.errors.lastName}
                        {...formik.getFieldProps('lastName')}
                    />
                    <TextField
                        id="address"
                        label="Адрес"
                        error={!!formik.errors.address && formik.touched.address}
                        helperText={formik.touched.address && formik.errors.address}
                        {...formik.getFieldProps('address')}
                    />
                    <TextField
                        id="phone"
                        label="Телефон"
                        error={!!formik.errors.phone && formik.touched.phone}
                        helperText={formik.touched.phone && formik.errors.phone}
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
