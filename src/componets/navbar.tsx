import React from "react";
import '../styles/navbar.css'
import { fetchStock } from "../script/stockFetch";



function Navbar() {

  fetchStock('MSFT').then(x => {
    console.log(x)
    console.log(x[0].lastSalePrice)
  })
  console.log('hello')

  return (
    <nav className="navbar">
      <section className="navbar__section">
        <h1 className="navbar__logo">Eazy Stocks </h1>
      </section>
      <div className="navbar__linebreak" />
    </nav>
  )

}

export default Navbar
