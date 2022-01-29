import { MenuGroup, useColorModeValue } from '@chakra-ui/react'
import { useContext } from 'react'
import { DappContext } from '../../../contexts/dAppContext'
import MobileConnectButton from './mobileConnect'
import MobileDisconnectButton from './mobileDisconnect'
import MobileThemeToggle from './mobileThemeToggle'

const MobileSettingSection = () => {
    const { connected } = useContext(DappContext)

    return (
        <MenuGroup
            title="Settings"
            fontWeight="bold"
            fontSize="xl"
            borderBottom="1px solid"
            borderBottomColor={useColorModeValue('white', 'theme.primary')}
            cursor="default"
        >
            <MobileThemeToggle />
            {!connected ? <MobileConnectButton /> : <MobileDisconnectButton />}
        </MenuGroup>
    )
}

export default MobileSettingSection
