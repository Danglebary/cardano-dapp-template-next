import { useContext } from 'react'
import { MdLogin } from 'react-icons/md'
import { DappContext } from '../../../contexts/dAppContext'
import MobileNavButton from './mobileNavButton'

const MobileConnectButton = () => {
    const { connectAccount } = useContext(DappContext)

    return (
        <MobileNavButton
            label="connect"
            icon={<MdLogin />}
            handleClick={connectAccount!}
        />
    )
}

export default MobileConnectButton
