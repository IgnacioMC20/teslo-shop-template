import { Box, Card, CardActionArea, CardMedia, Grid, Link, Typography } from '@mui/material'
import NextLink from 'next/link';
import { useMemo, useState } from 'react'

export const ProductCard = ({ product }) => {

    const [isHovered, setIsHovered] = useState(false);
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const productImage = useMemo(() => {
        return isHovered ? `/products/${product.images[1]}` : `/products/${product.images[0]}`
    }, [isHovered, product.images])

    return (
        <Grid item xs={6} sm={4} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <Card>
                <NextLink href='/product/slug' passHref prefetch={false}>
                    <Link>
                        <CardActionArea>
                            {/* Card media tiene el metodo onLoad que se ejecuta cuando termina de cargar la imagen || () => console.log('cargo')  */}
                            <CardMedia className='fadeIn' component={'img'} image={productImage} alt={product.title} onLoad={() => setIsImageLoaded(true)} />
                        </CardActionArea>
                    </Link>
                </NextLink>
            </Card>
            <Box sx={{ mt: 1, display: isImageLoaded ? 'block' : 'none' }} className='fadeIn'>
                <Typography> {product.title} </Typography>
                <Typography> ${product.price} </Typography>
            </Box>
        </Grid>
    )
}
