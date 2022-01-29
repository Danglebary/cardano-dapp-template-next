declare global {
    interface Window {
        cardano: any
    }
}

export interface ApiErrorCode {
    InvalidRequest: -1
    InternalError: -2
    Refused: -3
    AccountChange: -4
}
export interface ApiError {
    code: ApiErrorCode
    info: string
}

export interface WalletProviderContext {
    name: string
    apiVersion: string
    icon: string
    enable: () => Promise<WalletApi>
    isEnabled: () => Promise<boolean | ApiError>
}

export interface WalletApi {
    getNetworkId: () => Promise<number | ApiError>
    getBalance: () => Promise<string>
    getUsedAddresses: () => Promise<string[]>
}
