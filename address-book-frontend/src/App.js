import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Login/>
      {/* <Signup/> */}
    </BrowserRouter>
  );
}

export default App;
