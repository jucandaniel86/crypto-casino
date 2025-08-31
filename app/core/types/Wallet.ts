export type NetworkType = {
  name: string
  minAmount: number
}

export type NetworkDataT = {
  [index: string]: NetworkType
}

export type WalletT = {
  code: string
  name: string
  symbol: string
  balance: number
  isFiat: boolean
  precision: number
  minAmount: number
  supportsTag: boolean
  networkData?: NetworkDataT[]
}
