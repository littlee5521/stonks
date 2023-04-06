import React from 'react';
import Navbar from './componets/navbar';
import './styles/reset.css'
import './styles/globalStyle.css'
import './App.css'
import { StockCard } from './componets/stockCard';

function App() {
  // function myFunction() {
  // setInterval(setAlert, 5000);
  //}
  return (
    <main className="home-container">
      <Navbar />
      <div className='home-container__cards'>
        <StockCard companyTicker='MSFT' />
      </div>
    </main>
  );
}

export default App;
