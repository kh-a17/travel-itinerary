import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 👈 import navigation hook
import AuthForm from './AuthForm';
import './AuthForm.css';

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState(''); // 'success' or 'error'
  const navigate = useNavigate(); // 👈 initialize hook

  const toggleForm = () => {
    setAlertMessage('');
    setIsLogin(!isLogin);
  };

  const handleAuth = async (formData) => {
    try {
      const response = await fetch(`http://localhost:5000/api/auth/${isLogin ? 'login' : 'signup'}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setAlertMessage(data.message);
        setAlertType('success');

        if (isLogin) {
          setTimeout(() => {
            navigate('/home'); // 👈 redirect to HomePage.js
          }, 1000); // small delay to show success message
        }
      } else {
        setAlertMessage(data.message);
        setAlertType('error');
      }
    } catch (err) {
      setAlertMessage('Something went wrong. Please try again.');
      setAlertType('error');
    }
  };

  return (
    <div className="login-register-page">
      <div className="auth-container">
        {alertMessage && (
          <div className={`alert-message ${alertType}`}>
            {alertMessage}
          </div>
        )}
        <AuthForm type={isLogin ? 'login' : 'signup'} onSubmit={handleAuth} />
        <p onClick={toggleForm} className="toggle-link">
          {isLogin ? "Don't have an account? Sign up" : "Already have an account? Login"}
        </p>
      </div>
    </div>
  );
};

export default LoginRegister;
