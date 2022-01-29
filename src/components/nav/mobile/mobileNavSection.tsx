import { MenuGroup, useColorModeValue } from '@chakra-ui/react'
import { AiOutlineHome } from 'react-icons/ai'
import { GiFarmer } from 'react-icons/gi'
import MobileNavItem from './mobileNavItem'

const MobileNavSection = () => {
    return (
        <MenuGroup
            minH="min-content"
            title="Navigation"
            fontWeight="bold"
            fontSize="xl"
            borderBottom="1px solid"
            borderBottomColor={useColorModeValue('white', 'theme.primary')}
            cursor="default"
        >
            <MobileNavItem
                icon={<AiOutlineHome />}
                path="/"
                label="Home"
                mb={2}
            />
            <MobileNavItem
                icon={<GiFarmer />}
                path="/farms"
                label="farms"
                mb={2}
            />
        </MenuGroup>
    )
}

export default MobileNavSection
