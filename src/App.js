import React from "react";
import "./App.css";
import Home from "./components/pages/Home";
import Manager from './components/managerdashboard/manager'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Doctor from './components/doctordashboard/doctor';
import App1 from "./components/pages/App1";

function App() {
  return (
    <>
        
      <Router>
        <Routes>
          <Route path="/Login" element={<App1/>}/>
          <Route path="/"  element={<Home/>} />
          <Route path="/doctor" element={<Doctor />} /> 
          <Route path="/manager" element={<Manager/>}/>
          </Routes>
      </Router>
    </>

  );
}

export default App;