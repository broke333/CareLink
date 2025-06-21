import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import OtpInput from 'react-otp-input';


const generateToken  =() => {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2,10);
  return `${timestamp}--${random}`;
}

const OTPPage = () => {
  const navigate = useNavigate();
  

  // Validation schema for the OTP
  const validationSchema = Yup.object().shape({
    otp: Yup.string()
      .matches(/^\d{6}$/, 'OTP must be exactly 6 digits')
      .required('OTP is required'),
  });

  // Handle OTP submission
  const handleOTPSubmit = (values) => {
    if (values.otp === '000000') {
      const token = generateToken();
      localStorage.setItem('authToken','token');
      navigate('/dashboard');
    } else {
      alert('Invalid OTP!');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="rounded-lg p-8 shadow-md max-w-md w-full ">
      <h2 className="text-2xl font-semibold text-center bg-gray-100">Enter OTP</h2>
      <Formik
        initialValues={{ otp: '' }}
        validationSchema={validationSchema}
        onSubmit={handleOTPSubmit}
      >
        {({ values, setFieldValue, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center">
      
              <OtpInput
                value={values.otp}
                onChange={(value) => setFieldValue('otp', value)}
                numInputs={6}
                 renderInput={(props) => <input {...props} 
                 className="w-12 h-12 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                 />}
              />
              {/* Error message */}
              <ErrorMessage name="otp" component="div" className="text-red-500 text-sm mt-2" />
            </div>
            <button type="submit" className="w-full mt-6 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">Submit</button>
          </Form>
        )}
      </Formik>
      <div className="text-center mt-4 text-sm text-gray-600">
         Didn't recieve the code?{''}
         <button type="button" className="text-blue-500 hover:underline">Resend</button>
      </div>
      </div>
    </div>
  );
};

export default OTPPage;
