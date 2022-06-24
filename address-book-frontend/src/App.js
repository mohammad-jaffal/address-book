import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      {/* <Login/> */}
      {/* <Signup/> */}
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Signup />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
