import { Meta, StoryObj } from '@storybook/react'
import { ProductFullDescription } from 'features/products/ui/Product/ProductFullDescription/ProductFullDescription'

const meta: Meta<typeof ProductFullDescription> = {
    title: 'Product/ProductFullDescription',
    component: ProductFullDescription,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ProductFullDescription>

export const StandardProductFullDescription: Story = {
    args: {
        productFullDescription:
            'Максимум удовольствия от музыки Sony WF-1000XM5 - это не просто наушники, это музыкальное произведение искусства. Снабженные современными драйверами и поддержкой объёмного звука 360 Reality Audio, они погрузят вас в мир богатых низких частот, чистых средних и ясных высоких тональностей.',
    },
}
