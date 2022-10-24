import { Typography } from '@mui/material';
import React from 'react'
import { ShopLayout } from '../../components/layouts'
import { ProductList } from '../../components/products';
import { LoadingScreen } from '../../components/ui';
import { useProducts } from '../../hooks';

const MenPage = () => {
  const { products, isLoading } = useProducts('/products?gender=men');

  return (
    <ShopLayout title={'Men'} pageDescription={'This is the men category page'}>

      <Typography variant='h1' component='h1'>Tienda</Typography>
      <Typography variant='h2' sx={{ marginBottom: 1 }}>Productos de Hombre</Typography>

      {
        isLoading
          ? <LoadingScreen />
          : <ProductList products={products} />
      }
    </ShopLayout>
  )
}

export default MenPage