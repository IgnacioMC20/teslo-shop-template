import { Typography } from '@mui/material';
import React from 'react'
import { ShopLayout } from '../../components/layouts'
import { ProductList } from '../../components/products';
import { LoadingScreen } from '../../components/ui';
import { useProducts } from '../../hooks';

const KidsPage = () => {
  const { products, isLoading } = useProducts('/products?gender=kid');

  return (
    <ShopLayout title={'Kids'} pageDescription={'This is the kids category page'}>

      <Typography variant='h1' component='h1'>Tienda</Typography>
      <Typography variant='h2' sx={{ marginBottom: 1 }}>Productos de Niño</Typography>

      {
        isLoading
          ? <LoadingScreen />
          : <ProductList products={products} />
      }
    </ShopLayout>
  )
}

export default KidsPage