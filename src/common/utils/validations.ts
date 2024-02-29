import * as Yup from 'yup'
import { phoneRegExp } from 'common/utils/regularExpressions'

const REQUIRED_MESSAGE = 'Поле обязательно для заполнения'
const PHONE_NUMBER_MESSAGE = 'Телефонный номер должен состоять из 11 цифр 79503884918'

const minMaxMessage = (min: number, max: number) => {
    return `введите от ${min} до ${max} символов`
}

export const minMaxRequiredStringField = (min: number, max: number) =>
    Yup.string().min(min, minMaxMessage(min, max)).max(max, minMaxMessage(min, max)).required(REQUIRED_MESSAGE)

export const PhoneNumberField = () => Yup.string().matches(phoneRegExp, PHONE_NUMBER_MESSAGE).required(REQUIRED_MESSAGE)
