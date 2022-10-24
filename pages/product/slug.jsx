import { Button, Chip, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { ShopLayout } from '../../components/layouts/ShopLayout'
import { ProductSlideshow, SizeSelector } from '../../components/products'
import { ItemCounter } from '../../components/ui'
import { initialData } from '../../database/products'

const product = initialData.products[0];
const slug = () => {
    return (
        <ShopLayout title={product.title} pageDescription={product.description}>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={7}>
                    {/* Slideshow */}
                    <Box>
                        <ProductSlideshow product={product} />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={5} >
                    <Box flexDirection='column' display='flex' sx={{ padding: 10 }}>
                        {/* titulos */}
                        <Typography variant='h1' component='h1'>{product.title}</Typography>
                        <Typography variant='subtitle1' component='h2'>${product.price}</Typography>
                        {/* cantidad */}
                        <Box sx={{ my: 2 }} display='flex' alignItems='center' justifyContent='center'>
                            <ItemCounter />
                        </Box>
                        <Box sx={{ mb: 2 }} display='flex' alignItems='center' justifyContent='center'>
                            <SizeSelector sizes={product.sizes} selectedSize={product.sizes[0]} />
                        </Box>
                        {/* agregar al carrito */}
                        <Button color='secondary'>
                            Agregar al carrito
                        </Button>

                        {/* <Chip label='No hay disponibles' color='error' variant='outlined' /> */}

                        <Box sx={{ mt: 2 }}>
                            <Typography variant='subtitle2'>Description</Typography>
                            <Typography variant='body2'>{product.description}</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ShopLayout>
    )
}

export default slug