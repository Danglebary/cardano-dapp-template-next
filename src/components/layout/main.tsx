import Head from 'next/head'
import { Center, Container, Flex, useColorModeValue } from '@chakra-ui/react'
import Nav from '../nav'

interface Props {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <Center as="main">
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <Flex
                maxW="container.xl"
                width="100vw"
                height="100vh"
                direction="column"
                gap={{ base: 2, md: 4, lg: 8 }}
                px={{ base: 4, md: 8, lg: 10 }}
                py={{ base: 6, md: 8, lg: 12 }}
            >
                <Flex
                    width="100%"
                    height="100%"
                    direction={{ base: 'column', md: 'row' }}
                    gap={{ base: 2, md: 4, lg: 8 }}
                >
                    <Nav />
                    <Container
                        position="relative"
                        width="100%"
                        height="100%"
                        maxW="100%"
                        borderRadius="xl"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        transition="all 225ms ease-in-out"
                        boxShadow={useColorModeValue(
                            'shadowMainLight',
                            'shadowMainDark'
                        )}
                        px={{ base: 4, md: 6 }}
                        py={{ base: 2, md: 4 }}
                    >
                        {children}
                    </Container>
                </Flex>
            </Flex>
        </Center>
    )
}

export default Layout
