import React from 'react';
import Navbar from './componets/navbar';
import { useEffect } from 'react';
import './styles/reset.css'
import './styles/globalStyle.css'
import './App.css'
import { NewsCard } from './componets/newsCard';
import { StockCard } from './componets/stockCard';

function App() {

  return (
    <main className="home-container">
      <Navbar />
      {/* this area holds four cards that are preselected they are meant
        to be popular ones that are well known to grab attention*/}
      <div className='home-container__cards'>
        <StockCard companyName='MicroSoft' companyTicker='MSFT' />
        <StockCard companyName='Apple' companyTicker='AAPL' />
        <StockCard companyName='American Airlines' companyTicker='AAL' />
        <StockCard companyName='Disney' companyTicker='DIS' />
      </div>
      <NewsCard stockName='AAPL' />
    </main>
  );
}

export default App;
