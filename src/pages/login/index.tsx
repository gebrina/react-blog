import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';

const LoginFormWrapper = styled.div`
  height: 84.6vh;
  width: 50%;
  margin: auto;
  position: relative;
  @media (max-width: 500px) {
    width: 100%;
    height: 65vh;
  }
`;
const LoginForm = styled.form`
  display: flex;
  height: 60%;
  position: absolute;
  top: 70px;
  left: 50%;
  transform: translateX(-50%);
  flex-direction: column;
  box-shadow: 0.3px 0.3px 3px 1px rgba(255, 255, 255, 0.3);
  gap: 20px;
  padding-top: 30px;
  align-items: center;

  @media (max-width: 500px) {
    width: 95%;
  }
`;

const LoginButton = styled.button`
  border: none;
  background: rgba(255, 0, 0, 0.5);
  color: rgba(255, 255, 255, 0.8);
  padding: 5px 25px;
  border-radius: 5px;
  font-size: 20px;
  &:hover {
    transition: all 1s ease;
    cursor: pointer;
    background: rgba(255, 255, 255, 1);
    color: rgba(255, 0, 0, 1);
  }
`;

const RegisterHint = styled.p`
  a {
    color: red;
  }
`;

const InputField = styled.input`
  padding: 10px 25px;
  background: transparent;
  outline: none;
  border: none;
  color: rgba(255, 255, 255, 0.8);
  font-size: 20px;
  border-left: 1px solid rgba(255, 0, 0, 0.7);
  border-bottom: 1px solid rgba(255, 0, 0, 0.7);
  width: max-content;
`;

const LoginFormTitle = styled.h1`
  font-size: 20px;
  width: 50%;
  text-align: center;
`;

const LogIn = () => {
  return (
    <LoginFormWrapper>
      <LoginForm>
        <LoginFormTitle>
          Login to your account and CRUD your post
        </LoginFormTitle>
        <InputField placeholder="Emial address" />
        <InputField placeholder="Password" />
        <LoginButton type="submit">Login</LoginButton>
        <RegisterHint>
          You don't have account? <Link to="/register">register</Link>
        </RegisterHint>
      </LoginForm>
    </LoginFormWrapper>
  );
};

export default LogIn;
