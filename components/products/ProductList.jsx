import { Grid } from '@mui/material'
import React from 'react'
import { ProductCard } from './ProductCard'

export const ProductList = ({initialData}) => {
  return (
    <Grid container spacing={4}>
    {
      initialData.products.map((product, i) => (
        <ProductCard product={product} /* key={product._id} */ key={i}/>
      ))
    }
  </Grid>
  )
}
