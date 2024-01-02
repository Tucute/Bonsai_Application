import * as Yup from 'yup';

export const Signup_Schema = Yup.object().shape({
  name: Yup.string()
    .min(5, 'name must be at least 5 characters!')
    .max(12, 'name must have a maximum of 20 characters!')
    .required('Required'),
  age: Yup.string()
    .min(1, 'age must be at least 1 characters!')
    .max(2, 'age must have a maximum of 2 characters!')
    .required('Required'),
  phone: Yup.string()
    .min(10, 'phone must be at least 10 characters!')
    .max(10, 'phone must have a maximum of 10 characters!')
    .required('Required'),
  address: Yup.string()
    .min(5, 'address must be at least 5 characters!')
    .max(20, 'address must have a maximum of 20 characters!')
    .required('Required'),
});
