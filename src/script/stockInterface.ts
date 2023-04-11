//this interface describes the data recived from IEX TOPS endpoint

export interface stockJson {
  askPrice: number
  askSize: number
  bidPrice: number
  bidSize: number
  lastSalePrice: number
  lastSaleSize: number
  lastSaleTime: number
  lastUpdated: number
  sector: string
  securityType: string
  symbol: string
  volume: number
}
