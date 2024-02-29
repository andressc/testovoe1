import { Meta, StoryObj } from '@storybook/react'
import { TopBar } from 'features/hover/topBar/TopBar'
import { Cart } from 'features/cart/ui/Cart/Cart'

const meta: Meta<typeof Cart> = {
    title: 'Cart/Cart',
    component: Cart,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof TopBar>

export const StandardCart: Story = {}
