import React, { useEffect } from 'react';
import './assets/styles/App.css';
import {Routes, Route } from 'react-router-dom'
import IndexPage from './pages/IndexPage';
import CurrencyPage from './pages/CurrensyPage';
import TalonPage from './pages/TalonPage';
import FizFace from './pages/FizFace';
import LawyerPage from './pages/LowyPage';
import TalonStore from './stores/talonStore'
function App() {
      useEffect(() => {
        TalonStore.setCurrencyData("");
      }, []);
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<IndexPage />} index />
        <Route path="/currency" element={<CurrencyPage />} />
        <Route path="/getTalon" element={<TalonPage />} />
        <Route path="/fizFace" element={<FizFace />} />
        <Route path="/lowyer" element={<LawyerPage />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
