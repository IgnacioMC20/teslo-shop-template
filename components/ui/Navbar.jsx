import { ClearOutlined, Menu, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material"
import { AppBar, Badge, Box, Button, IconButton, Input, InputAdornment, Link, OutlinedInput, Toolbar, Typography } from "@mui/material"
import Cookies from "js-cookie"
import NextLink from "next/link"
import { useRouter } from "next/router"
import { useContext, useState } from "react"
import { UIContext } from "../../context"

export const Navbar = () => {
    const router = useRouter();
    const { toggleSideMenu } = useContext(UIContext);

    const [searchTerm, setSearchTerm] = useState('');
    const [isSearchVisible, setIsSearchVisible] = useState(false);

    const onSearchTerm = () => {
        if (searchTerm.trim().length === 0) return;
        router.push(`/search/${searchTerm}`);
    }


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
                {
                    !isSearchVisible && (
                        <Box className="fadeIn" sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <NextLink href='/category/men' passHref>
                                <Link>
                                    <Button color={router.pathname === '/category/men' ? 'secondary' : 'info'}>Men</Button>
                                </Link>
                            </NextLink>
                            <NextLink href='/category/women' passHref>
                                <Link>
                                    <Button color={router.pathname === '/category/women' ? 'secondary' : 'info'}>Women</Button>
                                </Link>
                            </NextLink>
                            <NextLink href='/category/kids' passHref>
                                <Link>
                                    <Button color={router.pathname === '/category/kids' ? 'secondary' : 'info'}>Kids</Button>
                                </Link>
                            </NextLink>
                        </Box> 
                    )
                }


                <Box flex={1} />

                {
                    isSearchVisible
                        ? (
                            <Input
                                className="fadeIn"
                                sx={{ display: { xs: 'none', sm: 'flex'}}}
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' ? onSearchTerm() : null}
                                // disableUnderline 
                                type='text'
                                autoFocus
                                // placeholder="Buscar..."
                                endAdornment={
                                    <InputAdornment position="start">
                                        <IconButton
                                            onClick={() => {
                                                setIsSearchVisible(false);
                                                setSearchTerm('');
                                            }}
                                        >
                                            <ClearOutlined />
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        )
                        : (

                            <IconButton sx={{ display: { xs: 'none', sm: 'flex' } }} className="fadeIn" onClick={() => setIsSearchVisible(true)}>
                                <SearchOutlined />
                            </IconButton>
                        )
                }

                {/* pantallas peque;as */}
                <IconButton sx={{ display: { xs: 'flex', sm: 'none' } }} onClick={toggleSideMenu}>
                    <SearchOutlined />
                </IconButton>

                <NextLink href='/cart' passHref>
                    <Link>
                        <IconButton>
                            <Badge badgeContent={Cookies.get('cart').count} color='secondary'>
                                <ShoppingCartOutlined />
                            </Badge>
                        </IconButton>
                    </Link>
                </NextLink>

                <IconButton onClick={toggleSideMenu}>
                    <Menu />
                </IconButton>


            </Toolbar>
        </AppBar >
    )
}
