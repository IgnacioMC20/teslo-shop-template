import '../styles/globals.css'
import '@fontsource/roboto/300.css';
import { ThemeProvider } from '@mui/system';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
