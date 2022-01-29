import { JSXElementConstructor, ReactElement } from 'react'
import { MenuItem, useColorModeValue } from '@chakra-ui/react'

interface MobileNavButtonProps {
    label: string
    icon: ReactElement<any, string | JSXElementConstructor<any>> | undefined
    handleClick: (event: any) => void
}

const MobileNavButton = ({
    label,
    icon,
    handleClick
}: MobileNavButtonProps) => {
    return (
        <MenuItem
            icon={icon}
            borderRadius="xl"
            transition="all 225ms ease-in-out"
            mb={2}
            onClick={handleClick}
            _hover={{
                color: useColorModeValue('theme.bg', 'theme.secondary'),
                bg: 'transparent',
                boxShadow: useColorModeValue('tabShadowLight', 'tabShadowDark')
            }}
            _focus={{
                bg: 'transparent',
                color: useColorModeValue('theme.bg', 'theme.secondary'),
                boxShadow: useColorModeValue('tabShadowLight', 'tabShadowDark')
            }}
        >
            {label}
        </MenuItem>
    )
}

export default MobileNavButton
