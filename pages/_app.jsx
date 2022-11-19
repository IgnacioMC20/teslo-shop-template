import '../styles/globals.css'
import '@fontsource/roboto/300.css';
import { ThemeProvider } from '@mui/system';
import { CssBaseline } from '@mui/material';
import { darkTheme, lightTheme } from '../themes';
import { SWRConfig } from 'swr';
import { CartProvider, UIProvider } from '../context';

function MyApp({ Component, pageProps }) {
  return (

    <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
      }}>
      <CartProvider>

        <UIProvider>
          <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </UIProvider>
      </CartProvider>
    </SWRConfig>
  )
}

export default MyApp
