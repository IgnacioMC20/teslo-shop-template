import { Menu, Router, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material"
import { AppBar, Badge, Box, Button, IconButton, Link, Toolbar, Typography } from "@mui/material"
import NextLink from "next/link"
import { useRouter } from "next/router"

export const Navbar = () => {
    const router = useRouter()
    return (
        <AppBar>
            <Toolbar>
                <NextLink href={'/'} passHref>
                    <Link display={'flex'} alignItems={'center'}>
                        <Typography variant='h6'>Teslo |</Typography>
                        <Typography sx={{ marginLeft: 0.5 }}>Shop</Typography>

                    </Link>
                </NextLink>

                <Box flex={1} />

                {/* le podemos mandar un objeto y que tome propiedades condicionalmente */}
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <NextLink href='/category/men' passHref>
                        <Link>
                            <Button color={ router.pathname === '/category/men' ? 'secondary' : 'info' }>Men</Button>
                        </Link>
                    </NextLink>
                    <NextLink href='/category/women' passHref>
                        <Link>
                            <Button color={ router.pathname === '/category/women' ? 'secondary' : 'info' }>Women</Button>
                        </Link>
                    </NextLink>
                    <NextLink href='/category/kids' passHref>
                        <Link>
                            <Button color={ router.pathname === '/category/kids' ? 'secondary' : 'info' }>Kids</Button>
                        </Link>
                    </NextLink>
                </Box>

                <Box flex={1} />

                <IconButton>
                    <SearchOutlined />
                </IconButton>
                <NextLink href='/cart' passHref>
                    <Link>
                        <IconButton>
                            <Badge badgeContent={2} color='secondary'>
                                <ShoppingCartOutlined />
                            </Badge>
                        </IconButton>
                    </Link>
                </NextLink>

                <IconButton>
                    <Menu />
                </IconButton>


            </Toolbar>
        </AppBar>
    )
}
