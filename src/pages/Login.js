import React, { useState } from 'react';
import { Card, Form, Button, Image } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logo from '../assets/images/logo192.png';
import '../assets/css/Login.css';
import Cookies from 'js-cookie';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/user/login', {
        email,
        password,
      });
      // Set the token as a cookie
      Cookies.set('jwt', response.data.token, { expires: 15 }); // Set cookie with a 15-day expiry
      Cookies.set('userName', response.data.user.name); // Set username in cookie
      
      console.log('Login Successful');
      if (response.status === 200) {
        navigate('/', { email });
      }
    } catch (error) {
      console.error('Login Failed:', error.response.data);
      toast.error(error.response.data.error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 vw-100" 
         style={{ backgroundImage: `url(https://www.treetoptoyshop.com.au/cdn/shop/files/treetop-toy-shop-hero.jpg?v=1686888122&width=2400)`, 
                  backgroundSize: 'cover' }}>
      <div className="card p-5 w-50 shadow-lg rounded" 
           style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white' }}>
        <div className="text-center mb-4">
          <Image src={Logo} alt="Logo" style={{ maxWidth: '150px' }} />
        </div>
        <h3 className="text-center mb-4">Login to your Account</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white' }}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white' }}
            />
            <Form.Check
              type="checkbox"
              label="Show Password"
              onClick={togglePasswordVisibility}
              style={{ color: 'white' }}
            />
          </Form.Group>
          
          <Button variant="light" type="submit" className="w-100 mt-3">
            Login
          </Button>
        </Form>
        <div className='text-center mt-3'>
          <p><Link to='/forget-password' style={{ color: 'white' }}>Forget Password?</Link></p>
        </div>

      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
