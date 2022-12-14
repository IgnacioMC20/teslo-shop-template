import { Button, Card, CardContent, Divider, Grid, Link, Typography } from "@mui/material"
import { Box } from "@mui/system"
import NextLink from "next/link"
import { CartList } from "../../components/cart/CartList"
import { OrderSummary } from "../../components/cart/OrderSummary"
import { ShopLayout } from "../../components/layouts"

const SummaryPage = () => {
    return (
        <ShopLayout title={`Summary`} pageDescription={'Summary'}>
            {/* <Typography variant='h1' component='h1'>Carrito</Typography> */}
            <Grid container columns={12}>
                <Grid item xs={12} sm={7} >
                    <CartList />
                </Grid>
                <Grid item xs={12} sm={5} >
                    <Card className='summary-card' sx={{padding: '5px 20px', boxShadow: '20px 20px 10px grey' }}>
                        <CardContent>
                            <Box display='flex' justifyContent='space-between' sx={{my:2}}>
                            <Typography variant='h2'>Adress</Typography>

                                <NextLink href='/checkout/adress' passHref>
                                    <Link underline="hover">
                                        Edit
                                    </Link>
                                </NextLink>
                            </Box>

                            <Typography variant='subtitle1'>Adress</Typography>
                            <Typography>Fernando Herrera</Typography>
                            <Typography>323 Somewhere</Typography>
                            <Typography>Antigua Guatemala, Guatemala</Typography>
                            <Typography>+502 45454545</Typography>

                            <Divider sx={{ my: 3 }} light />

                            <Box display='flex' justifyContent='space-between' sx={{my:2}}>
                            <Typography variant='h2'>Summary (3)</Typography>
                                <NextLink href='/cart' passHref>
                                    <Link underline="hover">
                                        Edit
                                    </Link>
                                </NextLink>
                            </Box>
                            <OrderSummary />
                            <Box sx={{ mt: 3 }}>
                                <Button color="primary" fullWidth>
                                    Confirm
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

            </Grid>
        </ShopLayout>
    )
}

export default SummaryPage