import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {


  return (
    <HeaderContainer>
      <Logo to="/">Your Logo</Logo>
      <NavContainer>
        <NavLink to="/">Home</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Signup</NavLink>
      </NavContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #3494e6;
  color: #fff;
`;

const Logo = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 24px;
  font-weight: bold;
`;

const NavContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 16px;
`;

const LogoutButton = styled.button`
  background-color: #4caf50;
  color: #fff;
  padding: 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

const Greetings = styled.p`
  margin: 0;
`;

export default Header;
