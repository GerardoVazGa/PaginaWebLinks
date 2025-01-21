
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../App';
import Plantillas from '../pages/Plantillas';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Plantillas" element={<Plantillas />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
