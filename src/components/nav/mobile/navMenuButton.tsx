import { MenuButton, IconButton, useColorModeValue } from '@chakra-ui/react'
import { CgMenu } from 'react-icons/cg'

const NavMenuButton = () => {
    return (
        <MenuButton
            as={IconButton}
            aria-label="navigation menu"
            icon={<CgMenu />}
            fontSize="2xl"
            bg="transparent"
            _focus={{
                outline: 'none',
                boxShadow: useColorModeValue('tabShadowLight', 'tabShadowDark')
            }}
            _hover={{
                bg: 'transparent',
                boxShadow: useColorModeValue('tabShadowLight', 'tabShadowDark')
            }}
            _active={{
                bg: 'transparent',
                boxShadow: useColorModeValue('tabShadowLight', 'tabShadowDark')
            }}
        />
    )
}

export default NavMenuButton
