import React from 'react';
import { Routes, Route } from 'react-router-dom';

import IndexPage from './pages/Index.js';
import AllVisitorsPage from './pages/AllVisitors.js';
import ClearedVisitorsPage from './pages/ClearedVisitors.js';
import Login from './pages/Login.jsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={<IndexPage />} />
      <Route path='/allvisitors' element={<AllVisitorsPage />} />
      <Route path='/clearedvisitors' element={<ClearedVisitorsPage />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App;
