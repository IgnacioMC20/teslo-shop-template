import { Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { ShopLayout } from '../../components/layouts'

const AdressPage = () => {
  return (
    <ShopLayout>
        <Typography variant='h1' component='h1'>Adress</Typography>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <TextField label='Nombre' variant='outlined' fullWidth />
            </Grid>
        </Grid>
    </ShopLayout>
  )
}

export default AdressPage