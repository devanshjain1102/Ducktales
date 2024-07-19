import React from 'react';
import './App.css';
import Login from  './components/login/Login';
import  Signup  from './components/signup/Signup';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/home/Home';
import CategoryPage from './components/Category/CategoryPage';
import Navigation from './components/commons/Navigation';
import Cart from './components/cart/Cart';
import ItemPage from './components/Item/ItemPage';
function App() {
  return (
    <div >
    <Navigation/>
    <Routes >
      <Route path = '/' element={<Home/>}/>
      <Route path='/Login' element={<Login />}>
      </Route>
      <Route path='/Signup' element={<Signup />}>
      </Route>
      <Route path="/category" element={<CategoryPage />} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/item' element={<ItemPage/>} />
    </Routes>
    </div>
  );
}

export default App;
