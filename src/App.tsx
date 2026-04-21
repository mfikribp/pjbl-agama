import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Materi from './pages/Materi';
import Quiz from './pages/Quiz';
import Makhraj from './pages/Makhraj';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="materi" element={<Materi />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="makhraj" element={<Makhraj />} />
      </Route>
    </Routes>
  );
}

export default App;
