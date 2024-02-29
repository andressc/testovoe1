import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode
}
export const CurrencyText = ({ children }: Props) => {
    return <>{children} ₽</>
}
