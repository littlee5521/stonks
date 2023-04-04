import React from "react";
import { useState } from "react";

export function StockCard(props: props) {
  const [stockInfo, setStockInfo] = useState('')

  return (
    <div>{props.companyName} </div>
  )
}


interface props {
  companyName: string
}
