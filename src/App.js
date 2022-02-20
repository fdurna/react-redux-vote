import * as React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home'
import Header from './components/Header'
import AddItem from './components/AddItem'


function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddItem />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
