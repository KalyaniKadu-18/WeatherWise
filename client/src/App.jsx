import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Live from './pages/live/Live';
import Forecast from './pages/forecast/Forecast';
import Alerts from './pages/alerts/Alerts';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/liveweather' element={<Live />} />
        <Route path='/forecast' element={<Forecast />} />
        <Route path='/alerts' element={<Alerts />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
