import { useContext } from 'react'
import { MdLogout } from 'react-icons/md'
import { DappContext } from '../../../contexts/dAppContext'
import MobileNavButton from './mobileNavButton'

const MobileDisconnectButton = () => {
    const { disconnectAccount } = useContext(DappContext)

    return (
        <MobileNavButton
            label="disconnect"
            icon={<MdLogout />}
            handleClick={disconnectAccount!}
        />
    )
}

export default MobileDisconnectButton
