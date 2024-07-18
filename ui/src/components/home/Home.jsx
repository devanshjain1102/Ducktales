import React from 'react';
import { CNavbar, CContainer, CNavbarBrand } from '@coreui/react';
import './Home.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Navigation from '../commons/Navigation';
import Item from '../commons/Item';
import Categories from './Categories';
const Home = () => {
  return (
   <>
   <img src = '		https://thegiftstudio.com/cdn/shop/files/Gifts_for_her_banner_-_Desktop.jpg?v=1708688778&width=3000'/>
    <Categories/>
   </>
  )
}

export default Home