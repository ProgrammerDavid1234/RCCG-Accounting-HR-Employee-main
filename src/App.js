import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sign_Up from './pages/SignUp/Sign_up';

function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Sign_Up/>} />
    </Routes>
    </Router>
  );
}

export default App;
