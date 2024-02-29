import { Meta, StoryObj } from '@storybook/react'
import { Product } from 'features/products/ui/Product/Product'

const meta: Meta<typeof Product> = {
    title: 'Product/Product',
    component: Product,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Product>

export const StandardProduct: Story = {}
