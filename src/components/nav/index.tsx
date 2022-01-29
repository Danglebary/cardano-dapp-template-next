import { useContext, useEffect, useState } from 'react'
import {
    Heading,
    Flex,
    useBreakpoint,
    useColorModeValue
} from '@chakra-ui/react'
import { AiOutlineHome } from 'react-icons/ai'
import { GiFarmer } from 'react-icons/gi'
import MobileNav from './mobile'
import NavButton from '../buttons/NavButton'
import ThemeToggle from '../buttons/themeToggle'
import ConnectWalletButton from '../buttons/connectWalletButton'
import DisconnectWalletButton from '../buttons/disconnectWalletButton'
import { DappContext } from '../../contexts/dAppContext'

const Nav = () => {
    const bp = useBreakpoint()

    const [breakPoint, setBreakPoint] = useState('base')

    useEffect(() => {
        if (bp) {
            setBreakPoint(bp)
        }
    }, [bp])

    const { connected } = useContext(DappContext)

    return (
        <Flex
            align="center"
            w={{ base: '100%', md: 56 }}
            maxW={{ base: '100%', md: 60 }}
            height={{ base: 20, md: '100%' }}
            justify={{ base: 'space-between', md: 'flex-start' }}
            direction={{ base: 'row', md: 'column' }}
            px={{ base: 4, md: 4 }}
            py={{ base: 2, md: 4 }}
            borderRadius="xl"
            boxShadow={useColorModeValue('shadowMainLight', 'shadowMainDark')}
        >
            <Heading
                fontSize={{ base: '3xl', md: '4xl' }}
                letterSpacing="tighter"
                mb={{ base: 0, md: 12 }}
                p={1}
                bgGradient="linear(to-l, theme.primary, theme.secondary)"
                backgroundClip="text"
            >
                Logo
            </Heading>
            {breakPoint !== 'base' ? (
                <Flex
                    w="100%"
                    h="100%"
                    direction={{ sm: 'row', md: 'column' }}
                    align="center"
                    justify={{ base: 'end', md: 'space-between' }}
                    py={2}
                    gap={4}
                >
                    <Flex gap={4} direction={{ sm: 'row', md: 'column' }}>
                        <NavButton label="Home" path="/" icon={AiOutlineHome} />
                        <NavButton
                            label="farms"
                            path="/farms"
                            icon={GiFarmer}
                        />
                    </Flex>
                    <Flex
                        w={{ base: undefined, md: '100%' }}
                        align="center"
                        justify="space-between"
                    >
                        {!connected ? (
                            <ConnectWalletButton />
                        ) : (
                            <DisconnectWalletButton />
                        )}
                        <ThemeToggle />
                    </Flex>
                </Flex>
            ) : (
                <MobileNav />
            )}
        </Flex>
    )
}

export default Nav
