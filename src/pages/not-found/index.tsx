import styled from '@emotion/styled';
import React from 'react';

const NotFoundWrapper = styled.div`
  height: 83.5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  row-gap: 30px;
  flex-direction: column;
  @media only screen and (max-width: 600px) {
    height: 60vh;
  }
`;

const NotFoundTitle = styled.h1`
  font-size: 84px;
  margin-top: 30px;
  @media only screen and (max-width: 600px) {
    line-height: 80px;
    margin-top: 0px;
    font-size: 74px;
    text-align: center;
  }
`;
const HomePageLink = styled.a`
  color: rgba(255, 0, 0, 0.7);
  text-decoration: underline;
`;
const NotFound = () => {
  return (
    <NotFoundWrapper>
      <NotFoundTitle>Page Not Found 😥</NotFoundTitle>
      <NotFoundTitle>404</NotFoundTitle>
      <HomePageLink href="/">Home</HomePageLink>
    </NotFoundWrapper>
  );
};

export default NotFound;
