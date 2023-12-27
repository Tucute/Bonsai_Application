import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(6, 'Passwords must be at least 6 characters!')
    .max(20, 'Password must have a maximum of 20 characters!')
    .required('Required'),
});
