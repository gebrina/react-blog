import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';

const FooterWrapper = styled.footer`
  background: rgba(0, 0, 0, 0.8);
  min-height: 50px;
  display: flex;
  align-items: center;
  padding: 0 10%;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    text-align: center;
    align-items: center;
    padding: 0;
  }
`;
const FooterLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 20px;
  flex-direction: row;
  justify-content: flex-start;
  a {
    text-decoration: underline;
    color: rgba(255, 255, 255, 0.5);
    text-decoration-color: rgba(255, 0, 0, 0.5);
    text-underline-offset: 5px;
    &:hover {
      color: rgba(255, 255, 255, 0.9);
      transition: color 0.7s ease;
    }
  }
  @media (max-width: 500px) {
    justify-content: center;
  }
`;

const CopyWrite = styled.div`
  width: 150px;
`;
const Footer = () => {
  return (
    <FooterWrapper>
      <FooterLinksWrapper>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
      </FooterLinksWrapper>
      <CopyWrite>G @ {new Date().getFullYear()}</CopyWrite>
    </FooterWrapper>
  );
};

export default Footer;
