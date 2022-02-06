import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './components/Home';
import Sudoku from './components/Sudoku';
import Lucy from './components/Lucy';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  return (
    <Router>
      <Nav />
      <div className='main'>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/sudoku" element={<Sudoku/>} />
        <Route exact path="/lucy" element={<Lucy/>} />
      </Routes>
      </div>
      <div className='section'>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
