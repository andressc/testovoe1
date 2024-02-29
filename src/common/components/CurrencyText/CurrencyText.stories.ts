import { Meta, StoryObj } from '@storybook/react'
import { CurrencyText } from 'common/components/CurrencyText/CurrencyText'

const meta: Meta<typeof CurrencyText> = {
    title: 'Components/CurrencyText',
    component: CurrencyText,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof CurrencyText>

export const StandardCurrencyText: Story = {
    args: {
        children: '13000',
    },
}
