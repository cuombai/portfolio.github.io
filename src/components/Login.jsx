import React, { useState } from 'react';
import '../styles/Login.css';

const Login = () => {
  const [formData, setFormData] = useState({ identifier: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Login submitted:', formData);
    // Later: send to Go backend
  };

  return (
    <section className="login-section">
      <h2 className="login-heading">Login to Godtek AI</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label>
          Username or Email
          <input
            type="text"
            name="identifier"
            placeholder="Enter your username or email"
            value={formData.identifier}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit" className="login-btn">Login</button>
      </form>
    </section>
  );
};

export default Login;
