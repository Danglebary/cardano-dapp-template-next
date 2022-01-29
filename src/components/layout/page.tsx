import Head from 'next/head'
import { Container } from '@chakra-ui/react'

interface Props {
    children: React.ReactNode
    title: string
    description: string
}

const Page = ({ children, title, description }: Props) => {
    return (
        <Container maxW="100%">
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>
            {children}
        </Container>
    )
}

export default Page
