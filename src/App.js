import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './pages/home/Home'

function App() {
  return (
    <Suspense fallback="...is loading">
      <BrowserRouter>
          <Routes>
            <Route
              element={<Home />}
              path="/"
            />
          </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
