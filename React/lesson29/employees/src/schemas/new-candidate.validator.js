import * as yup from 'yup';

export const newCandidateSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[a-zA-Z ]+$/, 'Name should be only alphabetical')
    .required('Name is requiered'),
  company: yup
    .string()
    .matches(/^\w+$/, 'Company should be only alphabetical and _')
    .required('Company is required'),
  phone: yup
    .number()
    .required('Phone is requiered')
    .positive('Phone should be positive')
    .integer('Phone should be integer'),
});
