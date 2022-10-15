import '../styles/globals.css'
import '@fontsource/roboto/300.css';
import { ThemeProvider } from '@mui/system';
import { CssBaseline } from '@mui/material';
import { darkTheme, lightTheme } from '../themes';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
