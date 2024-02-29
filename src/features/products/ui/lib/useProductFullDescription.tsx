import CheckIcon from '@mui/icons-material/Check'
import SavingsIcon from '@mui/icons-material/Savings'
import PaymentIcon from '@mui/icons-material/Payment'
import CreditScoreIcon from '@mui/icons-material/CreditScore'
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining'
import { ElementType } from 'react'
import { SvgIconProps } from '@mui/material'

export type AccordionItem = {
    icon: ElementType<SvgIconProps>
    text: string
}

export type ProductAccordionData = {
    title: string
    data: AccordionItem[]
}

export const useProductFullDescription = () => {
    const guarantee = {
        title: 'Гарантия',
        data: [
            {
                icon: CheckIcon,
                text: 'Товарный и кассовый чеки',
            },
            {
                icon: CheckIcon,
                text: 'Чек банковского терминала',
            },
            {
                icon: CheckIcon,
                text: 'Сертификат качества',
            },
            {
                icon: CheckIcon,
                text: 'Сертификат GIA или ПЕ',
            },
            {
                icon: CheckIcon,
                text: 'Фирменная упаковка',
            },
        ],
    }

    const payment = {
        title: 'Оплата',
        data: [
            {
                icon: SavingsIcon,
                text: 'Оплата при получении',
            },
            {
                icon: PaymentIcon,
                text: 'Картой онлайн',
            },
            {
                icon: CreditScoreIcon,
                text: 'СБП',
            },
        ],
    }

    const delivery = {
        title: 'Доставка',
        data: [
            {
                icon: AirportShuttleIcon,
                text: 'Отправка почтой России по всей России',
            },
            {
                icon: LocalShippingIcon,
                text: 'Курьерской службой СДЭК',
            },
            {
                icon: DeliveryDiningIcon,
                text: 'Яндекс курьером по Москве',
            },
        ],
    }

    return {
        guarantee,
        payment,
        delivery,
    }
}
