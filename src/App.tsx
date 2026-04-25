import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Materi from './pages/alquran-hadis/Materi';
import Quiz from './pages/Quiz';
import Makhraj from './pages/alquran-hadis/Makhraj';

import SubjectPage from './pages/SubjectPage';
import Timeline from './pages/ski/Timeline';
import WudhuSimulator from './pages/fiqih/WudhuSimulator';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="alquran-hadis/tajwid" element={<Materi />} />
        <Route path="alquran-hadis/makhraj" element={<Makhraj />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="fiqih/wudhu-simulator" element={<WudhuSimulator />} />
        <Route path="ski/timeline" element={<Timeline />} />
        <Route path=":subjectId" element={<SubjectPage />} />
      </Route>
    </Routes>
  );
}

export default App;
