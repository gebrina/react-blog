import * as yup from 'yup';

export const registerValidation = () =>
  yup.object().shape({
    username: yup.string().required().min(3),
    email: yup.string().email().required(),
    password: yup.string().min(4).required(),
  });

export const loginValidation = () =>
  yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(4).required(),
  });
