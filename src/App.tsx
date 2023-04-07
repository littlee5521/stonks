import React from 'react';
import Navbar from './componets/navbar';
import { useEffect } from 'react';
import './styles/reset.css'
import './styles/globalStyle.css'
import './App.css'
import { StockCard } from './componets/stockCard';

function App() {

  return (
    <main className="home-container">
      <Navbar />
      <div className='home-container__cards'>
        <StockCard companyName='MicroSoft' companyTicker='MSFT' />
        <StockCard companyName='Apple' companyTicker='AAPL' />
        <StockCard companyName='American Airlines' companyTicker='AAL' />
        <StockCard companyName='Disney' companyTicker='DIS' />
      </div>
    </main>
  );
}

export default App;
