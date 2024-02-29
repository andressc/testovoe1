import React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Typography from '@mui/material/Typography'
import AccordionDetails from '@mui/material/AccordionDetails'
import CardContent from '@mui/material/CardContent'
import { ProductAccordion } from 'features/products/ui/Product/ProductFullDescription/ProductAccordion/ProductAccordion'
import { useProductFullDescription } from 'features/products/ui/lib/useProductFullDescription'

type Props = {
    productFullDescription: string
}

export const ProductFullDescription = ({ productFullDescription }: Props) => {
    const { guarantee, payment, delivery } = useProductFullDescription()

    return (
        <CardContent>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
                    <Typography variant="subtitle1">Описание</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="subtitle2" color="text.secondary">
                        {productFullDescription}
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <ProductAccordion productAccordion={guarantee} />
            <ProductAccordion productAccordion={payment} />
            <ProductAccordion productAccordion={delivery} />
        </CardContent>
    )
}
