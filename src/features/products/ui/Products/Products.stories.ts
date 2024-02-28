import { Meta, StoryObj } from '@storybook/react'
import { Products } from 'features/products/ui/Products/Products'

const meta: Meta<typeof Products> = {
    title: 'Product/Products',
    component: Products,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Products>

export const StandardProducts: Story = {}
