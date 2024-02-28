import { Meta, StoryObj } from '@storybook/react'
import { ProductCard } from 'features/products/ui/Products/ProductCard/ProductCard'

const meta: Meta<typeof ProductCard> = {
    title: 'Product/ProductCard',
    component: ProductCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ProductCard>

export const StandardProductCard: Story = {
    args: {
        product: {
            id: '1',
            name: 'Apple MacBook Air 13.6 2022 M2-1 Ноутбук 13.6',
            description:
                'MacBook Air, кабель для зарядки, зарядная головка, адаптер для зарядного устройства, русская пленка для клавиатуры',
            fullDescription: 'Максимум удовольствия от музыки Sony WF-1000XM5',
            cost: 40000,
            image: 'https://ir.ozone.ru/s3/multimedia-6/wc1000/6894974886.jpg',
        },
        isLoading: false,
    },
}

export const IsLoadingProductCard: Story = {
    args: {
        product: {
            id: '1',
            name: 'Apple MacBook Air 13.6 2022 M2-1 Ноутбук 13.6',
            description:
                'MacBook Air, кабель для зарядки, зарядная головка, адаптер для зарядного устройства, русская пленка для клавиатуры',
            fullDescription: 'Максимум удовольствия от музыки Sony WF-1000XM5',
            cost: 40000,
            image: 'https://ir.ozone.ru/s3/multimedia-6/wc1000/6894974886.jpg',
        },
        isLoading: true,
    },
}
