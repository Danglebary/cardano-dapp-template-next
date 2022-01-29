import { MenuItem, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md'

const MobileThemeToggle = ({}) => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <MenuItem
            icon={
                colorMode === 'light' ? (
                    <MdOutlineLightMode />
                ) : (
                    <MdOutlineDarkMode />
                )
            }
            borderRadius="xl"
            transition="all 225ms ease-in-out"
            mb={2}
            _hover={{
                bg: 'transparent',
                color: useColorModeValue('theme.bg', 'theme.secondary'),
                boxShadow: useColorModeValue('tabShadowLight', 'tabShadowDark')
            }}
            _focus={{
                bg: 'transparent',
                color: useColorModeValue('theme.bg', 'theme.secondary'),
                boxShadow: useColorModeValue('tabShadowLight', 'tabShadowDark')
            }}
            _active={{
                bg: 'transparent',
                boxShadow: useColorModeValue('tabShadowLight', 'tabShadowDark')
            }}
            onClick={toggleColorMode}
        >
            {colorMode === 'light'
                ? 'change to dark mode'
                : 'change to light mode'}
        </MenuItem>
    )
}

export default MobileThemeToggle
