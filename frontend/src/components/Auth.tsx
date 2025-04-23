// src/components/Auth.tsx
import React, { useState } from 'react';
import { useRegisterUserMutation, useLoginUserMutation } from '../app/apiSlice';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registerUser, { isLoading: isRegistering }] = useRegisterUserMutation();
  const [loginUser, { isLoading: isLoggingIn }] = useLoginUserMutation();

  const handleRegister = async () => {
    try {
      await registerUser({ email, password }).unwrap();
      alert('Registration successful!');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await loginUser({ email, password }).unwrap();
      console.log('Login successful:', response);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister} disabled={isRegistering}>
        {isRegistering ? 'Registering...' : 'Register'}
      </button>

      <h2>Login</h2>
      <button onClick={handleLogin} disabled={isLoggingIn}>
        {isLoggingIn ? 'Logging in...' : 'Login'}
      </button>
    </div>
  );
};

export default Auth;