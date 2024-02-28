import { Meta, StoryObj } from '@storybook/react'
import { InformationPage } from 'common/components/InformationPage/InformationPage'
import notFoundImage from 'common/assets/images/notFound.webp'
import emptyCartImage from 'common/assets/images/emptyCart.webp'
import purchaseSuccessfulImage from 'common/assets/images/purchaseSuccessful.webp'

const meta: Meta<typeof InformationPage> = {
    title: 'Components/InformationPage',
    component: InformationPage,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof InformationPage>

export const NotFound: Story = {
    args: {
        title: 'не найдено',
        description: 'Данной страницы нет у нас на сайте',
        image: notFoundImage,
    },
}

export const EmptyCart: Story = {
    args: {
        title: 'корзина пуста',
        description: 'Сделайте заказ и он отобразится в корзине',
        image: emptyCartImage,
    },
}

export const PurchaseSuccessful: Story = {
    args: {
        title: 'заказ создан',
        description: 'Мы свяжемся с Вами в ближайшее время',
        image: purchaseSuccessfulImage,
    },
}
