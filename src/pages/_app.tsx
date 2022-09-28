import '../assets/styles/global.css'
import theme from '../assets/styles/theme'
import type { AppProps } from 'next/app'
import {ThemeProvider} from '@emotion/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
)}

export default MyApp
