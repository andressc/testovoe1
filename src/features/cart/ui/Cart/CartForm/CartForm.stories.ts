import { Meta, StoryObj } from '@storybook/react'
import { CartForm } from 'features/cart/ui/Cart/CartForm/CartForm'

const meta: Meta<typeof CartForm> = {
    title: 'Cart/CartForm',
    component: CartForm,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof CartForm>

export const StandardCartForm: Story = {}
