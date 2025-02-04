import React from 'react';  
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';  
import Login from './components/Login';  
import Dashboard from './components/Dashboard';  
import Timetable from './components/Timetable';  


const App = () => {  
  return (  
    <Router>  
      <Routes>  
        <Route path="/" element={<Login />} />  
        <Route path="/dashboard" element={<Dashboard />} />  
        <Route path="/timetable" element={<Timetable />} />  
      </Routes>  
    </Router>  
  );  
};  

export default App;

export default App;
