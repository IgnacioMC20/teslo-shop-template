import { Grid, Typography } from "@mui/material";
import { ShopLayout } from "../../components/layouts";
import { ProductList } from "../../components/products";
import { LoadingScreen } from "../../components/ui";
import { dbProducts } from "../../database";
import { getAllProducts } from "../../database/dbProducts";
import { useProducts } from "../../hooks";
// import { initialData } from "../../database/products";


export default function SearchPage({ products, query, foundProducts }) {

    // const { products, isLoading } = useProducts('/products');

    return (
        <ShopLayout title={'Search'} pageDescription={'Encuentra los mejores productos de Teslo aquí'}>
            <Typography variant='h1' component='h1'>Tienda</Typography>
            {
                foundProducts
                    ? <Typography variant='h2' textTransform={'capitalize'} sx={{ marginBottom: 1 }}>Busqueda: {query}</Typography>
                    : <>
                        <Typography variant='h6' sx={{ marginBottom: 1 }}>No encontramos ningun producto</Typography>
                        <Typography variant='h7' textTransform={'capitalize'} sx={{ marginBottom: 1 }}>Busqueda: {query}</Typography>
                      </>
            }

            <ProductList products={products} />
        </ShopLayout>
    )
}


// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps = async ({ params }) => {
    const { query = '' } = params  // your fetch function here 

    if (query.lengt === 0) {
        return {
            redirect: {
                destination: '/',
                permanent: true,
            }
        }
    }

    let products = await dbProducts.getProductsByTerm(query);
    const foundProducts = products.length > 0;

    if (!foundProducts) {
        products = await getAllProducts();
    }


    return {
        props: {
            products, query, foundProducts
        }
    }
}