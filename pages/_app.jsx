import '../styles/globals.css'
import '@fontsource/roboto/300.css';
import { ThemeProvider } from '@mui/system';
import { CssBaseline } from '@mui/material';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <CssBaseline/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
