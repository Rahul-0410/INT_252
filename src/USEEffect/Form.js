import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const containerStyle = {
    maxWidth: '400px',
    margin: '100px auto',
    padding: '20px',
    border: '1px solid #e0e0e0',
    borderRadius: '5px',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  };

  const inputContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  };

  const labelStyle = {
    fontWeight: 'bold',
  };

  const inputStyle = {
    padding: '8px',
    borderRadius: '3px',
    border: '1px solid #ccc',
  };

  const errorStyle = {
    color: 'red',
    fontSize: '12px',
  };

  const buttonStyle = {
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const errors = {};
    
    if (!formData.username || formData.username.length < 3) {
      errors.username = "Username must be at least 3 characters long";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errors.email = "Email is not valid";
    }

    if (!formData.password || formData.password.length < 5) {
      errors.password = "Password must be at least 5 characters long";
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      setIsSubmitted(true);
      alert("Form submitted successfully!");
    } else {
      setFormErrors(errors);
      setIsSubmitted(false);
    }
  };

  return (
    <div style={containerStyle}>
      <form style={formStyle} onSubmit={handleSubmit}>
        <div style={inputContainerStyle}>
          <label style={labelStyle}>UserName:</label>
          <input
            style={inputStyle}
            type="text"
            name="username"
            placeholder="username"
            value={formData.username}
            onChange={handleChange}
          />
          {formErrors.username && <span style={errorStyle}>{formErrors.username}</span>}
        </div>
        <div style={inputContainerStyle}>
          <label style={labelStyle}>Email:</label>
          <input
            style={inputStyle}
            type="email"
            name="email"
            placeholder="example@gmail.com"
            value={formData.email}
            onChange={handleChange}
          />
          {formErrors.email && <span style={errorStyle}>{formErrors.email}</span>}
        </div>
        <div style={inputContainerStyle}>
          <label style={labelStyle}>Password:</label>
          <input
            style={inputStyle}
            type="password"
            name="password"
            placeholder="*****"
            value={formData.password}
            onChange={handleChange}
          />
          {formErrors.password && <span style={errorStyle}>{formErrors.password}</span>}
        </div>
        <div style={inputContainerStyle}>
          <label style={labelStyle}>Confirm Password:</label>
          <input
            style={inputStyle}
            type="password"
            name="confirmPassword"
            placeholder="*****"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {formErrors.confirmPassword && <span style={errorStyle}>{formErrors.confirmPassword}</span>}
        </div>
        <button style={buttonStyle} type="submit">Submit</button>
        {isSubmitted && <p style={{ color: 'green' }}>Form submitted successfully!</p>}
      </form>
    </div>
  );
}

export default Form;
