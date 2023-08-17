import React from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { useBlogContext } from '../../context';

const NavbarWrapper = styled.header`
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  min-height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 150px;
  @media only screen and (max-width: 600px) {
    min-height: 20vh;
    padding-top: 30px;
    flex-direction: column;
  }
`;

const NavLinkWrapper = styled.div`
  min-height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  a {
    text-decoration: none;
    font-size: 24px;
    padding: 5px 10px;
    border-radius: 5px;
    color: rgba(255, 255, 255, 0.8);
    &:hover {
      color: rgba(255, 255, 255, 1);
      transition: color 1s ease;
      transform: translateY(-3px);
    }
  }
  .active {
    transition: all 1s ease;
    background: rgba(255, 0, 0, 0.5);
  }
  a:last-child {
    border: 2px solid rgba(255, 0, 0, 1);
    color: rgba(255, 255, 255, 1);
    text-align: center;
    min-width: 120px;
    border-radius: 10px;
    &:hover {
      transform: translateY(0px);
      transition: all 0.8s ease-in-out;
      background: rgba(255, 255, 255, 1);
      color: rgba(255, 0, 0, 1);
      border: 0;
    }
  }
`;

const LogoContainer = styled.div`
  height: 60px;
  width: 60px;
  img {
    height: 100%;
    width: 100%;
    border-radius: 20px;
  }
`;

const CreateBlogButton = styled.button`
  border: none;
  background-color: transparent;
  color: rgba(255, 255, 255, 0.8);
  font-size: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
    color: rgba(255, 0, 0, 0.8);
  }
`;
const Navbar = () => {
  const { isLoggedIn, handleLogOut } = useBlogContext();
  return (
    <NavbarWrapper>
      <NavLink to={'/'}>
        <LogoContainer>
          <img src={logo} alt="G" />
        </LogoContainer>
      </NavLink>
      <NavLinkWrapper>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/blog'}>Blog</NavLink>
        {isLoggedIn && (
          <NavLink to={'/dashboard'}>
            <CreateBlogButton title="Create Blog">+</CreateBlogButton>
          </NavLink>
        )}
        <NavLink
          onClick={() => {
            if (isLoggedIn) handleLogOut();
          }}
          to={'/login'}
        >
          {isLoggedIn ? 'Log out' : 'Log in'}
        </NavLink>
      </NavLinkWrapper>
    </NavbarWrapper>
  );
};

export default Navbar;
