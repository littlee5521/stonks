import React from "react";
import '../styles/globalStyle.css'
import '../styles/navbar.css'
import { SearcBar } from "./SearchBar";



function Navbar() {

  return (
    <nav className="navbar">
      <section className="navbar__section">
        <h1 className="navbar__logo header-title">Eazy Stocks </h1>
        <SearcBar />
      </section>
      <div className="navbar__linebreak" />
    </nav>
  )

}

export default Navbar
