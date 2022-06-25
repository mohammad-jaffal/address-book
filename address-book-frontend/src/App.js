import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import AddContact from './pages/AddContact';
import ViewLocation from './pages/ViewLocation';
import PickLocation from './components/PickLocation';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/add-contact" element={<AddContact />} />
          <Route path="/view-location" element={<ViewLocation />} />
          <Route path="/pick-location" element={<PickLocation />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
