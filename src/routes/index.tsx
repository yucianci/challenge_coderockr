import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';

export default function Switch() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
