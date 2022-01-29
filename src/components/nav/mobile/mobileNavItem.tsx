import { ReactElement, JSXElementConstructor } from 'react'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import { MenuItem, Link, useColorModeValue } from '@chakra-ui/react'

interface MobileNavItemProps {
    icon: ReactElement<any, string | JSXElementConstructor<any>>
    path: string
    label: string
    mb?: number
}

const MobileNavItem = ({ icon, path, label, mb }: MobileNavItemProps) => {
    const router = useRouter()
    const active = router.asPath === path

    return (
        <NextLink href={path} passHref>
            <MenuItem
                icon={icon}
                borderRadius="xl"
                mb={mb}
                transition="default"
                _hover={{
                    color: useColorModeValue('theme.bg', 'theme.secondary'),
                    bg: 'transparent',
                    boxShadow: useColorModeValue(
                        'tabShadowLight',
                        'tabShadowDark'
                    )
                }}
                _focus={{
                    bg: 'transparent',
                    color: useColorModeValue('theme.bg', 'theme.secondary'),
                    boxShadow: useColorModeValue(
                        'tabShadowLight',
                        'tabShadowDark'
                    )
                }}
                _active={{
                    bg: 'transparent',
                    boxShadow: useColorModeValue(
                        'tabShadowLight',
                        'tabShadowDark'
                    )
                }}
                isDisabled={active}
                color={useColorModeValue('theme.bg', 'theme.primary')}
            >
                <Link>{label}</Link>
            </MenuItem>
        </NextLink>
    )
}

export default MobileNavItem
