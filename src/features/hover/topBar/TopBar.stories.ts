import { Meta, StoryObj } from '@storybook/react'
import { TopBar } from 'features/hover/topBar/TopBar'

const meta: Meta<typeof TopBar> = {
    title: 'Hover/TopBar',
    component: TopBar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof TopBar>

export const StandardTopBar: Story = {}
