import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { Button, Icon, Text, useColorModeValue } from '@chakra-ui/react'
import { IconType } from 'react-icons'

interface Props {
    label: string
    path: string
    icon: IconType
}

const NavButton = ({ label, path, icon }: Props) => {
    const router = useRouter()
    const active = router.asPath === path

    const color = useColorModeValue('theme.bg', 'gray.100')

    return (
        <NextLink href={path} passHref>
            <Button
                variant="navButton"
                role="group"
                color={active ? 'theme.primary' : undefined}
                disabled={!!active}
                aria-label={`navigate to ${label} page`}
                _disabled={{
                    cursor: 'pointer'
                }}
            >
                <Icon
                    as={icon}
                    fontSize={{ base: '2xl', md: 'xl' }}
                    color={active ? 'theme.primary' : color}
                    transition="all 225ms ease-in-out"
                    _groupHover={{
                        color: active ? undefined : 'theme.secondary'
                    }}
                    _groupFocus={{
                        color: active ? undefined : 'theme.secondary'
                    }}
                />
                <Text
                    fontSize="xl"
                    display={{ base: 'none', md: 'inline' }}
                    transition="all 225ms ease-in-out"
                    _groupHover={{
                        color: active ? undefined : 'theme.secondary'
                    }}
                    _groupFocus={{
                        color: active ? undefined : 'theme.secondary'
                    }}
                >
                    {label}
                </Text>
            </Button>
        </NextLink>
    )
}

export default NavButton
