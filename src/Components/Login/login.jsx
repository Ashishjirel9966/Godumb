import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  React.useEffect(() => {
    if (sessionStorage.getItem('loggedIn') === 'true') {
      navigate('/');
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:2001/login', { email, password });
      if (response.data.success) {
        sessionStorage.setItem('loggedIn', 'true');
        navigate('/');
        setTimeout(() => {
          sessionStorage.removeItem('loggedIn');
          navigate('/login');
        }, 10000);
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      setError('Error occurred. Try again.');
    }
  };

  return (
    <div className='Login-form'>
      <h1 className='welcome'>Let's Go Dumb</h1>
      <form onSubmit={handleLogin} className='lgn-form'>
        <div className='email-div'>
          <label className='lbls' htmlFor='email'>Email:</label>
          <input
            className='input-box'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter Email'
          />
        </div>
        <div className='pass-div'>
          <label className='lbls' htmlFor='password'>Password:</label>
          <input
            className='input-box'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter Password'
          />
        </div>
        <div className='btn-div'>
          <button type='submit' className='btn'>Login</button>
        </div>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
