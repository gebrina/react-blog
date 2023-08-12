import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { registerValidation } from '../../validation';
import { useMutation } from '@tanstack/react-query';
import { createUser } from '../../api/user';

const RegisterFormWrapper = styled.div`
  height: 84.5vh;
  width: 50%;
  margin: auto;
  position: relative;
  @media (max-width: 500px) {
    width: 100%;
    height: 65vh;
  }
`;

const RegisterForm = styled.form`
  display: flex;
  height: auto;
  position: absolute;
  top: 70px;
  left: 50%;
  transform: translateX(-50%);
  flex-direction: column;
  box-shadow: 0.3px 0.3px 3px 1px rgba(255, 255, 255, 0.3);
  gap: 20px;
  padding: 30px;
  align-items: center;

  @media (max-width: 500px) {
    width: 95%;
  }
`;

const RegisterButton = styled.button`
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

const LoginHint = styled.p`
  a {
    color: rgba(255, 0, 0, 0.5);
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

const RegisterFormTitle = styled.h1`
  font-size: 20px;
  width: 50%;
  text-align: center;
`;

const ErrorMessage = styled.p`
  color: rgba(255, 0, 0, 0.7);
  font-size: 14px;
`;
const Register = () => {
  const mutation = useMutation({
    mutationKey: ['register'],
    mutationFn: createUser,
  });
  const initialValues = { username: '', email: '', password: '' };
  const { values, errors, resetForm, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: registerValidation,
      onSubmit: () => {
        mutation.mutate({
          username: values.username,
          email: values.email,
          password: values.password,
        });
        resetForm();
      },
    });

  return (
    <RegisterFormWrapper>
      <RegisterForm onSubmit={handleSubmit}>
        <RegisterFormTitle>Welcome, Register</RegisterFormTitle>
        <InputField
          name="username"
          value={values.username}
          onChange={handleChange}
          placeholder="Username"
        />
        {touched.username && errors.username && (
          <ErrorMessage>{errors.username}</ErrorMessage>
        )}
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
          value={values.password}
          type="password"
          onChange={handleChange}
          placeholder="Password"
        />
        {touched.password && errors.password && (
          <ErrorMessage>{errors.password}</ErrorMessage>
        )}
        <RegisterButton type="submit">
          {mutation.isLoading ? 'Registering...' : 'Register'}
        </RegisterButton>
        <LoginHint>
          Already have account? <Link to="/login">login</Link>
        </LoginHint>
      </RegisterForm>
    </RegisterFormWrapper>
  );
};

export default Register;
