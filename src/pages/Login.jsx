import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  });

  const handleSubmit = (values) => {
    console.log('Form values:', values);
    navigate("/otp");
  };

  const handleForgotPasswordClick = (event) => {
    event.preventDefault();
    console.log('Forgot Password clicked!');
  };

  const handleCreateAccountClick = (event) => {
    event.preventDefault();
    console.log('Create Account clicked!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg px-10 py-8 max-w-lg w-full">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Welcome Back!</h1>
        <Formik
          initialValues={{ email: '', password: '', remember: false }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600 mb-1"
                >
                  Email Address
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="block w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-400 focus:border-blue-400 border-gray-300"
                  placeholder="your@email.com"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-600 mb-1"
                >
                  Password
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="block w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-400 focus:border-blue-400 border-gray-300"
                  placeholder="Enter your password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
                <a
                  href="#"
                  onClick={handleForgotPasswordClick}
                  className="text-sm text-blue-500 hover:underline mt-2 inline-block"
                >
                  Forgot Password?
                </a>
              </div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <Field
                    type="checkbox"
                    id="remember"
                    name="remember"
                    className="h-4 w-4 rounded border-gray-300 text-blue-500 focus:ring-blue-400"
                  />
                  <label
                    htmlFor="remember"
                    className="ml-2 text-sm text-gray-600"
                  >
                    Remember me
                  </label>
                </div>
                <a
                  href="#"
                  onClick={handleCreateAccountClick}
                  className="text-sm text-blue-500 hover:underline"
                >
                  Create Account
                </a>
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-400"
              >
                Login
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
