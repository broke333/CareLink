import React from "react"
import Login from './pages/Login';
import './index.css';
import { BrowserRouter as Router, Route, Routes, Outlet, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import OTPPage from './pages/OTPPage';

const ProtectedRoute =()=> {
  const token = localStorage.getItem('authToken');
  return token? <Outlet/>: <Navigate to="/" replace/>

}

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/otp" element={<OTPPage />} />
          <Route element={<ProtectedRoute />} >
             <Route path="/dashboard" element={<Dashboard/>} /> 
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;