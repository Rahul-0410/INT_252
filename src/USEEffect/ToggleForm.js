import React, { useState } from 'react';

function ToggleForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Logging in with:', { email, password });
    } else {
      console.log('Signing up with:', { name, email, password });
    }
  };

  const clearForm = () => {
    setEmail('');
    setPassword('');
    setName('');
  };

  const formStyle = {
    maxWidth: '400px',
    margin: '40px auto',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  };

  const buttonContainerStyle = {
    display: 'flex',
    marginBottom: '20px'
  };

  const buttonStyle = (active) => ({
    flex: 1,
    padding: '10px',
    border: 'none',
    backgroundColor: active ? '#3498db' : '#ecf0f1',
    color: active ? 'white' : 'black',
    cursor: 'pointer'
  });

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px'
  };

  const submitButtonStyle = {
    width: '100%',
    padding: '10px',
    border: 'none',
    backgroundColor: '#3498db',
    color: 'white',
    borderRadius: '4px',
    cursor: 'pointer'
  };

  return (
    <div style={formStyle}>
      <div style={buttonContainerStyle}>
        <button
          onClick={() => { setIsLogin(true); clearForm(); }}
          style={buttonStyle(isLogin)}
        >
          Login
        </button>
        <button
          onClick={() => { setIsLogin(false); clearForm(); }}
          style={buttonStyle(!isLogin)}
        >
          Sign Up
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
            required={!isLogin}
          />
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
          required
        />
        <button type="submit" style={submitButtonStyle}>
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
}

export default ToggleForm;