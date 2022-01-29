import { createContext, useEffect, useState } from 'react'
import { log } from '../utils/logging'
import * as emurgo from '@emurgo/cardano-serialization-lib-asmjs'
import { hexToBytes, int } from '../utils'
import { WalletApi, WalletProviderContext } from './types'

interface iDappContext {
    connected: boolean
    network: string
    address: string
    balance: number
    connectAccount: null | (() => void)
    disconnectAccount: null | (() => void)
    error: string
}

interface iProviderProps {
    children?: React.ReactNode
}

const defaultState: iDappContext = {
    connected: false,
    network: '',
    address: '',
    balance: NaN,
    connectAccount: null,
    disconnectAccount: null,
    error: ''
}

export const DappContext = createContext(defaultState)

export const DappProvider: React.FC<iProviderProps> = ({ children }) => {
    // STATE
    // Wallet api state
    const [walletProvider, setWalletProvider] = useState<
        WalletProviderContext | undefined
    >(undefined)
    const [walletApi, setWalletApi] = useState<WalletApi | undefined>(undefined)
    // Wallet data state
    const [network, setNetwork] = useState(defaultState.network)
    const [address, setAddress] = useState(defaultState.address)
    const [balance, setBalance] = useState(defaultState.balance)
    // Misc. state (used for ui)
    const [connected, setConnected] = useState(defaultState.connected)
    const [error, setError] = useState(defaultState.error)

    // FUNCTIONS
    // Local storage functions
    const setStorageWallet = (walletName: string) => {
        window.localStorage.setItem('current-cardano-wallet', walletName)
    }
    const clearStorageWallet = () => {
        window.localStorage.removeItem('current-cardano-wallet')
    }

    // Wallet auth functions
    const connectWallet = async () => {
        if (!walletProvider) return
        try {
            const api = await walletProvider.enable()
            setWalletApi(api)
            setStorageWallet('nami')
        } catch (err: any) {
            log({ label: 'connectWallet', message: `Error: ${err}` })
            setError(`[connectWallet]: Error: ${err}`)
        }
    }
    const disconnectWallet = () => {
        clearStorageWallet()
        window.location.reload()
    }

    // Wallet data functions
    const getNetwork = async () => {
        if (!walletApi) return
        try {
            const networks = ['testnet', 'mainnet']
            const nId = await walletApi.getNetworkId()
            if (typeof nId === 'number') {
                setNetwork(networks[nId])
            }
        } catch (err: any) {
            log({ label: 'getNetworkId', message: `Error: ${err}` })
            setError(`[getNetwork]: Error: ${err}`)
        }
    }
    const getAddress = async () => {
        if (!walletApi) return

        try {
            const addresses = await walletApi.getUsedAddresses()
            const addr = emurgo.Address.from_bytes(hexToBytes(addresses[0]))
            setAddress(addr.to_bech32())
        } catch (err: any) {
            log({ label: 'getAddress', message: `Error: ${err}` })
            setError(`[getAddress]: Error: ${err}`)
        }
    }
    const getBalance = async () => {
        if (!walletApi) return

        try {
            const balanceRaw = await walletApi.getBalance()
            const value = emurgo.Value.from_bytes(hexToBytes(balanceRaw))
            const locked = emurgo.min_ada_required(
                value,
                emurgo.BigNum.from_str('1000000')
            )
            const result = int(value.coin()) - int(locked)
            setBalance(result / 1000000)
        } catch (err: any) {
            log({ label: 'getBalance', message: `Error: ${err}` })
            setError(`[getBalance]: Error: ${err}`)
        }
    }

    const getWalletInfo = async () => {
        getNetwork()
        getAddress()
        getBalance()
    }

    // Side-effect functions
    useEffect(() => {
        if (window.cardano && window.cardano.nami) {
            setWalletProvider(window.cardano.nami)
        }
    }, [])

    useEffect(() => {
        if (window.localStorage.getItem('current-cardano-wallet')) {
            if (walletProvider) {
                connectWallet()
            }
        }
    }, [walletProvider])

    useEffect(() => {
        if (walletApi) {
            setConnected(true)
            getWalletInfo()

            window.cardano.onNetworkChange((_: any) => {
                console.log('network change')
                getWalletInfo()
            })
            window.cardano.onAccountChange(() => {
                console.log('account change')
                getWalletInfo()
            })
        }
    }, [walletApi])

    // Public functions for ui
    const connectAccount = () => {
        connectWallet()
    }

    const disconnectAccount = () => {
        disconnectWallet()
    }

    return (
        <DappContext.Provider
            value={{
                connected,
                network,
                address,
                balance,
                connectAccount,
                disconnectAccount,
                error
            }}
        >
            {children}
        </DappContext.Provider>
    )
}
