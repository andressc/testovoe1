import TableCell from '@mui/material/TableCell'
import { styled, Theme } from '@mui/material'

export const FixedTableCell = styled(TableCell)(({ theme }: { theme: Theme }) => ({
    whiteSpace: 'nowrap',
}))
