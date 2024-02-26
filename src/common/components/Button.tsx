import React from 'react'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'

export const ButtonComponent = () => {
    return (
        <Button variant="outlined" startIcon={<DeleteIcon />}>
            Delete
        </Button>
    )
}
