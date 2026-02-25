import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Live from './pages/live/Live';
import Forecast from './pages/forecast/Forecast';
import Alerts from './pages/alerts/Alerts';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {

  const [city, setCity] = useState("Pune");

  return (
    <BrowserRouter>
      <Navbar setCity={setCity} />

      <Routes>
        <Route path='/' element={<Home city={city} />} />
        <Route path='/liveweather' element={<Live city={city} />} />
        <Route path='/forecast' element={<Forecast />} />
        <Route path='/alerts' element={<Alerts />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
