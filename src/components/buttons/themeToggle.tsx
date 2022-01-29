import {
    Box,
    IconButton,
    Tooltip,
    useColorMode,
    useColorModeValue
} from '@chakra-ui/react'
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md'

const ThemeToggle = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    const lightMode = colorMode === 'light'

    return (
        <Box>
            <Tooltip
                label={
                    lightMode ? 'switch to dark mode' : 'switch to light mode'
                }
                hasArrow
                bg={useColorModeValue('theme.bg', 'theme.secondary')}
                color={useColorModeValue('theme.secondary', 'theme.bg')}
                borderRadius="lg"
                px={2}
                py={1}
                closeOnClick={false}
            >
                <IconButton
                    aria-label={
                        lightMode
                            ? 'button with an icon of the sun, click to change to dark mode'
                            : 'button with an icon of the moon, click to change to light mode'
                    }
                    icon={
                        lightMode ? (
                            <MdOutlineLightMode />
                        ) : (
                            <MdOutlineDarkMode />
                        )
                    }
                    onClick={toggleColorMode}
                    variant="themeToggle"
                />
            </Tooltip>
        </Box>
    )
}

export default ThemeToggle
