import { BigNum } from '@emurgo/cardano-serialization-lib-asmjs'

export const hexToBytes = (hex: string) => {
    const words = []
    const hexLength = hex.length
    for (let i = 0; i < hexLength; i += 2) {
        words.push(parseInt(hex.substr(i, 2), 16))
    }
    const bytes = new Uint8Array(words)
    return bytes
}

export const int = (value: BigNum) => Number(value.to_str())
