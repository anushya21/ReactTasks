import React, { useState } from 'react';
import './LoginForm.css';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [registered, setRegistered] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    
    // Validation rules
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.phone.trim()) {
        newErrors.phone = 'Phone number is required';
      } else if (!/^\d{10}$/.test(formData.phone.trim())) {
        newErrors.phone = 'Phone number must be exactly ten digits';
      }
      
    if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one lowercase letter, one uppercase letter, one number, and be at least 8 characters long';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Form submission logic can go here
      console.log('Form submitted successfully:', formData);
      setRegistered(true); // Set registered state to true if registration is successful
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <h1 className="heading">Register</h1>
          <label>Username</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
          {errors.username && <div className="error-message">{errors.username}</div>}
        </div>
        <div className="form-group">
          <label>Email ID</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <div className="error-message">{errors.email}</div>}
        </div>
        <div className="form-group">
          <label>Phone number</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
          {errors.phone && <div className="error-message">{errors.phone}</div>}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
          {errors.password && <div className="error-message">{errors.password}</div>}
        </div>
        <center>
        <button type="submit">Register</button></center>
      </form>
      <center>
      {registered && <div className="popup">Registered Successfully ...</div>} {/* Popup message */}</center>
    </div>
  );
};

export default RegisterForm;
