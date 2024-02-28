import { Meta, StoryObj } from '@storybook/react'
import { LinkTypography } from 'common/components/LinkTypography/LinkTypography'

const meta: Meta<typeof LinkTypography> = {
    title: 'Components/LinkTypography',
    component: LinkTypography,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LinkTypography>

export const StandardLinkTypography: Story = {
    args: {
        to: '/',
        children: ' Apple Shop',
    },
}
