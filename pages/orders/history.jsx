import { Chip, Grid, Link, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import NextLink from 'next/link'
import React from 'react'
import { ShopLayout } from '../../components/layouts'

const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'fullname', headerName: 'Nombre Completo', width: 300 },
    {
        field: 'paid',
        headerName: 'Paid',
        description: 'Shows the status of the order',
        width: 200,
        renderCell: (params) => {
            return params.row.paid
                ? <Chip color='primary' label='Paid' variant='outlined' />
                : <Chip color='primary' label='Not Paid' variant='outlined' />
        }
    },
    {
        field: 'link',
        headerName: 'Order',
        description: 'Go to order',
        width: 200,
        sortable: false,
        renderCell: (params) => (
            <NextLink href={`/orders/${params.row.id}`} passHref>
                <Link underline='hover'>
                    {`View ${params.row.id}`}
                </Link>
            </NextLink>
        )

    }

]

const rows = [
    { id: 1, paid: true, fullname: 'Fernando Herrera', order: 1 },
    { id: 2, paid: false, fullname: 'Ignacio Cuyun', order: 2 },
    { id: 3, paid: true, fullname: 'Cielo Sagastume', order: 3 },
    { id: 5, paid: true, fullname: 'Adrian Martinez', order: 4 },
    { id: 4, paid: false, fullname: 'Isabel Cuyun', order: 5 },
    { id: 6, paid: false, fullname: 'Marcos Ballena', order: 6 },
]

const HistoryPage = () => {
    return (
        <ShopLayout title='History' pageDescription='Order History'>
            <Typography variant='h1' component='h1'>History</Typography>

            <Grid container sx={{ my: 5 }}>
                <Grid item sx={{ height: 650, width: '100%' }}>
                    <DataGrid id rows={rows} columns={columns} pageSize={10} rowsPerPageOptions={[10]} />
                </Grid>
            </Grid>
        </ShopLayout>
    )
}

export default HistoryPage