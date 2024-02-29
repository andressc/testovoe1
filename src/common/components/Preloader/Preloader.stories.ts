import { Meta, StoryObj } from '@storybook/react'
import { Preloader } from 'common/components/Preloader/Preloader'

const meta: Meta<typeof Preloader> = {
    title: 'Hover/Preloader',
    component: Preloader,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Preloader>

export const StandardPreloader: Story = {
    args: {
        to: '/',
        children: ' Apple Shop',
    },
}
