import * as Yup from 'yup'
import { phoneRegExp } from 'common/utils/regularExpressions'

const REQUIRED_MESSAGE = 'Поле обязательно для заполнения'
const PHONE_NUMBER_MESSAGE = 'Телефонный номер должен состоять из 11 цифр 79503884918'

export const minMaxRequiredStringField = (min: number, max: number) =>
    Yup.string()
        .min(min, `введите от ${min} до ${max} символов`)
        .max(max, `введите от ${min} до ${max} символов`)
        .required(REQUIRED_MESSAGE)

export const PhoneNumberField = () => Yup.string().matches(phoneRegExp, PHONE_NUMBER_MESSAGE).required(REQUIRED_MESSAGE)
