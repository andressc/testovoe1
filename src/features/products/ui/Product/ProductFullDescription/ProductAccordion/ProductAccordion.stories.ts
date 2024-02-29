import { Meta, StoryObj } from '@storybook/react'
import { ProductAccordion } from 'features/products/ui/Product/ProductFullDescription/ProductAccordion/ProductAccordion'
import SavingsIcon from '@mui/icons-material/Savings'
import PaymentIcon from '@mui/icons-material/Payment'
import CreditScoreIcon from '@mui/icons-material/CreditScore'

const meta: Meta<typeof ProductAccordion> = {
    title: 'Product/ProductAccordion',
    component: ProductAccordion,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ProductAccordion>

export const StandardProductAccordion: Story = {
    args: {
        productAccordion: {
            title: 'Оплата',
            data: [
                {
                    icon: SavingsIcon,
                    text: 'Оплата при получении',
                },
                {
                    icon: PaymentIcon,
                    text: 'Картой онлайн',
                },
                {
                    icon: CreditScoreIcon,
                    text: 'СБП',
                },
            ],
        },
    },
}
