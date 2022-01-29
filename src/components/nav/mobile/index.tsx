import { Menu, MenuList, useColorModeValue } from '@chakra-ui/react'
import MobileNavSection from './mobileNavSection'
import MobileSettingSection from './mobileSettingSection'
import NavMenuButton from './navMenuButton'

const MobileNav = () => {
    return (
        <Menu isLazy={true} closeOnSelect={false}>
            <NavMenuButton />
            <MenuList
                bg={useColorModeValue('theme.primary', 'theme.bg')}
                color="white"
                borderRadius="xl"
                fontSize="lg"
                pt={2}
                px={2}
            >
                <MobileNavSection />
                <MobileSettingSection />
            </MenuList>
        </Menu>
    )
}

export default MobileNav
