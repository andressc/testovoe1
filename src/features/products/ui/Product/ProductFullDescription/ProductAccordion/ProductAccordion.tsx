import React from 'react'
import AccordionSummary from '@mui/material/AccordionSummary'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Typography from '@mui/material/Typography'
import AccordionDetails from '@mui/material/AccordionDetails'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Accordion from '@mui/material/Accordion'
import { ProductAccordionData } from 'features/products/ui/lib/useProductFullDescription'

type Props = {
    productAccordion: ProductAccordionData
}
export const ProductAccordion = ({ productAccordion }: Props) => {
    const productAccordionList = productAccordion.data.map((d, i) => {
        const { icon: Icon, text } = d

        return (
            <ListItem key={i}>
                <ListItemIcon>
                    <Icon />
                </ListItemIcon>
                <ListItemText primary={text} />
            </ListItem>
        )
    })

    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
                <Typography variant="subtitle1">{productAccordion.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant="subtitle2" color="text.secondary">
                    <List>{productAccordionList}</List>
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
}
