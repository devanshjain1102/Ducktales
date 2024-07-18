import React from 'react';
import './App.css';
import Login from  './components/login/Login';
import  Signup  from './components/signup/Signup';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/home/Home';
function App() {
  return (
    <div >
    <Home /> 

    <Routes >
      <Route path='/Login' element={<Login />}>

      </Route>
      <Route path='/Signup' element={<Signup />}>
      </Route>
    </Routes>
    </div>
  );
}

export default App;
