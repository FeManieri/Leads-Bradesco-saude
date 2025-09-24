import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import SuccessPage from '@/pages/SuccessPage';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/sucesso" element={<SuccessPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;