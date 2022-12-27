import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from '../Dashboard/Dashboard';
import NoPage from '../NoPage/NoPage';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="*" element={<NoPage />} />
        </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;