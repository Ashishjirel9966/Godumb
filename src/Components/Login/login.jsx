import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import './Login.css';

const Login = () => {
    const[email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate()

    const users = [
        { email: 'test@e.com', password: 'admin' },
      ];

      React.useEffect(() => {
        // Redirect to the main page if the user is already logged in
        if (sessionStorage.getItem('loggedIn') === 'true') {
          navigate('/');
        }
      }, [navigate]);

      // const handleLogin = async(e) => {
      //   e.preventDefault();
      //   try{
      //       const response = await axios.post('http://localhost:5000/api/login',{
      //           email,password
      //       });
      //       if(response.data.success){
      //           console.log('Operation successful');
      //           navigate('/');
      //            // Set timeout to clear session storage after 10 seconds
              
      //       } else {
      //           console.log('Operation failed')
      //       }
      //   } catch(error) {
      //       console.error('Error Occured',error);
      //       setError(' error ! Try again');
      //   }

      // }

      const check = (e) => {
        e.preventDefault();
        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
          console.log("matched");
          sessionStorage.setItem('loggedIn', 'true'); 
            navigate('/'); 
            setTimeout(() => {
                sessionStorage.removeItem('loggedIn');
                navigate('/login'); // Redirect to login page after session expires
            }, 10000);
          
        } else {
          console.log("failed");
          setError('Invalid email or password');
        }
      };


  return (
    <div className='Login-form'> 
       <h1 className='welcome'>Let's Go Dumb</h1>
        <form action="" onSubmit={check} className='lgn-form'>
            <div className='email-div'>
                <label  className='lbls' htmlFor='email' >Email:</label>
                <input className='input-box'type='email' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                 placeholder='Enter Email'/>
            </div>
            <div className='pass-div'>
                <label className='lbls' htmlFor='password' >Password:</label>
                <input className='input-box'type='password' 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder='Enter Password'/>
            </div>
           
            <div className='btn-div'>
                <button type='submit'className='btn'>Login</button>
            </div>
            {error && <p className="error">{error}</p>}
           
        </form>
    </div>
  )
}

export default Login
