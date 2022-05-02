// Here goes the schema for the form

import * as yup from 'yup'

const formSchema = yup.object().shape({
    username: yup.string()
    .trim()
    .required("Username is an empty string")
    .min(3, "You must have a short name..."),
    email: yup.string()
    .email("Please use a valid email address")
    .required("Please enter an email address"),
    role: yup.string()
    .oneOf(['instructor', 'student', 'alumni'], "Role is required"),
    civil: yup.string()
    .oneOf(['married', 'single'], 'Pick one'),
    coding: yup.boolean(),
    reading: yup.boolean(),
    hiking: yup.boolean()
})