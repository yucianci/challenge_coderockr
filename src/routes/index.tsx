import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Article from '../pages/Article';

import Home from '../pages/Home';

export default function Switch() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/article/:id" element={<Article />} />
    </Routes>
  );
}
