import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { fetchStock } from "../script/stockFetch";
import '../styles/stockCardStyle.css'
import '../styles/globalStyle.css'

export function StockCard(props: props) {

  //state is not needed for some of this information as is not 
  //dynamic
  const [stockTicker, setStockTicker] = useState('Temp')
  const [stockLastSale, setStockLastSale] = useState(0)
  const [stockBidPrice, setStockBidPrice] = useState(0)
  const [stockAskPrice, setStockAskPrice] = useState(0)
  const [stockSector, setStockSector] = useState('Temp')
  const [stockSecurity, setStockSecurity] = useState('Temp')

  //fetch request to grab information about a stock, when the market is closed
  //the json returned is empty, another api call should be used for data
  useEffect(() => {
    fetchStock(props.companyTicker).then(x => {
      const stockObject = x[0]
      setStockTicker(stockObject.symbol)
      setStockLastSale(stockObject.lastSalePrice)
      setStockBidPrice(stockObject.bidPrice)
      setStockAskPrice(stockObject.askPrice)
      setStockSector(stockObject.sector)
      setStockSecurity(stockObject.securityType)
    })
    //this interval is to update the stock info every 5 seconds, ideally this 
    //would be a bit faster but for the homepage with 4 apis its sending to 
    //many request if its less then 5,
    setInterval(() => {
      fetchStock(props.companyTicker).then(x => {
        const stockObject = x[0]
        setStockLastSale(stockObject.lastSalePrice)
        setStockBidPrice(stockObject.bidPrice)
        setStockAskPrice(stockObject.askPrice)
      })
    }, 5000);
  }, [])


  return (
    <section className="stock-card">
      <article className="stock-card__logo header-title header-font-size">
        <h2 className="stock-card__header">{props.companyName}</h2>
        <h2 className="stock-card__header">{stockTicker}</h2>
      </article>
      <article className="stock-card__prices">
        <button className="stock-card__buttons body-font-size">{stockLastSale}</button>
        <button className="stock-card__buttons body-font-size">{stockBidPrice} </button>
        <button className="stock-card__buttons body-font-size">{stockAskPrice} </button>
      </article>
      <article className="stock-card__info">
        <p className="stock-card__info body-text body-font-size">{stockTicker} is a company in the {stockSector} sector and is a security type of {stockSecurity}</p>
      </article>
    </section>
  )
}


interface props {
  companyTicker: string
  companyName: string
}
