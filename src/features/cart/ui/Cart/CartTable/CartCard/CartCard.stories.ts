import { Meta, StoryObj } from '@storybook/react'
import { CartCard } from 'features/cart/ui/Cart/CartTable/CartCard/CartCard'

const meta: Meta<typeof CartCard> = {
    title: 'Cart/CartCard',
    component: CartCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        addCartItemHandler: { action: 'click on remove task' },
        removeCartItemHandler: { action: 'click on change status task' },
    },
}

export default meta
type Story = StoryObj<typeof CartCard>

export const StandardCartCard: Story = {
    args: {
        cartItem: {
            id: '1',
            name: 'Apple Смартфон iPhone 15 Pro NFC',
            description: 'Apple Смартфон iPhone 15 Pro NFC Поддержка русского языка+Двойной Nano Sim 6.1',
            fullDescription: 'Apple Смартфон iPhone 15 Pro NFC Поддержка русского языка+Двойной Nano Sim 6.1',
            cost: 56000,
            image: 'https://ir.ozone.ru/s3/multimedia-8/wc1000/6768648836.jpg',
            quantity: 5,
        },
    },
}
