import styled from '@emotion/styled';
import React from 'react';
import readingWoman from '../../assets/readingwoman.jpg';
const HomeWrapper = styled.div`
  min-height: 80vh;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-content: center;
  gap: 3%;
  padding: 0 20%;
  &&::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    opacity: 0.2;
    content: '';
    min-height: inherit;
    background-image: url(${readingWoman});
    background-size: cover;
    backgorund-repeat: no-repeat;
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 50px;
    padding: 0 10%;
    min-height: 70vh;
  }
`;

const LeftWrapper = styled.div`
  h1 {
    text-align: center;
    font-size: 74px;
    line-height: 80px;
  }
`;
const RightWrapper = styled.div`
  h3 {
    color: rgba(255, 0, 0, 0.7);
  }
`;
const Home = () => {
  return (
    <HomeWrapper>
      <LeftWrapper>
        <h1>Read Now</h1>
      </LeftWrapper>
      <RightWrapper>
        <blockquote>
          “I kept always two books in my pocket, one to read, one to write in.”
        </blockquote>
        <h3>Robert Louis Stevenson</h3>
      </RightWrapper>
    </HomeWrapper>
  );
};

export default Home;
