import { Heading, Text, VStack } from '@chakra-ui/react'
import { useContext } from 'react'
import Page from '../components/layout/page'
import { DappContext } from '../contexts/dAppContext'

const Home = () => {
    const { network, address, balance } = useContext(DappContext)

    return (
        <Page title="dApp: Home" description="home page for dapp">
            <Heading textAlign="center">Home Page</Heading>
            <VStack mt={4}>
                <Text>Network: {network}</Text>
                <Text>Address:</Text>
                <Text> {address}</Text>
                <Text>Balance: {balance} ADA </Text>
            </VStack>
        </Page>
    )
}

export default Home
