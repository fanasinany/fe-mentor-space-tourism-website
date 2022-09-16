import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Crew from './Components/Crew/Crew';
import Destination from './Components/Destination/Destination';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Technology from './Components/Technology/Technology';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
