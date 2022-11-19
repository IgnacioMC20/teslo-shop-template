import { Grid, Typography } from "@mui/material";
import { ShopLayout } from "../components/layouts";
import { ProductList } from "../components/products";
import { LoadingScreen } from "../components/ui";
import { useProducts } from "../hooks";
// import { initialData } from "../database/products";


export default function HomePage() {

  const { products, isLoading } = useProducts('/products');

  return (
    <ShopLayout title={'Home'} pageDescription={'Encuentra los mejores productos de Teslo aquí'}>
      <Typography variant='h1' component='h1'>Tienda</Typography>
      <Typography variant='h2' sx={{ marginBottom: 1 }}>Todos los productos</Typography>

      {
        isLoading
          ? <LoadingScreen />
          : <ProductList products={products} />
      }
    </ShopLayout>
  )
}
