import { AppProps } from 'next/app'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from '../theme'
import Layout from '../components/layout/main'
import { DappProvider } from '../contexts/dAppContext'

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <DappProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </DappProvider>
        </ChakraProvider>
    )
}

export default App
