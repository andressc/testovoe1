import { Meta, StoryObj } from '@storybook/react'
import { TopBar } from 'features/topBar/TopBar'

const meta: Meta<typeof TopBar> = {
    title: 'TopBar/TopBar',
    component: TopBar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof TopBar>

export const StandardTopBar: Story = {}
