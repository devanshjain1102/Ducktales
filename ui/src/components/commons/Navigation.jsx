import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import LogoImg from '../assets/logo.png'
import { CiShoppingCart } from "react-icons/ci";


const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Nav>
      <img src={LogoImg} className='w-[90px] m-[-30px]' onClick={() => navigate('/')}/>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu >
        {!(location.pathname.toLowerCase() === '/login' || location.pathname.toLowerCase() === '/signup') && <MenuLink to="/login">Login/Register</MenuLink>}
        <MenuLink to='/cart'><CiShoppingCart size={30}/></MenuLink>
        {/* <Dropdown>
          <Dropbtn>More</Dropbtn>
          <DropdownContent>
            <DropdownLink to="/portfolio">Portfolio</DropdownLink>
            <DropdownLink to="/contact">Contact</DropdownLink>
          </DropdownContent>
        </Dropdown> */}
      </Menu>
    </Nav>
  );
};

export default Navigation;

const Nav = styled.nav`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ea7585;
  color: #fff;
`;

const Logo = styled.a`
  padding: 1rem 0;
  color: #fff;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;
  letter-spacing: 0.3rem;
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background: #fff;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const MenuLink = styled(Link)`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #fff;
  transition: all 0.3s ease-in;
  font-size: 1.2rem;

  &:hover {
  }
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const Dropbtn = styled.div`
  padding: 1rem 2rem;
  cursor: pointer;
  color: #fff;
  transition: all 0.3s ease-in;
  font-size: 1.2rem;

  &:hover {
    color: #ff6347;
  }
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;

  ${Dropdown}:hover & {
    display: block;
  }
`;

const DropdownLink = styled(Link)`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  &:hover {
    background-color: #f1f1f1;
  }
`;
