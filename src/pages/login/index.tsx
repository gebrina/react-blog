import { useEffect } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { useMutation } from '@tanstack/react-query';
import { authUser } from '../../api/auth';
import { useNavigate } from 'react-router-dom';

import { loginValidation } from '../../validation';
import { useBlogContext } from '../../context';

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
  position: absolute;
  top: 70px;
  left: 50%;
  transform: translateX(-50%);
  flex-direction: column;
  box-shadow: 0.3px 0.3px 3px 1px rgba(255, 255, 255, 0.3);
  gap: 20px;
  padding: 30px 0px;
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

const ErrorMessage = styled.p`
  color: rgba(255, 0, 0, 0.7);
  font-size: 20px;
  text-align: center;
`;

const LogIn = () => {
  const navigate = useNavigate();
  const { isLoggedIn, handleLogin } = useBlogContext();

  const mutation = useMutation({
    mutationKey: ['login'],
    mutationFn: authUser,
    onSuccess: (user) => {
      handleLogin(user);
      navigate('/dashboard');
    },
    onError: (res) => {
      console.log('apier', res);
    },
  });
  const initialValues = { email: '', password: '' };
  const { touched, errors, resetForm, values, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: loginValidation,
      onSubmit: () => {
        mutation.mutate({ email: values.email, password: values.password });
        resetForm();
      },
    });

  useEffect(() => {
    if (isLoggedIn) navigate('/dashboard');
  });
  return (
    <LoginFormWrapper>
      <LoginForm onSubmit={handleSubmit}>
        <LoginFormTitle>
          Login to your account and CRUD your post
        </LoginFormTitle>
        <InputField
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Emial address"
        />
        {touched.email && errors.email && (
          <ErrorMessage>{errors.email}</ErrorMessage>
        )}
        <InputField
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          placeholder="Password"
        />
        {touched.password && errors.password && (
          <ErrorMessage>{errors.password}</ErrorMessage>
        )}
        <LoginButton type="submit">Login</LoginButton>
        <RegisterHint>
          You don't have account? <Link to="/register">register</Link>
        </RegisterHint>
      </LoginForm>
    </LoginFormWrapper>
  );
};

export default LogIn;
