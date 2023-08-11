import styled from '@emotion/styled';
import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 50px;
`;
const Loader = () => {
  return (
    <LoadingWrapper>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </LoadingWrapper>
  );
};

export default Loader;
