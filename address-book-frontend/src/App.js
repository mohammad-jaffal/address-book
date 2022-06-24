import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import AddContact from './pages/AddContact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/add-contact" element={<AddContact />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
